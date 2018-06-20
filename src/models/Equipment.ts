export default interface Equipment {
  type: EquipmentType;
  equipped: boolean;
}

export enum EquipmentType {
  LightArmor,
  HeavyArmor,
  SmallArms,
  Thrown
}

export type ArmorEquipmentType = EquipmentType.LightArmor | EquipmentType.HeavyArmor;
