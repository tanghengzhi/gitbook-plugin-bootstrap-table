var gitbook = window.gitbook;

gitbook.events.on('page.change', function() {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
});

