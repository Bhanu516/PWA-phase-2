var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
paravalue=parseInt(para[1]);
}


var idb=window.indexedDB || window.mozIndexedDb ||
window.msIndexedDB || window.webitIndexedDB;
if(!idb in window)
{
  console.log("indexDB is not supported");
}
//IndexDB Creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}

open.onerror=function(er){
console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function (data) {
  console.log(data);
personalinfo(data.target.result);
}
}
// var parent=document.querySelector(".parent");
var LEFT=document.querySelector(".LEFT");
var RIGHT=document.querySelector(".RIGHT");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/bhanu.svg";
LEFT.append(image);

var ca=document.createElement("h1");
ca.textContent="Career Objective:";
LEFT.append(ca);

var car=document.createElement("h2");
car.textContent=pi.career;
LEFT.append(car);



var name=document.createElement("h1");
name.textContent=pi.name;
LEFT.append(name);

var mob=document.createElement("h3");
mob.textContent=pi.mobile;
LEFT.append(mob);

var mail=document.createElement("h3");
mail.textContent=pi.email;
LEFT.append(mail);

var address=document.createElement("h3");
address.textContent=pi.address;
LEFT.append(address);

var edu=document.createElement("h1");
edu.textContent="Education Details:";
RIGHT.append(edu);
var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>institution</th><th>branch</th><th>year</th><th>percentage</th>";
var tr2="";
for(var i in pi.education)
{
  tr2=tr2+"<tr><td>"+pi.education[i].institution+"</td><td>"+
  pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].per+"</td></tr>"
}
table.innerHTML=tr1+tr2;
RIGHT.append(table);

var s=document.createElement("h2");
s.textContent="Skills";
RIGHT.append(s);


var sk=document.createElement("h3");
sk.textContent=pi.skills;
RIGHT.append(sk);

}
