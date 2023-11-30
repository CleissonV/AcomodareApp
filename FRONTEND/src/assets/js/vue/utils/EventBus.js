import Vue from 'vue'

const EventBus = new Vue();

window.$emit = function(eventName, eventData) {

	EventBus.$emit(eventName, eventData);
}

window.$on = function(eventName, eventCallback) {
	EventBus.$on(eventName, eventCallback);
}

export default EventBus
