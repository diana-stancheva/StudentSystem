(function () {
	"use strict";
	/*require.config({
		baseUrl: 'tests',
		paths: {
			"jquery": "../app/libs/jquery.min",
			"mustache": "../app/libs/mustache",
			"studentSystem" : "../app/modules/studentSystem",
			"mocha": "../../node_modules/mocha/mocha",
			"chai"   : '../../node_modules/chai/chai'
		}
	});*/

	require.config({
		baseUrl: '.',
		paths: {
			"jquery": "app/libs/jquery.min",
			"mustache": "app/libs/mustache",
			"studentSystem" : "app/modules/studentSystem",
			//"ui": "app/modules/ui",
			"mocha": "node_modules/mocha/mocha",
			"chai"   : 'node_modules/chai/chai'
		}
	 /*shim: {
			'mocha': {
				init: function () {
					this.mocha.setup('bdd');
					return this.mocha;
				}
			},
			'mustache': {
				exports: 'Mustache'
			}
		}*/
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