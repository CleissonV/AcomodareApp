/**
 * @param {HTMLElement} $el Element HTML
 */
function AnimateViewport($el) {
	let animation = $el.dataset.animate || ''

	animation = animation.split(' ')

	const observer = new IntersectionObserver(entries => {
		if(entries[0].isIntersecting) {

			animation.forEach(animate => $el.classList.add(animate));
		}
	})

	$el.removeAttribute('data-animate')
	observer.observe($el)
}

window.addEventListener('load', () => {
	const $els = document.querySelectorAll('[data-animate]')

	$els.forEach($el => AnimateViewport($el));
})

export default AnimateViewport
