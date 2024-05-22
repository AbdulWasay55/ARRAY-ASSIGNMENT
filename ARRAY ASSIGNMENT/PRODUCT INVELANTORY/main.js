var product = [
    {
        name: "T-shirt",
        price: 200,
        inventory: {
            stock: 100,
            colorOption: ["blue", "red", "green"]
        }
    },
    {
        name: "Jeans",
        price: 300,
        inventory: {
            stock: 150,
            colorOption: ["blue", "gray", "black"]
        }
    },
    {
        name: "Sneakers",
        price: 500,
        inventory: {
            stock: 200,
            colorOption: ["blue", "red", "green", "white"]
        }
    }
];
// FUNCTION CHANGE COLOUR 
function changeColor(product, newcolour) {
    var colorIndex = product.inventory.colorOption.indexOf(newcolour);
    if (colorIndex !== -1) {
        switch (newcolour) {
            case "red":
                var redPrice = product.price * 0.10; // INCREASE THE PRICE OF RED COLOR BY 10%
                product.price = product.price + redPrice;
                break;
            case "green":
                product.price;
                break;
            case "blue":
                var bluePrice = product.price * 0.05; // DECREASE THE PRICE OF BLUE COLOR BY 5%
                product.price = product.price - bluePrice;
                break;
            case "gray":
                var grayPrice = product.price * 0.10;
                product.price = product.price + grayPrice;
                break;
            case "black":
                product.price;
                break;
            case "white":
                product.price;
                break;
            default:
                break;
        }
        console.log("COLOR CHANGE TO ".concat(newcolour, " NEW PRICE IS ").concat(product.price));
    }
    else {
        console.log("".concat(newcolour, " COLOR IS NOT AVAIBLE"));
    }
}
// DISPLAY DETAIL FOR SINGLE PRODUCT
function diaplayProduct(product) {
    console.log("NAME: ".concat(product.name));
    console.log("PRICE: ".concat(product.price));
    console.log("AVAILABLE STOCK: ".concat(product.inventory.stock));
    console.log("COLOR OPTIONS: ".concat(product.inventory.colorOption));
}
product.forEach(function (product) { diaplayProduct(product); }); // DISPLAY DETAIL OF ALL PRODUCT    (product) })
diaplayProduct(product[1]);
changeColor(product[0], "gray");
