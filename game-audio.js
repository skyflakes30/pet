/* Original synthesized motifs; no external recordings or licensed-game music. */
(function(root){'use strict';let ctx=null,timer=null,enabled=false,track='village',step=0,bgm=.18,sfx=.3;
const motifs={village:[60,64,67,71,69,67,64,62],ranch:[60,67,64,69,67,64,62,64],dungeon:[45,52,48,55,46,53,50,52],battle:[48,55,60,58,53,60,55,62],boss:[36,43,46,48,37,44,43,39],victory:[60,64,67,72,71,67,76,72]};
function tone(note,duration,gain,type='sine'){if(!ctx||ctx.state!=='running')return;const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=440*Math.pow(2,(note-69)/12);g.gain.setValueAtTime(0,ctx.currentTime);g.gain.linearRampToValueAtTime(gain,ctx.currentTime+.015);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+duration);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+duration+.02);}
function play(){if(!enabled||root.document?.hidden)return;const notes=motifs[track]||motifs.village,n=notes[step++%notes.length];tone(n,.8,bgm*.17,'triangle');if(step%2===0)tone(n-12,1.1,bgm*.12);}
function setTrack(name){if(track===name)return;track=name;step=0;}
async function toggle(){if(!ctx)ctx=new(root.AudioContext||root.webkitAudioContext)();enabled=!enabled;if(enabled){await ctx.resume();if(!timer)timer=setInterval(play,420);play();}else{clearInterval(timer);timer=null;await ctx.suspend();}return enabled;}
function effect(name){if(!enabled)return;tone(({attack:53,skill:77,harvest:81,purchase:74,quest:84,hatch:89,guard:48})[name]||70,.25,sfx*.2,'triangle');}
function volume(a,b){bgm=Math.max(0,Math.min(1,Number(a)||0));sfx=Math.max(0,Math.min(1,Number(b)||0));}
function stop(){clearInterval(timer);timer=null;if(ctx)ctx.suspend();enabled=false;}
root.GhostAudio={toggle,effect,setTrack,volume,stop,get enabled(){return enabled;}};
})(typeof window!=='undefined'?window:globalThis);
