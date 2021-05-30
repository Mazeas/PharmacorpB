var request = require("request");
var assert = require('assert');
var base_url = "http://localhost:8000/"

describe("Users", function () {
    describe("GET /", function () {
        it("Test list All users", function (done) {
            request.get(base_url + 'pharmacorp/users/listAll', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
        it("Test list user", function (done) {
            request.get(base_url + 'pharmacorp/users/1/list', function (error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});