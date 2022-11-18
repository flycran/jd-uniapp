<template>
	<uni-icons @click="change" :type="props.value ? 'checkbox-filled' : 'circle'" size="20" color="#ff0000"></uni-icons>
</template>

<script setup>
	const props = defineProps(['value'])
	const emit = defineEmits(['change'])
	function change() {
		// console.log(props.value);
		emit('change', !props.value)
	}
</script>

<style>
</style>