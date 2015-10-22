// export the build process
module.exports = function (broc) {

  // get build systems
  var jade = require('broccoli-jade');
  var stylus = require('broccoli-stylus');


  // roots
  var stylesTree = broc.makeTree('styles');
  var templatesRoot = broc.makeTree('templates');
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

};
