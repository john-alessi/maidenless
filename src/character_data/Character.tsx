import { StartingClasses } from "./tables/StartingClasses"
import { ArmorSet, EmptySet } from "./tables/armor/Armor"

export class Character {
    attributes: Attributes
    startingClass: Attributes
    armorSet: ArmorSet = EmptySet

    constructor() {
        this.attributes = new Attributes()
        this.startingClass = StartingClasses.maidenless
    }
}

export class Attributes {
    vigor: number = 0
    mind: number = 0
    endurance: number = 0
    strength: number = 0
    dexterity: number = 0
    intelligence: number = 0
    faith: number = 0
    arcane: number = 0
}