import Controller from '@ember/controller';

export default Controller.extend({
  value: "<h1>This is sample text</h1>Some <italic>description</italic>",

  actions: {
    onChange(value) { }
  }
});
