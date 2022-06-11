import { Attributes, Character } from "./Character"
import { BaseFPTable } from "./tables/base_stats/BaseFP";
import { BaseHPTable } from "./tables/base_stats/BaseHP";
import { BaseMaxEquipLoadTable } from "./tables/base_stats/BaseMaxEquipLoad";
import { BaseStaminaTable } from "./tables/base_stats/BaseStamina";
import { Defenses } from "./Defenses"
import { ArmorSet, Armor } from "./tables/armor/Armor";
import { Resistances } from "./Resistances";

export class CharacterStats {
    modifiedAttributes: Attributes
    generalStats: GeneralStats
    resistances: Resistances
    defenses: Defenses
    damageNegations: DamageNegations
    constructor(character: Character) {
        var armorStats = ArmorStats(character.armorSet)
        this.modifiedAttributes = {...character.attributes}
        this.generalStats = new GeneralStats(this.modifiedAttributes, armorStats)
        this.defenses = new Defenses(this.modifiedAttributes)
        this.damageNegations = armorStats.damageNegations
        this.resistances = new Resistances(this.modifiedAttributes, armorStats.resistances)
    }
}

class GeneralStats {
    hp: number
    fp: number
    stamina: number
    equipLoad: number
    maxEquipLoad: number
    poise: number = 0
    discovery: number
    memorySlots: Number = 0

    constructor(attributes: Attributes, armorStats: Armor) {
        this.hp = BaseHPTable[attributes.vigor]
        this.fp = BaseFPTable[attributes.mind]
        this.stamina = BaseStaminaTable[attributes.endurance]
        this.maxEquipLoad = BaseMaxEquipLoadTable[attributes.endurance]
        this.discovery = attributes.arcane + 100.0
        this.equipLoad = armorStats.weight
        this.poise = armorStats.poise
    }
}

function CombineDamageNegations(negation1: number, negation2: number) {
    return 100 - (100 - negation1)*(100 - negation2)/100
}

function ArmorStats(armorSet: ArmorSet): Armor {
    return Object.values(armorSet)
        .reduce(
            (armor1: Armor, armor2: Armor) => {
                var sum: Armor = {
                    displayName: '',
                    damageNegations: {
                        physical: CombineDamageNegations(armor1.damageNegations.physical, armor2.damageNegations.physical),
                        strike: CombineDamageNegations(armor1.damageNegations.strike, armor2.damageNegations.strike),
                        slash: CombineDamageNegations(armor1.damageNegations.slash, armor2.damageNegations.slash),
                        pierce: CombineDamageNegations(armor1.damageNegations.pierce, armor2.damageNegations.pierce),
                        magic: CombineDamageNegations(armor1.damageNegations.magic, armor2.damageNegations.magic),
                        fire: CombineDamageNegations(armor1.damageNegations.fire, armor2.damageNegations.fire),
                        lightning: CombineDamageNegations(armor1.damageNegations.lightning, armor2.damageNegations.lightning),
                        holy: CombineDamageNegations(armor1.damageNegations.holy, armor2.damageNegations.holy),
                    },
                    resistances: {
                        immunity: armor1.resistances.immunity + armor2.resistances.immunity,
                        focus: armor1.resistances.focus + armor2.resistances.focus,
                        robustness: armor1.resistances.robustness + armor2.resistances.robustness,
                        vitality: armor1.resistances.vitality + armor2.resistances.vitality,
                    },
                    poise: armor1.poise + armor2.poise,
                    weight: armor1.weight + armor2.weight,
                }
                return sum
            })
}

export interface DamageNegations {
    physical: number
    strike: number
    slash: number
    pierce: number
    magic: number
    fire: number
    lightning: number
    holy: number
}