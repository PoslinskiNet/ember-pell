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
      onChange(html) {
        this.value = html;
      },
    });
    this.render();
  });

  it('render pell rich text editor content wrapper', function(){
    expect($('.pell-content').html()).to.equal("This is <strong>my</strong> html");
    expect($('.pell-content').attr("contenteditable")).to.equal('true');
  });

  it('change value callback propagates properly', function(){
    this.value = "new value";
    expect($('.pell-content').html()).to.equal("new value");
  });

  it('changing value from inside editor mutates value outside', function(){
    $('.pell-content').html("Some new things");
    expect(this.value).to.equal("Some new things");
  });
});
