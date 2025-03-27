
namespace EventReportsAPI.Data.Models
{
    public class TicketSale
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
