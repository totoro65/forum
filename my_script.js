function my_script.js()                                    
{ 
    var sexe = document.forms["myform"]["sexe"];               
    var Civilite = documents.forms["myform"]["Civilite"];    
    var name = document.forms["myform"]["name"];  
    var email = document.forms["myform"]["email "];  
    var tel = document.forms["myform"]["tel"];  
    var website = document.forms["myform"]["website"];  
    var date = document.forms["myform"]["date"];  

    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        sexe.focus(); 
        return false; 
    }    
    if (Civilite.value == "")                               
    { 
        alert("Mettez votre adresse."); 
        Civilite.focus(); 
        return false; 
    }        
    if (name.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        name.focus(); 
        return false; 
    }    
    if (tel.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        tel.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (website.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        website.focus(); 
        return false; 
    }    
    if (tel.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        tel.focus(); 
        return false; 
    }    
    if (what.selectedIndex < 1)                  
    { 
        alert("Mettez votre cours."); 
        date.focus(); 
        return false; 
    } 
    if (comment.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        comment.focus(); 
        return false; 
    } 
    return true; 
}
