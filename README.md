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
* Create a [LESS](http://lesscss.org/) stylesheet that contains the following,
substituting paths as necessary:

```
// Import paths
//
// LESS variables in @import are scoped to only the root style (here) and
// the file in which the @import is made (which can't be overridden).
//
//** Load Bootstrap from this directory.
@bootstrap-path:        "/path/to/bower_components/bootstrap/";
//** Load Font Awesome from this directory.
@fontawesome-path:      "/path/to/bower_components/fontawesome/";
//** Load Apigee UI Framework from this directory.
@ui-framework-path:     "/path/to/ui-framework/";

// Core styles
@import "${ui-framework-path}less/core";

// Context-specific (choose one if needed)
// @import "${ui-framework-path}less/contexts/app";
// @import "${ui-framework-path}less/contexts/marketing";

// Optional: override asset paths
@font-path:               "${ui-framework-path}fonts/";
@image-path:              "${ui-framework-path}images/";

// Add or import your styles here
@import "./your_styles_here.less";
```

* Compile the stylesheet
* Include the compiled stylesheet in your page
* **Remember to include webfonts!** Apigee UI Framework uses [ARS Maquette Web]
(http://arstype.angusrshamal.com/ars-maquette-2/webfont) or [Lato]
(http://www.latofonts.com/) if available. If not, it'll use something else
that won't look as nice.

**Don't use LESS?** You're missing out on important features of Apigee UI Framework (mixins,
overriding variables). Don't worry, you can still use include the pre-built CSS stylesheet
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
the Apigee UI Framework core and any context styles. This way, you can selectively
import core components, override variables/mixins, and use mixins provided by
Apigee UI Framework in your own styles.

**You will need to define the `@bootstrap-path` variable in your root
LESS stylesheet** to be the path to the Bootstrap Bower module. Defining it
elsewhere won't work because LESS scopes variables in `@import` statements
differently. See the `ui-framework-*.less` files for an example.

Alternatively, you can include a distribution CSS (from the `dist/`
directory) in your page and add any modifications in a separate stylesheet.

That said,

* Run `gulp serve`. Gulp will watch the source files and rebuild the styles on the fly. 
* Open [http://localhost:8080/test](http://localhost:8080/test).
* Make some changes. Use the [LiveReload extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
for your browser of choice to refresh the test page on rebuild.

### Distribution

* Run `gulp dist`. Assets will be placed in the `dist/` directory.
