totalNumber = 0;   // for total number of Pizzas ordered
pizzaPriceSmall = 600;   // price of small pizza
pizzaPricemedium = 750;  //price for medium pizza
pizzaPricemedium = 900;  //price for large pizzas
orderTotalPrice = 0;   // total cost of order
pizzaDeliveryPrice = 200; // price for pizza delivery
var customerName = prompt("Please enter your name.") //prompt to get the customers name
var customerNumber = prompt("Please enter your phone number.") //prompt to get the customers number

function order()
{
  var pizza = new Array()
  pizza[0] = document.form.input.value                //allocates type of pizza in array
  pizza[0] = Number(pizza[0])                           //converts to number value
  pizza[1] = document.form.input.value                 //allocates type of pizza in array            
  pizza[1] = Number(pizza[1])                            //converts to number value
  pizza[2] = document.form.input.value                //allocates type of pizza in array
  pizza[2] = Number(pizza[2])                            //converts to number value
  pizza[3] = document.form.input.value                //allocates type of pizza in array
  pizza[3] = Number(pizza[3])                            //converts to number value


  totalPlain = pizza[0] + pizza[1] + pizza[2] + pizza[3] ;

  var totalNumber = totalGourmet + totalPlain

  var fullOrder = alert("You have ordered: " + "\n" +        
         "Hawaiian Pizza: " + pizza [0] + "\n" +
         "Cheese Pizza: " + pizza [1] + "\n" +
         "Veggie Pizza: " + pizza [2] + "\n" + 

         function calculate()    //Function for the cost of the order
         {
             orderTotalPrice = (totalPlain*pizzaPrice + totalGourmet*pizzaPriceGourmet);  //order total+ amount of pizzas ordered * pizza price
             var pizzaDelivery = prompt('Would you like your order to be delivered for $5, or for pick up?    -Type in "1" for delivery, and "0" for pickup.') //asks if you want your order to be delivered or not
             orderTotalPrice = (orderTotalPrice + (pizzaDelivery*pizzaDeliveryPrice)); // calculates the total cost with or without the delivery cost
             alert("Total cost of pizzas is: $" + orderTotalPrice.toFixed(2) );  //Display order cost as "$"0.00
             if (pizzaDelivery == '1'){
                 var response = prompt("Please enter your address: ")
                 alert("The pizza should be delivered within the next 25 minutes, to this address:   " +response)
                  alert("Thank you for ordering with Pete's Pizzas " +customerName)
                  alert("If anything happens to go wrong we will contact you on your number: " +customerNumber)
                  alert("Your order details are: " +customerName +"\n" +customerNumber +"\n" +response)
                  alert("To exit, just click 'ok' and then close down the program!")
             } else if (pizzaDelivery == '0'){
                  alert("Your order will be ready for pickup in 15 minutes!")
                  alert("Thank you for ordering with Pete's Pizzas " +customerName)
                  alert("If anything happens to go wrong we will contact you on your number: " +customerNumber)
                  alert("Your order details are: " +customerName +"\n" +customerNumber)
                  alert("To exit, just click 'ok' and then close down the program!")
             }
         }