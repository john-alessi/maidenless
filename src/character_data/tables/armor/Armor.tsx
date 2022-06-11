import { DamageNegations } from '../../CharacterStats'
import { Resistances } from '../../Resistances'
import { Chests } from './Chests'
import { Gauntlets } from './Gauntlets'
import { Helms } from './Helms'
import { Legs } from './Legs'

export interface Armor {
    displayName: string,
    damageNegations: DamageNegations,
    resistances: Resistances,
    weight: number,
    poise: number,
}

export interface ArmorSet {
    helm: Armor
    chest: Armor
    legs: Armor
    gauntlets: Armor
}

export const EmptySlot: Armor = {
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
}

export const EmptySet: ArmorSet = {
    helm: EmptySlot,
    chest: EmptySlot,
    legs: EmptySlot,
    gauntlets: EmptySlot,
}

export const ArmorOptions = {
    chest: Chests,
    helm: Helms,
    legs: Legs,
    gauntlets: Gauntlets,
}