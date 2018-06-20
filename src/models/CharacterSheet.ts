import Race from "./Race";

import Equipment, { EquipmentType } from "./Equipment";
import Alignment from "@/models/Alignment";
import AbilityScore from "@/models/AbilityScore";
import Skill from "@/models/Skill";
import ArmorEquipment from "@/models/ArmorEquipment";

export function calculateModifier(baseScore: number): number {
  return Math.floor((baseScore - 10) / 2);
}

export interface ClassSkill {}

export interface Class {
  name: string;
  level: number;
  skills: string[];
}
export interface Feature {
  name: string;
  description?: string;
  level: number;
}

export interface Theme {
  name: string;
  keyAbilityScore: number;
  keyAbilityScoreName: string;
  description?: string;
  features: Feature[];
}

export default class CharacterSheet {
  public name: string = "";
  public classes: Class[] = [];
  public race: Race | null = null;
  public theme: Theme | null = null;
  public gender: string = "";
  public speed: number = 30;
  public alignment: Alignment = "TrueNeutral";
  public homeWorld: string = "";
  public deity: string = "";
  public player: string = "";
  public description: string = "";
  public abilityScores: AbilityScore = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    charisma: 10,
    intelligence: 10,
    wisdom: 10
  };
  public skills: Skill[] = [];
  public miscInitiativeBonus: number = 0;
  public hitPoints: number = 0;
  public staminaPoints: number = 0;
  public proficiencies: EquipmentType[] = [];
  public languages: string[] = [];
  public equipment: Equipment[] = [];
  public miscEnergyArmorClassBonus: number = 0;
  public miscKineticArmorClassBonus: number = 0;

  public isClassSkill(skill: string): boolean {
    // this is probably the wrong implementation, but will do for now, i don't know the
    // rules for multiclassing
    return this.classes.some(c => c.skills.indexOf(skill) > 0);
  }

  get energyArmorClass(): number {
    return this.calculateArmorClass(x => x.miscEnergyArmorClassBonus, x => x.energyArmorClass);
  }

  get kineticArmorClass(): number {
    return this.calculateArmorClass(x => x.miscKineticArmorClassBonus, x => x.kineticArmorClass);
  }

  private calculateArmorClass(
    miscNumberSelector: ((sheet: CharacterSheet) => number),
    armorClassSelector: (eq: ArmorEquipment) => number,
    baseScore: number = 10
  ): number {
    const armor = this.getEquippedArmor();
    let armorClass = baseScore + miscNumberSelector(this);

    const dexModifier = calculateModifier(this.abilityScores.dexterity);

    if (armor) {
      armorClass += Math.min(armor.maximumDexterityBonus, dexModifier) + armorClassSelector(armor);
    } else {
      armorClass += dexModifier;
    }

    return armorClass;
  }

  private getEquippedArmor(): ArmorEquipment | undefined {
    const equippedArmor = this.equipment.find(
      (x: Equipment) =>
        (x.type === EquipmentType.HeavyArmor || x.type === EquipmentType.LightArmor) && x.equipped
    );

    return equippedArmor as ArmorEquipment;
  }

  get initiative(): number {
    return calculateModifier(this.abilityScores.dexterity) + this.miscInitiativeBonus;
  }

  /**
   *
   */
}
