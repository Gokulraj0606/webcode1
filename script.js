var div=document.createElement("div");
div.style.textAlign="center"
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","search 1-12")
input.setAttribute("id","book");

var button=document.createElement("button");
button.setAttribute("type","button")
button.setAttribute("class","btn btn-primary")
button.innerHTML="Search";
button.addEventListener("click",foo)

let names=document.createElement("div");
names.setAttribute("id","names");

let isbn=document.createElement("div");
isbn.setAttribute("id","isbn");

let pages=document.createElement("div");
pages.setAttribute("id","numberOfPages");

let authors=document.createElement("div");
authors.setAttribute("id","authors");

let publisher=document.createElement("div");
publisher.setAttribute("id","publisher");

let released=document.createElement("div");
released.setAttribute("id","released");

var characters=document.createElement("div");
characters.setAttribute("id","characters")



div.append(input,button,names,isbn,pages,authors,publisher,released,characters);
document.body.append(div);

async function foo(){
  let res=document.getElementById("book").value;
  var url=`https://www.anapioficeandfire.com/api/books/${res}`;

  

  

  var result=await fetch(url);
  var result1=await result.json();
  
  console.log(result1.name);
  console.log(result1.isbn);
  console.log(result1.numberOfPages);
  console.log(result1.authors[0])
  console.log(result1.publisher);
  console.log(result1.released);
  console.log(result1.characters[0]);

  names.innerHTML=`Name of the book: ${result1.name}`;
  isbn.innerHTML=`ISBN of book: ${result1.isbn}`;
  pages.innerHTML=`Number Of Pages: ${result1.numberOfPages}`;
  authors.innerHTML=`Name Of The Author: ${result1.authors[0]}`;
  publisher.innerHTML=`Name Of the Publisher: ${result1.publisher}`;
  released.innerHTML=`Released Date: ${result1.released}`;
  characters.innerHTML=`character1: ${result1.characters[0]}`

  



}