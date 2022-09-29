import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/index');
    let repodata = {};
    repodata = await response.json();
    return repodata.data;
  }
  // setupController(controller,model)
  // {
  //   super.setupController(controller, model);
  //   // console.log(' model ',model);
  //   controller.setProperties(model);
  //   // console.log('cont ',controller);
  // }
}
