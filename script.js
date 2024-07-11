let btn  = document.getElementById("navbar_menu_btn");

btn.addEventListener("click",function(){
    let list =  document.getElementById("navbar_list");
    list.classList.toggle("active")
})

let siteHeaderBtn  = document.getElementById("site_header_btn");

siteHeaderBtn.addEventListener("click",function(){
    let headerBg =  document.getElementById("site_header");
    headerBg.classList.toggle("header_active")
})

let darkWhite = document.getElementById("dark_white_mode");

darkWhite.addEventListener("click", function() {
    let budyBg = document.getElementById("budy");
    budyBg.classList.toggle("budy_durk")
})

let products = [

    {
        id:1,
        img:'./img/havo_shari.png',
        name:"Still Standing Tall",
        desc:"Life begins at the end of your comfort zone."
    },
    {
        id:2,
        img:'img/koprik.png',
        name:"Sunny Side Up",
        desc:"No place is ever as bad as they tell you it’s going."
    },
    {
        id:3,
        img:'img/tuman.png',
        name:"Water Falls",
        desc:"We travel not to escape life, but for life not to."
    },
    {
        id:4,
        img:'img/suv.png',
        name:"Through the Mist",
        desc:"Travel makes you see what a tiny place you"
    },
    {
        id:5,
        img:'img/sim.png',
        name:"Still Standing Tall",
        desc:"Life begins at the end of your comfort zone."
    },
    {
        id:6,
        img:'img/sharshara.png',
        name:"Sunny Side Up",
        desc:"No place is ever as bad as they tell you it’s going"
    },
]


let row = document.getElementById("contant_section_all")

for(let i = 0; i<= products.length -1; i++){
    let box = document.createElement("div");
    box.classList = 'box';
    row.appendChild(box)
    let img = document.createElement("img");
    img.src = products[i].img;
    box.appendChild(img)
    let title = document.createElement("h3");
    title.innerHTML = products[i].name;
    box.append(title)
    let p = document.createElement("p");
    p.innerHTML = products[i].desc;
    box.append(p)

}

let footerInput = document.getElementById("site_footer_input_box_input");
let footerBtn = document.getElementById("site_footer_input_box_btn");

products.forEach((find,number,all) => {

    footerBtn.addEventListener("click", function() {
        if (find.name === footerInput.innerText) {
            console.log(true);
        }else {
              console.log(false);
        }
    })
});