<template>
	<div
		class="carousel"
		:class="{
			'slide': slide,
			'carousel-fade': fade
		}"
		:data-interval="interval"
		data-ride="carousel"
		:id="id"
	>
		<ol class="carousel-indicators" v-if="checkRender(indicators)">
			<li
				v-for="(banner,i) in banners"
				:key="i"
				:data-target="'#'+id"
				:data-slide-to="i"
				:class="{
					'active': i == 0
				}"
			></li>
		</ol>

		<div class="carousel-inner">
			<slot></slot>
		</div>

		<div class="carousel-controls" v-if="checkRender(nav)">
			<a class="carousel-control-prev" :href="'#'+id" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>

			<a class="carousel-control-next" :href="'#'+id" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		nav: {
			type: Boolean,
			default: false
		},
		indicators: {
			type: Boolean,
			default: false
		},
		fade: {
			type: Boolean,
			default: false
		},
		slide: {
			type: Boolean,
			default: false
		},
		interval: {
			type: String,
			default: '5000'
		},
		id: {
			type: String
		}
	},
	data() {
		return {
			banners: []
		}
	},
	methods: {
		checkRender(prop) {
			return prop && (this.banners.length > 1);
		}
	},
	mounted() {
		this.banners = this.$el.querySelectorAll('.carousel-item')
	}
}
</script>
