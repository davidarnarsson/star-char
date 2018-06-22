import ClassMutation from "@/models/mutations/ClassMutation";
import CharacterSheet from "@/models/CharacterSheet";

export default class EnvoyClassMutation extends ClassMutation {
  constructor() {
    super({
      name: "Envoy",
      skills: []
    });
  }

  public run(sheet: CharacterSheet): void {
    sheet.skillRanks = 8;
  }
}
