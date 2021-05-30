var request = require("request");
var assert = require('assert');
var base_url = "http://localhost:8000/"

describe("Orders", function () {
    describe("GET /", function () {
        it("Test list All orders", function (done) {
            request.get(base_url + 'pharmacorp/orders/listAll', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("Test list order", function (done) {
            request.get(base_url + 'pharmacorp/orders/1/list', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});