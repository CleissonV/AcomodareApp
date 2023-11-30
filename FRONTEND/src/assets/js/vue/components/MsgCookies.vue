<template lang="pug">
	.msg__cookies(
		v-if="show"
	)
		.content
			slot
		//- .content

		button(
			type="button"
			role="button"
			aria-label="Aceitar termos"
			@click.prevent="aceitar"
		).btn Aceitar e fechar
	//- .msg__cookies
</template>

<script>
import EventBus from 'event-bus'

export default {
	data() {
		let date = new Date();
		let dia  = date.getDate();
		let mes  = date.getMonth() + 1;
		let ano  = date.getFullYear();

		mes = mes < 10 ? `0${mes}` : mes;

		return {
			show: true,
			hoje: `${dia}/${mes}/${ano}`
		}
	},
	beforeMount() {
		let cookies = localStorage.getItem('cookies');

		if(cookies) {
			cookies = JSON.parse(cookies);

			if(cookies.date === this.hoje) {
				this.show = false
			}


		}
	},
	methods: {
		aceitar() {
			var termos = {
				aceito: true,
				date: this.hoje
			};

			localStorage.setItem('cookies', JSON.stringify(termos));
			EventBus.$emit('termos.cookies', termos)

			this.show = false
		}
	}
}
</script>

<style lang="scss">
@import '../utils/core.scss';

.msg__cookies{
	background: #FFF;
	position: fixed;
	bottom: 15px;
	left: 50%;
	transform: translateX(-50%);
	padding: 15px;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(#000,.8);
	width: 100%;
	z-index: 999999999;
	border: 1px solid rgba(#000,.2);

	a{
		color: $danger;
		text-decoration: underline;
	}

	.btn{
		@include button-variant($danger, $danger);
		font-weight: bold;
	}

	@include media-breakpoint-down(sm){
		max-width: calc(100% - 30px);
		font-size: 12px;
		text-align: center;

		a{
			display: inline-block;
		}

		.content{
			margin-bottom: 10px;
		}
	}

	@include media-breakpoint-up(md){
		display: grid;
		grid-template-columns: 1fr min-content;
		grid-column-gap: 10px;
		align-items: center;

		.btn{
			white-space: nowrap;
		}
	}

	@include media-breakpoint-only(md) {
		max-width: map-get($container-max-widths, md);
	}

	@include media-breakpoint-only(lg) {
		max-width: map-get($container-max-widths, lg);
	}

	@include media-breakpoint-only(xl) {
		max-width: map-get($container-max-widths, xl);
	}
}
</style>
