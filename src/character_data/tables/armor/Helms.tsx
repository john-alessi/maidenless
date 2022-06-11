import { Armor } from './Armor'

export const Helms: { [name: string]: Armor } = {
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
    radahn_helm: {
        displayName: "Radahn's Redmane Helm",
        damageNegations: {
            physical: 6.8,
            strike: 5.4,
            slash: 6.7,
            pierce: 6.3,
            magic: 4.8,
            fire: 5.0,
            lightning: 4.5,
            holy: 4.8
        },
        resistances: {
            immunity: 26,
            robustness: 42,
            focus: 18,
            vitality: 16
        },
        weight: 7.5,
        poise: 9,
    }
}