/* Original illustrated UI atlases. Presentation only: no inventory or save mutation. */
(function(root){'use strict';
const NPC_ROWS={mara:0,tobin:1,seren:2,vey:3,elian:4,rovan:5};
const ITEM_CELLS={orb:0,food:1,premium:2,small:3,medium:4,snack:5,recovery:6,seeds:7,fuel:8,treats:9,materials:10,moonberries:11};
const MOODS=['calm','happy','determined','worried'];
const escape=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function portrait(id,mood='calm',name=id){if(!Object.hasOwn(NPC_ROWS,id))return'';const col=Math.max(0,MOODS.indexOf(mood)),row=NPC_ROWS[id];return `<span class="illustrated-portrait" role="img" aria-label="${escape(name)}, ${escape(MOODS[col])}" style="background-position:${5+col*30}% ${row*20}%"></span>`;}
function item(id,name=id){if(!Object.hasOwn(ITEM_CELLS,id))return'';const i=ITEM_CELLS[id];return `<span class="illustrated-item" role="img" aria-label="${escape(name)}" style="background-position:${i%4*100/3}% ${Math.floor(i/4)*50}%"></span>`;}
const api={NPC_ROWS,ITEM_CELLS,MOODS,portrait,item};if(typeof module!=='undefined')module.exports=api;else root.GhostIllustrations=api;
})(typeof window!=='undefined'?window:globalThis);
