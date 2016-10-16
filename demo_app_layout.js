var demoApp = require('./demo_app.js');
var DemoAppLayout = {};
DemoAppLayout.view =  function(ctrl)
{
	return [
		m("!DOCTYPE html"),
 		m("html",[
 			m("head",[
       			m("title",'Demo App'),
       			m("link[rel=stylesheet][href=/stylesheets/style.css]"),
       			m("script[type=text/javascript][src=/javascripts/demo_app.js][async=true]")
       		]),
	 		m("body",[
	 			m(".container",m.component(demoApp))
	 		])
	 	])
 	]
}

module.exports = {
  view : DemoAppLayout.view,
   controller : DemoAppLayout.controller
 }
