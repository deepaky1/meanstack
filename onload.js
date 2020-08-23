window.addEventListener("load", () =>{

  //  console.log("onload");
const element = document.querySelector("#navbar");
// console.log("element");

for(let i=0;i<10;i++)
{
  const newelement = element.children[0].cloneNode(true);
  //console.log(newelement);

  element.insertBefore(newelement,element.firstChild)

}

});