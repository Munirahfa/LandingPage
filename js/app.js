
//Define the Variables


const navlist = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');




// function the List

let nItems  = (id, name) => {
    const items = `<li><a class="nav-link" href="#${id}"> ${name}</a></li>`;
    return items;
}

let list  = () => {

   for (let s = 0; s < sections.length; s++) {

       const itemlist = document.createElement('li');
       itemlist.classList.add('li-items');
       const Getitems = sections[s].getAttribute('data-nav');
       const IdItems = sections[s].getAttribute('id')
       itemlist.innerHTML =  nItems(IdItems, Getitems);
       fragment.appendChild(itemlist);
   }
   navlist.appendChild(fragment);
}


list();


//Determine if an element is in the viewport
var isInViewport = function (elem) {
var spaces = elem.getBoundingClientRect();
return (
 spaces.top <= 70 &&
 spaces.bottom >= 70


);
};


// Scroll to sections in page

let scrollToClick  = () => {
   navlist.addEventListener('click', function (event) {
       const clicked = document.querySelector('#' + event.target.dataset.nav)
       clicked.scrollIntoView({behavior: "smooth"});
   });
};

scrollToClick();


// clear viewed the page.

const AllItems = document.querySelectorAll('.li-items');
let AItems = () => {
   for (let i = 0; i < sections.length; i++) {

       sections[i].classList.toggle('list-section', isInViewport(sections[i]));
       AllItems[i].classList.toggle('li-items', isInViewport(sections[i]));
   };
};

document.addEventListener('scroll', function() {
   AItems();
});
