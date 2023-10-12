using System.Collections.Generic;

namespace API.DTOs
{
    public class DTOs
    {
        public class BasketDto
        {
            public int Id { get; set; }
            public string BuyerId { get; set; }
            public List<BasketItemDto> Items { get; set; }
        }
    }
}