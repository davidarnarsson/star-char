import Mutation from "@/models/Mutation";
import Race from "@/models/Race";
import CharacterSheet from "@/models/CharacterSheet";
import MutationBase from "@/models/mutations/MutationBase";

export default abstract class RaceMutation extends MutationBase<Race> {
  public get order(): number {
    return 20;
  }
  public get type(): string {
    return "race";
  }
}
