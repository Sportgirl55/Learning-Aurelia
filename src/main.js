import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))


  //aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}



// export function configure(aurelia) {
//   aurelia.use
//     .standardConfiguration()
//     .feature('resources');

//   if (environment.debug) {
//     aurelia.use.developmentLogging();
//   }

//   if (environment.testing) {
//     aurelia.use.plugin('aurelia-testing');
//   }

//   aurelia.start().then(() => aurelia.setRoot());
// }