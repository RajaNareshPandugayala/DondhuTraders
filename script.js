window.addEventListener("load", function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none"; // Hide the loader element

    var boxShadowElement = document.querySelector('.box_parent');
    boxShadowElement.classList.remove('hidden'); // Remove the 'hidden' class
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
const moon = document.getElementById('btnSwitch');
const icon = moon.querySelector('img');
const anchorTag = document.querySelectorAll('a');
const box04DownImageCircle = document.getElementsByClassName('box04_down_image-circle');
const box04DownBox = document.getElementsByClassName('box04_down_box ');
const box05DownBox = document.getElementsByClassName('box05_down_box');
const floatingContentTopLeft = document.getElementsByClassName('floating-content__top-left');
const floatingContentBottomRight = document.getElementsByClassName('floating-content__bottom-right');
const floatingContentItemStyle2 = document.getElementsByClassName('floating-content__item--style2');
const floatingContentItemStyle3 = document.getElementsByClassName('floating-content__item--style3');
const box06DownBox = document.getElementsByClassName('box06_down_box');
const box10LeftContentButton = document.getElementsByClassName('box10_left_content-button');
const box08DownBox = document.getElementsByClassName('box08_down_box');
const box09DownBox = document.getElementsByClassName('box09_down_box');
const box07DownBoxStretchedLink = document.getElementsByClassName('box07_down_box-stretched_link');
const box03LeftListH6 = document.getElementsByClassName('box03_left_list_h6');
const box07DownBoxATag = document.getElementsByClassName('box07_down_box_a-tag');





const body = document.body;

moon.addEventListener('click', () => {
    const theme = document.documentElement.dataset.bsTheme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.bsTheme = theme;

    icon.src = theme === 'light' ? 'sun.svg' : 'moon.svg';
    moon.style.backgroundColor = theme === 'light' ? 'white' : '#00D094';
    body.style.backgroundColor = theme === 'light' ? 'black' : 'whitesmoke';
    body.style.color = theme === 'light' ? 'white' : 'black';



    // Access elements by index
    for (let i = 0; i < header.length; i++) {
        header[i].style.backgroundColor = theme === 'light' ? 'black' : 'white';

    }

    for (let i = 0; i < anchorTag.length; i++) {
        anchorTag[i].style.color = theme === 'light' ? 'white' : 'black';
    }

    for (let i = 0; i < box04DownImageCircle.length; i++) {
        box04DownImageCircle[i].style.backgroundColor = theme === 'light' ? '#0b1c18' : 'white';
    }

    for (let i = 0; i < box04DownBox.length; i++) {
        box04DownBox[i].style.backgroundColor = theme === 'light' ? '#001515' : '#EDF2F8';
    }

    for (let i = 0; i < box05DownBox.length; i++) {
        box05DownBox[i].style.backgroundColor = theme === 'light' ? '#001515' : '#EDF2F8';
    }



    for (let i = 0; i < floatingContentTopLeft.length; i++) {
        floatingContentTopLeft[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < floatingContentBottomRight.length; i++) {
        floatingContentBottomRight[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < floatingContentItemStyle2.length; i++) {
        floatingContentItemStyle2[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

    for (let i = 0; i < floatingContentItemStyle3.length; i++) {
        floatingContentItemStyle3[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
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

    for (let i = 0; i < box07DownBoxATag.length; i++) {
        box07DownBoxATag[i].style.backgroundColor = theme === 'light' ? '#001515' : 'whitesmoke';
    }

});













// Get references to the buttons and the plus/message elements
const accordionHeader01 = document.querySelector('.box10_left_content-header01');
const accordionHeader02 = document.querySelector('.box10_left_content-header02');
const accordionHeader03 = document.querySelector('.box10_left_content-header03');
const accordionHeader04 = document.querySelector('.box10_left_content-header04');
const accordionHeader05 = document.querySelector('.box10_left_content-header05');
const accordionHeader06 = document.querySelector('.box10_left_content-header06');

const accordionButtonShow01 = document.querySelector('.box10_left_content-button-show01');
const accordionButtonShow02 = document.querySelector('.box10_left_content-button-show02');
const accordionButtonShow03 = document.querySelector('.box10_left_content-button-show03');
const accordionButtonShow04 = document.querySelector('.box10_left_content-button-show04');
const accordionButtonShow05 = document.querySelector('.box10_left_content-button-show05');
const accordionButtonShow06 = document.querySelector('.box10_left_content-button-show06');

const accordionButtonHide01 = document.querySelector('.box10_left_content-button-hide01');
const accordionButtonHide02 = document.querySelector('.box10_left_content-button-hide02');
const accordionButtonHide03 = document.querySelector('.box10_left_content-button-hide03');
const accordionButtonHide04 = document.querySelector('.box10_left_content-button-hide04');
const accordionButtonHide05 = document.querySelector('.box10_left_content-button-hide05');
const accordionButtonHide06 = document.querySelector('.box10_left_content-button-hide06');

const accordionCollapse01 = document.querySelector('.box10_left_content-collapse01');
const accordionCollapse02 = document.querySelector('.box10_left_content-collapse02');
const accordionCollapse03 = document.querySelector('.box10_left_content-collapse03');
const accordionCollapse04 = document.querySelector('.box10_left_content-collapse04');
const accordionCollapse05 = document.querySelector('.box10_left_content-collapse05');
const accordionCollapse06 = document.querySelector('.box10_left_content-collapse06');




accordionButtonShow01.style.display = 'none';
accordionButtonShow02.style.display = 'block';
accordionButtonShow03.style.display = 'block';
accordionButtonShow04.style.display = 'block';
accordionButtonShow05.style.display = 'block';
accordionButtonShow06.style.display = 'block';

accordionButtonHide01.style.display = 'block';
accordionButtonHide02.style.display = 'none';
accordionButtonHide03.style.display = 'none';
accordionButtonHide04.style.display = 'none';
accordionButtonHide05.style.display = 'none';
accordionButtonHide06.style.display = 'none';

accordionCollapse01.style.display = 'block';
accordionCollapse02.style.display = 'none';
accordionCollapse03.style.display = 'none';
accordionCollapse04.style.display = 'none';
accordionCollapse05.style.display = 'none';
accordionCollapse06.style.display = 'none';


// Add click event listeners to the buttons
accordionHeader01.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'none';
    accordionButtonShow02.style.display = 'block';
    accordionButtonShow03.style.display = 'block';
    accordionButtonShow04.style.display = 'block';
    accordionButtonShow05.style.display = 'block';
    accordionButtonShow06.style.display = 'block';

    accordionButtonHide01.style.display = 'block';
    accordionButtonHide02.style.display = 'none';
    accordionButtonHide03.style.display = 'none';
    accordionButtonHide04.style.display = 'none';
    accordionButtonHide05.style.display = 'none';
    accordionButtonHide06.style.display = 'none';

    accordionCollapse01.style.display = 'block';
    accordionCollapse02.style.display = 'none';
    accordionCollapse03.style.display = 'none';
    accordionCollapse04.style.display = 'none';
    accordionCollapse05.style.display = 'none';
    accordionCollapse06.style.display = 'none';
});


accordionHeader02.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'block';
    accordionButtonShow02.style.display = 'none';
    accordionButtonShow03.style.display = 'block';
    accordionButtonShow04.style.display = 'block';
    accordionButtonShow05.style.display = 'block';
    accordionButtonShow06.style.display = 'block';

    accordionButtonHide01.style.display = 'none';
    accordionButtonHide02.style.display = 'block';
    accordionButtonHide03.style.display = 'none';
    accordionButtonHide04.style.display = 'none';
    accordionButtonHide05.style.display = 'none';
    accordionButtonHide06.style.display = 'none';

    accordionCollapse01.style.display = 'none';
    accordionCollapse02.style.display = 'block';
    accordionCollapse03.style.display = 'none';
    accordionCollapse04.style.display = 'none';
    accordionCollapse05.style.display = 'none';
    accordionCollapse06.style.display = 'none';
});


accordionHeader03.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'block';
    accordionButtonShow02.style.display = 'block';
    accordionButtonShow03.style.display = 'none';
    accordionButtonShow04.style.display = 'block';
    accordionButtonShow05.style.display = 'block';
    accordionButtonShow06.style.display = 'block';

    accordionButtonHide01.style.display = 'none';
    accordionButtonHide02.style.display = 'none';
    accordionButtonHide03.style.display = 'block';
    accordionButtonHide04.style.display = 'none';
    accordionButtonHide05.style.display = 'none';
    accordionButtonHide06.style.display = 'none';

    accordionCollapse01.style.display = 'none';
    accordionCollapse02.style.display = 'none';
    accordionCollapse03.style.display = 'block';
    accordionCollapse04.style.display = 'none';
    accordionCollapse05.style.display = 'none';
    accordionCollapse06.style.display = 'none';
});


accordionHeader04.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'block';
    accordionButtonShow02.style.display = 'block';
    accordionButtonShow03.style.display = 'block';
    accordionButtonShow04.style.display = 'none';
    accordionButtonShow05.style.display = 'block';
    accordionButtonShow06.style.display = 'block';

    accordionButtonHide01.style.display = 'none';
    accordionButtonHide02.style.display = 'none';
    accordionButtonHide03.style.display = 'none';
    accordionButtonHide04.style.display = 'block';
    accordionButtonHide05.style.display = 'none';
    accordionButtonHide06.style.display = 'none';

    accordionCollapse01.style.display = 'none';
    accordionCollapse02.style.display = 'none';
    accordionCollapse03.style.display = 'none';
    accordionCollapse04.style.display = 'block';
    accordionCollapse05.style.display = 'none';
    accordionCollapse06.style.display = 'none';
});


