import { Armor } from './Armor'

export const Chests: { [name: string]: Armor } = {
    none: {
        displayName: 'Empty Slot',
        damageNegations: {
            physical: 0,
            strike: 0,
            slash: 0,
            pierce: 0,
            magic: 0,
            fire: 0,
            lightning: 0,
            holy: 0,
        },
        resistances: {
            immunity: 0,
            focus: 0,
            robustness: 0,
            vitality: 0,
        },
        poise: 0,
        weight: 0,
    },
    radahn_chest: {
        displayName: "Radahn's Lion Armor",
        damageNegations: {
            physical: 18.7,
            strike: 15.0,
            slash: 18.3,
            pierce: 17.5,
            magic: 13.5,
            fire: 14.1,
            lightning: 12.6,
            holy: 13.5,
        },
        resistances: {
            immunity: 60,
            focus: 42,
            vitality: 38,
            robustness: 99,
        },
        poise: 28,
        weight: 17.5,
    }
}