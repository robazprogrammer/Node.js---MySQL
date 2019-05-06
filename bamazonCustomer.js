var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hugh2118!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {console.log(err)}
  else {
  displayProducts();
  }
  console.log("Connected as id " + connection.threadId);
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) {
        console.log(err)
      } else {
      for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " +
        res[i].stock_quantity)}}
        console.log("-----------------------------------");
      productid();
    });
  };

  function productid() {
  inquirer
  .prompt([
    {
        type: "input",
        message: "Which Product ID would you like to buy?",
        name: "productId"
      },
      {
        type: "input",
        message: "How many units do you want to buy?",
        name: "productCount"
    }
    ])
    .then(function(answer) {
      var prodId = answer.productId;
      var prodCount = answer.productCount;

      connection.query("SELECT stock_quantity FROM products where item_id = " + prodId, function(err, res) {
          if (err) {console.log(err)}
            else {
              var stockQuantity = res[0].stock_quantity
            };
              console.log("stockQuantity ", stockQuantity)
              if (stockQuantity > prodCount) {
                var newCount = (stockQuantity - prodCount)
                  updateStock(prodId, newCount);
              } else {console.log("Insufficient quantity!")}
            })
          })
        };



function updateStock(prodId, newCount) {
    connection.query(
      "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newCount
          },
          {
            item_id: prodId
          }
        ]
      , function(err, res){
        displayProducts();

      });
};
