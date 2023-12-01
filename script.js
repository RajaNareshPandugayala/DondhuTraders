window.addEventListener("load", function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none"; // Hide the loader element

    var boxShadowElement = document.querySelector('.box_parent');
    boxShadowElement.classList.remove('hidden'); // Remove the 'hidden' class
});







// Cache the selectors for better performance
const moon = document.getElementById('btnSwitch');
const icon = moon.querySelector('img');
const anchorTag = document.querySelectorAll('a');
const serviceThumbInner = document.getElementsByClassName('service__thumb-inner');
const colLg4 = document.getElementsByClassName('col-lg-4');
const body = document.body;

moon.addEventListener('click', () => {
    const theme = document.documentElement.dataset.bsTheme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.bsTheme = theme;

    icon.src = theme === 'light' ? 'sun.svg' : 'moon.svg';
    moon.style.backgroundColor = theme === 'light' ? 'white' : '#00D094';
    body.style.backgroundColor = theme === 'light' ? 'black' : 'white';
    body.style.color = theme === 'light' ? 'white' : 'black';


    // Access elements by index
    for (let i = 0; i < anchorTag.length; i++) {
        anchorTag[i].style.color = theme === 'light' ? 'white' : 'black';
    }

    for (let i = 0; i < serviceThumbInner.length; i++) {
        serviceThumbInner[i].style.backgroundColor = theme === 'light' ? '#0b1c18' : 'white';
    }

    for (let i = 0; i < colLg4.length; i++) {
        colLg4[i].style.backgroundColor = theme === 'light' ? '#001515' : 'white';
    }

});
