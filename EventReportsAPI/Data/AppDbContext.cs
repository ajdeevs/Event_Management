
using Microsoft.EntityFrameworkCore;
using EventReportsAPI.Data.Models;

namespace EventReportsAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Event> Events { get; set; }
        public DbSet<TicketSale> TicketSales { get; set; }
    }
}
