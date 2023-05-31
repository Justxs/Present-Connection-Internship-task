using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PizzaOrderSystemBackEnd.Models;
using PizzaOrderSystemBackEnd.Models.DTOs;
using PizzaOrderSystemBackEnd.Services;

namespace PizzaOrderSystemBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PizzaOrdersController : ControllerBase
    {
        readonly IPizzaOrderService _pizzaOrderService;
        public PizzaOrdersController(IPizzaOrderService pizzaOrderService)
        {
            _pizzaOrderService = pizzaOrderService;
        }

        [HttpGet("GetToppings")]
        public ActionResult<List<Topping>> GetToppings()
        {
            return Ok(_pizzaOrderService.GetAllToppings());
        }

        [HttpGet("GetOrders")]
        public ActionResult<List<Topping>> GetOrders()
        {
            return Ok(_pizzaOrderService.GetAllOrders());
        }

        [HttpPost("SaveOrder")]
        public ActionResult AddPizza(PizzaOrderDTO pizza)
        {
            try
            {
                _pizzaOrderService.AddPizza(pizza);
                return Ok("Order saved");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost("CalculatePrice")]
        public ActionResult GetPrice(PizzaOrderDTO pizza)
        {
            try
            {
                decimal price = _pizzaOrderService.CalculatePrice(pizza);
                return Ok(price);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
           
        }
    }
}
