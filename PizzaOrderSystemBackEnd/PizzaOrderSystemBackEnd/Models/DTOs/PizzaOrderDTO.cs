using System.ComponentModel.DataAnnotations;

namespace PizzaOrderSystemBackEnd.Models.DTOs
{
    public class PizzaOrderDTO
    {
        [Required]
        public PizzaSize Size { get; set; }
        [Required]
        public List<Topping> Toppings { get; set; } = null!;

    }
}
