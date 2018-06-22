import { GetterTree } from "vuex";
import { WizardState } from "@/wizard/types";
import State from "@/state";

const findByType = (type: string) => (state: WizardState) =>
  state.mutations.find(x => x.type === type);

const getters: GetterTree<WizardState, State> = {
  orderedMutations: state => {
    return state.mutations.slice().sort(x => x.order);
  },
  concept: findByType("concept"),
  race: findByType("race"),
  theme: findByType("theme"),
  class: findByType("class")
};

export default getters;
