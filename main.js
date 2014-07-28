(function () {
	"use strict";
	require.config({
		baseUrl: '.',
		paths: {
			"jquery": "app/libs/jquery.min",
			"mustache": "app/libs/mustache",
			"studentSystem": "app/modules/studentSystem",
			//"ui": "app/modules/ui",
			"mocha": "node_modules/mocha/mocha",
			"chai": 'node_modules/chai/chai'
		}
	});

	require(["jquery", "studentSystem", "app/modules/ui"], function(){
		require(['mocha', 'chai'], function () {
			mocha.setup('bdd');
			require(['tests/uiSpec.js', 'tests/scriptSpec.js', 'tests/studentSystemSpec.js'], function() {
				mocha.run();
			});
		})
	})

}());