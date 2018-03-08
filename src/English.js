
var i18n = {
  'zh':require('./i18n/i18n.zh')
};

function highlight(text, original, decorate) {
  var result = [];
  var isCut = new RegExp(text);

  if (original === text) return decorate(text);
  if (isCut.test(original)) return decorate(text);

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

module.exports = {
  highlight:highlight,
  getSpeechText:getSpeechText
};

