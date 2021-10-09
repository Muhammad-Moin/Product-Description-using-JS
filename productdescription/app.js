var productName = document.getElementById("product-name");
var productPrice = document.getElementById("product-price");
var description = document.getElementById("description");
var address = document.getElementById("address");
var mainDiv = document.getElementById("main-a")

function add() {
    if (!productName.value || !productPrice.value || !description.value || !address.value) {
        alert('Please Enter all fields!')
    }
    else {        
        mainDiv.innerHTML += `<br>`
        var a = `<img style="display:inline-block" src="./a.jfif" alt="football">`;
        var c = [a, productName.value, productPrice.value, description.value, address.value]
        var e = ['', 'Product Name: ', 'Product Price: ', 'Description: ', 'Address: ']
        for (var i = 0; i < c.length; i++) {
            mainDiv.innerHTML += `<br>`
            mainDiv.innerHTML += e[i] + c[i];
            mainDiv.innerHTML += `<br>`            
        }
    }
    productName.value = ''
    description.value = ''
    address.value = ''
    productPrice.value = ''
}

