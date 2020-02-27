var gitbook = window.gitbook;

gitbook.events.on('page.change', function() {
	$('table').bootstrapTable({
		search: true,
		resizable: true,
		showColumns: true,
		showToggle: true
	})
});
