import CharacterSheet from "@/models/CharacterSheet";
import ArmorEquipment from "@/models/ArmorEquipment";
import { EquipmentType } from "@/models/Equipment";

describe("CharacterSheet", () => {
  /**
   * INITIATIVE
   */
  it("should calculate initiative correctly", () => {
    const sheet = new CharacterSheet();

    sheet.abilityScores.dexterity = 15;

    expect(sheet.initiative).toBe(2);

    sheet.miscInitiativeBonus = 2;

    expect(sheet.initiative).toBe(4);

    sheet.abilityScores.dexterity = 17;

    expect(sheet.initiative).toBe(5);
  });
  /**
   * ARMOR
   */

  it("should calculate energy armor class correctly when wearing no armor", () => {
    const sheet = new CharacterSheet();
    sheet.abilityScores.dexterity = 12;
    expect(sheet.energyArmorClass).toBe(11);
  });

  it("should calculate kinetic armor class with a misc bonus set", () => {
    const sheet = new CharacterSheet();

    sheet.abilityScores.dexterity = 12;
    sheet.miscKineticArmorClassBonus = 2;

    expect(sheet.kineticArmorClass).toBe(13);
  });

  it("should calculate armor class using armor when equipped", () => {
    const sheet = new CharacterSheet();

    const armor = new ArmorEquipment(EquipmentType.LightArmor, 2, 2, 5);
    armor.equipped = true;
    sheet.equipment.push(armor);

    expect(sheet.energyArmorClass).toBe(12);
    expect(sheet.kineticArmorClass).toBe(12);
  });

  it("should respect the maxmimum dexterity bonus given by an armor when calculating armor class", () => {
    const sheet = new CharacterSheet();

    const armor = new ArmorEquipment(EquipmentType.LightArmor, 2, 2, 3);
    armor.equipped = true;
    sheet.equipment.push(armor);
    sheet.abilityScores.dexterity = 20;

    expect(sheet.energyArmorClass).toBe(15);
    expect(sheet.kineticArmorClass).toBe(15);
  });
});
