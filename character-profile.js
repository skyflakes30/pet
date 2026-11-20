/* Appearance only: additive save metadata, independent of pet progression. */
(function(root){'use strict';
const OPTIONS=['male','female'];
function selected(s){return s?.character?.version===1&&OPTIONS.includes(s.character.gender)?s.character.gender:null;}
function choose(s,gender){if(!s||!OPTIONS.includes(gender))return false;s.character={version:1,gender};return true;}
function appearance(s){return selected(s)||'male';}
function portrait(gender,mood='calm'){const female=gender==='female';return `<span class="adventurer-art" role="img" aria-label="${female?'Female':'Male'} adventurer" style="background-position:${female?100:0}% ${mood==='happy'?100:0}%"></span>`;}
const api={OPTIONS,selected,choose,appearance,portrait};if(typeof module!=='undefined')module.exports=api;else root.GhostCharacter=api;
})(typeof window!=='undefined'?window:globalThis);
