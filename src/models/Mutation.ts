import CharacterSheet from "@/models/CharacterSheet";

export default interface Mutation {
  order: number;
  type: string;
  run(sheet: CharacterSheet): void;
}
