import CharacterSheet, { Theme } from "@/models/CharacterSheet";
import ThemeMutation from "../ThemeMutation";

export const Scholar = {
  name: "Scholar",
  description:
    "The scholar is an intellectual, an innate puzzle solver which loves challenges. You could be a teacher or a researcher of some kind, driven by a thirst for knowledge.",
  keyAbilityScore: 1,
  keyAbilityScoreName: "Int",
  features: [
    {
      name: "Theme knowledge",
      description: ``,
      level: 1
    },
    {
      name: "Tip of the tongue",
      description: ``,
      level: 6
    },
    {
      name: "Research maven",
      description: ``,
      level: 12
    },
    {
      name: "Master scholar",
      description: ``,
      level: 18
    }
  ]
};

export default class ScholarThemeMutation extends ThemeMutation {
  public themeKnowledge: "Life Science" | "Physical Science" | null = null;
  public themeKnowledgeSpecialization: string | null = null;

  constructor() {
    super(Scholar);
  }

  public run(sheet: CharacterSheet): void {
    sheet.abilityScores.intelligence += 1;
    // theme knowledge
    const skill = sheet.skills.find(x => x.name === this.themeKnowledge);
    if (!skill) {
      return;
    }
    if (sheet.isClassSkill(skill.name)) {
      skill.miscModifier += 1;
    } else if (this.themeKnowledgeSpecialization) {
      skill.dcReductions[this.themeKnowledgeSpecialization] -= 5;
    }
  }
}
