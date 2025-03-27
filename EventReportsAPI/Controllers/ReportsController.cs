
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using EventReportsAPI.Services;

namespace EventReportsAPI.Controllers
{
    [ApiController]
    [Route("api/reports")]
    public class ReportsController : ControllerBase
    {
        private readonly IReportService _reportService;

        public ReportsController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("ticket-sales/{eventId}")]
        public async Task<IActionResult> GetTotalTicketSales(int eventId)
        {
            var totalTickets = await _reportService.GetTotalTicketSalesAsync(eventId);
            return Ok(new { EventId = eventId, TotalTickets = totalTickets });
        }

        [HttpGet("revenue/{eventId}")]
        public async Task<IActionResult> GetTotalRevenue(int eventId)
        {
            var revenue = await _reportService.GetTotalRevenueAsync(eventId);
            return Ok(new { EventId = eventId, Revenue = revenue });
        }
    }
}
