/* Pure, deterministic animation samples. No game rewards or save mutation. */
(function(root){'use strict';
const POSES=['idle','walking','running','talking','happy','sad','angry','surprised','hurt','attack','victory','defeat','sleeping','eating','training','farming'];
const ALIASES={walk:'walking',run:'running',resting:'sleeping'};
const COLORS={Fire:'#ed9864',Water:'#72ccdf',Ice:'#c4e6f5',Lightning:'#efda7d',Earth:'#bca581',Mud:'#b3a174',Nature:'#a2d38c',Spirit:'#ccb2f0',Shadow:'#a38bd0',Light:'#fff0ae',Celestial:'#d9e9ff',Void:'#a394dc',Ancient:'#dbba8b'};
function sample(name,t=0,seed=0){const pose=ALIASES[name]||name;t=Number.isFinite(t)?t:0;seed=Number.isFinite(seed)?seed:0;const f=t+seed*.37,s=Math.sin(f*3),p={pose:POSES.includes(pose)?pose:'idle',bob:s*.025,squash:1,stride:0,arms:0,lean:0,roll:0,lunge:0,eyes:'open',mouth:'smile',blink:(f%4.8+4.8)%4.8<.13};switch(p.pose){
case'walking':p.bob=Math.abs(Math.sin(f*9))*.08;p.stride=Math.sin(f*9)*.2;p.arms=p.stride;break;
case'running':p.bob=Math.abs(Math.sin(f*14))*.16;p.stride=Math.sin(f*14)*.3;p.lean=.17;p.arms=-p.stride;break;
case'talking':p.mouth=Math.sin(f*12)>.1?'open':'smile';p.bob=Math.sin(f*6)*.035;p.arms=.12;break;
case'happy':p.bob=Math.abs(Math.sin(f*6))*.18;p.squash=1+Math.sin(f*6)*.06;p.eyes='happy';p.arms=.3;break;
case'sad':p.lean=.12;p.squash=.86;p.mouth='frown';p.eyes='sad';p.arms=-.1;break;
case'angry':p.eyes='angry';p.mouth='frown';p.bob=Math.sin(f*16)*.02;p.arms=.2;break;
case'surprised':p.eyes='wide';p.mouth='open';p.bob=.1;p.squash=1.1;p.arms=.4;break;
case'hurt':p.eyes='closed';p.mouth='open';p.roll=Math.sin(f*20)*.17;p.lean=-.15;break;
case'attack':p.lunge=Math.max(0,Math.sin(f*11))*.38;p.lean=.3;p.arms=.45;p.eyes='angry';break;
case'victory':p.bob=Math.abs(Math.sin(f*7))*.35;p.roll=Math.sin(f*7)*.08;p.eyes='happy';p.arms=.5;break;
case'defeat':p.roll=1.25;p.squash=.7;p.bob=-.2;p.eyes='closed';p.mouth='frown';break;
case'sleeping':p.squash=.58+Math.sin(f*2)*.025;p.bob=-.18;p.eyes='closed';p.mouth='sleep';p.stride=0;break;
case'eating':p.lean=.13;p.arms=.4+Math.sin(f*10)*.07;p.mouth=Math.sin(f*10)>0?'open':'smile';p.squash=1+Math.sin(f*10)*.025;break;
case'training':p.bob=Math.abs(Math.sin(f*8))*.12;p.stride=Math.sin(f*8)*.12;p.arms=Math.sin(f*8)*.4;p.eyes='angry';break;
case'farming':p.lean=.3+Math.sin(f*4)*.08;p.arms=Math.sin(f*4)*.25;p.stride=.08;break;
}return p;}
function resolve(state,options={},time=0){if(state.sleeping)return'sleeping';if(options.reaction&&time<options.reaction.until)return options.reaction.pose;if(state.hp<=1&&state.stage)return'defeat';if(state.hp<20||state.happiness<25)return'sad';return options.moving?(options.running?'running':'walking'):'idle';}
function farmActivity(pet,index,time,assistant){if(pet.state.sleeping)return'sleeping';if(pet.meta.id===assistant)return'farming';return ['walking','idle','happy','sleeping'][Math.floor(time/9+index)%4];}
const api={POSES,COLORS,sample,resolve,farmActivity};if(typeof module!=='undefined')module.exports=api;else root.GhostMotion=api;
})(typeof window!=='undefined'?window:globalThis);
