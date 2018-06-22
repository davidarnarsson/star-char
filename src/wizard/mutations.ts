import { WizardState, WizardMutations } from "@/wizard/types";
import Mutation from "@/models/Mutation";

export const mutations: WizardMutations = {
  setMutation(state: WizardState, mutation: Mutation): void {
    const found = state.mutations.findIndex(x => x.type === mutation.type);

    if (found !== -1) {
      state.mutations.splice(found, 1);
    }

    state.mutations.push(mutation);
  }
};
