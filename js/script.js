// const $button=$("button")
// const restcountries=(choice)=> {
//     $.ajax( 
//      {
//          url:`https://restcountries.com/v3.1/name/${choice}`
// })
//  .then((data)=>{
//      console.log(data)
//     console.log(data[0].flags.png)
//     //  $('#capital').text(data[0].capital);
//     // $('#country_code').text(`${data[0].idd.root}`); 
//     // $('#population').text(`${data[0].population}`);
//     // $('#currencies').text(Object.keys(data[0].currencies)[0]); 
//     // $('#region').text(data[0].region); 
    
//     $("img").attr("src",data[0].flags.png)
    
// })
// }

// $button.on("click",()=>{
//     const $searchitem = $("#search").val() 
//       restcountries($searchitem) 
// })
// .catch((error)=> {
//     console.log(error);
// })

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)