accordionHeader05.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'block';
    accordionButtonShow02.style.display = 'block';
    accordionButtonShow03.style.display = 'block';
    accordionButtonShow04.style.display = 'block';
    accordionButtonShow05.style.display = 'none';
    accordionButtonShow06.style.display = 'block';

    accordionButtonHide01.style.display = 'none';
    accordionButtonHide02.style.display = 'none';
    accordionButtonHide03.style.display = 'none';
    accordionButtonHide04.style.display = 'none';
    accordionButtonHide05.style.display = 'block';
    accordionButtonHide06.style.display = 'none';

    accordionCollapse01.style.display = 'none';
    accordionCollapse02.style.display = 'none';
    accordionCollapse03.style.display = 'none';
    accordionCollapse04.style.display = 'none';
    accordionCollapse05.style.display = 'block';
    accordionCollapse06.style.display = 'none';
});


accordionHeader06.addEventListener('click', () => {
    accordionButtonShow01.style.display = 'block';
    accordionButtonShow02.style.display = 'block';
    accordionButtonShow03.style.display = 'block';
    accordionButtonShow04.style.display = 'block';
    accordionButtonShow05.style.display = 'block';
    accordionButtonShow06.style.display = 'none';

    accordionButtonHide01.style.display = 'none';
    accordionButtonHide02.style.display = 'none';
    accordionButtonHide03.style.display = 'none';
    accordionButtonHide04.style.display = 'none';
    accordionButtonHide05.style.display = 'none';
    accordionButtonHide06.style.display = 'block';

    accordionCollapse01.style.display = 'none';
    accordionCollapse02.style.display = 'none';
    accordionCollapse03.style.display = 'none';
    accordionCollapse04.style.display = 'none';
    accordionCollapse05.style.display = 'none';
    accordionCollapse06.style.display = 'block';
});
