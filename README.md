# Apigee UI Framework

[![Bower](https://img.shields.io/bower/v/apigee/ui-framework.svg?style=flat-square)]()

A common set of styles and components for front-end applications and static content.

## [Demo](http://apigee.github.io/ui-framework/test/)

## Structure

Apigee UI Framework is an extension of [Bootstrap](http://getbootstrap.com/) consisting
of:

* A common *core* that defines the Apigee brand look and feel, and generic extensions
* *Contexts* that include and extend the core to provide domain-specific styling and
  components (e.g. web application or marketing site)

Use the context-specific stylesheet that suits your need, or just the core to build
something different!

## Integrating into an existing product (easy way)

* Clone this repository or download an archive of [the latest release](https://github.com/apigee/ui-framework/releases)
* Copy `dist/` into your project
* Include one of the `dist/css/ui-framework-context-*.css` stylesheets in your page

You will miss out on important features of Apigee UI Framework, like mixins and variables
if you use the pre-built CSS instead of Less.

## Integrating into an existing product (proper way)

You will need to set up [bower](http://bower.io) and [Less](http://lesscss.org)
compilation in your project.

* Install UI Framework with bower:

    bower install ui-framework

This will also install bootstrap and jQuery as dependencies.
jQuery is only needed for bootstrap's JavaScript components,
if you want to use them.

* Create a new Less stylesheet that contains the following,
  substituting paths as necessary:

```
// Import paths
//
// Less variables in @import are scoped to only the root style (here) and
// the file in which the @import is made (which can't be overridden).
//
//** Load Bootstrap from this directory.
@bootstrap-path:        "/path/to/bower_components/bootstrap/";

// Core styles
@import "/path/to/bower_components/ui-framework/less/core";

// Context-specific (choose one if needed)
// @import "/path/to/bower_components/ui-framework/less/contexts/app";
// @import "/path/to/bower_components/ui-framework/less/contexts/marketing";

// Optional: override asset paths (relative to compiled and served CSS)
@font-path:               "/server/path/to/ui-framework/dist/fonts/";
@image-path:              "/server/path/to/ui-framework/dist/images/";
//** Load Bootstrap icon fonts (Glyphicons) from this directory (default is @font-path above).
@icon-font-path:          "/server/path/to/bootstrap/dist/fonts/";

// Add or import the rest of your styles here
@import "./your_styles_here.less";
```

* Compile the stylesheet and include it in your page



## Extending

### Dependencies

* Install [gulp](http://gulpjs.com/) and [bower](http://bower.io/)
* Run `npm install`
* Run `bower install`

### Hacking

**Note: Do not modify UI Framework itself with application/site specific styles!**

Instead, we recommend using [Less](http://lesscss.org/) and `@import`ing
the Apigee UI Framework core and any context styles. This way, you can selectively
import core components, override variables/mixins, and use mixins provided by
Apigee UI Framework in your own styles.

**You will need to define the `@bootstrap-path` variable in your root
Less stylesheet** to be the path to the Bootstrap Bower module. Defining it
elsewhere won't work because Less scopes variables in `@import` statements
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
