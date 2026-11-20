/* Input ownership keeps independent fingers/keys from releasing one another. */
(function(root){'use strict';
const DIRS={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
class Held{constructor(){this.sources=new Map();}press(source,direction){if(DIRS[direction])this.sources.set(source,direction);}release(source){this.sources.delete(source);}clear(){this.sources.clear();}has(direction){return [...this.sources.values()].includes(direction);}get size(){return this.sources.size;}}
function vector(dx,dz,yaw){const n=Math.hypot(dx,dz)||1;return{x:(dx*Math.cos(yaw)+dz*Math.sin(yaw))/n,z:(-dx*Math.sin(yaw)+dz*Math.cos(yaw))/n};}
const api={Held,DIRS,vector};if(typeof module!=='undefined')module.exports=api;else root.GhostInput=api;
})(typeof window!=='undefined'?window:globalThis);
