import Mutation from "@/models/Mutation";
import CharacterSheet from "@/models/CharacterSheet";

export default class ConceptMutation implements Mutation {
  public get order(): number {
    return 10;
  }
  public get type(): string {
    return "concept";
  }

  public description: string;
  public name: string;
  public player: string;

  constructor(player: string, name: string, description: string) {
    this.description = description;
    this.player = player;
    this.name = name;
  }

  public run(sheet: CharacterSheet): void {
    sheet.description = this.description;
    sheet.name = this.name;
    sheet.player = this.player;
  }
}
