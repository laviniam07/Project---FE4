// const cartInfo = document.getElementById('shopping-cart');
// const cart = document.getElementsByClassName('container');

// cartInfo.addEventListener('click', function(){
//     cart.classList.toggle('show-cart');
// })

// $(document).ready(function() {
//     $("#shopping-cart").click(function() {
//         $(".container").toggle();
//     });
// });

// function toggleCart() {
//     var cartInfo = document.getElementsByClassName('container');
//     var displayCart = cartInfo.style.display;
//     var showcart = document.getElementById('shopping-cart');
//     if (displayCart == 'block') {
//         cartInfo.style.display = 'none';
//         showcart.innerHTML = "Show Cart";
//     } else {
//         cartInfo.style.display = 'block';
//         showcart.innerHTML = 'Hide Cart';
//     }
// }

// Cart buttons

var removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = pparseFloat(riceElement = priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innertext = total;
}
