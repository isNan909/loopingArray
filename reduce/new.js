const shoppedItems = [
    { name: 'XBOX', price: 310 },
    { name: 'Gaming Chair', price: 120 },
    { name: 'Joystick', price: 120 },
    { name: 'Witchcraft', price: 220 },
    { name: 'Cyberpunk', price: 295 },
]

let totalPurchase = shoppedItems.reduce((total, shop) => total + shop.price, 0)

console.log(`$` + totalPurchase)