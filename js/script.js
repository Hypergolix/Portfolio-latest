// Convert to React later, this is for basic functionality and testing UX and UI
var navID = "";

function toggleMenu() {
    navID = document.getElementById("midLinks");
    if (navID.className === "navBar__linksMid") {
        navID.className += " responsive";
    } else {
        navID.className = "navBar__linksMid";
    }
    console.log(navID);
}

window.onload = function() {
    const main = document.getElementById("main");
    const arr = [];

    for (i = 0; i < 10; i++) {
        const ballElement = document.createElement("span");
        ballElement.className += "ball";
        //ballElement.id = "#" + toString(i);

        const size = (Math.random() * (120 - 30) + 30).toFixed().toString() + "px";
        ballElement.style.width = size;
        ballElement.style.height = size;

        const positionTop = (Math.random() * (window.innerHeight - 100) + 100).toFixed().toString() + "px";
        const positionLeft = (Math.random() * ((80) - 1) + 1).toFixed().toString() + "%";
        ballElement.style.top = positionTop;
        ballElement.style.left = positionLeft;

        //ballElement.style.translate = `(${Math.random()}px, ${Math.random()}px)`
        //ballElement.style.transform = `translate(${positionTop}, ${positionLeft})`;
        ballElement.style.zIndex = "-1";
        main.appendChild(ballElement);

        arr.push(ballElement);
        // const test = document.getElementById("#" + toString(i));
        // test.style.top = (Math.random() * (window.innerHeight - 100)).toFixed().toString() + "px";
        // test.style.left = (Math.random() * (window.innerWidth - 100)).toFixed().toString() + "px";
    }
    for (i = 0; i < 10; i++) {
        // arr[i].classList.add("move");
        // arr[i].style.top = "0px";
        // arr[i].style.left = "0px";
        //arr[i].style.transform = "translate(200px, 200px)";
    }
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// function about() {
//     itemID = document.getElementById("shape");
//     itemID.classList.toggle("slideIn");
//     //itemID.className += " slideIn";
// }


// Below code closes the menu if it was previously open and the user then resizes the page over 768px wide

// navID won't be initialized with a value until the toggleMenu function has been run once - not sure if this will
// Cause issues? Also is it inneficient to check constantly whether the page is being resized?
window.addEventListener("resize", function() {
    if (window.innerWidth > 768 && navID.className !== "navBar__linksMid") {
        navID.className -= " responsive";
        navID.className = "navBar__linksMid";
    }
    // resize.classList.remove(" responsive");
});

// Add so that the menu closes if "clicking out" (clicking body element) of it?