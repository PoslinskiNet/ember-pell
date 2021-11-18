import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pell editor', function(hooks) {
  setupRenderingTest(hooks);

  module('when value is provided', function(hooks) {
    hooks.beforeEach(async function() {
      this.set('value', 'This is <strong>my</strong> html');
      await render(hbs`{{pell-editor value=value onChange=(action (mut value))}}`);
    });

    test('render pell richt text editor', function(assert) {
      assert.dom('.pell-content').innerHTML, 'This is <strong>my</strong> html';
      assert.dom('.pell-content').hasAttribute('contenteditable', 'true');
    });

    test('change value callback propagates properly', function(assert) {
      this.set('value', 'new value');
      assert.dom('.pell-content').hasText('new value');
    });

    test('mutates state outside if value changed in editor', function(assert) {
      document.querySelector('.pell-content').innerHTML = 'Taadaa!';
      document.querySelector('.pell-content').dispatchEvent(new Event('input'));
      assert.equal(this.value, 'Taadaa!');
    });
  });

  module('when value is not provided', function(hooks) {
    hooks.beforeEach(async function() {
      this.set('value', undefined);
      await render(hbs`{{pell-editor value=value onChange=(action (mut value))}}`);
    });

    test('render pell richt text editor', function(assert) {
      assert.dom('.pell-content').hasText('');
      assert.dom('.pell-content').hasAttribute('contenteditable', 'true');
    });

    test('change value callback propagates properly', function(assert) {
      this.set('value', 'new value');
      assert.dom('.pell-content').hasText('new value');
    });

    test('mutates state outside if value changed in editor', function(assert) {
      document.querySelector('.pell-content').innerHTML= 'Taadaa!';
      document.querySelector('.pell-content').dispatchEvent(new Event('input'));
      assert.equal(this.value, 'Taadaa!');
    });

    test('mutates state inside if value is set to undefined', async function(assert) {
      this.set('value', 'new value');
      assert.dom('.pell-content').hasText('new value');
      this.set('value', undefined);
      assert.dom('.pell-content').hasText('');
    });
  });

  test('respects custom content classes', async function(assert) {
    this.set('value', 'Initial value');
    this.set('pellOptions', {
      classes: {
        content: 'custom class',
      }
    });
    await render(hbs`{{pell-editor pellOptions=pellOptions value=value}}`);

    assert.dom('.custom.class').hasText('Initial value');
  });
});
