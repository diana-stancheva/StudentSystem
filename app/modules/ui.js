//var define = require.define();
define(["jquery", "mustache"], function ($, Mustache) {
	var ui = (function () {

		function testError(){
			return "ERROR";
		}

		function _fillMustacheTemplate(data) {
			$.get('templates/studentsTemplate.mst', function (template) {
				var rendered = Mustache.render(template, data);
				$('#students-container').html(rendered);
			});
		}

		var showStudents = function (data) {
			$('#students-container').html(data.students);
			//console.log(data);
			_fillMustacheTemplate(data);
		};

		var showError = function (err) {
			console.log('Error: ' + JSON.stringify(err));
			$('#msg').html('Error: ' + err.status + ' (' + err.statusText + ')').show().fadeOut(2000);
		};

		var showSuccessMessage = function (msg) {
			$('#msg').html(msg).show().fadeOut(2000);
		};

		var attachHandlers = function (handlerAdd, handlerRemove) {
			$('#add-student').on('click', function () {
				var name = $('#student-name').val();
				var grade = $('#student-grade').val();
				handlerAdd(name, grade);
			});

			$("#students-container").on('click', '.remove-student', function () {
				var $this = $(this);
				var dataID = $this.data();
				handlerRemove(dataID.id);
			});
		};

		return {
			attachHandlers: attachHandlers,
			showStudents: showStudents,
			showError: showError,
			showSuccessMessage: showSuccessMessage,
			testError: testError
		}
	}());

	return ui;
});