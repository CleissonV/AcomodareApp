<template>
	<li class="page-item" :class="{
		'disabled': disabled,
		'active': active
	}">
		<a class="page-link" :href="href"><slot></slot></a>
	</li>
</template>

<script>
export default{
	name: 'page-item',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		active: {
			type: Boolean,
			default: false
		},
		href: {
			type: String
		}
	}
};
</script>
