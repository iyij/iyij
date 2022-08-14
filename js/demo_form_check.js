let okButton = document.getElementById("okButton");


okButton.addEventListener("click", (acceptEvent) => {
  var demoForm = document.getElementById("demo-request-form");
  let fullName = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let company = document.getElementById("company");
  alert(fullName.value);

  demoForm.action = "mailto:crm@iyi.ir?&subject=Demo Request&body=" + "FullName:" + fullName.value + "        " + "telephone:" + phone.value +
      "        " + "company:"+company.value+"        " + "email:"+email.value;
  
}, false);