import $ from 'jquery';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | pell editor', function() {
  setupComponentTest('pell-editor', {
    integration: true
  });

  beforeEach(function(){
    this.set('value', "This is <strong>my</strong> html");
    this.render(hbs`{{pell-editor value=value onChange=(action (mut value))}}`);
  });

  it('render pell richt text editor', function(){
    expect($('.pell-content').html()).to.equal("This is <strong>my</strong> html");
    expect($('.pell-content').attr("contenteditable")).to.equal('true');
  });

  it('change value callback propagates properly', function(){
    this.set('value', "new value");
    expect($('.pell-content').html()).to.equal("new value");
  });

  it('mutates state outside if value changed in editor', function(){
    $('.pell-content').html('Taadaa!');
    $('.pell-content').trigger('input');
    expect(this.get('value')).to.equal('Taadaa!');
  });
});
