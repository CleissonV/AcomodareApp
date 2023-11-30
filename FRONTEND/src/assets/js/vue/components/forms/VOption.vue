<template>
	<li
		class="v-option"
		:class="{
			'selected': isSelected,
			'disabled': isDisabled
		}"
		:aria-selected="isSelected ? 'true' : false"
		:id="optionId"
		@click="emitChange"
		role="option"
	>
		<slot></slot>
	</li>
</template>

<script>
import EventBus from '../../utils/EventBus.js'

export default {
	props: {
		id: String,
		selected: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: [String, Number]
	},
	data() {
		return {
			isSelected: this.selected,
			isDisabled: this.disabled,
			optionId: this.id
		}
	},
	methods: {
		emitChange() {
			EventBus.$emit('vselect-change', {
				target: this.$parent.id,
				value: this.value,
				text: this.$el.innerHTML,
				id: this.id
			})
		}
	},
	mounted() {
		if(!this.id) {
			this.$parent.$children.forEach(($child, $index) => {
				this.id = `option-${this.$parent.id}-${$index}`
			})
		}

		if(this.selected) {
			this.emitChange()
		}

		EventBus.$on('vselect-change', payload => {
			this.isSelected = payload.id == this.id
		})
	}
}
</script>

<style lang="scss">
.v-option{
	padding: 10px;
	color: #232323;
	cursor: pointer;

	&:not(.selected):hover{
		background: #eee;
	}

	&.selected{
		background: var(--primary);
		color: var(--primary-inverse, #FFF);
	}

	&.disabled{
		color: #999;
		pointer-events: none;
	}
}
</style>
