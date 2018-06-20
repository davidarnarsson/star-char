import CharacterSheet from "@/models/CharacterSheet";

export default interface Mutation {
  run(sheet: CharacterSheet): void;
}
