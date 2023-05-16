(() => {

// Do - An Assyst (https://jacher.io/assyst) tag that does what you tell it to.
// Incorrect? Notify natalie!#9892.

const bold = [
  'ban',
  'pet'
];
const irreg = {
'beat':'beat','become':'became','begin':'began','bend':'bent','bet':'bet','bite':'bit','bleed':'bled',
'blow':'blew','break':'broke','breed':'bred','bring':'brought','build':'built','burn':'burnt',
'buy':'bought','catch':'caught','choose':'chose','come':'came','cost':'cost','cut':'cut','do':'did',
'dig':'dug','draw':'drew','dream':'dreamt','drink':'drank','drive':'drove','eat':'ate','fall':'fell',
'feed':'fed','feel':'felt','fight':'fought','find':'found','fly':'flew','forget':'forgot',
'forgive':'forgave','freeze':'froze','get':'got','give':'gave','go':'went','grow':'grew','have':'had',
'hear':'heard','hide':'hid','hit':'hit','hold':'held','hurt':'hurt','keep':'kept','know':'knew',
'lay':'laid','lead':'led','lean':'leant','leave':'left','lend':'lent','let':'let','lose':'lost',
'make':'made','mean':'meant','meet':'met','pay':'paid','put':'put','quit':'quit','read':'read',
'ride':'rode','ring':'rang','rise':'rose','run':'ran','say':'said','see':'saw','sell':'sold',
'send':'sent', 'set':'set','shake':'shook','shine':'shone','shoe':'shod','shoot':'shot','show':'showed',
'shrink':'shrank','shut':'shut','sing':'sang','sink':'sank','sit':'sat','sleep':'slept','speak':'spoke',
'spend':'spent','spill':'spilt','spread':'spread','speed':'sped','stand':'stood','steal':'stole',
'stick':'stuck','sting':'stung','stink':'stank','swear':'swore','sweep':'swept','swim':'swam',
'swing':'swung','take':'took','teach':'taught','tear':'tore','tell':'told','think':'thought',
'throw':'threw','understand':'understood','wake':'woke','wear':'wore','win':'won','write':'wrote'
};

let output = '';
output += ':white_check_mark:';

let word = message.content.match(/^[^ ]+ [^ ]+ ([^ ]+)/)[1];

let restRaw = message.content.match(/^[^ ]+ [^ ]+ [^ ]+ (.+)$/);

let rest = '';
if (restRaw) rest = restRaw[1];

if (word === '') output += 'done';
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
