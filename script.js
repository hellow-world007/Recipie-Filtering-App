const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://media.istockphoto.com/photos/pancakes-with-berries-and-maple-syrup-picture-id161170090?b=1&k=20&m=161170090&s=170667a&w=0&h=pgtnBdQKLvZz7WOmBcZhY_EXDGeATOS2jc_FJF9GbnE=",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://media.istockphoto.com/photos/family-having-breakfast-together-in-holidays-picture-id547133836?b=1&k=20&m=547133836&s=170667a&w=0&h=E1JpE9B9fY5zjOE4H3Y81hF6UB_b3miWL9bzg11OXy4=",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://media.istockphoto.com/photos/chocolate-mocha-frappe-whipped-creme-topping-picture-id951396042?b=1&k=20&m=951396042&s=170667a&w=0&h=7o3wzsLaaaH_BRzi4NEWD08p8jii2_ToWx8ZyvhI5CY=",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeSUyMGRlbGlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://media.istockphoto.com/photos/healthy-breakfast-hard-boiled-eggs-fresh-radish-sprouts-arugula-and-picture-id1064106360?b=1&k=20&m=1064106360&s=170667a&w=0&h=kHTImxsf2-26qLpAoJMu1Xov-BhtpN1rW7gTyuhBI50=",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://media.istockphoto.com/photos/wall-made-of-vegan-black-and-white-chocolate-sandwich-cookies-picture-id1088713618?b=1&k=20&m=1088713618&s=170667a&w=0&h=PdbAwmuHPaWJZes8YMr2khZGrZfaHyZRHmOeyBKT5lE=",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://media.istockphoto.com/photos/pizza-with-extra-sauces-and-empty-space-still-life-picture-id1270745940?b=1&k=20&m=1270745940&s=170667a&w=0&h=Xl6Um5QpDx4BorNIGjp46iRpFb9FIU9ZgocslzKoz7M=",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924?b=1&k=20&m=1194753924&s=170667a&w=0&h=wc6yMT9EW0EQ2jckyNCNVJu2bdYvg9bN_3O87Bb9OSs=",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://media.istockphoto.com/photos/strawberry-smoothie-picture-id1313644815?b=1&k=20&m=1313644815&s=170667a&w=0&h=LJu1rcvbgiAFdRSwsVRCs6Ih275BQVmZRYhOBxoWlzI=",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://media.istockphoto.com/photos/seared-bison-fillet-steak-with-creamy-mushroom-herb-barley-picture-id1310107673?b=1&k=20&m=1310107673&s=170667a&w=0&h=FFHLESZfGrdvdxi-HuY3ROY-eg5f4LEDTIh1I-PLJiU=",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });

  function displayMenuItems(menuItems){

    let displayMenu=menuItems.map(function(item){
        return`
        <article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo"/>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>
    `
    }).join('')

    sectionCenter.innerHTML=displayMenu
  }

  function displayMenuButtons(){

    const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["all"]
      );

      const categoryBtns = categories
        .map(function (category) {
          return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`;
        })
        .join("");
        btnContainer.innerHTML = categoryBtns;

        const filterBtns=btnContainer.querySelectorAll('.filter-btn')

        filterBtns.forEach(function(btn){
            btn.addEventListener('click',function(e){
                const category=e.currentTarget.dataset.id
                const menuCategory=menu.filter(function(menuItem){
                   if(menuItem.category===category){
                      return menuItem
                   }
              })
              if(category==="all"){
                  displayMenuItems(menu)
              }else{
                  displayMenuItems(menuCategory)
              }
      
            })
      
        })
    
 }