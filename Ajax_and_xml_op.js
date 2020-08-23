let callAjax = function () {
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.onload = () => {
    const element = JSON.parse(xhr.responseText);

    jsonDomOperation(element);
  };

  xhr.send();
};

let jsonDomOperation = function (element) {

let parent = document.querySelector("#parent");

  for (let i = 0; i < element.length; i++) {
    let item = element[i];

    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = item.FirstName + " " + item.LastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let callAjaxXML = function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.setRequestHeader("accept", "application/xml");

  xhr.onload = () => {
    let element = xhr.responseXML;
    xmlDomHandler(element);
  };

  xhr.send();
};