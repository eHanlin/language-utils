
var assert = require('assert');
var languageUtils = require('../src/index');

describe('language-utils', function(){

  function highlightDecorator(value) {
    return '<' + value + '>';
  }

  describe('#English.highlight', function(){

    it('should return true when letter is different in word', function(){

      var result = languageUtils.English.highlight('made', 'make', highlightDecorator);
      assert.equal(true, result === 'ma<d>e');

      result = languageUtils.English.highlight('driving', 'drive', highlightDecorator);
      assert.equal(true, result === 'driv<i><n><g>');
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

  describe('#English.highlightVowel', function() {

    it('should return true when text contains vowel', function() {

      var result = languageUtils.English.highlightVowel('[ˋvaʊəl]', highlightDecorator);
      assert.equal(true, result === '[ˋv<aʊ><ə>l]');
    });

  });

});


