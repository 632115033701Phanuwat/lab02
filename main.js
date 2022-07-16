const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE331',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [{
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 50
                }
            ],
            cart: [0, 0],
            SelectedVariant: 0,
            onSale: true,
            premium: true

        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
            if (id == 2234) {
                this.cart[0] += 1;
            } else
                this.cart[1] += 1;
        }
    }

})