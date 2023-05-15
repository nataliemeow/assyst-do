(() => {

// Incorrect? Notify natalie!#9892.

const bold = [
  'ban',
  'pet'
]

const irreg = {
  'buy': 'bought',
  'send': 'sent',
  'let': 'let',
  'get': 'got',
  'lose': 'lost',
  'take': 'took',
  'eat': 'ate'
}

let output = '';
output += ':white_check_mark:';

let word = message.content.match(/^[^ ]+ [^ ]+ ([^ ]+)/)[1];
let restRaw = message.content.match(/^[^ ]+ [^ ]+ [^ ]+ (.+)$/);
let rest = '';
if (restRaw) rest = restRaw[1];
if (word === '') return 'done';
let last = word.at(-1);
if (bold.includes(word))
  word += last;
let irregWord;
if (irregWord = irreg[word])
  output += irregWord;
if (last === 'e')
  output += word + 'd';
else if (word.endsWith('ay'))
  output += word.slice(0, -1) + 'id';
else if (/[^eiou]y$/.test(word))
  output += word.slice(0, -1) + 'ied';
output += word + 'ed';

output += ' ' + rest;
return output;
})()
