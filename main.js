// Another bug in Emscripten?
var initialized = false;
var libsbmlMemoryInitPrefix = 'mem/';

var libsbml = require('./libsbml.js');

reader = new libsbml.SBMLReader();

var doc;

fs = require('fs');

var sbml = fs.readFileSync('./BIOMD0000000001.xml', 'utf8');
// console.log(sbml);
doc = reader.readSBMLFromString(sbml);

var model = doc.getModel();

console.log(model.getNotesString());

// http://stackoverflow.com/questions/8638820/jquery-ajax-in-node-js
var $ = require('jquery');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

