window.addEventListener("load", function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none"; // Hide the loader element

    var boxShadowElement = document.querySelector('.box_parent');
    boxShadowElement.classList.remove('hidden'); // Remove the 'hidden' class
});


// move up button
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



// Function to close the popup **********************************************************
function closePopup() {
    var videoContainer = document.querySelector(".box01_left_video");
    var youtubePlayer = document.getElementById("youtubePlayer");

    videoContainer.style.display = "none";
    youtubePlayer.src = "";
}

function toggleVideo() {
    var videoContainer = document.querySelector(".box01_left_video");
    var youtubePlayer = document.getElementById("youtubePlayer");

    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "flex";
        youtubePlayer.src = "https://www.youtube.com/embed/nLoja8w3vgo";
    } else {
        videoContainer.style.display = "none";
        youtubePlayer.src = ""; // Pauses the video
    }
}
// Function to youtube video the popup **********************************************************



document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box09_down_box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            boxes.forEach(function (otherBox) {
                otherBox.classList.add('frozen');
            });
        });

        box.addEventListener('mouseleave', function () {
            boxes.forEach(function (otherBox) {
                otherBox.classList.remove('frozen');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box08_down_box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            boxes.forEach(function (otherBox) {
                otherBox.classList.add('frozen');
            });
        });

        box.addEventListener('mouseleave', function () {
            boxes.forEach(function (otherBox) {
                otherBox.classList.remove('frozen');
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const divs = ["A_div01", "B_div01", "C_div01"];
    let currentDivIndex = 0;

    const updateDisplay = () => {
        divs.forEach((divId, index) => {
            const displayStyle = index === currentDivIndex ? "block" : "none";
            document.getElementById(divId).style.display = displayStyle;
        });
    };

    const leftArrowButton = document.getElementById("left_arrow_button01");
    const rightArrowButton = document.getElementById("right_arrow_button01");

    const handleResize = () => {
        if (window.innerWidth <= 1311) {
            updateDisplay();
        } else {
            // If the window is wider than 1310px, show all divs
            divs.forEach((divId) => {
                document.getElementById(divId).style.display = "block";
            });
        }
    };

    window.addEventListener("resize", handleResize);

    rightArrowButton.addEventListener("click", function () {
        currentDivIndex = (currentDivIndex + 1) % divs.length;
        updateDisplay();
    });

    leftArrowButton.addEventListener("click", function () {
        currentDivIndex = (currentDivIndex - 1 + divs.length) % divs.length;
        updateDisplay();
    });

    // Initial update on page load
    handleResize();
});




document.addEventListener("DOMContentLoaded", function () {
    const divs = ["A_div02", "B_div02", "C_div02"];
    let currentDivIndex = 0;

    const updateDisplay = () => {
        divs.forEach((divId, index) => {
            const displayStyle = index === currentDivIndex ? "block" : "none";
            document.getElementById(divId).style.display = displayStyle;
        });
    };

    const leftArrowButton = document.getElementById("left_arrow_button02");
    const rightArrowButton = document.getElementById("right_arrow_button02");

    const handleResize = () => {
        if (window.innerWidth <= 1311) {
            updateDisplay();
        } else {
            // If the window is wider than 1310px, show all divs
            divs.forEach((divId) => {
                document.getElementById(divId).style.display = "block";
            });
        }
    };

    window.addEventListener("resize", handleResize);

    rightArrowButton.addEventListener("click", function () {
        currentDivIndex = (currentDivIndex + 1) % divs.length;
        updateDisplay();
    });

    leftArrowButton.addEventListener("click", function () {
        currentDivIndex = (currentDivIndex - 1 + divs.length) % divs.length;
        updateDisplay();
    });

    // Initial update on page load
    handleResize();
});
// Function to BOX08 BUTTON for div changing **********************************************************



document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menubtn");
    var closeButton = document.getElementById("closebtn");
    var menuList = document.querySelector(".header_main-menu_ul01");
    var menuListAs = document.querySelectorAll(".header_main-menu_ul-li01-a");

    menuList.style.display = "none";

    menuButton.addEventListener("click", function () {
        menuList.style.display = "block";
        menuButton.style.display = "none";
        closeButton.style.display = "inline-block";
    });

    closeButton.addEventListener("click", function () {
        menuList.style.display = "none";
        menuButton.style.display = "inline-block";
        closeButton.style.display = "none";
    });


    // Event listener for the a button
    // Loop through each anchor element and add event listener
    menuListAs.forEach(function (menuListA) {
        menuListA.addEventListener("click", function () {
            menuList.style.display = "none";
            menuButton.style.display = "inline-block";
            closeButton.style.display = "none";
        });
    });


    // // Event listener for the home button
    // homeButton00.addEventListener("click", function () {
    //     // Hide the menu and show the menu button
    //     menuList.style.display = "none";
    //     menuButton.style.display = "inline-block"; // Show menu button
    //     closeButton.style.display = "none";
    // });

    // // Event listener for the services button
    // servicesButton00.addEventListener("click", function () {
    //     // Hide the menu and show the menu button
    //     menuList.style.display = "none";
    //     menuButton.style.display = "inline-block"; // Show menu button
    //     closeButton.style.display = "none";
    // });

    // // Event listener for the about us button
    // aboutUsButton00.addEventListener("click", function () {
    //     // Hide the menu and show the menu button
    //     menuList.style.display = "none";
    //     menuButton.style.display = "inline-block"; // Show menu button
    //     closeButton.style.display = "none";
    // });

    // // Event listener for the contact us button
    // contactUsButton00.addEventListener("click", function () {
    //     // Hide the menu and show the menu button
    //     menuList.style.display = "none";
    //     menuButton.style.display = "inline-block"; // Show menu button
    //     closeButton.style.display = "none";
    // });

});



/************************animation*********************************/


// rect.bottom <= window.innerHeight; // it is for top to bottom (image can move)
// rect.top >= 250; // it is for bottom to top (image can move)
// rect.bottom <= window.innerHeight && rect.top >= 250; if we use both it works top to bottom and bottom to top (image can move)

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hidden-image-left');

    function checkVisibility() {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top >= 450;

            if (isVisible) {
                image.classList.add('visible-image-left');
            } else {
                image.classList.remove('visible-image-left');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hidden-image-right');

    function checkVisibility() {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top >= 450;

            if (isVisible) {
                image.classList.add('visible-image-right');
            } else {
                image.classList.remove('visible-image-right');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hidden-image-top');

    function checkVisibility() {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top >= 700;

            if (isVisible) {
                image.classList.add('visible-image-top');
            } else {
                image.classList.remove('visible-image-top');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hidden-image-right-slow');

    function checkVisibility() {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top >= 550;

            if (isVisible) {
                image.classList.add('visible-image-right-slow');
            } else {
                image.classList.remove('visible-image-right-slow');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});



// MobileView
document.addEventListener('DOMContentLoaded', function () {
    const isMobileView = window.innerWidth < 768; // You can adjust the breakpoint as needed
    const leftImages = document.querySelectorAll('.hidden-image-left');
    const rightImages = document.querySelectorAll('.hidden-image-right');
    const topImages = document.querySelectorAll('.hidden-image-top');
    const slowImages = document.querySelectorAll('.hidden-image-right-slow');

    function checkVisibility(images, offset) {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top >= offset;

            if (isVisible) {
                image.classList.add('visible-image');
            } else {
                image.classList.remove('visible-image');
            }
        });
    }

    function handleScroll() {
        if (isMobileView) {
            checkVisibility(leftImages, 220);
            checkVisibility(rightImages, 220);
            checkVisibility(topImages, 350);
            checkVisibility(slowImages, 270);
        } else {
            checkVisibility(leftImages, 450);
            checkVisibility(rightImages, 450);
            checkVisibility(topImages, 700);
            checkVisibility(slowImages, 550);
        }
    }

    checkVisibility(leftImages, isMobileView ? 220 : 450);
    checkVisibility(rightImages, isMobileView ? 220 : 450);
    checkVisibility(topImages, isMobileView ? 350 : 700);
    checkVisibility(slowImages, isMobileView ? 270 : 550);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resize events to adjust for changes in viewport width
});

/************************animation*********************************/





window.onscroll = function () { stickyHeader() };

function stickyHeader() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("sticky-header").classList.add("sticky");
    } else {
        document.getElementById("sticky-header").classList.remove("sticky");
    }
}








// Cache the selectors for better performance
const header = document.getElementsByClassName('sticky');
const sticky_header = document.getElementsByClassName('sticky-header');
const moon = document.getElementById('btnSwitch');
const icon = moon.querySelector('img');
const anchorTag = document.querySelectorAll('a');
const box04DownImageCircle = document.getElementsByClassName('box04_down_image-circle');
const box04DownBox = document.getElementsByClassName('box04_down_box ');
const box05DownBoxLeft = document.getElementsByClassName('box05_down_box-left');
const box05DownBoxRight = document.getElementsByClassName('box05_down_box-right');
const floatingContentTopLeft = document.getElementsByClassName('floating-content__top-left');
const floatingContentBottomRight = document.getElementsByClassName('floating-content__bottom-right');
const box03RightImageTopContent = document.getElementsByClassName('box03_right_image_top_content');
const box03RightImageBottomContent = document.getElementsByClassName('box03_right_image_bottom_content');
const box06DownBox = document.getElementsByClassName('box06_down_box');
const box10LeftContentButton = document.getElementsByClassName('box10_left_content-button');
const box08DownBox = document.getElementsByClassName('box08_down_box');
const box09DownBox = document.getElementsByClassName('box09_down_box');
const box07DownBoxStretchedLink = document.getElementsByClassName('box07_down_box-stretched_link');
const box03LeftListH6 = document.getElementsByClassName('box03_left_list_h6');
const box07DownBoxATag = document.getElementsByClassName('box07_down_box_a-tag');
const headerMainMenuUlLi01A = document.querySelectorAll('.header_main-menu_ul-li01-a');
const box05Middle = document.querySelectorAll('.box05_middle');
const boxContent = document.getElementsByClassName('box_content');
const para = document.getElementsByClassName('para');








const body = document.body;

moon.addEventListener('click', () => {

    stickyHeader()
    const theme = document.documentElement.dataset.bsTheme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.bsTheme = theme;

    icon.src = theme === 'light' ? 'sun.svg' : 'moon.svg';
    moon.style.backgroundColor = theme === 'light' ? 'white' : '#00D094';
    body.style.background = theme === 'light' ? '#001010' : 'linear-gradient(to right, transparent, whitesmoke 80%, transparent)';
    body.style.color = theme === 'light' ? 'white' : 'black';




    // Access elements by index
    for (let i = 0; i < header.length; i++) {
        header[i].style.backgroundColor = theme === 'light' ? '#001010' : 'whitesmoke';

    }

    for (let i = 0; i < sticky_header.length; i++) {
        sticky_header[i].style.backgroundColor = theme === 'light' ? '#001010' : 'whitesmoke';

    }

    for (let i = 0; i < anchorTag.length; i++) {
        anchorTag[i].style.color = theme === 'light' ? 'white' : 'black';
    }

    for (let i = 0; i < box04DownImageCircle.length; i++) {
        box04DownImageCircle[i].style.backgroundColor = theme === 'light' ? '#0b1c18' : 'white';
    }

    for (let i = 0; i < box04DownBox.length; i++) {
        box04DownBox[i].style.background = theme === 'light' ? 'linear-gradient(to top, #001515, transparent)' : 'linear-gradient(to top, #EDF3F8, transparent)';
    }

    for (let i = 0; i < box05DownBoxLeft.length; i++) {
        box05DownBoxLeft[i].style.background = theme === 'light' ? 'linear-gradient(to left, #001515, transparent)' : 'linear-gradient(to left, #EDF3F8, transparent)';
    }

    for (let i = 0; i < box05DownBoxRight.length; i++) {
        box05DownBoxRight[i].style.background = theme === 'light' ? 'linear-gradient(to right, #001515, transparent)' : 'linear-gradient(to right, #EDF3F8, transparent)';
    }



    for (let i = 0; i < floatingContentTopLeft.length; i++) {
        floatingContentTopLeft[i].style.background = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < floatingContentBottomRight.length; i++) {
        floatingContentBottomRight[i].style.background = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box03RightImageTopContent.length; i++) {
        box03RightImageTopContent[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box03RightImageBottomContent.length; i++) {
        box03RightImageBottomContent[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box06DownBox.length; i++) {
        box06DownBox[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box10LeftContentButton.length; i++) {
        box10LeftContentButton[i].style.color = theme === 'light' ? 'white' : 'black';
    }

    for (let i = 0; i < box08DownBox.length; i++) {
        box08DownBox[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box09DownBox.length; i++) {
        box09DownBox[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box07DownBoxStretchedLink.length; i++) {
        box07DownBoxStretchedLink[i].style.color = theme === 'light' ? 'white' : 'black';
    }

    for (let i = 0; i < box03LeftListH6.length; i++) {
        box03LeftListH6[i].style.backgroundColor = theme === 'light' ? '#001515' : 'whitesmoke';
    }

    for (let i = 0; i < box03LeftListH6.length; i++) {
        box03LeftListH6[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < box07DownBoxATag.length; i++) {
        box07DownBoxATag[i].style.backgroundColor = theme === 'light' ? '#001515' : 'whitesmoke';
    }

    for (let i = 0; i < headerMainMenuUlLi01A.length; i++) {
        headerMainMenuUlLi01A[i].style.color = theme === 'light' ? 'black' : 'black';
    }

    for (let i = 0; i < box05Middle.length; i++) {
        box05Middle[i].style.backgroundColor = theme === 'light' ? '#001515' : '#EDF2F8';
    }

    for (let i = 0; i < boxContent.length; i++) {
        boxContent[i].style.color = theme === 'light' ? 'gray' : 'rgb(50, 50, 50)';
    }

    for (let i = 0; i < para.length; i++) {
        para[i].style.color = theme === 'light' ? 'whitesmoke' : 'black';
    }


});





const headers = document.querySelectorAll('.box10_left_content-header');
const collapses = document.querySelectorAll('.box10_left_content-collapse');
const showButtons = document.querySelectorAll('.box10_left_content-button-show');
const hideButtons = document.querySelectorAll('.box10_left_content-button-hide');

headers.forEach((header, index) => {
    header.addEventListener('click', () => {
        collapses.forEach((collapse, i) => {
            collapse.style.display = i === index ? 'block' : 'none';
        });

        showButtons.forEach((showButton, i) => {
            showButton.style.display = i === index ? 'none' : 'block';
        });

        hideButtons.forEach((hideButton, i) => {
            hideButton.style.display = i === index ? 'block' : 'none';
        });
    });
});




const pageNumberList = document.querySelectorAll('.box10_left_page_number');
const pageList = document.querySelectorAll('.box10_left_page_list');

// Set background color of the first element in pageNumberList
pageNumberList[0].style.backgroundColor = '#00D094';

pageNumberList.forEach((pageNumber, index) => {
    pageNumber.addEventListener('click', () => {
        // Toggle display of pageList elements
        pageList.forEach((pageListItem, i) => {
            pageListItem.style.display = i === index ? 'block' : 'none';
        });

        // Change background color of pageNumber elements
        pageNumberList.forEach((pageNumberItem, i) => {
            pageNumberItem.style.backgroundColor = i === index ? '#00D094' : 'gray';
        });
    });
});



/******************************************************************** */
function updateSubjectContactUs() {
    var textareaValue = document.getElementById("textarea").value;
    var messageField = document.getElementById("message");
    messageField.value = textareaValue;
    var nameValue = document.getElementById("name").value;
    var subjectField = document.getElementById("subject");
    subjectField.value = "Contact Us - " + nameValue;


    alert("Your request has been sent successfully!")

    var currentUrl = window.location.href;
    document.getElementsByName('_next')[0].value = currentUrl;
    // window.location.reload()
}


// function updateSubjectSubscribe() {
//     var subjectField = document.getElementById("subject");
//     subjectField.value = "Customer Request for Subscription";

//     alert("you have been subscribed successfully!")

//     var currentUrl = window.location.href;
//     document.getElementsByName('_next')[0].value = currentUrl;
// }
/******************************************************************** */
