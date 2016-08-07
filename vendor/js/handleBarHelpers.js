Handlebars.registerHelper('Trim', function(passedString) {

    passedString = (typeof passedString != "string")? "" : passedString; 
    if(passedString.length > 150){
    	var theString = passedString.substring(0,150);
    	 theString = theString+"...";

    }else{

    	theString = passedString;
    }
    
    return new Handlebars.SafeString(theString)
});


Handlebars.registerHelper('Capitalize', function(passedString) {

    passedString = (typeof passedString != "string")? "" : passedString; 

    return new Handlebars.SafeString(passedString.toUpperCase())
});


Handlebars.registerHelper('Display', function( returnValue, of,  objects, where, key, equals, value){
	console.log(objects,key,value);
	return Helper.searchForObject(objects,key,value)[returnValue];

});

Handlebars.registerHelper('Sum', function( objects, where, key, equals, value){
    
    returnObject = Helper.searchForObject(objects,key,value);
    returnObject = objects;
    var count = 0;

    for (var property in returnObject) {
        if (Object.prototype.hasOwnProperty.call(returnObject, property) && returnObject[property][key] == value ) {
            count++;
        }
    }
    return count;


    
    
    //return returnObject[returnValue];

});


