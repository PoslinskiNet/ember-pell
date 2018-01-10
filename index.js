'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-pell',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/ember-pell/pell.min.css');
    app.import('vendor/ember-pell/pell.min.js', {
      using: [
        { transformation: 'amd', as: 'pell' }
      ]
    });
  },

  pellPath() {
    return path.join(this.app.project.nodeModulesPath, '/pell/dist');
  },

  treeForVendor(tree) {
    let trees = [tree];

    trees.push(new Funnel(this.pellPath(), {
      destDir: 'ember-pell',
      files: ['pell.min.js', 'pell.min.css']
    }));

    return mergeTrees(trees);
  },
};
