/* Adventurer-owned equipment. Pet records and training remain independent. */
(function(root){'use strict';
const SLOTS={weapon:'Focus',outfit:'Outfit',head:'Headwear',charm:'Charm',boots:'Boots',pack:'Pack'};
const ITEMS={
 branch:{name:'Willow Focus',slot:'weapon',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#b99c72',desc:'A carved willow staff for your first journey.'},
 aetherrod:{name:'Aetherglass Focus',slot:'weapon',price:55,rank:1,rarity:'Uncommon',attack:3,guard:0,speed:0,color:'#83c9c8',desc:'Channels a small support pulse into your companion’s strikes.'},
 coat:{name:'Traveler Coat',slot:'outfit',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#528e88',desc:'A comfortable coat with reinforced field pockets.'},
 warden:{name:'Mosswarden Coat',slot:'outfit',price:65,rank:2,rarity:'Rare',attack:0,guard:2,speed:0,color:'#526e94',desc:'Layered cloth helps you shield your companion in battle.'},
 hood:{name:'Trail Headband',slot:'head',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#9e866c',desc:'A light woven band for long walks through Aetheria.'},
 circlet:{name:'Dawn Circlet',slot:'head',price:35,rank:1,rarity:'Uncommon',attack:0,guard:1,speed:0,color:'#e5c87f',desc:'A bronze circlet with a protective aetherstone.'},
 keepsake:{name:'First Bond Charm',slot:'charm',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#c7acdf',desc:'A small keepsake marking the beginning of your adventure.'},
 prism:{name:'Heart Prism',slot:'charm',price:80,rank:3,rarity:'Rare',attack:1,guard:1,speed:0,color:'#c8a5df',desc:'A balanced crystal that strengthens your support in battle.'},
 trailboots:{name:'Trail Boots',slot:'boots',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#8b684f',desc:'Dependable boots, stitched by a Mossbell craftsperson.'},
 swiftboots:{name:'Windstep Boots',slot:'boots',price:45,rank:1,rarity:'Uncommon',attack:0,guard:0,speed:.05,color:'#78b8a8',desc:'Light soles increase walking and running speed by 5%.'},
 canvas:{name:'Canvas Pack',slot:'pack',price:0,rank:1,rarity:'Starter',attack:0,guard:0,speed:0,color:'#9f7a55',desc:'Your own field pack. Pet supplies remain in the shared Bag.'},
 fieldpack:{name:'Warden Field Pack',slot:'pack',price:40,rank:2,rarity:'Uncommon',attack:0,guard:1,speed:0,color:'#637b93',desc:'A padded pack helps absorb a little incoming impact.'}
};
const STARTER=['branch','coat','hood','keepsake','trailboots','canvas'];
function fresh(){return{version:1,owned:[...STARTER],slots:{weapon:'branch',outfit:'coat',head:null,charm:'keepsake',boots:'trailboots',pack:'canvas'}};}
function ensure(s){if(s.loadout===undefined)s.loadout=fresh();return s.loadout;}
function valid(v){return v===undefined||!!v&&v.version===1&&Array.isArray(v.owned)&&v.owned.length<=Object.keys(ITEMS).length&&new Set(v.owned).size===v.owned.length&&v.owned.every(id=>Object.hasOwn(ITEMS,id))&&v.slots&&Object.keys(v.slots).length===Object.keys(SLOTS).length&&Object.entries(SLOTS).every(([slot])=>v.slots[slot]===null||v.owned.includes(v.slots[slot])&&ITEMS[v.slots[slot]].slot===slot);}
function rank(s){return 1+Math.min(10,Math.max(0,Math.floor(s.adventure?.chapter||0)));}
function bonuses(s){const result={attack:0,guard:0,speed:0},v=s.loadout;if(!v||!valid(v))return result;for(const id of Object.values(v.slots)){const i=ITEMS[id];if(i)for(const k of Object.keys(result))result[k]+=i[k];}return result;}
function buy(s,id){const i=ITEMS[id];if(!i||!i.price)return'Choose an available piece of gear.';if(s.battle)return'Finish this encounter before changing gear.';if(!valid(s.loadout))return'Equipment data is invalid.';const v=ensure(s);if(v.owned.includes(id))return'You already own this item.';if(rank(s)<i.rank)return'Complete more story chapters to reach Explorer Rank '+i.rank+'.';if(!Number.isFinite(s.gold)||s.gold<i.price)return'You need '+i.price+' gold.';s.gold-=i.price;v.owned.push(id);return i.name+' added to your equipment. Equip it to activate its effect.';}
function equip(s,id){if(s.battle)return'Finish this encounter before changing gear.';if(!valid(s.loadout))return'Equipment data is invalid.';const v=ensure(s),i=ITEMS[id];if(!i||!v.owned.includes(id))return'You do not own this equipment.';v.slots[i.slot]=id;return i.name+' equipped.';}
function unequip(s,slot){if(s.battle)return'Finish this encounter before changing gear.';if(!Object.hasOwn(SLOTS,slot)||!valid(s.loadout))return'Choose a valid equipment slot.';ensure(s).slots[slot]=null;return SLOTS[slot]+' unequipped.';}
function look(s){const v=s.loadout;if(!v||!valid(v))return{};return Object.fromEntries(Object.entries(v.slots).map(([slot,id])=>[slot,ITEMS[id]||null]));}
const api={SLOTS,ITEMS,STARTER,fresh,ensure,valid,rank,bonuses,buy,equip,unequip,look};if(typeof module!=='undefined')module.exports=api;else root.GhostEquipment=api;
})(typeof window!=='undefined'?window:globalThis);
