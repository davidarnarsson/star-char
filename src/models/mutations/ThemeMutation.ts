import MutationBase from "@/models/mutations/MutationBase";
import { Theme } from "@/models/CharacterSheet";

export default abstract class ThemeMutation extends MutationBase<Theme> {
  public get order(): number {
    return 30;
  }

  public get type(): string {
    return "theme";
  }
}
