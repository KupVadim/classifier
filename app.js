'use strict';

var data = require('./data');


var natural = require('natural'),
  porterStemmer = natural.PorterStemmerRu,
  classifier = new natural.BayesClassifier(porterStemmer);


for (var i = 0; i < data.good.length; i++) {
  classifier.addDocument(data.good[i], 'good');
  console.log('learn goods');
};

for (var i = 0; i < data.bad.length; i++) {
  classifier.addDocument(data.bad[i], 'bad');
  console.log('learn bads');
};

classifier.train();

console.log('= = = = = = = = = =');
console.log('START CLASSIFICATION');

console.log('Test on goods');
for (var i = 0; i < data.test_good.length; i++) {
  console.log("> ",classifier.classify(data.test_good[i]));
};

console.log('Test on bads');
for (var i = 0; i < data.test_bad.length; i++) {
  console.log("> ",classifier.classify(data.test_bad[i]));
};

var raw = JSON.stringify(classifier);
console.log(raw)