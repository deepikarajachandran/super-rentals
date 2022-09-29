import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rentals/mansion', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:rentals/mansion');
    assert.ok(route);
  });
});
