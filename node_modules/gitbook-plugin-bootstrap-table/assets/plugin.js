var gitbook = window.gitbook;

gitbook.events.on('page.change', function() {
	$('table').bootstrapTable({
		search: true,
		resizable: true,
		showColumns: true,
		showToggle: true
	})

	/**
	 * treegrid
	 */
	$("table").find('tbody').find('tr').each(function(id) {
		$(this).addClass('treegrid-' + id);
		$(this).data('treegrid', id);

		let match = $(this).html().match(/\[&gt;\]/g);
		let level = match ? match.length : 0;

		$(this).addClass('treegrid-level-' + level);
		$(this).html($(this).html().replace(/\[&gt;\]/g, ""));

		if (level > 0) {
			let parent = $('.treegrid-level-' + (level - 1)).last();
			$(this).addClass('treegrid-parent-' + parent.data('treegrid'));
		}
	})

  $("table").treegrid();
});
