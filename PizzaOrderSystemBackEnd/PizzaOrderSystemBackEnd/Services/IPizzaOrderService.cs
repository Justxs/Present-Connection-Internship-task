using PizzaOrderSystemBackEnd.Models;
using PizzaOrderSystemBackEnd.Models.DTOs;

namespace PizzaOrderSystemBackEnd.Services
{
    public interface IPizzaOrderService
    {
        IEnumerable<Topping> GetAllToppings();
        IEnumerable<Pizza> GetAllOrders();
        decimal CalculatePrice(PizzaOrderDTO order);
        void AddPizza(PizzaOrderDTO order);
    }
}
