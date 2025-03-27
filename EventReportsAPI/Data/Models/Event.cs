
using System;
using System.Collections.Generic;

namespace EventReportsAPI.Data.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public List<TicketSale> TicketSales { get; set; }
    }
}
