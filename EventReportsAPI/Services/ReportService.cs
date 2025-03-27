
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EventReportsAPI.Data;

namespace EventReportsAPI.Services
{
    public class ReportService : IReportService
    {
        private readonly AppDbContext _context;

        public ReportService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<int> GetTotalTicketSalesAsync(int eventId)
        {
            return await _context.TicketSales
                .Where(t => t.EventId == eventId)
                .SumAsync(t => t.Quantity);
        }

        public async Task<decimal> GetTotalRevenueAsync(int eventId)
        {
            return await _context.TicketSales
                .Where(t => t.EventId == eventId)
                .SumAsync(t => t.TotalPrice);
        }
    }
}
