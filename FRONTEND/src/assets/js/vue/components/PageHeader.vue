<template lang="pug">
	.page__header
		.container
			slot

			ol.breadcrumbs(
				v-if="breadcrumbs"
			)
				li(
					v-for="item in breadcrumbs"
					:key="item.id"
					:class=`{
						'active': item.active
					}`
				)
					// Caso (item.active == true) renderiza a <span>
					span(
						v-if="item.active"
					) {{ item.text }}

					// Caso (item.active == false) renderiza o <a>
					a(
						v-else
						:href="item.href"
					) {{ item.text }}
		//- .container
	//- .page__header
</template>

<script>
export default {
	props: {
		breadcrumbs: {
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="scss">
@import "../utils/core.scss";

.page__header{
    background: #f0f0f0;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    margin-bottom: 60px;

	.breadcrumbs{
		padding: 0 30px 15px 30px;
		min-width: 250px;
		max-width: 100%;
		background: 0 0;
		display: inline-flex;
		justify-content: center;
		margin-bottom: 0;
		border-radius: 0;
		border-bottom: 2px solid rgba(0,0,0,.2);
		position: relative;
		list-style: none;

		&::after{
			content:'';
			display: block;
			width: 50%;
			height: 5px;
			background: $primary;
			position: absolute;
			left: 50%;
			bottom: -2px;
			transform: translateX(-50%);
		}

		a{
			color: inherit;

			&:hover{
				color: $primary;
			}
		}

		span{
			color: #888;
		}

		li ~ li:before{
			content: '/';
			display: inline-block;
			margin: 0 1ch;
		}
	}
}

</style>
