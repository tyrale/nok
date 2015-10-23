// export the build process

// get build systems
var merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var jade = require('broccoli-jade');
var stylus = require('broccoli-stylus');


// roots
var stylesTree = new Funnel('src/styles');
var templTree = new Funnel('src/templates', {
  exclude: ['includes/**/*']
});
var scriptsRoot = 'javascripts';


//////////
// HTML //
//////////

var html = jade(templTree, {});

/////////
// CSS //
/////////

var css = stylus(stylesTree, {});

////////////////
// JavaScript //
////////////////



module.exports = merge([html, css]);
