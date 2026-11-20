/* Input ownership keeps independent fingers/keys from releasing one another. */
(function(root){'use strict';
const DIRS={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
class Held{constructor(){this.sources=new Map();}press(source,direction){if(DIRS[direction])this.sources.set(source,direction);}pressVector(source,x,z){if(Number.isFinite(x)&&Number.isFinite(z))this.sources.set(source,{x,z});}axes(){let x=0,z=0;for(const d of this.sources.values()){const a=typeof d==='string'?DIRS[d]:[d.x,d.z];x+=a[0];z+=a[1];}const n=Math.max(1,Math.hypot(x,z));return{x:x/n,z:z/n};}release(source){this.sources.delete(source);}clear(){this.sources.clear();}has(direction){return [...this.sources.values()].includes(direction);}get size(){return this.sources.size;}}
function vector(dx,dz,yaw){const n=Math.hypot(dx,dz)||1;return{x:(dx*Math.cos(yaw)+dz*Math.sin(yaw))/n,z:(-dx*Math.sin(yaw)+dz*Math.cos(yaw))/n};}
function stick(dx,dy,radius=48){const length=Math.hypot(dx,dy);if(length<radius*.16)return{x:0,z:0};const power=Math.min(1,(length/radius-.16)/.84);return{x:dx/length*power,z:dy/length*power};}
const api={Held,DIRS,vector,stick};if(typeof module!=='undefined')module.exports=api;else root.GhostInput=api;
})(typeof window!=='undefined'?window:globalThis);
