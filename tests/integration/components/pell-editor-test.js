import Ember from 'ember';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

const { $ } = Ember;

describe('Integration | Component | pell editor', function() {
  setupComponentTest('pell-editor', {
    integration: false
  });

  beforeEach(function(){
    this.value = "This is <strong>my</strong> html";
    this.subject({
      value: this.value,
      onChange: function(html) {
        this.value = html;
      },
    });
    this.render();
  });

  it('render pell rich text editor content wrapper', function(){
    expect($('.pell-content').html()).to.equal("This is <strong>my</strong> html");
    expect($('.pell-content').attr("contenteditable")).to.equal('true');
  });

  it('change value callback is propagates properly', function(){
    this.value = "new value";
    expect($('.pell-content').html()).to.equal("new value");
  });
});
