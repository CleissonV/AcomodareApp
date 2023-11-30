if(!window.midiaSize) {
	Object.defineProperty(window, 'midiaSize', {
		get() {
			var w = window.innerWidth;
			var size = 'xs';

			if (w < 500) {
				size = 'xs';
			}

			if (w >= 500) {
				size = 'sm';
			}

			if (w >= 768) {
				size = 'md';
			}

			if (w >= 992) {
				size = 'lg';
			}

			if (w >= 1200) {
				size = 'xl';
			}

			return size;
		}
	});

}
