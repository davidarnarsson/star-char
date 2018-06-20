import { WizardState } from "@/wizard/types";
import State from "@/state";
import { Module } from "vuex";
import { mutations } from "./mutations";
import { state } from "./state";

const wizard: Module<WizardState, State> = {
  namespaced: true,
  mutations,
  state
};

export type Wizard = Module<WizardState, State>;

export default wizard;
