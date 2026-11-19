/* Pure signature-skill data and bounded combat effects; shared by engine and UI. */
(function(root){'use strict';
const ALIASES={Ember:'Fire',Mist:'Water',Frost:'Ice',Spark:'Lightning',Stone:'Earth',Leaf:'Nature',Shade:'Shadow'};
const SPECIES={
lantern:{name:'Lantern Bloom',stat:'SPATK',power:1,heal:.04,focus:1,desc:'A guiding flare restores focus and a little HP.'},
twiggle:{name:'Seedstitch',stat:'SPATK',power:.9,heal:.12,desc:'Living threads strike and mend the caster.'},
pebblit:{name:'Riverstone Roll',stat:'ATK',power:1,shield:.35,desc:'Roll forward, then shelter behind a stone shell.'},
dewbell:{name:'Resonant Ring',stat:'SPATK',power:.95,weaken:.22,desc:'A ringing wave softens two enemy actions.'},
cindillo:{name:'Coalwheel',stat:'ATK',power:1.08,dot:3,desc:'A spinning coal shell leaves a lingering ember mark.'},
thornox:{name:'Grovebreaker',stat:'ATK',power:1.18,shield:.15,desc:'A powerful antler charge with a braced landing.'},
sparkip:{name:'Flashbound',stat:'ATK',power:1.02,shield:.45,shieldTurns:1,desc:'Dash through the target and evade part of its counter.'},
mirejaw:{name:'Bog Bubble',stat:'SPATK',power:.9,dot:5,dotTurns:3,desc:'A stubborn bubble keeps hurting for three ticks.'},
frostloom:{name:'Crystal Bloom',stat:'SPATK',power:1,weaken:.12,shield:.2,desc:'Crystal petals cushion damage and dull enemy strikes.'},
hollowyrm:{name:'Hollow Spiral',stat:'SPATK',power:1.12,drain:.18,desc:'A spiralling ribbon of shadow steals back some HP.'}
};
const ELEMENTS={
Fire:{label:'Scorch',dot:3,color:'#fa9055',glyph:'♨'},
Water:{label:'Tidal mend',heal:.06,color:'#72ccdf',glyph:'◉'},
Ice:{label:'Chill',weaken:.18,color:'#c4e6f5',glyph:'❄'},
Lightning:{label:'Static veil',shield:.18,shieldTurns:1,color:'#efda7d',glyph:'ϟ'},
Earth:{label:'Stone ward',shield:.25,color:'#bca581',glyph:'◆'},
Mud:{label:'Mire drag',weaken:.15,color:'#b3a174',glyph:'≈'},
Nature:{label:'Regrowth',heal:.09,color:'#a2d38c',glyph:'❀'},
Spirit:{label:'Soul focus',focus:1,color:'#ccb2f0',glyph:'✧'},
Shadow:{label:'Night siphon',drain:.15,color:'#a38bd0',glyph:'☾'},
Light:{label:'Radiant ward',shield:.15,heal:.03,color:'#fff0ae',glyph:'☀'},
Celestial:{label:'Star blessing',heal:.06,shield:.15,color:'#d9e9ff',glyph:'✶'},
Void:{label:'Void echo',dot:4,color:'#a394dc',glyph:'◌'},
Ancient:{label:'Ancient shell',shield:.3,color:'#dbba8b',glyph:'⬡'}
};
function elements(p){return [...new Set([p?.element||p?.kind||'Spirit',p?.secondary].filter(Boolean).map(e=>ALIASES[e]||e))].filter(e=>ELEMENTS[e]).slice(0,2);}
function forPet(p){const species=p?.species||p?.id||'lantern',base=SPECIES[species]||SPECIES.lantern,types=elements(p);if(!types.length)types.push('Spirit');const move={...base,id:species,elements:types,cooldown:2,cost:1};
// The secondary contributes half strength; effects never stack beyond these caps.
for(const [i,e]of types.entries())for(const key of ['heal','shield','weaken','dot','drain','focus'])move[key]=(move[key]||0)+(ELEMENTS[e][key]||0)*(i?.5:1);
for(const [key,cap]of Object.entries({heal:.18,shield:.6,weaken:.35,dot:9,drain:.3,focus:1}))move[key]=Math.min(cap,move[key]||0);
move.dot=Math.round(move.dot);move.focus=Math.floor(move.focus);move.color=ELEMENTS[types[0]].color;move.accent=ELEMENTS[types[1]||types[0]].color;move.glyph=ELEMENTS[types[0]].glyph;move.bonuses=types.map((e,i)=>e+': '+ELEMENTS[e].label+(i?' (half strength)':''));return move;}
function forEnemy(m){return forPet({species:m.id,element:m.id==='mirejaw'?'Mud':m.kind});}
const blank=()=>({shield:0,shieldTurns:0,weaken:0,weakenTurns:0,dot:0,dotTurns:0});
function state(b){return b.skills||(b.skills={readyAt:0,player:blank(),enemy:blank(),healed:0,taken:0,dealt:0,enemyHealed:0});}
function remaining(b){return Math.max(0,(b?.skills?.readyAt||0)-(b?.turn||0));}
function valid(b){const x=b.skills;if(x===undefined)return true;if(!x||!Number.isInteger(x.readyAt)||x.readyAt<0||x.readyAt>b.turn+3||!Number.isFinite(x.healed)||x.healed<0||x.healed>10000||!Number.isInteger(x.taken)||x.taken<0||x.taken>10000||!Number.isInteger(x.dealt)||x.dealt<0||x.dealt>10000||!Number.isInteger(x.enemyHealed)||x.enemyHealed<0||x.enemyHealed>10000)return false;return ['player','enemy'].every(side=>{const v=x[side];return v&&['shield','weaken'].every(k=>Number.isFinite(v[k])&&v[k]>=0&&v[k]<=.6)&&['shieldTurns','weakenTurns','dotTurns'].every(k=>Number.isInteger(v[k])&&v[k]>=0&&v[k]<=3)&&Number.isInteger(v.dot)&&v.dot>=0&&v.dot<=15;});}
function apply(move,own,other,level,maxHP,damage){if(move.shield){own.shield=Math.max(own.shield,move.shield);own.shieldTurns=Math.max(own.shieldTurns,move.shieldTurns||2);}if(move.weaken){other.weaken=Math.max(other.weaken,move.weaken);other.weakenTurns=Math.max(other.weakenTurns,2);}if(move.dot){other.dot=Math.max(other.dot,Math.min(15,move.dot+Math.floor(level/10)));other.dotTurns=Math.max(other.dotTurns,move.dotTurns||2);}return Math.round(maxHP*move.heal+damage*move.drain);}
function mitigation(own,other){return(1-(own.weakenTurns?own.weaken:0))*(1-(other.shieldTurns?other.shield:0));}
function decay(own,other){if(own.weakenTurns>0&&!--own.weakenTurns)own.weaken=0;if(other.shieldTurns>0&&!--other.shieldTurns)other.shield=0;}
function dot(v){if(!v.dotTurns)return 0;const damage=v.dot;if(!--v.dotTurns)v.dot=0;return damage;}
function describe(move){const parts=[move.desc,...move.bonuses];if(move.heal)parts.push('Heal '+Math.round(move.heal*100)+'% max HP');if(move.shield)parts.push('Shield '+Math.round(move.shield*100)+'% for '+(move.shieldTurns||2)+' counter(s)');if(move.weaken)parts.push('Weaken '+Math.round(move.weaken*100)+'% for 2 attacks');if(move.dot)parts.push('Mark '+move.dot+' + level bonus damage × '+(move.dotTurns||2)+' ticks');if(move.drain)parts.push('Drain '+Math.round(move.drain*100)+'% of strike damage');if(move.focus)parts.push('Restore 1 focus');return parts.join(' · ');}
const api={SPECIES,ELEMENTS,forPet,forEnemy,state,remaining,valid,apply,mitigation,decay,dot,describe};if(typeof module!=='undefined')module.exports=api;else{root.GhostSkills=api;root.GhostEngine.skills=api;}
})(typeof window!=='undefined'?window:globalThis);
