

var app = $.sammy('#main', function() {
    this.debug = true;
    

    this.get('#/', function() {
        
		Helper.view.render(null,"main", data);		
    	 
    });
});

$(function() {
	
   app.run('#/');

});



