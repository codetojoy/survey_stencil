'use strict';

const core = require('./core-40c90e91.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"surveyId":[1,"survey-id"],"userId":[1,"user-id"],"questions":[32]}]]]], options);
});
