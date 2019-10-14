import { p as patchBrowser, b as bootstrapLazy } from './core-0bf5ab64.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
