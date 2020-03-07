module.exports = {
	blocks: {
		tooltips: {
			process: function(block) {
				var body = block.body;

				var title = block.kwargs.title;

				return '<a class="tooltips" href="" data-toggle="tooltip" title="' + title + '">' + body + '</a>';
			}
		}
	},
	website: {
		assets: './assets',
		js: [
			'plugin.js'
		],
		css: [
			'plugin.css'
		]
}
};