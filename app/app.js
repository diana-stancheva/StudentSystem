(function () {
	require.config({
		baseUrl: '',
		paths: {
			"jquery": "app/libs/jquery.min",
			"mustache": "app/libs/mustache",
			"studentSystem" : "app/modules/studentSystem",
			"mocha": "node_modules/mocha/mocha",
			"chai"   : 'node_modules/chai/chai'
		},
		shim: {
			'mustache': {
				exports: 'Mustache'
			}
		}
	});

	require(["jquery", "studentSystem", "app/modules/ui", "mocha"], function ($, studentSystem, ui, mocha) {
		$(document).ready(function () {
			studentSystem.reloadStudents();
			ui.attachHandlers(studentSystem.addStudent, studentSystem.removeStudent);
		});
	});
}());