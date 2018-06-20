import { WizardState, WizardMutations } from "@/wizard/types";
import Mutation from "@/models/Mutation";
import ConceptMutation from "@/models/mutations/ConceptMutation";
import RaceMutation from "@/models/mutations/RaceMutation";
import ThemeMutation from "@/models/mutations/ThemeMutation";

export const mutations: WizardMutations = {
  setConcept(state: WizardState, concept: ConceptMutation): void {
    state.concept = concept;
  },
  setRace(state: WizardState, race: RaceMutation): void {
    state.race = race;
  },
  setTheme(state: WizardState, theme: ThemeMutation): void {
    state.theme = theme;
  }
};
