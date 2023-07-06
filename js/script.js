let swiggyContents = [
    {
        id: 1,
        name: "Zaitoon",
        cuisine: "Biryani, Juices, North Indian, Chinese",
        ratings: 4.2,
        time: 39,
        rate: 500,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dhhxpnn5rt2uysasbzqq"
    },
    {
        id: 2,
        name: "SS Hyderabad Briyani",
        cuisine: "Biryani, North Indian",
        ratings: 4.4,
        time: 15,
        rate: 350,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kwtzaac7zw3eskwulaj5"
    },
    {
        id: 3,
        name: "Salem RR Biriyani Unavagam",
        cuisine: "Biryani, South Indian, Chinese, Seafood",
        ratings: 3.7,
        time: 30,
        rate: 450,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q8cp56xrcwimn7b2tad5"
    },
    {
        id: 4,
        name: "Guntur Gongura",
        cuisine: "Andhra, North Indian, South Indian",
        ratings: 3.9,
        time: 18,
        rate: 400,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/drsqbi7ullwgvkawp93z"
    },
    {
        id: 5,
        name: "Geetham Veg restaurant",
        cuisine: "South Indian, North Indian, Sweets, Beverages",
        ratings: 4.5,
        time: 20,
        rate: 600,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fxoofqi1isfil8oa7ix7"
    },
    {
        id: 6,
        name: "Kadhar Bai Dum Briyanis",
        cuisine: "Biryani, Kebabs",
        ratings: 3.7,
        time: 40,
        rate: 200,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vbgodhwejwkgd01quprt"
    },
    {
        id: 7,
        name: "Khalids Biriyani",
        cuisine: "Biryani, Snacks, North Indian",
        ratings: 1.5,
        time: 50,
        rate: 500,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/add53d57ce66faefc66dad3d15f8c591"
    },
    {
        id: 8,
        name: "KFC",
        cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
        ratings: 3.9,
        time: 20,
        rate: 300,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426"
    },
    {
        id: 9,
        name: "Ibaco",
        cuisine: "Ice Cream",
        ratings: 4.4,
        time: 10,
        rate: 200,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dayec728f6eqtbbcvydd"
    },
    {
        id: 10,
        name: "Pizza Hut",
        cuisine: "Pizzas",
        ratings: 3.7,
        time: 25,
        rate: 400,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7"
    },
    {
        id: 11,
        name: "McDonald's",
        cuisine: "Burgers, Beverages, Cafe, Desserts",
        ratings: 4.2,
        time: 28,
        rate: 500,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4"
    },
    {
        id: 12,
        name: "Mani's Dum Biryani",
        cuisine: "Indian, Andhra",
        ratings: 4.3,
        time: 35,
        rate: 390,
        imgURL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tmngal8gs3iu8taqpivz"
    }

];

//DYNAMIC ARRAY OF OBJECT CONTENTS
// console.log(swiggyContents);
let container = document.querySelector(".container");
let row = document.querySelector(".row");

//function Argumment passing
itemrender(swiggyContents);

