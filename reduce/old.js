const shoppedItems = [
    { name: 'XBOX', price: 310 },
    { name: 'Gaming Chair', price: 120 },
    { name: 'Joystick', price: 120 },
    { name: 'Witchcraft', price: 220 },
    { name: 'Cyberpunk', price: 295 },
]

let totalPurchase = 0
shoppedItems.forEach(purchase => {
    totalPurchase += purchase.price
})

console.log(`$` + totalPurchase)