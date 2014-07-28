define(["app/modules/ui", "chai"], function (ui, chai) {
	var should = chai.should();
	var expect = chai.expect;
	var assert = chai.assert;

	describe("UI TESTS",function(){
		describe("Error Messages", function(){
			it("should return \"ERROR\"", function () {
				var res = ui.testError;
				assert.equal(res, "ERROR");
			});
		});
	});
});
