# Apigee UI Framework

A common set of styles and components for front-end applications and static content.

## [Demo](http://apigee.github.io/ui-framework/test/)

## Structure

Apigee UI Framework is an extension of [Bootstrap](http://getbootstrap.com/) consisting
of:

* A common *core* that defines the Apigee brand look and feel, and generic extensions
* *Contexts* that extend the core to provide domain-specific styling and components (e.g. web
  application or marketing site)

## Quick start

* Clone this repository
* In your [LESS](http://lesscss.org/) stylesheet, `@import "path/to/ui-framework/less/ui-framework-core.less";` (or another context of your choice)

**Don't use LESS?** You're missing out on important features of Apigee UI Framework (mixins,
overriding variables). Don't worry, you can still use include the prebuilt CSS stylesheet
for the context of your choice, located in the `dist/css/` directory.

Apigee UI Framework is packaged for both [bower](http://bower.io/) and
Node.js ([npm](https://www.npmjs.org/)).

## Extending

### Dependencies

* Install [gulp](http://gulpjs.com/) and [bower](http://bower.io/)
* Run `npm install`
* Run `bower install`

### Hacking

**Note: Do not modify UI Framework itself with application/site specific styles!**

Instead, we recommend using [LESS](http://lesscss.org/) and `@import`ing
the Apigee UI Framework core or a context. This way, you can selectively
import core components, override variables/mixins, and use mixins provided by
Apigee UI Framework in your own styles.

Alternatively, you can include a distribution CSS (from the `dist/`
directory) in your page and add any modifications in a separate stylesheet.

That said,

* Run `gulp test`. Gulp will watch the source files and rebuild the styles on the fly. 
* Open [http://localhost:8080/test](http://localhost:8080/test).
* Make some changes. Use the [LiveReload extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
for your browser of choice to refresh the test page on rebuild.

### Distribution

* Run `gulp dist`. Assets will be placed in the `dist/` directory.
