//const precioOriginal = 100;
//const descuento = 15;

const coupons = [
    {
        name: "Hola-mundo",
        discount: 30
    },
    {
        name: "Betta-Tech",
        discount: 22
    },
    {
        name: "Doriang-desing",
        discount: 18
    }
];


function calcularPrecionConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento

}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupon = document.getElementById("InputCoupon");

    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue
    }

    const userCoupon = coupons.find(isCouponValueValid)
    if(!userCoupon){
        alert(`El cupon ${couponValue} no se válido`);
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecionConDescuento(priceValue, descuento);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = `El precio con descuento son: $${precioConDescuento}`;
    }

}




//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//})