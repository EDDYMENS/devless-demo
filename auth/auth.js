//load login page 
app.get('#/login', function() {

        var context = {
            "page":"login",
        };

    	Helper.view.render("auth","login",context);

});


//submit login details to devless 
app.post('#/login', function(appObj) {

    data = Helper.request($.param(this.params.toHash()));
    Helper.loading();
    Devless.logIn("email",data.email,data.password, function(response) {
        console.log(response);
        if(response.status_code == 1000){

            appObj.redirect('#/profile');
 
        }else{

            
            alert("login failed");
        }
    
    });
  
});

//signup for account on devless 
app.get('#/signup', function() {

        var context = {

            "page":"signup",
        };

        Helper.view.render("auth", "signup", context);

         
});



//submit login details to devless 
app.post('#/signup', function(appObj) {
    form_fields = this.params;

    data = Helper.request($.param(this.params.toHash()));

    console.log("details", data);

    Devless.signUp(data, function(response) {

        if(response.status_code == 1000){
            
            appObj.redirect('#/profile');

        }else{

            alert("could not sign you up");    
            
        }
        

    });
  
});



//route layer 
app.get('#/profile', function(appObj) {

    Helper.loading();
    //data layer 
    Devless.getProfile(function(response){

        if(response.status_code == 1000) {

             profile = response.payload[0];
             status = response.status_code;

             var context = {

                 "page":"",
                 "profile": profile,
             };
             
             Helper.view.render("auth", "profile", context);

            }else{

                appObj.redirect('#/login');

            }
   

    });

    
       
});

//submit login details to devless 
app.post('#/update-profile', function(appObj) {
  
    data = Helper.request($.param(this.params.toHash()));

    profile = {
        
        "first_name": data.firstname,
        "last_name": data.lastname,
        "email": data.email,
        "phone_number": data.phonenumber,
        "username": data.username,
        "password": data.password
        
    };

    Devless.updateProfile(profile, function(response){

        if(response.status_code == 1000){

            alert('profile updated succefully');
        }else{

            alert('profile failed to update')
        }

    });
  
});

app.get('#/logout', function(appObj){

    Helper.loading();

    Devless.logOut(function(response){
        console.log(response)
        if(response.status_code == 1000){

            appObj.redirect('#/login');
        }else{

            alert("logout failed");
        }

    });

});
