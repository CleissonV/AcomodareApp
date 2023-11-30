<template>
	<div class="form-group md-select" :class="{
		focus: value !== ''
	}">
		<label :for="id" class="md-select-label" role="label" :id="id+'-label'">{{ label }}<span class="md-select-required" v-if="required">*</span></label>
		<input type="hidden" :name="name" :id="id" v-model="value" />
		<div class="dropdown">
			<button
				class="form-control md-select-output"
				type="button"
				data-toggle="dropdown"
				:aria-label="placeholder"
				aria-expanded="false"
			>{{ text }}</button>

			<ul class="dropdown-menu md-select-options" :aria-labelledby="id+'-label'" role="listbox" tabindex="0">
				<li
					v-for="(option, i) in options"
					:key="i"
					:class="{
						'selected': option.selected,
						'disabled': option.disabled
					}"
					:aria-selected="option.selected ? 'true' : false"
					:id="id+'-option-'+i"
					role="option"
					@click="select(option)"
				>{{ option.text }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'md-select',
	data() {
		return {
			value: '',
			text: this.placeholder || ''
		}
	},
	props: {
		name: {
			type: String
		},
		id: {
			type: String,
			required: true
		},
		placeholder: {
			type: String
		},
		label: {
			type: String
		},
		options: {
			type: Array,
			default: []
		},
		required: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		select(selectedOption) {
			this.options.forEach(option => {
				option.selected = option === selectedOption;
			})
			this.value = selectedOption.value
			this.text = selectedOption.text
		}
	},
	mounted() {
		this.options.forEach(option=> {
			if(option.selected) {
				this.value = option.value
				this.text = option.text
			}
		})
	}
}
</script>
