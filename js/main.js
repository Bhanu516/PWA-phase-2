function submitdata() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mob=document.querySelector("#mobile").value;
  var mail=document.querySelector("#e-mail").value;
  var add=document.querySelector("#address").value;
  var inst=document.querySelector("#inst").value;
  var branch=document.querySelector("#branch").value;
  var year=document.querySelector("#year").value;
  var per=document.querySelector("#per").value;
  var clg=document.querySelector("#clg").value;
  var cbranch=document.querySelector("#cbranch").value;
  var cyear=document.querySelector("#cyear").value;
  var cper=document.querySelector("#cper").value;
  var schl=document.querySelector("#schl").value;
  var board=document.querySelector("#board").value;
  var syear=document.querySelector("#syear").value;
  var sper=document.querySelector("#sper").value;
  var skills=document.querySelector("#skills").value;

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
store.put({
  career:career,
  name:name,
  mobile:mob,
  email:mail,
  address:add,
 education:[
   {
   inst:inst,
   branch:branch,
   year:year,
   per:per
 },
{
  inst:clg,
  branch:cbranch,
  year:cyear,
  per:cper
},
{
  inst:schl,
  branchd:board,
  year:syear,
  per:sper
}
],

  skills:skills
});
}
window.open("index.html");
}
