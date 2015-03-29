var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function(){
	this.route('mxa-guide', { path: '/mxa/guide' });
	this.route('mxa-samples', { path: '/mxa/samples' });
	this.route('mxa-reference', { path: '/mxa/reference' });
});