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
console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("form Submitted");

  let newEmployeeData = {
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
  let resp = await fetch("https://crud-app-2djj.onrender.com/employees",{
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
    },
    body : JSON.stringify(newEmployeeData),
  });
  console.log(resp);

  //NAVIGATION
  window.location.href="AllEmployees.html";
}catch(err){
    console.log(err);
    alert("Something went wrongm❌")
}
//   console.log(newEmployeeData);
});
