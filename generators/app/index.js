'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Hello, my name is ' + chalk.red('Alchemist') + ' generator! And I would like to help you to start your project!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'pugLang',
        message: 'Would you like to use pug?',
        default: true,
      }
    ];

    this.prompt(prompts, function (answers) {
      this.appName = answers.appName;
      this.pugLang = answers.pugLang;
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
      this.mkdir('src/html');
      this.mkdir('src/css');
      this.mkdir('src/js');
      this.mkdir('src/images');
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_npm-debug.log'),
        this.destinationPath('npm-debug.log')
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
        this.templatePath('_index.html'),
        this.destinationPath('src/html/index.html')
      );
      this.fs.copy(
        this.templatePath('_style.css'),
        this.destinationPath('src/css/style.css')
      );
      if (this.pugLang == true) {
        this.mkdir('src/pug');
        this.fs.copy(
          this.templatePath('_index.pug'),
          this.destinationPath('src/pug/index.pug')
        );
        this.fs.copy(
          this.templatePath('_gulpfile.pug.js'),
          this.destinationPath('gulpfile.js')
        );
      } else {
        this.fs.copy(
          this.templatePath('_gulpfile.js'),
          this.destinationPath('gulpfile.js')
        );
      }
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
