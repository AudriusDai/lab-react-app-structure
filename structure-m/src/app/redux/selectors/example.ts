import { createSelector } from "reselect";
import { selectSamples } from "./sample";

export const selectExamples = (state: any) => state.examples;

export const selectCustomExamples = createSelector(
  [selectExamples, selectSamples],
  (examples, samples) => {
    return [...examples, ...samples];
  }
);
