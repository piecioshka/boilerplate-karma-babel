var Main = require('../app/scripts/main.es6');

describe('Main class', function () {
    it('can create instance', function () {
        expect(new Main()).toEqual(jasmine.any(Object));
    });

    it('has static method', function () {
        expect(Main.go).toEqual(jasmine.any(Function));
        expect(Main.go(1)).toEqual(1);
        expect(Main.go('a')).toEqual('a');
    });
});
