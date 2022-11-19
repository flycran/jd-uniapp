import {defineStore} from "pinia"

export const OrderStore = defineStore('OrderStore', {
  state: () => ({
    list: [],
  }),
  getters: {
    selected() {
      const ar = []
      this.list.forEach(e => {
        e.commoditys.forEach(e => {
          if (e.selected) ar.push(e)
        })
      })
      return ar
    },
    price() {
     return this.selected.reduce((a, b) => a + (+b.commodity.price * +b.number), 0).toFixed(2)
    },
  },
})