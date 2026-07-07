(function ($) {

	function isDark() {
		return document.documentElement.getAttribute('data-theme') === 'dark';
	}

	function updateIcon($btn) {
		$btn
			.html(isDark() ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>')
			.attr('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
	}

	$(function () {

		var $btn = $('#theme-toggle');

		if (!$btn.length)
			return;

		updateIcon($btn);

		$btn.on('click', function () {

			if (isDark()) {
				document.documentElement.removeAttribute('data-theme');
				localStorage.setItem('theme', 'light');
			} else {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			}

			updateIcon($btn);

		});

	});

})(jQuery);
