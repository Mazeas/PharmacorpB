var request = require("request");
var assert = require('assert');
var base_url = "http://localhost:8000/"

describe("Rights", function () {
    describe("GET /", function () {
        it("Test list All rights", function (done) {
            request.get(base_url + 'pharmacorp/rights/listAll', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });

        });
        it("Test list rights", function (done) {
            request.get(base_url + 'pharmacorp/rights/1/list', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});