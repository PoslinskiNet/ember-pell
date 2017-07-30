import Ember from 'ember';
import pell from 'ember-pell/pell';

const { Component, computed } = Ember;

export default Component.extend({
  pellOptions: {},

  onChange(/*html*/) {},

  innerHTML: computed('value', function() {
    if (this.get('pell')) {
      this.get('pell').content.innerHTML = this.get('value');
    }

    return this.get('value');
  }),

  didInsertElement() {
    this._super(...arguments);

    let pellInstance = pell.init(this._options());

    this.set('pell', pellInstance);

    this.get('innerHTML');
  },

  _options() {
    return Object.assign({}, this.get('pellOptions'), {
      element: this.element,
      onChange: this.onChange
    });
  },
});
