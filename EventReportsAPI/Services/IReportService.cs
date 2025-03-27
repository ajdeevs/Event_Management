
using System.Collections.Generic;
using System.Threading.Tasks;
using EventReportsAPI.Data.Models;

namespace EventReportsAPI.Services
{
    public interface IReportService
    {
        Task<int> GetTotalTicketSalesAsync(int eventId);
        Task<decimal> GetTotalRevenueAsync(int eventId);
    }
}
