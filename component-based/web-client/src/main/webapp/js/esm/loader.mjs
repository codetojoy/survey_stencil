import { a as patchEsm, b as bootstrapLazy } from './core-0bf5ab64.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"surveyId":[1,"survey-id"],"userId":[1,"user-id"],"questions":[32]}]]]], options);
  });
};

export { defineCustomElements };
