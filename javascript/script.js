function validateForm() {       //This is the function
  //storing the values in the variables
  var name = document.forms["myForm"]["name"].value;
  var address = document.forms["myForm"]["address"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var email = document.forms["myForm"]["email"].value;
  var feedback = document.forms["myForm"]["feedback"].value;
  
  // if(name =="" ||address =="" ||phone =="" ||email =="" ||feedback ==""){
  // 	alert("please fill the field");
  // }
  // else{
  // 	alert("Thank you " + name);
  // }
  //checking the condition for the empty values
if(name ==""){  
	alert("please fill the field name")
}
else if(address ==""){
	alert("please fill the field address")
}
else if(phone ==""){
	alert("please fill the field phone")
}
else if(email ==""){
	alert("please fill the field email")
}
else if(feedback ==""){
	alert("please fill the field feedback")
}
//if all the above conditions are false then else is executed
else{
	alert("Thank you " + name + " for contacting me and giving feedback")
}
}