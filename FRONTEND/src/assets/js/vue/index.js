import Vue from 'vue'

import './components/index.js'
import './layout/index.js'

Vue.config.productionTip = false
Vue.config.performance   = process.env.NODE_ENV !== "production";

if (process.env.NODE_ENV === "development") {
	// localStorage.clear();

	console.log('Não esqueça de no final do projeto rodar o seguinte comando:')
	console.log('gulp build && gulp js:build && gulp sass');
}

new Vue({
	el: '#app',
	methods: {
		formAjax(event) {
			if(window.formAjax) {
				window.formAjax(event.target)
			}
		}
	}
})
