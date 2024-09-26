import { defineStore } from 'pinia'
import { CartItem } from '@/types/cart'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[] // Use CartItem[] for the items array
    }),
    actions: {
        addToCart(item: CartItem) {
            const existingItem = this.items.find(i => i.id === item.id)
            if (existingItem) {
                existingItem.quantity += item.quantity
            } else {
                this.items.push(item)
            }
        },
        removeFromCart(itemId: string) {
            this.items = this.items.filter(item => item.id !== itemId)
        },
        updateQuantity(itemId: string, quantity: number) {
            const item = this.items.find(i => i.id === itemId)
            if (item) {
                item.quantity = quantity
            }
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        cartTotal(): number {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
        },
        cartItemCount(): number {
            return this.items.reduce((count, item) => count + item.quantity, 0)
        }
    },
    persist: {
        key: 'cart-items',
        storage: localStorage
    }
})