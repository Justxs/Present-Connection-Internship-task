using Microsoft.EntityFrameworkCore;
using PizzaOrderSystemBackEnd.Data;
using PizzaOrderSystemBackEnd.Services;
using PizzaOrderSystemBackEnd;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
builder.Services.AddDbContext <ApplicationContext>
(o => o.UseInMemoryDatabase("PizzaDb"));

builder.Services.AddControllers();

builder.Services.AddScoped<IPizzaOrderService, PizzaOrderService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

Helper.AddData(app);

app.Run();
