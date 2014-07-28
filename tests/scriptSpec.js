define(["chai", "../app/script"], function (chai, Cow) {
	var should = chai.should();
	var expect = chai.expect;
	var assert = chai.assert;

	describe("Cow", function () {
		describe("constructor", function () {
			it("should have a default name", function () {
				//var Cow = require('../app/script');

				//var cow = new Cow();
				var cow = Object.create(Cow);
				expect(cow.name).to.equal("Anon cow");
			});

			it("should set cow's name if provided", function () {

				//var Cow = requirejs('../app/script');
				//var cow = Object.create(Cow, {'name': 'Kate});
				var cow = new Cow("Kate");
				expect(cow.name).to.equal("Kate");
			});
		});

		describe("#greets", function () {
			it("should throw if no target is passed in", function () {

				//var Cow = requirejs('../app/script');

				expect(function () {
					(new Cow()).greets();
				}).to.throw(Error);
			});

			it("should greet passed target", function () {
				//var Cow = requirejs('../app/script');

				var greetings = (new Cow("Kate")).greets("Baby");
				expect(greetings).to.equal("Kate greets Baby");
			});
		});

		describe('Array', function () {
			describe('#indexOf()', function () {
				it('should return -1 when the value is not present', function () {
					[1, 2, 3].indexOf(5).should.equal(-1);
					[1, 2, 3].indexOf(0).should.equal(-1);
				})
			})
		});

		describe('test', function () {

			it('should return 2', function () {
				var cow = new Cow('bu');
				cow.test();
			})
		});


	});
});