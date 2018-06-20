import Mutation from "@/models/Mutation";
import CharacterSheet from "@/models/CharacterSheet";
import Race from "@/models/Race";
import Alignment from "@/models/Alignment";

export default interface RaceMutation extends Mutation {
  race: Race;
  type: string;
}

export class AndroidRaceMutation implements RaceMutation {
  public race: Race = {
    name: "Android",
    size: "medium"
  };

  public type: string = "android-race";

  public alignment: Alignment = "TrueNeutral";

  public run(sheet: CharacterSheet): void {
    sheet.abilityScores.dexterity += 2;
    sheet.abilityScores.intelligence += 2;
    sheet.abilityScores.charisma -= 2;
    sheet.hitPoints += 4;
    sheet.race = this.race;
    sheet.alignment = this.alignment;

    const skill = sheet.skills.find(x => x.name === "Sense Motive");
    if (skill) {
      skill.classBonus -= 2;
    }
  }
}
