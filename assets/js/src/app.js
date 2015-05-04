var Backbone = require('backbone'),
	Marionette = require('backbone.marionette');

Backbone.$ = require('jquery');

var	app = new Marionette.Application();

app.on('start', function()
{
	console.log('Marionette application started.');
});

module.exports = app;