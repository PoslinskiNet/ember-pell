import Component from '@ember/component';
import { observer } from '@ember/object';
import pell from 'ember-pell/pell';

export default Component.extend({
  pell: null,
  pellOptions: null,

  onChange(/*html*/) {},

  valueObserver: observer('value', function() {
    if (this.pell) {
      this._setValue();
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    const options = this._options();
    const pellInstance = pell.init(options);

    const contentClass = options.classes && options.classes.content || 'pell-content';
    const contentClassSelector = `.${contentClass.split(' ').join('.')}`;
    this.set('pell', pellInstance.querySelector(contentClassSelector));

    this._setValue();
  },

  _options() {
    return Object.assign({}, this.pellOptions, {
      element: this.element,
      onChange: this.onChange
    });
  },

  _setValue() {
    const val = this.value;
    if (this.pell.innerHTML !== val && typeof val !== 'undefined') {
      this.pell.innerHTML = val;
    }
  }
});
