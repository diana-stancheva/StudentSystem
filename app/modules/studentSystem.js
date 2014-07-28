define(["app/modules/ui", "jquery", "app/libs/q.min"], function (ui, $, Q) {

	var studentSystem = (function () {

		var url = "http://localhost:3000/students";

		var addStudent = function (name, grade) {

			var student = {
				name: name,
				grade: grade
			};

			return $.ajax({
				type: "POST",
				url: url,
				data: student,
				timeout: 5000,
				success: _successAddStudent,
				error: ui.showError,
				complete: reloadStudents
			});
		};

		function removeStudent(id) {
			return $.ajax({
				url: url + '/' + id,
				type: 'POST',
				data: {
					_method: 'delete'
				},
				success: _successRemoveStudent,
				error: ui.showError,
				complete: reloadStudents
			});
		}



		var reloadStudents = function () {
			return $.ajax({
				type: "GET",
				url: url,
				timeout: 5000,
				success: ui.showStudents,
				error: ui.showError
			});
		};

		function _successAddStudent(data) {
			var msg = '' + data.name + ' successfully added';
			ui.showSuccessMessage(msg);
		}

		function _successRemoveStudent(data) {
			ui.showSuccessMessage('Student' + data.name + ' successfully removed');
		}

		return {
			addStudent: addStudent,
			reloadStudents: reloadStudents,
			removeStudent : removeStudent
		}
	}());

	return studentSystem;
});