// var info = document.getElementById("menuInfo");
// var modalInner = document.getElementsByClassName("modal-inner")

// var btn = document.getElementById("myBtn");

// var closebtn = document.getElementsByClassName("menu-closebtn")[0];

// btn.onclick = function(){
//     info.style.display ='block';
// }

// closebtn.onclick = function (){
//     info.style.display='none';
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

// var btnOpen = document.querySelector('.myBtn')
// var modal = document.querySelector('.info')
// var iconClose = document.querySelector('.menu-closebtn ')

// function toggleModal(e){
//     modal.classList.toggle('hide')
//     }

//     btnOpen.addEventListener('click', toggleModal)
//     iconClose.addEventListener('click', toggleModal)
//     modal.addEventListener('click', function(e){
//         if(e.target = e.currentTarget) {
//         toggleModal()
//         }
//         })
        
// const menuName = document.getElementsByClassName('menu-content')
// const menuPrice = document.getElementsByClassName('menu-price');

// const menuItems = {
//   "Americano": {
//     name : "アメリカンコーヒー",
//     price: "$450",
//     description: "A classic hot coffee",
//     photo: "image/23020092_s.jpg"
//    },
//    "Blend Coffee" : {
//     name : "ブレンドコーヒー",
//     description: "A smooth blend of coffee beans",
//     price: "$450",
//     photo: "image/23020092_s.jpg"
//    },
//    "Coffe Moka":{
//     name : "カフェモカ",
//     price: "$450",
//     photo: "image/23020092_s.jpg"
//    },
//    "Coffee Latte":{
//     name : "カフェラテ",
//     price: "$450",
//     photo: "image/23020092_s.jpg"
//    },
// };

// const menuButtons = document.querySelectorAll(".menu-column dt");
// const menuInfo = document.getElementById("menuInfo");
// const closeButton = menuInfo.querySelector(".menu-closebtn i");

// function showMenuInfo (menuItems){
//     menuInfo.querySelector(".menu-content p").textContent = `${menuItems.name} - ${menuItems.price}`;
//     menuInfo.querySelector(".menu-content img").src = menuItems.image;
//     menuInfo.querySelector(".menu-content p:nth-child(2)").textContent = menuItem.description; // Assuming description is in the second paragraph
// }
    

// const modal = document.getElementById("menuModal");
// const modalName = document.getElementById("menuName");
// const modalDescription = document.getElementById("menuDescription");
// const modalPrice = document.getElementById("menuPrice");
// const modalImage = document.getElementById("menuImage");
// const closeBtn = document.getElementsByClassName("close")[0];

// const menuButtons = document.querySelectorAll('.myBtn');
// menuButtons.forEach(button => {
//     button.addEventListener("click", function() {
//         const itemName = button.getAttribute("data-name");
//         const item = menuItems[itemName];
//         modalName.textContent = itemName;
//         modalDescription.textContent = item.description;
//         modalPrice.textContent = item.price;
//         modalImage.src = item.image;
//         modal.style.display = "block";
//         document.body.style.overflow = "hidden";
//     });
// });

// closeBtn.addEventListener("click", function() {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
// });

// window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         document.body.style.overflow = "auto";
//     }
// });



// Get the modal
var modal = document.querySelectorAll('.modal');
const modalContent = document.querySelector('.modal-content');
// Lấy danh sách các nút mở modal
const btn = document.querySelectorAll('.myBtn');
// var btn = document.getElementsByClassName("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
//   }

// When the user clicks on the button, open the modal
  btn.forEach((btn, index) => {
    btn.onclick = function() {
        modal[index].style.display = "block";
    }
});

//   span.onclick = function() {
//     modal.style.display = "none";
//   }

  modal.forEach((modal, index) => {
    // Get the <span> element that closes the modal
    const span = modal.querySelector(".menu-closebtn");
    // const modalName = modalContent.querySelector("#menuName");
    // const modalDescription = modalContent.querySelector("#menuDescription");
    // const modalPrice = modalContent.querySelector("#menuPrice");
    // const modalImage = modalContent.querySelector("#menuImage");
    span.onclick = function() {
        // When the user clicks on <span> (x), close the modal
        modal.style.display = "none";
    }
    // const menuItems = {
    //     "Americano": { description: "Description", price: "$450", image: "image1.jpg" },
    //     "Brand Coffee": { description: "Description", price: "$450", image: "image2.jpg" },
    //     // Thêm các mục khác nếu cần
    // };
    const menuBtns = modal.querySelectorAll('.myBtn')
    menuBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const itemName = btn.getAttribute("data-name");
            // const item = menuItems[itemName];
            modalName.textContent = itemName;
            modalDescription.textContent = item.description;
            modalPrice.textContent = item.price;
            modalImage.src = item.image;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });
});

//   const modalName = document.getElementById("menuName");
//   const modalDescription = document.getElementById("menuDescription");
//   const modalPrice = document.getElementById("menuPrice");
//   const modalImage = document.getElementById("menuImage");

//   var btns = document.querySelectorAll('.menuItems')
//   btns.forEach(btn => {
//         btn.addEventListener("click", function() {
//             const itemName = btn.getAttribute("data-name");
//             const item = menuItems[itemName];
//             modalName.textContent = itemName;
//             modalDescription.textContent = item.description;
//             modalPrice.textContent = item.price;
//             modalImage.src = item.image;
//             modal.style.display = "block";
//             document.body.style.overflow = "hidden";
//         });
//     });

const menuItems = [{
 
    name : "アメリカンコーヒー",
    price: "$450",
    description: "A classic hot coffee",
    photo: "image/23020092_s.jpg"
   },
 {
    name : "ブレンドコーヒー",
    description: "A smooth blend of coffee beans",
    price: "$450",
    photo: "image/23157161_s.jpg"
   },
  {
    name : "カフェモカ",
    price: "$450",
    photo: "image/23020092_s.jpg"
   },
   {
    name : "カフェラテ",
    price: "$450",
    photo: "image/23020092_s.jpg"
   },
];


// const menuItem = menuItems.find(item => item.name === name);
// return menuItem || { name: 'Không có thông tin', price: '', description: '', image: '' };

// btn.forEach(button => {
//     btn.addEventListener('click', () => {
// const menuName= btn.getAttribute('アメリカンコーヒー');
// showModal (menuItems);
// });
// });

