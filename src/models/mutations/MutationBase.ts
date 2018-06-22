import Mutation from "@/models/Mutation";
import CharacterSheet from "@/models/CharacterSheet";

export default abstract class MutationBase<T extends { name: string }> implements Mutation {
  abstract get order(): number;
  abstract get type(): string;

  // tslint:disable-next-line:variable-name
  protected _target: T;

  public get target(): T {
    return this._target;
  }
  /**
   *
   */
  constructor(target: T) {
    this._target = target;
  }

  public abstract run(sheet: CharacterSheet): void;
}
