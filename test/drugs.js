var request = require("request");
var assert = require('assert');
var base_url = "http://localhost:8000/"

describe("Drugs", function () {
    describe("GET /", function () {
        it("Test list All drugs", function (done) {
            request.get(base_url + 'pharmacorp/drugs/listAll', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("Test list drug", function (done) {
            request.get(base_url + 'pharmacorp/drugs/1/list', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});