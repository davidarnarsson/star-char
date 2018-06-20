import Mutation from "@/models/Mutation";
import CharacterSheet from "@/models/CharacterSheet";

export default class ConceptMutation implements Mutation {
  public description: string = "";
  public name: string = "";
  public player: string = "";

  public run(sheet: CharacterSheet): void {
    sheet.description = this.description;
    sheet.name = this.name;
    sheet.player = this.player;
  }
}
