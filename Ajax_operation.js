let page = 1;
page++;
const parent = document.querySelector("#parent");
console.log(parent);

window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=page");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {

      console.log(xhr.responseText);
      let element = JSON.parse(xhr.responseText);
      console.log(element.data);
      domlogicHere(element.data);
    }
  };
  xhr.send();
});


let domlogicHere = function (list) {
  const parent = document.querySelector("#parent");
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

      newElement.children[0].innerHTML =item.first_name + " " + item.last_name;
      parent.insertBefore(newElement, parent.firstChild);
  }
};