import Equipment, { ArmorEquipmentType } from "./Equipment";

export default class ArmorEquipment implements Equipment {
  public type: ArmorEquipmentType;
  public equipped: boolean = false;
  public energyArmorClass: number;
  public kineticArmorClass: number;
  public maximumDexterityBonus: number;
  public armorCheckPenalty: number = 0;
  public speedAdjustment: number = 0;
  public upgradeSlots: number = 0;
  /**
   *
   */
  constructor(
    armorType: ArmorEquipmentType,
    energyArmorClass: number,
    kineticArmorClass: number,
    maximumDexterityBonus: number,
    armorCheckPenalty: number = 0,
    speedAdjustment: number = 0,
    upgradeSlots: number = 0
  ) {
    this.type = armorType;
    this.energyArmorClass = energyArmorClass;
    this.kineticArmorClass = kineticArmorClass;
    this.maximumDexterityBonus = maximumDexterityBonus;
    this.armorCheckPenalty = armorCheckPenalty;
    this.speedAdjustment = speedAdjustment;
    this.upgradeSlots = upgradeSlots;
  }
}
