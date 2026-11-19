/* Local-time ambience. No geolocation, network calls or changes to gameplay timers. */
(function(root){'use strict';
const KEY='aetheria-world-timezone';
const validZone=zone=>{try{if(typeof zone!=='string'||zone.length>100)return false;new Intl.DateTimeFormat('en',{timeZone:zone}).format(0);return true;}catch{return false;}};
function preference(){try{return root.localStorage?.getItem(KEY)||'';}catch{return'';}}
function deviceZone(){try{const zone=Intl.DateTimeFormat().resolvedOptions().timeZone;return validZone(zone)?zone:'UTC';}catch{return'UTC';}}
function zone(){const value=preference();return validZone(value)?value:deviceZone();}
function setZone(value){value=String(value||'').trim();if(value&&!validZone(value))return false;try{if(value)root.localStorage?.setItem(KEY,value);else root.localStorage?.removeItem(KEY);return true;}catch{return false;}}
function state(now=Date.now(),timeZone=zone()){if(!validZone(timeZone))timeZone='UTC';const date=new Date(now);const parts=new Intl.DateTimeFormat('en-GB',{timeZone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(date);const hour=Number(parts.find(p=>p.type==='hour').value),minute=Number(parts.find(p=>p.type==='minute').value),phase=hour<5||hour>=19?'night':hour<7?'dawn':hour<17?'day':'dusk';return{timeZone,hour,minute,phase,label:{night:'Night',dawn:'Dawn',day:'Day',dusk:'Dusk'}[phase],icon:{night:'☾',dawn:'◔',day:'☀',dusk:'◕'}[phase],time:String(hour).padStart(2,'0')+':'+String(minute).padStart(2,'0')};}
function markup(now=Date.now()){const c=state(now);return`<button class="world-clock" data-clock-settings aria-label="Location time settings"><span>${c.icon} ${c.label} · ${c.time}</span><small>${c.timeZone}</small></button>`;}
const api={KEY,validZone,preference,deviceZone,zone,setZone,state,markup};if(typeof module!=='undefined')module.exports=api;else root.WorldClock=api;
})(typeof window!=='undefined'?window:globalThis);
