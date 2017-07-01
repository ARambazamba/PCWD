describe("HelloWorld-function", function () {

    it("contains 12 charactes", function () {
        expect(helloWorld().length).toEqual(12);
    });

    it("says hello world!", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });

});