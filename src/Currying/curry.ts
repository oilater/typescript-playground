declare type Flour = unknown;
declare type Water = unknown;
declare type Dough = unknown;
declare type mix = unknown;
declare const flour = 0;
declare const water = 0;

const mix = (flour: Flour, water: Water) => null;

function makeDough(flour: Flour, water: Water): Dough {
    return mix(flour, water);
}

function makeDoughCurried(flour: Flour): (water: Water) => Dough {
    return (water: Water) => mix(flour, water);
}

// 논리적으로 동등
const dough1 = makeDough(flour, water);
const dough2 = makeDoughCurried(flour)(water);