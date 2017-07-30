/* eslint-env node */
define('pell', [], function() {
  'use strict';

  var pell;

  if (typeof FastBoot != 'undefined') {
    pell = FastBoot.require('pell');
  } else {
    pell = self.pell;
    delete self.pell;
  }

  return {
    'default': pell
  };
});
