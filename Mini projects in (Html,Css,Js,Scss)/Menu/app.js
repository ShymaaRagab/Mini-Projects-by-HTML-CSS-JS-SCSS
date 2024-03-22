//data of all menu
const menuDetails = [
  {
    imgPath: "images/item-1.jpeg",
    alt: "buttermilk",
    name: "Buttermilk Pancakes",
    type: "breakfast",
    price: "15.99$",
    discription:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed",
  },
  {
    imgPath: "images/item-2.jpeg",
    alt: "diner",
    name: "Diner Double",
    type: "lunch",
    price: "13.99$",
    discription:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    imgPath: "images/item-3.jpeg",
    alt: "godzilla",
    name: "Godzilla Milkshake",
    type: "shakes",
    price: "6.99$",
    discription:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    imgPath: "images/item-4.jpeg",
    alt: "country",
    name: "Country Delight",
    type: "breakfast",
    price: "20.99$",
    discription:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    imgPath: "images/item-5.jpeg",
    alt: "egg",
    name: "Egg Attack",
    type: "lunch",
    price: "22.99$",
    discription:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    imgPath: "images/item-6.jpeg",
    alt: "Oreo Dream",
    name: "Oreo Dream",
    type: "shakes",
    price: "18.99$",
    discription:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    imgPath: "images/item-7.jpeg",
    alt: "Bacon Overflow",
    name: "Bacon Overflow",
    type: "breakfast",
    price: "8.99$",
    discription:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    imgPath: "images/item-8.jpeg",
    alt: "American Classic",
    name: "American Classic",
    type: "lunch",
    price: "12.99$",
    discription:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    imgPath: "images/item-9.jpeg",
    alt: "Quarantine Budd",
    name: "Quarantine Buddy",
    type: "shakes",
    price: "16.99$",
    discription:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    imgPath: "images/item-10.jpeg",
    alt: "Steak Dinner",
    name: "Steak Dinner",
    type: "dinner",
    price: "39.99$",
    discription:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

///pattern of every article
{
  /* 
<article>
    <img src="image-path" alt="alt name" />
  <div>
    <div class="item-info">
      <h4>Name</h4>
      <p>Price</p>
    </div>
    <p class="text-info">
      Description
    </p>
  </div>
</article> 
*/
}
///

const ourMenu = document.getElementsByClassName("ourMenu")[0];

function CreatArticle(name, price, img, alt, desc) {
  let article = document.createElement("article");
  let image = document.createElement("img");
  image.src = img;
  image.alt = alt;
  let contentBox = document.createElement("div");
  let itemInfo = document.createElement("div");
  let title = document.createElement("h4");
  title.textContent = name;
  let itemPrice = document.createElement("p");
  itemPrice.textContent = price;
  let textInfo = document.createElement("p");
  textInfo.textContent = desc;
  itemInfo.className = "item-info";
  textInfo.className = "text-info";
  itemInfo.appendChild(title);
  itemInfo.appendChild(itemPrice);
  contentBox.appendChild(itemInfo);
  contentBox.appendChild(textInfo);
  article.appendChild(image);
  article.appendChild(contentBox);
  ourMenu.appendChild(article);
}

for (let i = 0; i < menuDetails.length; i++) {
  CreatArticle(
    menuDetails[i].name,
    menuDetails[i].price,
    menuDetails[i].imgPath,
    menuDetails[i].alt,
    menuDetails[i].discription
  );
}

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    ourMenu.innerHTML = "";
    for (let i = 0; i < menuDetails.length; i++) {
      if (e.currentTarget.getAttribute("data-id") == "all") {
        CreatArticle(
          menuDetails[i].name,
          menuDetails[i].price,
          menuDetails[i].imgPath,
          menuDetails[i].alt,
          menuDetails[i].discription
        );
      } else if (
        e.currentTarget.getAttribute("data-id") == menuDetails[i].type
      ) {
        CreatArticle(
          menuDetails[i].name,
          menuDetails[i].price,
          menuDetails[i].imgPath,
          menuDetails[i].alt,
          menuDetails[i].discription
        );
      }
    }
  });
});
