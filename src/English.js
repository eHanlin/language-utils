
var i18n = {
  'zh':require('./i18n/i18n.zh')
};

var vowels = ['aɪ','aʊ','ɔɪ','i','ɪ','e','ɛ','æ','ɑ','o','ɔ','u','ʊ','ʌ','ə','ɝ','ɚ'];

function highlight(text, original, decorate) {
  var result = [];
  var isCut = new RegExp(text);
  var isStringEnding = new RegExp(original +'$');

  if (original === text) return decorate(text);
  if (isCut.test(original)) return decorate(text);
  if (isStringEnding.test(text)) {
    return text.replace(new RegExp('(.*)( )(' + original + ')$'), function(match, first, second, third){
      return decorate(first) + second + third;
    });
  }

  text
  .split('')
  .forEach(function(val, index){
    var targetValue = original[index];

    if (typeof targetValue == 'undefined' || targetValue && val !== targetValue) result.push(decorate(val)); else result.push(val);
  });

  return result.join('');
}

function getSpeechText(text, lang) {
  var key = text.replace(/\.$/, '');
  return i18n[lang]['speech'][key];
}


function highlightVowel(text, decorate) {
  var rVowel = new RegExp('(' + vowels.join('|') + ')', 'g');
  return text.replace(rVowel, function(match) {
    return decorate(match);
  });
}

module.exports = {
  highlight:highlight,
  highlightVowel:highlightVowel,
  getSpeechText:getSpeechText
};

