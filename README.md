# Apigee UI Framework

A common set of styles and components for front-end applications and static content.

## Structure

Apigee UI Framework is an extension of [Bootstrap](http://getbootstrap.com/) consisting
of:

* A common *core* that defines the Apigee brand look and feel, and generic extensions
* *Contexts* that extend the core to provide application-specific styling and components

## Building

### Dependencies

* Install [gulp](http://gulpjs.com/) and [bower](http://bower.io/)
* Run `npm install`
* Run `bower install`

### Hacking

* Run `gulp test`. Gulp will watch the source files and rebuild the styles on the fly. 
* Open [http://localhost:8080/test](http://localhost:8080/test).
* Make some changes. Use the LiveReload extension for your browser of choice to refresh the test page on rebuild.

### Distribution

* Run `gulp dist`. Assets will be placed in the `dist/` directory.

We recommend using LESS and `@import`ing the Apigee UI Framework core or
context instead of including its distribution CSS. This allows you to override
styles without duplicate CSS code and use mixins.
