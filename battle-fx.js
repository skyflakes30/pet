/* Presentation only: combat rules and rewards remain in engine.js. */
(function(root){
'use strict';
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const COLORS={Leaf:['#b9ed8f','#60bf83'],Stone:['#e9d2a9','#bd9f79'],Mist:['#adf5fa','#58c9dc'],Ember:['#ffe6a5','#fa9055'],Spark:['#fff5ad','#f6cf61'],Frost:['#e2f8ff','#8ebbea'],Shade:['#e4c3ff','#a68be7']};
const preferenceKey='pet-motion';
function reduced(){let choice='';try{choice=localStorage.getItem(preferenceKey)||'';}catch{}return choice==='reduced'||root.matchMedia('(prefers-reduced-motion: reduce)').matches;}
function motion(value){try{localStorage.setItem(preferenceKey,value);}catch{}}
function node(parent,cls,style={}){const e=document.createElement('span');e.className=cls;e.setAttribute('aria-hidden','true');Object.assign(e.style,style);parent.append(e);return e;}
function center(arena,selector){const e=arena.querySelector(selector),a=arena.getBoundingClientRect(),b=e?.getBoundingClientRect();return b?{x:b.left-a.left+b.width*.5,y:b.top-a.top+b.height*.47}:{x:a.width*.5,y:a.height*.55};}
function paint(e,p,color){e.style.left=p.x+'px';e.style.top=p.y+'px';e.style.setProperty('--fx-color',color);}
function number(arena,selector,value,type='damage'){const p=center(arena,selector),n=node(arena,'combat-number '+type);paint(n,{x:p.x,y:p.y-30},type==='heal'?'#bff8c8':'#fff0c2');n.textContent=value;n.addEventListener('animationend',()=>n.remove(),{once:true});}
function burst(layer,p,colors,strong=false){const ring=node(layer,'fx-impact-ring'+(strong?' strong':''));paint(ring,p,colors[0]);const core=node(layer,'fx-impact-core');paint(core,p,colors[1]);if(reduced()){ring.classList.add('reduced');core.classList.add('reduced');return;}
for(let i=0;i<(strong?18:10);i++){const bit=node(layer,'fx-particle');paint(bit,p,colors[i%2]);const angle=(i/(strong?18:10))*Math.PI*2;bit.style.setProperty('--px',Math.cos(angle)*(strong?78:48)+'px');bit.style.setProperty('--py',Math.sin(angle)*(strong?66:40)+'px');bit.style.setProperty('--rot',(i*43)+'deg');bit.style.animationDelay=(i%3)*16+'ms';}
if(strong){const flare=node(layer,'fx-star-flare');paint(flare,p,colors[0]);}}
function tone(enabled,kind='attack',enemy=false){if(!enabled)return;try{const ctx=tone.ctx||(tone.ctx=new(root.AudioContext||root.webkitAudioContext)());if(ctx.state==='suspended')ctx.resume();const t=ctx.currentTime,base=enemy?180:kind==='skill'?520:kind==='guard'?320:kind==='potion'?650:420;
for(let i=0;i<(kind==='skill'?3:2);i++){const o=ctx.createOscillator(),g=ctx.createGain();o.type=kind==='guard'?'triangle':'sine';o.frequency.setValueAtTime(base*(1+i*.5),t+i*.035);o.frequency.exponentialRampToValueAtTime(base*(enemy?.65:1.7)*(1+i*.3),t+.23+i*.035);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.035,t+.025+i*.035);g.gain.exponentialRampToValueAtTime(.0001,t+.3+i*.035);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+.42);}}catch{}}
async function play(arena,detail){if(!arena)return;const low=reduced();arena.classList.toggle('motion-low',low);const layer=node(arena,'battle-effects');const player=center(arena,'.combat-pet'),enemy=center(arena,'.combat-enemy');const caster=arena.querySelector('.combat-pet'),opponent=arena.querySelector('.combat-enemy');const banner=arena.querySelector('.battle-callout');const shout=t=>{if(banner){banner.textContent=t;banner.classList.remove('callout-in');void banner.offsetWidth;banner.classList.add('callout-in');}};
try{
tone(detail.sound,detail.action);caster?.classList.add('is-casting');
if(detail.action==='guard'){
 shout('GUARD · +1 FOCUS');const shield=node(layer,'fx-shield');paint(shield,player,'#b5f6d3');shield.innerHTML='<svg viewBox="0 0 100 120" fill="none"><path d="M50 5L91 24v32q0 38-41 59Q9 94 9 56V24z" fill="currentColor" fill-opacity=".13" stroke="currentColor" stroke-width="3"/><path d="M30 55l15 15 27-32" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>';await pause(low?120:400);
}else if(detail.action==='potion'){
 shout('MOON TONIC');const aura=node(layer,'fx-heal-aura');paint(aura,player,'#a8f0bd');for(let i=0;i<6;i++){const cross=node(layer,'fx-heal-cross');paint(cross,{x:player.x+(i%3-1)*25,y:player.y+15},'#c0f5cd');cross.textContent='+';cross.style.animationDelay=(i*.07)+'s';}await pause(low?120:350);number(arena,'.combat-pet','+'+detail.healed,'heal');const hp=arena.querySelector('.player-health progress');if(hp)hp.value=detail.beforeHP+detail.healed;await pause(low?120:350);
}else{
 const strong=detail.action==='skill';shout(strong?'LANTERN BURST':'SPIRIT TAP');
 if(strong){const charge=node(layer,'fx-charge');paint(charge,player,'#ffe4a3');const halo=node(layer,'fx-charge halo');paint(halo,player,'#c0f1e4');await pause(low?80:330);}
 const ball=node(layer,'fx-projectile '+(strong?'lantern-bolt':'spirit-bolt'));paint(ball,player,strong?'#ffe5a2':'#c5eafa');ball.style.setProperty('--dx',(enemy.x-player.x)+'px');ball.style.setProperty('--dy',(enemy.y-player.y)+'px');if(low){ball.hidden=true;await pause(70);}else await pause(strong?430:330);
 ball.remove();burst(layer,enemy,strong?['#ffebae','#ebbd6f']:['#dcf6ff','#90ccd7'],strong);opponent?.classList.add('is-hit');if(!low)arena.classList.add('fx-camera-hit');number(arena,'.combat-enemy','−'+detail.enemyDamage);const hp=arena.querySelector('.enemy-health progress');if(hp)hp.value=detail.afterEnemy;
 await pause(low?220:380);arena.classList.remove('fx-camera-hit');opponent?.classList.remove('is-hit');
}
caster?.classList.remove('is-casting');
if(detail.won){opponent?.classList.add('is-defeated');shout('ENCOUNTER WON');tone(detail.sound,'potion');await pause(low?250:650);return;}
if(detail.enemyDamageTaken>0){
 await pause(low?70:120);const colors=COLORS[detail.enemyKind]||COLORS.Shade;shout(detail.heavy?'HEAVY STRIKE!':detail.enemyName+' · COUNTER');tone(detail.sound,detail.action,true);opponent?.classList.add('is-casting');
 const bolt=node(layer,'fx-projectile enemy-bolt '+(detail.heavy?'heavy-bolt':''));paint(bolt,enemy,colors[0]);bolt.dataset.element=detail.enemyKind;bolt.style.setProperty('--dx',(player.x-enemy.x)+'px');bolt.style.setProperty('--dy',(player.y-enemy.y)+'px');if(low){bolt.hidden=true;await pause(70);}else await pause(detail.heavy?430:340);bolt.remove();
 burst(layer,player,detail.action==='guard'?['#d4ffe7','#7dd3af']:colors,detail.heavy&&detail.action!=='guard');caster?.classList.add('is-hit');if(!low&&detail.action!=='guard')arena.classList.add('fx-camera-hit');number(arena,'.combat-pet',(detail.action==='guard'?'BLOCKED · ':'')+'−'+detail.enemyDamageTaken,detail.action==='guard'?'blocked':'damage');const hp=arena.querySelector('.player-health progress');if(hp)hp.value=detail.afterHP;await pause(low?250:430);
}
}finally{layer.remove();arena.classList.remove('fx-camera-hit');caster?.classList.remove('is-hit','is-casting');opponent?.classList.remove('is-hit','is-casting');if(banner)banner.textContent='';}}
root.PetBattleFX={play,reduced,motion};
})(window);
