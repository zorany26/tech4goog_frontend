async function updateBeneficiaryOrganizationBtn() {
    let oldIdentificationNumber = document.getElementById("beneficiaryOrganization-identificationNumber").value;
    let newIdentificationNumber;
    document.getElementById("beneficiaryOrganization-identificationNumber").setAttribute("disabled", "true");  

    let beneficiaryOrganization = {};

    beneficiaryOrganization.identificationNumber = document.getElementById("beneficiaryOrganization-identificationNumber").value; //newIdentificationNumber;
    beneficiaryOrganization.nameOrganization = document.getElementById("beneficiaryOrganization-nameOrganization").value;
    beneficiaryOrganization.email = document.getElementById("beneficiaryOrganization-email").value;
    beneficiaryOrganization.phoneNumber = document.getElementById("beneficiaryOrganization-phoneNumber").value;
    beneficiaryOrganization.addressOrganization = document.getElementById("beneficiaryOrganization-addressOrganization").value;
    beneficiaryOrganization.city = document.getElementById("beneficiaryOrganization-city").value;
    beneficiaryOrganization.organizationType = document.getElementById("beneficiaryOrganization-organizationType").value;
    beneficiaryOrganization.contactPerson = document.getElementById("beneficiaryOrganization-contactPerson").value;

    console.log(beneficiaryOrganization);

    await updateBeneficiaryOrganization(oldIdentificationNumber ,beneficiaryOrganization).then((response) => {
        console.log("response:");
        console.log(response);
        if(response == true){
            cleanBeneficiaryOrganizationForm();
            document.getElementById("btn-save").setAttribute("disabled", "true");
            document.getElementById("btn-delete").setAttribute("disabled", "true");
            document.getElementById("btn-edit").setAttribute("disabled", "true");

            alert("Ha sido actualizada la organización indicada: ");
        }
    })

}


async function deleteBeneficiaryOrganizationBtn() {
    await deleteBeneficiaryOrganization(document.getElementById("beneficiaryOrganization-identificationNumber").value).then((response) => {
        if(response != null){
            cleanBeneficiaryOrganizationForm();

            alert("Ha sido eliminada la organización indicada: ");
            
            document.getElementById("btn-edit").setAttribute("disabled", "true");
            document.getElementById("btn-save").setAttribute("disabled", "true");
            document.getElementById("btn-delete").setAttribute("disabled", "true");
        }
    });
}

function cleanBeneficiaryOrganizationForm() {
            document.getElementById("beneficiaryOrganization-nameOrganization").setAttribute("disabled", "true");            
            document.getElementById("beneficiaryOrganization-email").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-phoneNumber").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-addressOrganization").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-city").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-contactPerson").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-organizationType").setAttribute("disabled", "true");
            document.getElementById("beneficiaryOrganization-identificationNumber").removeAttribute("disabled"); 
}


function editBeneficiaryOrganization() {
    document.getElementById("beneficiaryOrganization-identificationNumber").setAttribute("disabled", "true");
    document.getElementById("beneficiaryOrganization-nameOrganization").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-organizationType").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-email").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-phoneNumber").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-contactPerson").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-addressOrganization").removeAttribute("disabled");
    document.getElementById("beneficiaryOrganization-city").removeAttribute("disabled");

    document.getElementById("btn-save").removeAttribute("disabled");
    document.getElementById("btn-delete").removeAttribute("disabled");
    document.getElementById("btn-edit").setAttribute("disabled", "true");
}


async function findBeneficiaryOrganization() {

    console.log(document.getElementById("beneficiaryOrganization-identificationNumber").value);
    await getBeneficiaryOrganization(document.getElementById("beneficiaryOrganization-identificationNumber").value).then((response) => {
        if(response != null){
            document.getElementById("beneficiaryOrganization-nameOrganization").value = response['nameOrganization'];
            document.getElementById("beneficiaryOrganization-identificationNumber").value = response['identificationNumber'];
            document.getElementById("beneficiaryOrganization-email").value = response['email'];
            document.getElementById("beneficiaryOrganization-phoneNumber").value = response['phoneNumber'];
            document.getElementById("beneficiaryOrganization-addressOrganization").value = response['addressOrganization'];
            document.getElementById("beneficiaryOrganization-city").value = response['city'];
            document.getElementById("beneficiaryOrganization-contactPerson").value = response['contactPerson'];
            document.getElementById("beneficiaryOrganization-organizationType").value = response['organizationType'];

            document.getElementById("btn-edit").removeAttribute("disabled");
        }
    });
}


async function validateCredentials() {
    let currentUser = {
        username: '',
        password: ''
    }; 
    
    currentUser.username = document.getElementById("username").value;
    currentUser.password = document.getElementById("password").value;

    let user = {
    username: '',
    password: ''
    };
    
    await getUserByUserName(currentUser.username).then((response) => {
        if (response != null) {
            user.username = response['username']; 
            user.password = response['password'];
        }        
    });

    if ( (currentUser.username == '' || currentUser.username == null ) || (currentUser.password == '' || currentUser.password == null )) {
        alert("Alguno de los campos requeridos esta vació. Complétalos para continuar. ")
    }else{
        if(currentUser.username == user.username && currentUser.password == user.password ){
            showNav();
            hideSection();
            console.log("funciono el logIn");
        }else{        
            alert("Las credenciales ingresadas usuario: "+ currentUser.username+ "  y contraseña: " +currentUser.password +" son incorrectos."
                +"\n Inténtalo nuevamente: ");
        }
    }      
    
}

function showNav(){
        document.getElementById('user-options').className= 'nav-visible';
}

function hideNav(){
    document.getElementById('user-options').className= 'nav-hidden';                       
}

function hideSection(){
    document.getElementById('section-login').className= 'section-login-hidden';                       
}