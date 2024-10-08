
const urlapi = 'http://localhost:8080';

//CRUD BeneficiaryOrganizations



 async function getAllBeneficiaryOrganizations(){
             const request = await fetch(urlapi+'/beneficiarios', {
                method:"GET"
                
});

const beneficiaryOrganizations = await request.json();
return beneficiaryOrganizations; 

}

 async function getBeneficiaryOrganization(identificationNumber){
    const request = await fetch(urlapi+'/beneficiarios/'+identificationNumber, {
        method:"GET"
});

const beneficiaryOrganization = await request.json();
return beneficiaryOrganization;
}

 async function updateBeneficiaryOrganization(){}

 async function deleteBeneficiaryOrganization(identificationNumber){
            const request = await fetch(urlapi+'/beneficiarios/'+identificationNumber, {
                method:"DELETE"
});
}




