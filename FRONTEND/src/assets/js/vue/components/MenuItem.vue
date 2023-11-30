<template>
	<li role="menuitem" class="menu__item" :class="{
		'active': active,
		'disabled': disabled
	}">
		<a :href="href" role="link" class="menu__link"><slot></slot></a>
	</li>
</template>

<script>
export default {
	name: 'menu-item',
	props: {
		active: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
