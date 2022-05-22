

const product = { count: 2, price: 12.55, type: 'libro' }
let totalVat = 0;
let totalPrice = 0;

if (product.type == 'ropa') {
    totalPrice = (product.count > 0 ? product.count * product.price : 0)
    totalVat = totalPrice * 0.21
} else if (product.type == 'alimentacion') {
    totalPrice = (product.count > 0 ? product.count * product.price : 0)
    totalVat = totalPrice * 0.10;
} else {
    totalPrice = (product.count > 0 ? product.count * product.price : 0)
    totalVat = totalPrice * 0.04;
};

totalPrice = totalPrice + totalVat;

console.log('Total de productos en su carrito: ', product.count);
console.log("Precio del producto por unidad: ", product.price);
console.log("Subtotal: ", (product.count > 0 ? product.count * product.price : 0) );
console.log('Total Iva: ', totalVat);
console.log("Total importe: ", totalPrice );

