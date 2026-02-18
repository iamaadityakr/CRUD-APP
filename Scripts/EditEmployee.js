const employeeFormEle = document.getElementById("employee-form");
const firstnameEle = document.getElementById("firstname");
const middlenameEle = document.getElementById("middlename");
const lastnameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("mobileno");
const streetEle = document.getElementById("street");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zip-code");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee(){

    try{
        let resp = await fetch(`https://crud-app-2djj.onrender.com/employees${id}`);
        let data = await resp.json();
        console.log(data);

        firstnameEle.value = data.firstname
        middlenameEle.value = data.middlename
        lastnameEle.value = data.lastname
        dobEle.value = data.dob
        emailEle.value = data.email 
        maritalStatusEle.value = data.maritalstatus
        phoneNoEle.value = data.mobileno 
        streetEle.value = data.address.street
        stateEle.value = data.address.state
        cityEle.value = data.address.city
        countryEle.value = data.address.country
        zipCodeEle.value = data.address.zip-code



    } catch (err){
        console.log(err);
       alert("Something went wrong❌") 
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    getEditEmployee()
})

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  let UpdatedEmployeeData = {
    firstname: firstnameEle.value.trim(),
    middlename: middlenameEle.value.trim(),
    lastname: lastnameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value.trim(),
    mobileno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipCode: zipCodeEle.value.trim(),
    },
  };
try{
  let resp = await fetch(`https://crud-app-2djj.onrender.com/employees${id}`,{
    method: "PUT",
    headers:{
        "Content-Type": "application/json",
    },
    body : JSON.stringify(UpdatedEmployeeData),
  });
  console.log(resp);
} catch(err){
    console.log(err);
    
}
});