import {computed, reactive, ref} from 'vue'

export default () => {

  const list = ref([])

  const option = reactive({
    /** 选择字段 */
    selectKey: 'select',
    /** 价格字段 */
    priceKey: 'price',
    /** 数量字段 */
    countKey: 'count',
  })

  const selectAll = computed({
    get() {
      return !list.value.some(e => !e[option.selectKey])
    },
    set(v) {
      list.value.forEach(e => {
        e[option.selectKey] = v
      })
    },
  })

  const totalPrice = computed(() => list.value.reduce((a, b) =>
    b[option.selectKey] ? (a + (+b[option.priceKey]) * b[option.countKey]) : a, 0).toFixed(2), 0,
  )
  return {
    list,
    option,
    selectAll,
    totalPrice
  }
}