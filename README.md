
language-utils
=========================

The **language-utils** offers some utility features, such as **highlight**. 

## Install

```sh
npm install language-utils
```

## Usage

Like this if you want to decorate highlighted letter.

```js
var languageUtils = require('language-utils');

//print ma**d**e
var result = languageUtils.English.highlight('made', 'make', (c)=> `**${c}**`);
```


You highlight the vowel, too.

```js
//print [ˋva<ʊ><ə>l]
languageUtils.English.highlightVowel('[ˋvaʊəl]', (c)=> `<${c}>`);
```

Get speech text of `zh`.

```js
language.English.getSpeechText('adj.', 'zh');
```



