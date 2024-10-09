const urlapi = "http://localhost:8080";

//GET User

async function getUserByUserName(username) {
    if (username == null || username == '') {
        console.log("No se indico username");
        return null;
    }

  const request = await fetch(urlapi + "/usuarios/" + username, {
    method: "GET",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const user = new Object();
      user.username = data['userName'];
      user.password = data['passwordUser'];      
      return user;
    })
    .catch((error) => {
      console.log(
        "Ocurrió un error.\n" + username + " no encontrado. \n" + error
      );
      return null;
    });
  
  return request;
}

//CRUD BeneficiaryOrganizations

async function getAllBeneficiaryOrganizations() {
  const request = await fetch(urlapi + "/beneficiarios", {
    method: "GET",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
  });

  const beneficiaryOrganizations = await request.json();
  return beneficiaryOrganizations;
}

async function getBeneficiaryOrganization(identificationNumber) {
    if (identificationNumber == null || identificationNumber == '') {
        console.log("No se indico identificationNumber");
        return null;
    }

  const request = await fetch(
    urlapi + "/beneficiarios/" + identificationNumber,
    {
      method: "GET",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    }
  )
  .then((response) => response.json())
  .then((data) => {

    const beneficiaryOrganization = new Object();
    beneficiaryOrganization.nameOrganization = data['nameOrganization'];
    beneficiaryOrganization.identificationNumber = data['identificationNumber'];
    beneficiaryOrganization.email = data['email'];
    beneficiaryOrganization.phoneNumber = data['phoneNumber'];
    beneficiaryOrganization.addressOrganization = data['addressOrganization'];
    beneficiaryOrganization.city =data['city'];
    beneficiaryOrganization.contactPerson = data['contactPerson'];
    beneficiaryOrganization.organizationType = data['organizationType'];  
         
    return beneficiaryOrganization;
  })
  .catch((error) => {
    console.log(
      "Ocurrió un error.\n" + identificationNumber + " no encontrado. \n" + error
    );
    return null;
  });

return request;
}

async function updateBeneficiaryOrganization(identificationNumber, beneficiaryOrganization) {
    if (identificationNumber == null || identificationNumber == '') {
        console.log("No se indico identificationNumber");
        return null;
    }

    const request = await fetch(
        urlapi + "/beneficiarios/" + identificationNumber, {
            method: "PUT",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(beneficiaryOrganization)
        }).then((response) => {
            console.log(response);
            console.log("Se actualizo la organización con identificationNumber: " +identificationNumber);
            console.log(response['status']);      
            console.log(typeof response['status']);      
        if( response['status'] == 200)
            return true;
        }).catch((error) => {
            console.log(
              "Ocurrió un error.\n" + identificationNumber + " no encontrado. \n" + error
            );
            return null;
          });
        
        return request;
}

async function deleteBeneficiaryOrganization(identificationNumber) {
    if (identificationNumber == null || identificationNumber == '') {
        console.log("No se indico identificationNumber");
        return null;
    }

  const request = await fetch(
    urlapi + "/beneficiarios/" + identificationNumber, {
      method: "DELETE",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    }
  ).then((response) => {
        console.log("Se elimino la organización con identificationNumber: " +identificationNumber);
        console.log(response['status']);      
        console.log(typeof response['status']);      
        if( response['status'] == 200)
            return true;
    })
  .catch((error) => {
    console.log(
      "Ocurrió un error.\n" + identificationNumber + " no encontrado. \n" + error
    );
    return null;
  });

return request;
}
