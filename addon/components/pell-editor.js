import Component from '@ember/component';
import { observer } from '@ember/object';
import pell from 'ember-pell/pell';

export default Component.extend({
  pellOptions: null,

  onChange(/*html*/) {},

  valueObserver: observer('value', function() {
    if (this.get('pell')) {
      this._setValue();
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    let pellInstance = pell.init(this._options());

    this.set('pell', pellInstance);

    this._setValue();
  },

  _options() {
    return Object.assign({}, this.get('pellOptions'), {
      element: this.element,
      onChange: this.onChange
    });
  },

  _setValue() {
    if (this.get('pell').content.innerHTML !== this.get('value')) {
      this.get('pell').content.innerHTML = this.get('value');
    }
  }
});
