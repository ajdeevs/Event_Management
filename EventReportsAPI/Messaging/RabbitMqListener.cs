
using MassTransit;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace EventReportsAPI.Messaging
{
    public class RabbitMqListener : IConsumer<string>
    {
        private readonly ILogger<RabbitMqListener> _logger;

        public RabbitMqListener(ILogger<RabbitMqListener> logger)
        {
            _logger = logger;
        }

        public Task Consume(ConsumeContext<string> context)
        {
            _logger.LogInformation($"Received message: {context.Message}");
            return Task.CompletedTask;
        }
    }
}
