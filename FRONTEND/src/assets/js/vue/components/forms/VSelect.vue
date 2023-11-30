<template>
	<div class="v-select dropdown">
		<input
			type="hidden"
			:name="name"
			:id="id"
			v-model="value"
		>

		<button
			class="form-control v-select-output"
			type="button"
			data-toggle="dropdown"
			aria-haspopup="listbox"
			:id="id+'-button'"
            @click="fireFocus"
		>
			{{ text }}
		</button>

        <template v-if="filterSelect">
            <div class="dropdown-menu" :id="'v-options-'+id">
                <div class="v-select-filter-area">
                    <input
                        type="text"
                        name="select['filter']"
                        class="v-select-filter"
                        v-model="filtro"
                        :id="`${id}-input-filter`"
                    >
                </div>

                <ul
                    class="v-options"
                    role="listbox"
                    :aria-labelledby="id+'-button'"
                >
                    <li
                        v-for="option in optionsFiltro"
                        :key="option.id"
                        class="v-option"
                        role="option"
						:class="{
							'selected': option.selected,
							'disabled': option.disabled
						}"
                    >
                        {{option.text}}
                    </li>
                </ul>
            </div>
        </template>

        <template v-else>
            <ul
                class="dropdown-menu v-options"
                role="listbox"
                :aria-labelledby="id+'-button'"
                :id="'v-options-'+id"
            >
                <li
                    v-for="option in optionList"
                    :key="option.id"
                    class="v-option"
                    role="option"
					:class="{
						'selected': option.selected,
						'disabled': option.disabled
					}"
                    @click="select(option)"
                >
                    {{option.text}}
                </li>
            </ul>
        </template>
	</div>
</template>

<script>
import EventBus  from '../../utils/EventBus.js'

function normalizeString(string){
    return string.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

export default {
	props: {
		id: String,
		name: String,
		placeholder: String,
		options: {
			type: Array,
			default: null
		},
        filterSelect: {
            type: Boolean,
            default: false
        }
	},
	data() {
		return {
			focus         : false,
			text          : this.placeholder || 'Selecione',
			value         : '',
			optionList    : this.options,
            optionsFiltro : this.options,
            filtro        : '',
		}
	},
    methods: {
        select(option) {
            this.optionList.forEach(item => {
                item.selected = item.id === option.id;
            })

            this.value = option.value;
			this.text  = option.text;

			EventBus.$emit('vselect-change', {
				id     : this.id,
				value  : option.value,
				text   : option.text
			})
        },
        fireFocus(event) {
            const filter = this.$el.querySelector(`#${this.id}-input-filter`);

			if(filter) {
            	setTimeout(function() {
					filter.focus();
				}, 32)
			}
        },
        hasSelectedOnStart() {
            this.optionList.find(option => {
                if(option.selected) {
                    this.select(option);
                }
            })
        }
    },
	watch: {
        filtro: function(key) {

            if(key === '') {
                this.optionsFiltro = this.optionList;

                return false
            }else{
                let filterKey = normalizeString(key)

                this.optionsFiltro = this.optionList.filter(option => {
                    let text = normalizeString(option.text);
                    let {id, selected, disabled} = option;

                    if(text.indexOf(filterKey) > -1) {
                        return {
                            id,
                            text: option.text,
                            selected,
                            disabled
                        }
                    }
                })

                return false;
            }

        }
    },
	mounted() {

        this.hasSelectedOnStart();

		EventBus.$on('vselect-change', payload => {
			if(payload.target == this.id) {
				this.value = payload.value
				this.text  = payload.text
			}
		})

		EventBus.$on('vselect-refresh', payload => {
			if(payload.id == this.id) {
				this.optionList = payload.options
				this.text       = this.placeholder || 'Selecione'
				this.value      = ''
			}
		})
	}
}
</script>

<style lang="scss">
@import "../../utils/core.scss";

.v-select-output{
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	&:before{
		content:'';
		border-left: 0.5em solid transparent;
		border-right: 0.5em solid transparent;
		border-top: 0.5em solid currentColor;
		display: block;
		float: right;
		margin-left: 0.75rem;
		margin-top: 0.5rem;
	}
}

.v-options{
	width: 100%;
	min-width: 180px;
	padding-top: 0;
	padding-bottom: 0;
	max-height: 220px;
	overflow: auto;
    max-height: 300px;
    overflow: auto;
    padding-left: 0;
    list-style: none;
    margin-bottom: 0;
}

.v-select-filter-area{
    padding-left: 10px;
    padding-right: 10px;
}

.v-select-filter{
    width: calc(100% - 20px);
    margin-left: auto;
    margin-right: auto;
    padding: 0.375rem .75rem;
    border: 1px solid #ccc;
    border-radius: .25rem;
    line-height: 1.5;
    font-size: 1rem;
    height: calc( 2.25rem + 2px);
    margin-bottom: 15px;
    display: block;
    outline: none;

    &:focus{
        border-color: $primary;
        box-shadow: 0 0 5px rgba($primary, .2);
    }
}
</style>
