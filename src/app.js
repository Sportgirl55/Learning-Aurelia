import { PLATFORM } from "aurelia-pal";

export class App {
  configureRouter(config, router) {
    config.title = "Learning Aurelia";
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {
        route: ['contacts'],
        name: 'contacts',
        moduleId: PLATFORM.moduleName('contact-list'),
        nav: true,
        title: 'Contacts'
      },
      {
        route: [''],
        name: 'Main',
        moduleId: PLATFORM.moduleName('contact-list'),
        title: 'MAIN'
      },
      {
        route: ['repos'],
        name: 'repos',
        moduleId: PLATFORM.moduleName('repos'),
        nav: true,
        title: "Repos",
      },
      {
        route: ['contacts/:id'],
        name: 'contact-details',
        moduleId: PLATFORM.moduleName('contact-details'),
        title: 'Contact Details',
      }
    ]);
    config.mapUnknownRoutes('not-found.html');
    this.router = router;
  }
}
