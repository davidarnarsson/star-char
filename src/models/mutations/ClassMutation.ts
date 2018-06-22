import MutationBase from "@/models/mutations/MutationBase";
import { Class } from "@/models/CharacterSheet";

export default abstract class ClassMutation extends MutationBase<Class> {
  public get order(): number {
    return 40;
  }

  public get type(): string {
    return "class";
  }
}
