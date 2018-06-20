import Mutation from "@/models/Mutation";
import { MutationTree } from "vuex";
import ConceptMutation from "@/models/mutations/ConceptMutation";
import RaceMutation from "@/models/mutations/RaceMutation";
import ThemeMutation from "@/models/mutations/ThemeMutation";

export interface WizardState {
  concept: ConceptMutation | null;
  race: RaceMutation | null;
  theme: ThemeMutation | null;
}

export interface WizardMutations extends MutationTree<WizardState> {
  setConcept(state: WizardState, concept: ConceptMutation): void;
  setRace(state: WizardState, race: RaceMutation): void;
  setTheme(state: WizardState, theme: ThemeMutation): void;
}
