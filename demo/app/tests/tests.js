var CookiemanagerNsPlugin = require("nativescript-cookiemanager-ns-plugin").CookiemanagerNsPlugin;
var cookiemanagerNsPlugin = new CookiemanagerNsPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(cookiemanagerNsPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(cookiemanagerNsPlugin.greet()).toEqual("Hello, NS");
    });
});