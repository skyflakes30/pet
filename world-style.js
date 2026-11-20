/* Shared original visual identities; appearance only, no progression data. */
(function(root){'use strict';
const NPCS={
 mara:{coat:'#ab7782',hair:'#684332',skin:'#e7b391',accent:'#eee0b5',motif:'apron-curls'},
 tobin:{coat:'#718769',hair:'#6d4b35',skin:'#dfad83',accent:'#d6bf83',motif:'straw-egg'},
 seren:{coat:'#436d7b',hair:'#353950',skin:'#e9bc9b',accent:'#bd796c',motif:'ponytail-sash'},
 vey:{coat:'#4a547e',hair:'#c5b5a5',skin:'#ebc8ae',accent:'#c5a264',motif:'hat-cloak'},
 elian:{coat:'#e8dfc7',hair:'#4f3830',skin:'#b98461',accent:'#6e9280',motif:'glasses-crystal'},
 rovan:{coat:'#354d69',hair:'#85513b',skin:'#c49a79',accent:'#bf9c5e',motif:'beard-leather'},
 kat:{coat:'#354b6b',hair:'#ecc54e',skin:'#efc7a1',accent:'#946c48',motif:'bad-cap-glasses'}
};
const CREATURES={lantern:{iris:'#7e5aa4',belly:'#f3d6a2',lean:.045},twiggle:{iris:'#527c47',belly:'#d5e8a6',lean:.025},pebblit:{iris:'#687c67',belly:'#d6d8bb',lean:.02},dewbell:{iris:'#407fa1',belly:'#dbf0ed',lean:.035},cindillo:{iris:'#91572f',belly:'#f3ca8e',lean:.02},thornox:{iris:'#687544',belly:'#e0d2a4',lean:.02},sparkip:{iris:'#a46b3f',belly:'#fff1be',lean:.06},mirejaw:{iris:'#497969',belly:'#c0cf9b',lean:.02},frostloom:{iris:'#688aba',belly:'#f1f6e8',lean:.03},hollowyrm:{iris:'#a085bd',belly:'#bba2c5',lean:.03}};
function human(id,gender='male'){return NPCS[id]||{coat:gender==='female'?'#678fa7':'#4f8f87',hair:gender==='female'?'#925b4e':'#514354',skin:'#edc5a3',accent:'#e6bd81',motif:gender==='female'?'ribbon-cape':'scarf-cape'};}
function creature(id){return CREATURES[id]||CREATURES.lantern;}
const api={NPCS,CREATURES,human,creature};if(typeof module!=='undefined')module.exports=api;else root.GhostVisualStyle=api;
})(typeof window!=='undefined'?window:globalThis);
