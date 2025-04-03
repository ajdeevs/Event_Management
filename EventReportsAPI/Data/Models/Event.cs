
using System;
using System.Collections.Generic;

namespace EventReportsAPI.Data.Models
{
    public class Event
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public DateTime Date { get; set; }
        public required List<TicketSale> TicketSales { get; set; }
    }
}
