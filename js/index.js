const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//mouse-over event for nav links///////
const mouseOver = document.querySelector("nav")

mouseOver.addEventListener(
  "mouseover",
  event => {
    event.target.style.color = "red";

    setTimeout(function(){
      event.target.style.color = "green";
    }, 500);
  }, false
);
///////////////////////////

//toggle dark mode on or off when clicking "get started button"///////
document.querySelector(".cta-text button").addEventListener("click", function() {

  const body = document.querySelector("body");
  const text = document.querySelector(".container");
  const navLogo = document.querySelector("header .logo")
  const borderLines = document.querySelector(".main-content")

  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black'
    text.style.color = "white"
    navLogo.style.filter = "invert(1)"
    borderLines.style.borderTop = "2px solid white"
    borderLines.style.borderBottom = "2px solid white"


  }else{
    body.style.backgroundColor = "white" 
    text.style.color = "black"
    navLogo.style.filter = "invert(0)"
    borderLines.style.borderTop = "2px solid black"
    borderLines.style.borderBottom = "2px solid black"
  }
})
///////////////////////////


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav links////////////////////////////////////////////////////
document.querySelector("a").textContent = 'Services'

document.querySelector("a:nth-of-type(2)").textContent = 'Product'
document.querySelector("a:nth-of-type(3)").textContent = 'Vision'
document.querySelector("a:nth-of-type(4)").textContent = 'Features'
document.querySelector("a:nth-of-type(5)").textContent = 'About'
document.querySelector("a:nth-of-type(6)").textContent = 'Contact'

const newItem = document.createElement("a")
newItem.textContent = "Ideas"
const navItem1 = document.querySelector('nav')
navItem1.append(newItem)

const newItem2 = document.createElement("a")
newItem2.textContent = "Blog"
const navItem2 = document.querySelector('nav')
navItem2.prepend(newItem2)

const navColor = document.querySelectorAll("a");
navColor.forEach( element => element.style.color = 'green')
///////////////////////////////////////////////////////////////

//cta//////////////////////////////////////////////////////////
document.querySelector('button').textContent = 'Get Started'
document.querySelector('h1').textContent = "DOM Is Awesome"
document.querySelector('#cta-img').src = '/img/header-img.png'
//////////////////////////////////////////////////////////////


//main-content//////////////////////////////////////////////////
const mainContent = document.querySelectorAll('p')
mainContent[0].textContent = siteContent ["main-content"]["features-content"]
mainContent[1].textContent = siteContent ["main-content"]["about-content"]
mainContent[2].textContent = siteContent ["main-content"]["services-content"]
mainContent[3].textContent = siteContent ["main-content"]["product-content"]
mainContent[4].textContent = siteContent ["main-content"]["vision-content"]

const mainH4 = document.querySelectorAll('h4')
mainH4[0].textContent = siteContent ["main-content"]["features-h4"]
mainH4[1].textContent = siteContent ["main-content"]["about-h4"]
mainH4[2].textContent = siteContent ["main-content"]["services-h4"]
mainH4[3].textContent = siteContent ["main-content"]["product-h4"]
mainH4[4].textContent = siteContent ["main-content"]["vision-h4"]

document.querySelector('#middle-img').src = '/img/mid-page-accent.jpg'
//////////////////////Contact section////////////////////////////////
const contH4 = document.querySelectorAll('.contact h4')

contH4[0].textContent = siteContent ["contact"] ["contact-h4"]
const contact = document.querySelectorAll('.contact p')

contact[0].textContent = siteContent ["contact"]["address"]
contact[1].textContent = siteContent ["contact"] ["phone"]
contact[2].textContent = siteContent ["contact"] ["email"]
//////////////////////Footer////////////////////////////////////
const footer = document.querySelectorAll('footer')

footer[0].textContent = siteContent ["footer"] ["copyright"]
//////////////////////////////////////////////////////////