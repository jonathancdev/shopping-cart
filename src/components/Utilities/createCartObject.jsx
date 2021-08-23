    export default function createCartObject(item) {
        const obj = {
            cartId: item.uniqueId,
            brand: item.brand,
            title: item.title,
            price: item.price,
            image: item.image,
            type: item.type,
            format: item.format,
            iso: item.iso,
            quantity: 1,
            increment() { this.quantity += 1},
            decrement() { this.quantity -= 1}
        }
        return obj
    }