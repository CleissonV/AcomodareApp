<template lang="pug">
	a(
		:href="whatsappLink"
		:title="title"
		:style="`${x}: 15px;${y}: 15px`"
		class="btn__whatsapp"
		target="blank"
		rel="noopener"
		v-if="fone"
	)
		.btn__whatsapp__wrapper
			svg(
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			)
				path(d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z")
				path(
					d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145a9.865 9.865 0 017.021 2.91 9.788 9.788 0 012.909 6.99z"
				)
		//- .btn__whatsapp__wrapper
</template>

<script>

export default {
	props: {
		position: {
			type: String,
			default: 'left-bottom'
		},
		fone: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: 'Contate-nos via Whatsapp'
		}
	},
	data() {
		return {
			x: 'left',
			y: 'bottom'
		}
	},
	methods: {
		getPosition() {
			let [x,y] = this.position.split('-');

			this.x = x;
			this.y = y;
		}
	},
	computed: {
		whatsappLink() {
			let formatedNumber = this.fone.replace(/\D/g, '');

			if(formatedNumber != '') {
				return `https://wa.me/${formatedNumber}`
			}
		}
	},
	mounted() {
		this.getPosition();
	}
}
</script>

<style lang="scss">
.btn__whatsapp{
	$verde: #01AB4C;
	background: $verde;
	position: fixed;
	z-index: 999;
	box-shadow: 0 0 8px rgba(0,0,0,.8);
	font-size: 40px;

	&:hover{
		text-decoration: none;
		animation: rubberBand 1s linear;
	}

	&,
	.btn__whatsapp__wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5em;//  40px * 1.5 = 60px
		height: 1.5em;// 40px * 1.5 = 60px
		border-radius: 50%
	}

	.btn__whatsapp__wrapper{
		overflow: hidden;
	}

	svg{
		$dropShadow: drop-shadow(1px 1px #01883c);

		@for $i from 2 through 60 {
			$dropShadow: #{$dropShadow} drop-shadow(#{$i}px #{$i}px #01883c);
		}

		width: 1em;
		height: 1em;
		fill: #FFF;
		filter: $dropShadow;
	}
}
</style>
