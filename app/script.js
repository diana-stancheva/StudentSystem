define([], function (scope) {
	"use strict";

	var Cow = (function() {

		function Cow(name) {
			this.name = name || "Anon cow";
		}

		//exports.Cow = Cow;

		Cow.prototype = {
			greets: function (target) {
				if (!target)
					throw new Error("missing target");
				return this.name + " greets " + target;
			},
			test: function(){
				return 2;
			}
		};

		return {
			Cow: Cow
		}
	}());

	return {
		Cow: Cow
	};

}(window));