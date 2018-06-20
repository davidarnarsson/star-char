export default class Skill {
  public name: string = "";
  public ranks: number = 0;
  public classBonus: number = 0;
  public abilityModifier: number = 0;
  public miscModifier: number = 0;
  public dcReductions: { [key: string]: number } = {};

  get total(): number {
    return this.ranks + this.classBonus + this.abilityModifier + this.miscModifier;
  }
}

export const AllSkills = [];
