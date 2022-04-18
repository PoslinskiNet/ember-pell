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

    const options = this._options();
    const pellInstance = pell.init(options);

    const contentClass = options.classes && options.classes.content || 'pell-content';
    const contentClassSelector = `.${contentClass.split(' ').join('.')}`;
    this.set('pell', pellInstance.querySelector(contentClassSelector));

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
    if (this.get('pell').innerHTML !== val) {
      this.get('pell').innerHTML = val === undefined ? null : val;
    }
  }
});
