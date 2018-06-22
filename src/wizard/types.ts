import Mutation from "@/models/Mutation";
import { MutationTree, GetterTree } from "vuex";
import ConceptMutation from "@/models/mutations/ConceptMutation";
import RaceMutation from "@/models/mutations/RaceMutation";
import ThemeMutation from "@/models/mutations/ThemeMutation";
import State from "@/state";

export interface WizardState {
  mutations: Mutation[];
}

export interface WizardMutations extends MutationTree<WizardState> {
  setMutation(state: WizardState, mutation: Mutation): void;
}