//
function itemrender(content) {
    content.forEach(function (values, index, array) {
        // Column Create Div
        let column = document.createElement("div");
        column.classList.add("col");
        row.appendChild(column);

        // Column Card Created Div
        let col_card = document.createElement("div");
        col_card.classList.add("col_card");
        column.appendChild(col_card);

        // Anchor Tag With Image Tag
        let link_a_1 = document.createElement("a");
        link_a_1.setAttribute("href", "#");
        col_card.appendChild(link_a_1);

        let image = document.createElement("img");
        image.src = values.imgURL;
        image.classList.add("image_sec");
        link_a_1.appendChild(image);
        column.appendChild(col_card);

        // Anchor Tag With Heading Tag
        let link_a_2 = document.createElement("a");
        link_a_2.setAttribute("href", "#");
        col_card.appendChild(link_a_2);

        let name = document.createElement("h2");
        name.innerHTML = values.name;
        link_a_2.appendChild(name);
        column.appendChild(col_card);

        // Anchor Tag With Paragraph Tag
        let link_a_3 = document.createElement("a");
        link_a_3.setAttribute("href", "#");
        col_card.appendChild(link_a_3);

        let cuisine = document.createElement("p");
        cuisine.innerHTML = values.cuisine;
        link_a_3.appendChild(cuisine);

        // FLEX DIV for Ratings and Rate 
        let flex_div = document.createElement("div");
        flex_div.classList.add("flex_div");
        col_card.appendChild(flex_div);
        column.appendChild(col_card);

        // Anchor Tag With Span Rating Tag
        let link_a_4 = document.createElement("a");
        link_a_4.setAttribute("href", "#");
        flex_div.appendChild(link_a_4);

        let ratings = document.createElement("span");
        ratings.classList.add("ratings");
        ratings.innerHTML = `<i class="fa-solid fa-star"></i> ${values.ratings}`,
            link_a_4.appendChild(ratings);
        column.appendChild(col_card);

        // Anchor Tag With Span rate Tag
        let link_min = document.createElement("a");
        link_min.setAttribute("href", "#");
        flex_div.appendChild(link_min);

        let min = document.createElement("span");
        min.innerHTML = `${values.time} Minutes`;
        link_min.appendChild(min);

        // Anchor Tag With Span rate Tag
        let link_a_5 = document.createElement("a");
        link_a_5.setAttribute("href", "#");
        flex_div.appendChild(link_a_5);

        let rate = document.createElement("span");
        rate.innerHTML = `&#8377; ${values.rate} FOR TWO`;
        link_a_5.appendChild(rate);

        //HOVER QUICK VIEW DIV 
        let hover_div = document.createElement("div");
        hover_div.classList.add("quick_view");
        column.appendChild(hover_div);

        // //Horizontal line
        let hr = document.createElement("hr");
        hover_div.appendChild(hr);

        // // Anchor Tag With Quick View sec
        let link_a_6 = document.createElement("a");
        link_a_6.setAttribute("href", "#");
        link_a_6.innerHTML = "Quick View";
        hover_div.appendChild(link_a_6);

        if (values.ratings >= 0 && values.ratings < 3) {
            ratings.style.backgroundColor = "red";
            ratings.style.border = "red";
        }
        else if (values.ratings >= 3 && values.ratings < 4) {
            ratings.style.backgroundColor = "rgb(219, 124, 56)";
            ratings.style.border = "rgb(219, 124, 56)";
        }
        else if (values.ratings >= 4 && values.ratings <= 5.0) {
            ratings.style.backgroundColor = "rgb(0 142 56)";
            ratings.style.border = "rgb(0 142 56)";
        }
        col_card.addEventListener("click", function () {
            location.href = "hotelmenu.html"
            // console.log("hi");
        });
    });
}
///////////////////////////////////////////

//default referesh value
function default_click1() {
    let colRemove = document.querySelectorAll(".col")
    colRemove.forEach(function (values) {
        values.remove();
    });
    itemrender(swiggyContents);
}

// Filtering rating section
function rateFilter() {
    let sort = swiggyContents.slice().sort(function (values, index) {
        return index.ratings - values.ratings;
    });
    let colRemove = document.querySelectorAll(".col")
    colRemove.forEach(function (values) {
        values.remove();
    });
    itemrender(sort);
};

// Filtering delivery Time section
function deliveryTime() {
    let sortTime = swiggyContents.slice().sort(function (values, index) {
        return values.time - index.time;
    });
    let colRemove = document.querySelectorAll(".col")
    colRemove.forEach(function (values) {
        values.remove();
    });
    itemrender(sortTime);
};

// Filtering Cost Low to High section
function costLtH() {
    let sortcostLtH = swiggyContents.slice().sort(function (values, index) {
        return values.rate - index.rate;
    });
    let colRemove = document.querySelectorAll(".col")
    colRemove.forEach(function (values) {
        values.remove();
    });
    itemrender(sortcostLtH);
};

// Filtering Cost high to low section
function costHtL() {
    let sortcostHtL = swiggyContents.slice().sort(function (values, index) {
        return index.rate - values.rate;
    });
    let colRemove = document.querySelectorAll(".col")
    colRemove.forEach(function (values) {
        values.remove();
    });
    itemrender(sortcostHtL);
};
///////////////////////////////////////////


