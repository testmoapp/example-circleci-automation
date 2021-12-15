const chai = require('chai');
const assert = chai.assert;

describe('files', function () {
    describe('export', function () {
        it('should export pdf', function () {
            assert.isTrue(true);
        });

        it('should export html', function () {
            assert.isTrue(true);
        });

        it('should export yml', function () {
            assert.isTrue(true);
        });

        it('should export text', function () {
            throw new Error('An exception occurred');
        });
    });

    describe('import', function () {
        it('should import pdf', function () {
            assert.isTrue(true);
        });

        it('should import html', function () {
            assert.isTrue(true);
        });

        it('should import yml', function () {
            assert.isTrue(true);
        });

        it('should import text', function () {
            assert.isTrue(true);
        });
    });
});
