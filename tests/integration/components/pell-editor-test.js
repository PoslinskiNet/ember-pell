import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | pell editor', function() {
  setupComponentTest('pell-editor', {
    integration: true
  });

  describe('when value is provided', function() {
    beforeEach(function(){
      this.set('value', "This is <strong>my</strong> html");
      this.render(hbs`{{pell-editor value=value onChange=(action (mut value))}}`);
    });

    it('render pell richt text editor', function(){
      expect(document.querySelector('.pell-content').innerHTML).to.equal("This is <strong>my</strong> html");
      expect(document.querySelector('.pell-content').getAttribute("contenteditable")).to.equal('true');
    });

    it('change value callback propagates properly', function(){
      this.set('value', "new value");
      expect(document.querySelector('.pell-content').innerHTML).to.equal("new value");
    });

    it('mutates state outside if value changed in editor', function(){
      document.querySelector('.pell-content').innerHTML = 'Taadaa!';
      document.querySelector('.pell-content').dispatchEvent(new Event('input'));
      expect(this.get('value')).to.equal('Taadaa!');
    });
  });

  describe('when value is not provided', function() {
    beforeEach(function(){
      this.set('value', undefined);
      this.render(hbs`{{pell-editor value=value onChange=(action (mut value))}}`);
    });

    it('render pell richt text editor', function(){
      expect(document.querySelector('.pell-content').innerHTML).to.equal("");
      expect(document.querySelector('.pell-content').getAttribute("contenteditable")).to.equal('true');
    });

    it('change value callback propagates properly', function(){
      this.set('value', "new value");
      expect(document.querySelector('.pell-content').innerHTML).to.equal("new value");
    });

    it('mutates state outside if value changed in editor', function(){
      document.querySelector('.pell-content').innerHTML= 'Taadaa!';
      document.querySelector('.pell-content').dispatchEvent(new Event('input'));
      expect(this.get('value')).to.equal('Taadaa!');
    });
  });

  it('respects custom content classes', function() {
    this.set('value', 'Initial value');
    this.set('pellOptions', {
      classes: {
        content: 'custom class',
      }
    });
    this.render(hbs`{{pell-editor pellOptions=pellOptions value=value}}`);
    expect(document.querySelector('.custom.class').innerHTML).to.equal('Initial value');
  });
});
