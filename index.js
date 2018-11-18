'use strict';

const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included(app);

    app.import('vendor/ember-pell/pell.min.css');
    app.import('vendor/ember-pell/pell.min.js', {
      using: [
        { transformation: 'amd', as: 'pell' }
      ]
    });
  },

  pellPath() {
    return path.dirname(resolve.sync('pell', { basedir: __dirname }))
  },

  treeForVendor(tree) {
    let trees = [];

    if (tree) {
      trees.push(tree);
    }

    trees.push(new Funnel(this.pellPath(), {
      destDir: 'ember-pell',
      files: ['pell.min.js', 'pell.min.css']
    }));

    return mergeTrees(trees);
  },
};
