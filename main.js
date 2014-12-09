// Another bug in Emscripten?
var initialized = false;
var libsbmlMemoryInitPrefix = 'mem/';

var libsbml = require('./libsbml.js');

reader = new libsbml.SBMLReader();

var doc;

fs = require('fs');

var sbmlstr = fs.readFileSync('./GlycolysisOriginal.xml', 'utf8');
console.log(sbmlstr);
doc = reader.readSBMLFromString(sbmlstr);
