var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var colors = require("colors");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Fighter840",
  database: "bamazon_db"
});

function showInventory() {
     connection.query('SELECT * FROM products', function(err, inventory) {
      if (err) throw err;
               console.log("Current Inventory");
               for(var i = 0; i < inventory.length; i++) {
            console.log("Item ID: " + inventory[i].item_id + " | Product: " + inventory[i].product_name + " | Department: " + inventory[i].department_name + " | Price: " +  inventory[i].price);
          }

          inquirer.prompt([

            
            {
              type: "input",
              message: "What is the id of the item you would like to purchase?",
              name: "id"
            },

               {
              type: "input",
              message: "How many would you like?",
              name: "quantity"
            }

          ]).then(function (order) {
            
                    var quantity = order.quantity;
                    var item_id = order.id;
                    connection.query('SELECT * FROM products WHERE item_id=' + item_id, function(err, selectedItem) {
                      if (err) throw err;
                         if (selectedItem[0].stock_quantity - quantity >= 0) {
                              console.log("That item is in stock. (".green + selectedItem[0].product_name.green + ")!".green);
                              console.log("Quantity in Stock: ".green + selectedItem[0].stock_quantity + " Order Quantity: ".green + quantity);
                              console.log("You will be charged ".green + (order.quantity * selectedItem[0].price) +  " dollars.  Thank you for your order.".green);
                              
                              connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, item_id],
                              function(err, inventory) {
                                if (err) throw err;
                                  
                                   showInventory();
                              });  

                         }

                         else {
                              console.log("Insufficient quantity.  Please order less of that item, as Bamazon only has ".red + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name.red + " in stock at this moment.".red);
                              showInventory();
                         }
                    });
          });
     });
}

showInventory();
