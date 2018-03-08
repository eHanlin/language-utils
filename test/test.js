
var assert = require('assert');
var languageUtils = require('../src/index');

describe('language-utils', function(){

  describe('#English.highlight', function(){

    function highlightDecorator(value) {
      return '<' + value + '>';
    }

    it('should return true when letter is different in word', function(){

      var result = languageUtils.English.highlight('made', 'make', highlightDecorator);
      assert.equal(true, result === 'ma<d>e');

    });

    it('should return true when present word is the same target word', function(){

      var result = languageUtils.English.highlight('read', 'read', highlightDecorator);
      assert.equal(true, result === '<read>');

    });

    it('should return true when present word is cut which is the same target word', function() {

      var result = languageUtils.English.highlight('bit', 'bite', highlightDecorator);
      assert.equal(true, result === '<bit>');

    });

  });


  describe('#English.getSpeechText', function() {

    it('should return true when get speech is the same i18n content', function() {

      var result = languageUtils.English.getSpeechText('adj.', 'zh');
      assert.equal(true, result === '形容詞');

    });

  });

});


