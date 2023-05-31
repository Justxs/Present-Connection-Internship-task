using Microsoft.EntityFrameworkCore;
using PizzaOrderSystemBackEnd.Data;
using PizzaOrderSystemBackEnd.Models;

namespace PizzaOrderSystemBackEnd
{
    public class Helper
    {
        public static void AddData(WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var db = scope.ServiceProvider.GetService<ApplicationContext>();
            Topping[] toppings = new Topping[]
            {
                new Topping { Name = "Pepperoni" },
                new Topping { Name = "Mushrooms" },
                new Topping { Name = "Onion" },
                new Topping { Name = "Sausage" },
                new Topping { Name = "Bacon" },
                new Topping { Name = "Ham" },
                new Topping { Name = "Pineapple" }
            };

            db.Toppings.AddRange(toppings);
            db.SaveChanges();
        }
    }
}
