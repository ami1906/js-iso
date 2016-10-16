var DemoApp = {};
DemoApp.controller = (function()
{
	DemoApp.vm.init();
	m.redraw.strategy("diff");
	return{
	  	capitalize : function (str){
	  		if(str.length > 0)
				return str[0].toUpperCase() + str.slice(1);
			else
				return ""
		},
		changeColor : function(color)
		{
			DemoApp.vm.class = color;
		}
	}
});
DemoApp.vm = {
	init: function(){   
   		DemoApp.vm.box = ['green','red','black','blue'];
   		DemoApp.vm.class = "";
	}
};

DemoApp.view =  function(ctrl)
{
	return [
			m(".content",[
				m("div.desc","Click Any Color"),
				m("#box",{class:DemoApp.vm.class}),
				m(".colors",[
			 		DemoApp.vm.box.map(function(item){
						return [
								m(".group",{onclick:ctrl.changeColor.bind(this,item)},[
									m("span",{class:'small-box '+item}),
									m("span",ctrl.capitalize(item))
								])
							]
			 		})
		 		])
	 		])
	 	]
}


module.exports = {
   view : DemoApp.view,
   controller : DemoApp.controller
}
