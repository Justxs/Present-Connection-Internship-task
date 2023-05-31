using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PizzaOrderSystemBackEnd.Models
{
    public enum PizzaSize
    {
        Null,
        Small,
        Medium,
        Large
    }
    public class Pizza
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public PizzaSize Size { get; set; }
        public List<Topping> Toppings { get; set; } = new List<Topping>();
        public decimal Price { get; set; }

    }
}
