'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stunning ' + chalk.red('Alchemist') + ' generator!'
    ));

    var prompts = [{
      type: 'prompt',
      name: 'appName',
      message: 'Could you tell me the name of your new project?'
    }];

    this.prompt(prompts, function (answers) {
      this.appName = answers.appName;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.mkdir('dist');
      this.mkdir('dist/css');
      this.mkdir('dist/favicon');
      this.mkdir('dist/fonts');
      this.mkdir('dist/images');
      this.mkdir('dist/js');
      this.mkdir('src');
      this.mkdir('src/jade');
      this.mkdir('src/css');
      this.mkdir('src/js');
      this.mkdir('src/images');
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('_.bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('_index.jade'),
        this.destinationPath('src/jade/style.css')
      );
      this.fs.copy(
        this.templatePath('_style.css'),
        this.destinationPath('src/css/style.css')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
