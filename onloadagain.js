window.addEventListener("load", () => {

    let element = document.querySelector("#id1");
  //  console.log(element);

   

    for(let i=0 ;i<=5 ;i++)
{ 
      const newelement =  document.querySelector("#id1").cloneNode(true);  
      element.insertBefore( newelement,element.firstChild[0] );
      console.log(i);

    }
});