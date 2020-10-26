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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src',siteContent["cta"]["img-src"]);
let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//nav items

 let navItem = document.querySelectorAll("nav a");
navItem.forEach((item,i) => {
    item.style.color = "green";
   return item.textContent = siteContent["nav"][`nav-item-${i+1}`]
})
let newI = document.createElement("a");
newI.innerText = "Blog";
newItem = document.createElement("a");
newItem.innerText = "Portfolio"
document.querySelector("nav").appendChild(newI);
document.querySelector("nav").prepend(newItem);


//[ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//const secondCard = firstCard.cloneNode(true);
// document.querySelector(".card-group").appendChild(secondCard);

//cta items
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "DOM <br> Is <br> Awesome";
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];
//main content
let newarr = ["features","about","services","product","vision"];

let mainH4 = document.querySelectorAll(".text-content h4");
let mainP = document.querySelectorAll(".text-content p");

mainH4.forEach((item,i) => {
  return item.textContent = siteContent["main-content"][`${newarr[i]}-h4`];
})

mainP.forEach((item,i) => {
  return item.textContent = siteContent["main-content"][`${newarr[i]}-content`];
})

//contact
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector(".contact p");
address.textContent = siteContent["contact"]["address"];
let phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"];
let email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"];

//footer
let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];
