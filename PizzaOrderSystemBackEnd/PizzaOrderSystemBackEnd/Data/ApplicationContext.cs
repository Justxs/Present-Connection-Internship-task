using Microsoft.EntityFrameworkCore;
using PizzaOrderSystemBackEnd.Models;

namespace PizzaOrderSystemBackEnd.Data
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions options):base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pizza>()
                .HasMany(e => e.Toppings)
                .WithMany(e => e.Pizzas);
        }
        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Topping> Toppings { get; set; }
    }
}
