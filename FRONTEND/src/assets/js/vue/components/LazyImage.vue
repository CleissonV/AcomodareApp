<template>
    <img
     :src="src"
     :srcset="srcset"
     :width="width"
     :height="height"
     :alt="alt"
     loading="lazy"
     class="img-fluid lazy__image"
	 @load="isLoaded"
	 @error="error"
	 :class="{'loaded': loaded}"
    />
</template>

<script>

export default {
    data() {
        return {
			loaded: false
        }
    },
    props: [
        'src',
        'srcset',
        'alt',
        'width',
        'height'
    ],
    methods: {
        placeholder() {
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${this.width} ${this.height}'%3E%3C/svg%3E`
		},
		isLoaded() {
			this.loaded = true;
		},
		error() {
			this.src = `https://via.placeholder.com/${this.width}x${this.height}?text=Not+Found`
		}
    },
    mounted() {
		this.image = this.src;
		this.imageSet = this.srcset;
		this.loading = 'lazy';
    }
}
</script>

<style lang="scss">
.lazy__image:not(.loaded){
	background-color: #eee;
	background-image: var(--loadingGif, none);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 30% auto;
}
</style>
