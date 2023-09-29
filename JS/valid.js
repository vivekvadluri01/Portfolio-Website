// console.log("validation start here");

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("contact");
const text = document.getElementById("textarea");

// add event

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// send data function 

const sendData = (nameval,sRate , count) =>{
  if (sRate === count) {
    alert("Registration successfull!!");
    swal("Welcome! " + nameval, " Registration Successfull!!", "success");
    location.href = `demo.html?name=${nameval}`;
  }
}

// success message validation
const successMsg = (nameval) =>{
  let formCon = document.getElementsByClassName('form-control1');

  var count = formCon.length - 1;
  for(var i=0; i<formCon.length;i++){
    if(formCon[i].className==="form-control1 success"){
      var sRate = 0 + i;
        sendData(nameval,count,sRate);
    }else{
      return false;
    }
  }
}

// more email validation

const isEmail = (emailval) =>{
  var atSymbol = emailval.indexOf('@');
  if(atSymbol<1) return false;
  var dot = emailval.lastIndexOf('.');
  if(dot <= atSymbol + 2) return false;
  if(dot===emailval.length - 1) return false;

  return true;
}

// define the validate function

const validate = () => {
  const nameval = name.value.trim();
  const emailval = email.value.trim();
  const phoneval = contact.value.trim();
  const textval = textarea.value.trim();

  // validate name 
  if(nameval===""){
    setErrorMsg(name,'Name can not be blank');
  }else if(nameval.length<=2){
    setErrorMsg(name,'Name must be 3 character');
  }else{
    setSuccessMsg(name);
  }


  // validate name 
  if(emailval===""){
    setErrorMsg(email,'Email can not be blank');
  }else if(!isEmail(emailval)){
    setErrorMsg(email,'Not a valid email');
  }else{
    setSuccessMsg(email);
  }

  // validate name 
  if(phoneval===""){
    setErrorMsg(phone,'Phone number can not be blank');
  }else if(phoneval.length != 10){
    setErrorMsg(phone,'Phone Number Must be 10 digit');
  }else{
    setSuccessMsg(phone);
  }

  // validate name 
  if(textval===""){
    setErrorMsg(textarea,'Textarea can not be blank');
  }else{
    setSuccessMsg(textarea);
  }

   successMsg(nameval);
};

// setting the error message 
function setErrorMsg(input,errorMsg){
  const formControl1 = input.parentElement;
  const small = formControl1.querySelector('small');
  formControl1.className = "form-control1 error"
  small.innerText=errorMsg;
}

// setting the error message 
function setSuccessMsg(input){
  const formControl1 = input.parentElement;
  formControl1.className = "form-control1 success"
}
