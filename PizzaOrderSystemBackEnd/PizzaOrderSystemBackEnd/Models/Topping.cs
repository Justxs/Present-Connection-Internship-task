using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PizzaOrderSystemBackEnd.Models
{
    public class Topping
    {
        [Key]
        public string Name { get; set; } = null!;
        [JsonIgnore]
        public List<Pizza> Pizzas { get; set; } = new List<Pizza>();
    }
}
