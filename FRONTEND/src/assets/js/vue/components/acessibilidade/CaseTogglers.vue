<template lang="pug">
.acessibilidade__case__system
	button(
		type="button"
		:class=`{
			'active': caseMode == 'lowerCase'
		}`
		@click.prevent="caseMode = 'lowerCase'"
	).acessibilidade__case__toggler A-
	button(
		type="button"
		:class=`{
			'active': caseMode == 'upperCase'
		}`
		@click.prevent="caseMode = 'upperCase'"
	).acessibilidade__case__toggler A+
//- .acessibilidade__case__toggler
</template>

<script>
export default {
	data() {
		return {
			caseMode: 'lowerCase'
		}
	},
	created() {
		let caseMode = localStorage.getItem('caseMode');

		if(caseMode) {
			this.caseMode = caseMode;
		}
	},
	watch: {
		caseMode(value) {
			this.setClass(value);
			localStorage.setItem('caseMode', value);
		}
	},
	methods: {
		setClass(className) {
			document.body.classList.remove('upperCase', 'lowerCase');
			document.body.classList.add(className);
		}
	}
}
</script>

<style lang="scss">
@import "../../utils/core.scss";

.acessibilidade__case__system{
	display: inline-flex;
	align-items: center;
}

.acessibilidade__case__toggler{

	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(#000,.2);
	border-radius: 50%;
	width: 38px;
	height: 38px;
	flex-shrink: 0;
	transition: all .3s linear;

	& + .acessibilidade__case__toggler{
		margin-left: 10px;
	}

	&.active {
		background: $primary;
		color: #FFF;
	}
}

</style>
