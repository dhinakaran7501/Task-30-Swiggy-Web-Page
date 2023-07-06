let hotelmenu = [
    {
        id: 1,
        item_category: "Veg",
        item_name: "Darjeeling Salad",
        rate: 170,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0a83b70c41637e38375e421b0f15131e"
    },
    {
        id: 2,
        item_category: "Veg",
        item_name: "Russian Salad",
        rate: 230,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/374fbc26314cbfd8aac4400d15b1a684"
    },
    {
        id: 3,
        item_category: "Non-Veg",
        item_name: "Chicken Arabian Lollipop (8 PCS)",
        rate: 400,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tjz7nxgni4m7lu8ye0yc"
    },
    {
        id: 4,
        item_category: "Non-Veg",
        item_name: "Chicken Moroccan Dejaj Meshwy",
        rate: 510,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hp8zmqqafo223qfljpp1"
    },
    {
        id: 5,
        item_category: "Non-Veg",
        item_name: "Chicken BBQ Biryani (Full)",
        rate: 1150,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uhhdsnljkpcujhu2lcr4"
    }
];


let row = document.querySelector(".row");

hotelmenu.forEach(function (values, index, array) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("row_cards");
    row.appendChild(createDiv);

    let createDiv1 = document.createElement("div");
    createDiv1.classList.add("row_card1");
    createDiv.appendChild(createDiv1);

    let item_category = document.createElement("span");
    item_category.classList.add("category_icon");
    item_category.innerHTML = values.item_category;
    createDiv1.appendChild(item_category);

    let item_category_Icon = document.createElement("span");
    item_category_Icon.innerHTML += `<i class="bi bi-caret-up-square-fill veg"></i>
    <i class="bi bi-caret-up-square-fill nonveg"></i>`
    item_category.appendChild(item_category_Icon);


    let itemName = document.createElement("h3");
    itemName.innerHTML = values.item_name;
    createDiv1.appendChild(itemName);

    let rate = document.createElement("p");
    rate.innerHTML = `&#8377; ${values.rate}`;
    createDiv1.appendChild(rate);

    let createDiv2 = document.createElement("div");
    createDiv2.classList.add("image_sec");
    createDiv.appendChild(createDiv2);

    let img = document.createElement("img");
    img.setAttribute("src", values.imgURL);
    createDiv2.appendChild(img);

    let createDiv3 = document.createElement("div");
    createDiv3.classList.add("btn_sec");
    createDiv2.appendChild(createDiv3);

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("type", "click");
    btn.innerHTML = "-";
    createDiv3.appendChild(btn);

    let btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.setAttribute("type", "click");
    btn1.innerHTML = "0";
    createDiv3.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    btn2.setAttribute("type", "click");
    btn2.innerHTML = "+";
    createDiv3.appendChild(btn2);

    let hr = document.createElement("hr");
    hr.classList.add("hr_line");
    row.appendChild(hr);



    ////////////////////////////////////////////////////



    //CART COUNT

    let count_cart = document.getElementById("cart_count");
    let count = 0;
    btn2.addEventListener("click", function (a, b, c) {
        count++;
        btn1.innerHTML = count;
        count_cart.innerHTML = count;
    });


    btn.addEventListener("click", function (a, b, c) {
        if (count > 0) {
            count--;
            btn1.innerHTML = count;
            count_cart.innerHTML = count;
        }
    });


    //VEG or NON-VEG VALIDATION

    if (values.item_category === "Veg") {
        item_category.style.backgroundColor = "green";
        item_category.style.color = "white";
        item_category.style.fontWeight = "600";
    }
    // else if (values.item_category === "Non-Veg") {
    else {
        item_category.style.backgroundColor = "red";
        item_category.style.color = "white";
        item_category.style.fontWeight = "600";
    }


});

//return to home page
// let homepage = document.getElementsByClassName("homeName");
// homepage.addEventListener("click", function () {
//     location.href = "index.html";
// });
function homepage() {
    location.href = "index.html";
}

