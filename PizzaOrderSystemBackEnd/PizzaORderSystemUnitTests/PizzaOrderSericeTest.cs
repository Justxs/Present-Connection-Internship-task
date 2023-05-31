using Microsoft.EntityFrameworkCore;
using PizzaOrderSystemBackEnd.Data;
using PizzaOrderSystemBackEnd.Models;
using PizzaOrderSystemBackEnd.Models.DTOs;
using PizzaOrderSystemBackEnd.Services;


namespace PizzaOrderSystemUnitTests
{
    public class PizzaOrderServiceTests
    {
        private readonly ApplicationContext _applicationContext;
        private readonly IPizzaOrderService _pizzaOrderService;

        public PizzaOrderServiceTests()
        {
            var options = new DbContextOptionsBuilder<ApplicationContext>()
            .UseInMemoryDatabase(databaseName: "PizzaDb").Options;

            _applicationContext = new ApplicationContext(options);
            _pizzaOrderService = new PizzaOrderService(_applicationContext);
            AddData();

        }

        internal void AddData()
        {
            List<Topping> toppingsInDb = new List<Topping>()
            {
                new Topping { Name = "Pepperoni" },
                new Topping { Name = "Mushrooms" },
                new Topping { Name = "Onion" },
                new Topping { Name = "Sausage" },
                new Topping { Name = "Bacon" },
                new Topping { Name = "Ham" },
                new Topping { Name = "Pineapple" }
            };

            foreach (var topping in toppingsInDb)
            {
                if (!_applicationContext.Toppings.Any(t => t.Name == topping.Name))
                {
                    _applicationContext.Toppings.Add(topping);
                }
            }

            _applicationContext.SaveChanges();
        }
        [Fact]
        public void GetAllToppings_Should_Return_All_Toppings()
        {
            // Arrange
            var toppingsInDb = 7;

            // Act
            var toppings = _pizzaOrderService.GetAllToppings().ToList().Count;

            // Assert
            Assert.Equal(toppingsInDb, toppings);
        }

        [Fact]
        public void CalculatePrice_Should_Return_Correct_Price_With_Discount()
        {
            // Arrange
            var order = new PizzaOrderDTO
            {
                Size = PizzaSize.Small,
                Toppings = new List<Topping>()
                {
                    new Topping { Name = "Pepperoni" },
                    new Topping { Name = "Onion" },
                    new Topping { Name = "Ham" },
                    new Topping { Name = "Mushrooms" }
                }
            };
            decimal expectedPrice = 10.8m;

            // Act
            var price = _pizzaOrderService.CalculatePrice(order);

            // Assert
            Assert.Equal(expectedPrice, price);
        }

        [Fact]
        public void CalculatePrice_Should_Return_Correct_Price()
        {
            // Arrange
            var order = new PizzaOrderDTO
            {
                Size = PizzaSize.Small,
                Toppings = new List<Topping>()
                {
                    new Topping { Name = "Pepperoni" },
                    new Topping { Name = "Mushrooms" }
                }
            };
            decimal expectedPrice = 10;

            // Act
            var price = _pizzaOrderService.CalculatePrice(order);

            // Assert
            Assert.Equal(expectedPrice, price);
        }
        [Fact]
        public void CalculatePrice_Should_Throw_Exception_When_No_Toppings()
        {
            // Arrange
            var order = new PizzaOrderDTO
            {
                Size = PizzaSize.Small,
                Toppings = new List<Topping>()
                {
                    
                }
            };

            // Act and Assert
            Assert.Throws<Exception>(() => _pizzaOrderService.CalculatePrice(order));
        }
        [Fact]
        public void CalculatePrice_Should_Throw_Exception_When_No_Size()
        {
            // Arrange
            var order = new PizzaOrderDTO
            {
                Toppings = new List<Topping>()
                {
                    new Topping { Name = "Pepperoni" },
                    new Topping { Name = "Mushrooms" }
                }
            };

            // Act and Assert
            Assert.Throws<Exception>(() => _pizzaOrderService.CalculatePrice(order));
        }

        [Fact]
        public void AddPizza_Should_Add_Pizza_To_Orders()
        {
            // Arrange
            var order = new PizzaOrderDTO
            {
                Size = PizzaSize.Small,
                Toppings = new List<Topping>()
                {
                    new Topping { Name = "Pepperoni" },
                    new Topping { Name = "Mushrooms" }
                }
            };

            // Act
            _pizzaOrderService.AddPizza(order);
            var orders = _pizzaOrderService.GetAllOrders();

            // Assert
            Assert.Contains(orders, pizza => pizza.Size == order.Size && pizza.Toppings.Count == order.Toppings.Count);
        }
            
    }

}
