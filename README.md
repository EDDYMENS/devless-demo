# dv-frontend
This is a simple frontend framework setup for working with the [devless backend](https://github.com/DevlessTeam/DV-PHP-CORE.git) 

It is made up of ***sammy.js*** for routing, ***handlebar*** for templating and jquery for dom manipulation and the ***devless js sdk*** for working with data from the devless backend.

##Folder structure:
* index.html is the main page within which the all templates as well as assets(css,js) are looaded 
* vendor folder (this contains all third party libraries)
* auth folder (this is an implementation of a sample app for handling authentication using the devless backend)

##Working with the framework 

Getting started with the framework is easy.
* start of by creating a folder say blog at the auth directory level.
* then create a ***templates*** folder within the directory you just created
* next you may add say index.html to your templates folder
* you finally add a say blog.js to the blog folder and make sure to add a script tag referencing the blog.js within the outer index.html which where all templates are loaded.
* to make use of your template may add this snippet to your blog.js file 

``` 
//load blog page 
app.get('#/blog', function() {

		Helper.loading();
		
		Devless.queryData("blog","blog",function(response){

      		data = response.payload;

      		Helper.view.render("blog","index",data);
      
    	});

		

});
    
``` 
This creates a #/blog route from which this page can be accessed. 
The ``helper.loading()`` function appends a loader to the screen will blog post is being fetched from the devless backend.
The ``Helper.view.render("blog","index",data);`` function finally gets the index page from the blog folder and appends the data from the blog data from the devless backend to the screen when the ``#/blog`` route is hit
The rending of the data is done with  handlebar. 

A sample templating for your ``index.html`` may look something like this 
```
{{#each this}}
<center><h1>{{title}}</h1>
<p>{{content}}</p>
</center>
{{/each}}

```
And feel free to swap the data source with something else.




