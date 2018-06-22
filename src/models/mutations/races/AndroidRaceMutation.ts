import CharacterSheet from "@/models/CharacterSheet";
import Race from "@/models/Race";
import Alignment from "@/models/Alignment";
import RaceMutation from "../RaceMutation";

export default class AndroidRaceMutation extends RaceMutation {
  public alignment: Alignment = "TrueNeutral";

  /**
   *
   */
  constructor() {
    super({ name: "Android", size: "medium" });
  }

  public run(sheet: CharacterSheet): void {
    sheet.abilityScores.dexterity += 2;
    sheet.abilityScores.intelligence += 2;
    sheet.abilityScores.charisma -= 2;
    sheet.hitPoints += 4;
    sheet.race = this.target;
    sheet.alignment = this.alignment;
    const skill = sheet.skills.find(x => x.name === "Sense Motive");
    if (skill) {
      skill.classBonus -= 2;
    }
  }
}
