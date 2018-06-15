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

    this.set('pell', pellInstance.querySelector(".pell-content"));

    this._setValue();
  },

  _options() {
    return Object.assign({}, this.get('pellOptions'), {
      element: this.element,
      onChange: this.onChange
    });
  },

  _setValue() {
    const val = this.get('value');
    if (this.get('pell').innerHTML !== val && typeof val !== 'undefined') {
      this.get('pell').innerHTML = val;
    }
  }
});
