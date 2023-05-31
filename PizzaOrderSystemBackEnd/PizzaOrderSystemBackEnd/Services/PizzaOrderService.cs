using Microsoft.EntityFrameworkCore;
using PizzaOrderSystemBackEnd.Data;
using PizzaOrderSystemBackEnd.Models;
using PizzaOrderSystemBackEnd.Models.DTOs;

namespace PizzaOrderSystemBackEnd.Services
{
    public class PizzaOrderService : IPizzaOrderService
    {
        private readonly ApplicationContext _applicationContext;
        public PizzaOrderService(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public IEnumerable<Topping> GetAllToppings()
        {
            return _applicationContext.Toppings;
        }

        public IEnumerable<Pizza> GetAllOrders()
        {
            return _applicationContext.Pizzas.Include(p => p.Toppings);
        }

        public decimal CalculatePrice(PizzaOrderDTO order)
        {
            decimal price = 0;

            if (order.Size == PizzaSize.Small)
            {
                price += 8;
            }
            else if (order.Size == PizzaSize.Medium)
            {
                price += 10;
            }
            else if (order.Size == PizzaSize.Large)
            {
                price += 12;
            }
            else
            {
                throw new Exception("Pizza size is not chosen or it doesnt exist");
            }

            price += order.Toppings.Count;

            if (order.Toppings.Count > 3)
            {
                price *= 0.9m;
            }
            else if (order.Toppings.Count <= 0)
            {
                throw new Exception("Pizza doesnt have toppings");
            }

            var allToppings = GetAllToppings();
            if (!order.Toppings.All(topping => allToppings.Any(t => t.Name == topping.Name)))
            {
                throw new Exception("Topping doesnt exist");
            }

            return price;
        }

        public void AddPizza(PizzaOrderDTO order)
        {
            Pizza pizza = new()
            {
                Size = order.Size,
                Price = CalculatePrice(order)
            };

            foreach (var topping in order.Toppings)
            {
                var existingTopping = _applicationContext.Toppings.FirstOrDefault(t => t.Name == topping.Name);

                if (existingTopping != null)
                {
                    pizza.Toppings.Add(existingTopping);
                }
                else
                {
                    throw new Exception($"Topping '{topping.Name}' does not exist in the database.");
                }
            }
            _applicationContext.Pizzas.Add(pizza);
            _applicationContext.SaveChanges();
        }
    }
}
