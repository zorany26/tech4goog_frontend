
function validateCredentials() {
    let currentUser = {
        username: null,
        password: null
    }; 
    
    currentUser.username = document.getElementById("username").value;
    currentUser.password = document.getElementById("password").value;
    
    let user = getUserByUserName(currentUser.username);

    if(currentUser.username == user.username && currentUser.password == user.password){
        showNav();
    }else{
        alert("Las credenciales ingresadas usuario: "+ currentUser.username+ "  y contraseña: " +currentUser.password +" son incorrectos."
            +"\n desde el servidor usuario: "+ user.username + " contraseña: " + username.password 
            );
    }   
    
}

function showNav(){
        document.getElementById('user-options').className= 'nav-visible';
}

function hideNav(){
    document.getElementById('user-options').className= 'nav-hidden';                       
}


