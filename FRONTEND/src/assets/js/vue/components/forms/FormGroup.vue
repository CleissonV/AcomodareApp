<template>
	<div
		class="form-group"
		:class="{
			'focus': isFocus || val != '',
			'has__error'   : validation.type === 'error',
			'has__warning' : validation.type === 'warning',
			'has__success' : validation.type === 'success'
		}"
	>
		<span class="label" :class="{'sr-only': srOnly}" v-if="radio">{{ label }}</span>
		<span class="label" :class="{'sr-only': srOnly}" v-else-if="checkbox">{{ label }}</span>
		<label :for="id" class="label" :class="{'sr-only': srOnly}" v-else>{{ label }}</label>

		<input
			v-if="input"
			:type="type"
			:name="name"
			:id="id"
			:placeholder="placeholder"
			class="form-control"
			v-model="val"
			@focus="focus"
			@blur="blur"
		>

		<div
			v-if="file"
			class="v-file"
		>
			<input type="file" :id="id" :name="name" class="v-file-input" @change="pickFile">
			<label :for="id" class="v-file-label">
				<span class="v-file-output">{{ fileName !== '' ? fileName : 'Nenhum arquivo selecionado'}}</span>
				<span class="v-file-button">Escolher Arquivo</span>
			</label>
		</div>

		<textarea
			v-if="textarea"
			:name="name"
			:id="id"
			:placeholder="placeholder"
			class="form-control"
			v-model="val"
			@focus="focus"
			@blur="blur"
		></textarea>

		<v-select
			v-if="select"
			:name="name"
			:id="id"
			:options="options"
			:placeholder="placeholder"
		></v-select>

		<div class="v-radio-list" v-if="radio">

			<div
				v-for="radio in radios"
				:key="radio.id"
				class="custom-control custom-radio"
				:class="{'custom-control-inline': radioInline}"
			>
				<input
					type="radio"
					class="custom-control-input"
					:id="radio.id"
					:name="name"
					:checked="radio.checked"
				>
				<label class="custom-control-label" :for="radio.id">{{ radio.text }}</label>
			</div>

		</div>

		<div class="v-radio-list" v-if="checkbox">

			<div
				v-for="checkbox in checkboxes"
				:key="checkbox.id"
				class="custom-control custom-checkbox"
				:class="{'custom-control-inline': checkboxInline}"
			>
				<input
					type="checkbox"
					class="custom-control-input"
					:id="checkbox.id"
					:name="name"
					:checked="checkbox.checked"
				>
				<label class="custom-control-label" :for="checkbox.id">{{ checkbox.text }}</label>
			</div>

		</div>

		<div
			v-if="validation.message"
			class="message__validation"
			v-html="validation.message"
		></div>
	</div>
</template>

<script>
import EventBus from '../../utils/EventBus.js'

export default {
	name: 'form-group',
	props: {
		name: {
			type: String
		},
		id: {
			type: String
		},
		placeholder: {
			type: String
		},
		label: {
			type: String
		},
		srOnly: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		radio: {
			type: Boolean,
			default: false
		},
		checkbox: {
			type: Boolean,
			default: false
		},
		input: {
			type: Boolean,
			default: false
		},
		textarea: {
			type: Boolean,
			default: false
		},
		file: {
			type: Boolean,
			default: false
		},
		select: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array,
			default: () => []
		},
		radios: {
			type: Array,
			default: () => []
		},
		checkboxes: {
			type: Array,
			default: () => []
		},
		radioInline: {
			type:Boolean,
			default: false
		},
		checkboxInline: {
			type:Boolean,
			default: false
		},
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			validation: {
				type: null,
				message: null
			},
			fileName: '',
			val: this.value,
			isFocus: this.value !== ''
		}
	},
	methods: {
		pickFile(event) {
			this.fileName = event.target.files[0].name
		},
		focus() {
			this.isFocus = true
		},
		blur() {
			this.isFocus = this.val != ''
		}
	},
	mounted() {
		EventBus.$on('emit.form.validation', event => {
			if(event.id === this.id) {
				this.validation = {
					type: event.type,
					message: event.message
				}
			}
		})

		EventBus.$on('clear.form.validation', event => {
			if(event.id === this.id) {
				this.validation.type = this.validation.message = null
			}
		})
	}
}
</script>

<style lang="scss">
@import "../../utils/core.scss";

.message__validation{
	margin-top: 5px;
}

.has__success{
	$theme: $success;

	.form-control,
	.v-file-label{
		border-color: $theme;
	}

	.v-file-button{
		background: $theme;
		color: color-contrast($theme);
	}

	.message__validation{
		color: $theme;
	}
}

.has__warning{
	$theme: $warning;

	.form-control,
	.v-file-label{
		border-color: $theme;
	}

	.v-file-button{
		background: $theme;
		color: color-contrast($theme);
	}

	.message__validation{
		color: $theme;
	}
}

.has__error{
	$theme: $danger;

	.form-control,
	.v-file-label{
		border-color: $theme;
	}

	.v-file-button{
		background: $theme;
		color: color-contrast($theme);
	}

	.message__validation{
		color: $theme;
	}
}

.v-file{
	position: relative;
}

.v-file-input{
	position: relative;
    z-index: 2;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
	margin: 0;
	display: block;
	opacity: 0;
	cursor: pointer;
}

.v-file-label{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	border: 1px solid #ced4da;
	line-height: 1.5;
	font-size: 1rem;
	padding: .375rem .75rem;
	font-weight: 400;
	border-radius: .25rem;
	left: 0;
	top: 0;
	cursor: pointer;
	background: #FFF;
}

.v-file-output{
	display: block;
	flex-grow: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.v-file-button{
	display: inline-block;
	background: #DDD;
	font-size: toRem(14);
	padding: 0 10px;
	border-radius: .25rem;
}

.label{
	display: inline-block;
    margin-bottom: .5rem;
}

</style>
