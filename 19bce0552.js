let xhr=new XMLHttpRequest();
xhr.open("POST",
"https://bfhldevapigw.healthrx.co.in/bfl-api-challenge/challenge-entry");

xhr.setRequestHeader("Accept",
"application.json");
xhr.setRequestHeader("Content-type",
"application.json");

xhr.onload=()=>
console.log(xhr.responseText);

let body=`{
    "b_name": "SmFpdmFsIERpZ2lzaCBTaGFo",
 "name": " Jaival Digish Shah",
 "b_reg_no": "MTlCQ0UwNTUyDQo=",
 "reg_no": " 19BCE0552",
 "b_email": "amFpdmFsZC5zaGFoMjAxOUB2aXRzdHVkZW50LmFjLmluDQoNCg==",
 "email": " jaivald.shah2019@vitstudent.ac.in",
}`;

xhr.send(body);