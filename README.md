# Present-Connection-Internship-task
 Technical assignment for a candidate for  an internship developer position at the Business Development Team

## Task Description

Create a web application to calculate the total cost of a pizza order and review submitted orders.

## Functional Requirements

- [x] Allow users to select the size and toppings for their pizza order.
- [x] Calculate the total cost of the order based on the size and toppings selected.
- [x] Display the total cost of the order to the user.
- [x] Enable users to save orders.
- [x] Provide a view of all saved orders in a list on a separate page.

## Calculation Rules

- The cost of the pizza should be based on the size selected. Small pizzas cost €8, medium pizzas cost €10, and large pizzas cost €12.
- The cost of each topping should be added to the base cost of the pizza. The toppings cost €1 each.
- If the user selects more than 3 toppings, a discount of 10% should be applied to the total cost.

## Technical Requirements

- The back end should be built using ASP.NET Core and should use an EF Core in-memory database to store pizza size and topping data.
- The front end should be built using React and can use a modern UI library such as Bootstrap or Material UI.
- All calculation logic must be implemented in the back end.

## Nice to Have (Optional)

- [x] Unit tests in the backend.
- [x] Web app was deployed. Currently it is offline.
