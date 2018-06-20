import Mutation from "@/models/Mutation";
import CharacterSheet, { Theme } from "@/models/CharacterSheet";

export default interface ThemeMutation extends Mutation {
  theme: Theme;
  type: string;
}

export class ScholarThemeMutation implements ThemeMutation {
  public type: string = "scholar-theme";
  public theme: Theme = {
    name: "Scholar",
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

  public themeKnowledge: "Life Science" | "Physical Science" | null = null;

  public themeKnowledgeSpecialization: string | null = null;

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
