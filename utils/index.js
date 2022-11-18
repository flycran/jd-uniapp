import {
	computed,
	reactive,
	ref
} from 'vue'

/**
 * 获取OR设置对象深度属性
 * @param obj 对象
 * @param position 属性字符串，支持"."分割
 * @param value 设置值
 */
function toKey(obj, position, value) {
	const pos = position.split('.')
	if (value !== undefined) {
		const len = pos.length - 1
		for (let i = 0; i < len; i++) {
			obj = obj[pos[i]]
		}
		obj[pos[len]] = value
		return obj
	}
	for (let i = 0; i < pos.length; i++) {
		obj = obj[pos[i]]
	}
	return obj
}

/**
 * 全选
 * @param selectKey 选择字段名，支持以支持"."分割的深度属性
 * @param data 源数据
 */
export const selectAll = ({
	selectKey = 'select',
	data = ref([])
}) => {
	const selectAll = computed({
		get() {
			return !data.value.some(e => !toKey(e, selectKey))
		},
		set(v) {
			data.value.forEach(e => {
				toKey(e, selectKey, v)
			})
		},
	})
	return {
		data,
		selectAll,
	}
}
