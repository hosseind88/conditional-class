require('mocha');
var chai = require('chai');
const conditionalClass = require('./');
var expect = chai.expect;

describe('conditionalClass', function () {
    it('check', function () {
        expect(conditionalClass('some-class')).to.equal('some-class');
        expect(conditionalClass('some-class', {
            'is-active': true
        })).to.equal('some-class is-active');
        expect(conditionalClass('some-class', {
            'is-active': true,
            'another-class': false
        })).to.equal('some-class is-active');
        expect(conditionalClass()).to.equal('');
    });
});