var Home = document.getElementById("Home");
var homePage= document.querySelectorAll(".homePage");

var projects = document.getElementById("Projects");
var projectsPage=document.querySelectorAll(".projectsPage");

var Contact = document.getElementById("Contact");
var contactsPage=document.querySelectorAll(".contactPage");

const Work = document.getElementById("Work");
const workPage=document.querySelectorAll(".workPage");


// code for home page
Home.addEventListener("click",function showHomePage() {
  homePage.forEach(function (page) {
    page.classList.toggle('block');
  });

  workPage.forEach(function(page){
    page.classList.remove('block');
  })

  projectsPage.forEach(function (page){
    page.classList.remove('block');
  });
  contactsPage.forEach(function(page){
    page.classList.remove('block');
  });
});


// code for project page 

projects.addEventListener("click",function showProjectPage(){
  projectsPage.forEach(function (page){
    page.classList.toggle('block');
  });

  workPage.forEach(function(page){
    page.classList.remove('block');
  })

  homePage.forEach(function (page) {
    page.classList.remove('block');
  });
  
  contactsPage.forEach(function(page){
    page.classList.remove('block');
  });
});

// code for work page

Work.addEventListener("click",function showWorkPages(){
  workPage.forEach(function (page){
    page.classList.toggle('block');
  })
  contactsPage.forEach(function(page){
    page.classList.remove('block');
  });

  homePage.forEach(function (page) {
    page.classList.remove('block');
  });

  projectsPage.forEach(function (page){
    page.classList.remove('block');
  });
})




// code for contact page 
Contact.addEventListener("click",function showContactPage(){
  contactsPage.forEach(function(page){
    page.classList.toggle('block');
  });

  workPage.forEach(function(page){
    page.classList.remove('block');
  })

  homePage.forEach(function (page) {
    page.classList.remove('block');
  });

  projectsPage.forEach(function (page){
    page.classList.remove('block');
  });


});




