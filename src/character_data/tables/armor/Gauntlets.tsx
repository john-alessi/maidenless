import { Armor } from './Armor'

export const Gauntlets: { [name: string]: Armor } = {
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
}