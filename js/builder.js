//let addToDoButton = document.getElementById('clicker');
//let toDoContainer = document.getElementById('container');
//let inputField = document.getElementById('addnew');

//addToDoButton.addEventListener('click', function(){
  //  var input = document.createElement('optgroup')
    //toDoContainer.appendChild(input);
    //input.addEventListener;
// })  

const div = document.getElementById('container');

function duplicateForm() {
  let forms = div.getElementsByClassName('form');
  let firstForm = forms[0];
  let formClone = firstForm.cloneNode(true);
  div.append(formClone);
}

const list = document.getElementById('container');

function duplicateList() {
    let addex = list.getElementById('addnew');
    let firstList = addex[0];
    let listClone = firstList.cloneNode(true);
    list.appendChild(listClone);
  }
//block counter
  let addblock = document.getElementById('clicker');
  let int = document.getElementById('block');
  let integer = 1;
  addblock.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;

  })


const addexercise = document.getElementById('addnew');
const appendhere = document.getElementById('appendhere');

function addinsideblock(){
  let newlist = addexercise.children;
  let newlistItem = newlist[0];
  let newlistCopy = newlistItem.cloneNode(true);
  //addexercise.appendChild(newlistCopy);

  //let newlist2 = addexercise.children;
  let newlistItem2 = newlist[1];
  let newlistCopy2 = newlistItem2.cloneNode(true);

  //let newlist3 = addexercise.children;
  let newlistItem3 = newlist[2];
  let newlistCopy3 = newlistItem3.cloneNode(true);

  let newlistItem4 = newlist[3];
  let newlistCopy4 = newlistItem4.cloneNode(true);
  //appendhere.append(newlistCopy, newlistCopy2, newlistCopy3, newlistCopy4);
  addexercise.append(newlistCopy, newlistCopy2, newlistCopy3, newlistCopy4);


}
//const addexercise = document.getElementById('addnew');

//**figure out how to use .last, .first and before in order to change order and not duplicate clones */
function makecombo(){
  // Create an input element for Full Name
  var FN = document.createElement("input");
  FN.setAttribute("type", "text");
  FN.setAttribute("name", "FullName");
  FN.setAttribute("placeholder", "Full Name");
  addexercise.appendChild(FN);
}
//const collect = require('collect.js');


  //let newlist2 = addexercise.children;
  //let newlistItem2 = newlist[1];
  //let newlistCopy2 = newlistItem2.cloneNode(true);
  //addexercise.append(newlistCopy, newlistCopy2);





