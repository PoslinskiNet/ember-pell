<p align="center">
  <img src="https://github.com/PoslinskiNet/ember-pell/raw/master/ember-pell.png" alt="Ember Pell Logo" width="100%">
</p>

[![Build Status](https://api.travis-ci.org/PoslinskiNet/ember-pell.svg?branch=master)](http://travis-ci.org/PoslinskiNet/ember-pell)

# Ember-pell

An Ember Component for pell micro 1KB WYSIWYG editor that doesn't require jQuery.

# Demo

https://jaredreich.com/pell

## Installation

`ember install ember-pell`

## Usage

### 1. Setup value property:
You can declare value variable in your controller or parent component:

```javascript
// app/controllers/task.js
import Ember from 'ember';

export default Ember.Controller.extend({
  task: '<h1>Some html</h1>'
});
```
#### 2. Use `pell-editor` component

```hbs
{{pell-editor value=value onChange=(action (mut value)) pellOptions=options}}
```

Options are documented in the code as well as in [Pell repository](https://github.com/jaredreich/pell)

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## LICENSE

See the LICENSE file included in this repository.

<!-- Links -->
[pell]: https://github.com/jaredreich/pell


## Code of Conduct
Please note that this project is released with a Contributor Code of
Conduct. By participating in this project you agree to abide by its
terms, which can be found in the `CODE_OF_CONDUCT.md` file in this
repository.
