// UI 
const testimonialel = document.querySelector(".testimonial");
const userimageel = document.querySelector(".user-image");
const usernameel = document.querySelector(".username");
const roleel = document.querySelector(".role");

const testinmonials = [{
        name: "Mya Mya",
        role: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/48.jpg",
        text: "Mya Mya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nihil? Facilis ab impedit dolores, esse distinctio animi quia consequuntur cupiditate eveniet similique, eaque consequatur sint? Illo odit aut pariatur quis."
    },
    {
        name: "Aung Aung",
        role: "Manager",
        photo: "https://randomuser.me/api/portraits/men/49.jpg",
        text: "Aung Aung Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nihil? Facilis ab impedit dolores, esse distinctio animi quia consequuntur cupiditate eveniet similique, eaque consequatur sint? Illo odit aut pariatur quis."
    }, {
        name: "Su Su",
        role: "Accountant",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        text: "Su Su Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nihil? Facilis ab impedit dolores, esse distinctio animi quia consequuntur cupiditate eveniet similique, eaque consequatur sint? Illo odit aut pariatur quis."
    }, {
        name: "Kyaw Kyaw",
        role: "Sales",
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
        text: "Kyaw Kyaw Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nihil? Facilis ab impedit dolores, esse distinctio animi quia consequuntur cupiditate eveniet similique, eaque consequatur sint? Illo odit aut pariatur quis."
    }, {
        name: "Zue Zue",
        role: "Warhouse Manager",
        photo: "https://randomuser.me/api/portraits/women/52.jpg",
        text: "Zue Zue Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nihil? Facilis ab impedit dolores, esse distinctio animi quia consequuntur cupiditate eveniet similique, eaque consequatur sint? Illo odit aut pariatur quis."
    },
];
// console.log(testinmonials[0].text);

let idx = 0;

function updatetestimonial() {
    const { name, role, photo, text } = testinmonials[idx];
    testimonialel.textContent = text;
    userimageel.src = photo;
    usernameel.textContent = name;
    roleel.textContent = role;

    idx++;
    if (idx > testinmonials.length - 1) {
        idx = 0;
    }
}


updatetestimonial();
setInterval(updatetestimonial, 10000);