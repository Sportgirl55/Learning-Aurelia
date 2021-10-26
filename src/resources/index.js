// export function configure(config) {
//   //config.globalResources([]);
// }

import { PLATFORM } from "aurelia-framework";

// export function configure(config) {
//   config.globalResources([
//     "./value-converters/filter-by",
//     "./value-converters/group-by",
//     "./value-converters/order-by",
//   ]);
// }

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName(
      "./value-converters/filter-by",
      "./value-converters/group-by",
      "./value-converters/order-by"
    ),
  ]);
}
