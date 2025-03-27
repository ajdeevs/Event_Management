
using EventReportsAPI.Data;
using EventReportsAPI.Services;
using EventReportsAPI.BackgroundJobs;
using MassTransit;
using Microsoft.EntityFrameworkCore;
using Hangfire;
using Hangfire.MemoryStorage;

var builder = WebApplication.CreateBuilder(args);

// Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Redis Caching
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration["Redis:ConnectionString"];
});

// Dependency Injection
builder.Services.AddScoped<IReportService, ReportService>();
builder.Services.AddHangfire(config => config.UseMemoryStorage());
builder.Services.AddHangfireServer();
builder.Services.AddMassTransit(x =>
{
    x.AddConsumer<RabbitMqListener>();
    x.UsingRabbitMq((context, cfg) => {
        cfg.Host("rabbitmq://localhost");
        cfg.ReceiveEndpoint("event_reports", e => {
            e.ConfigureConsumer<RabbitMqListener>(context);
        });
    });
});

var app = builder.Build();

// Middleware
app.UseHangfireDashboard();
app.MapControllers();
app.Run();

