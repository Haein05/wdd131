
const themeSelector = document.getElementById('theme-selector');
const body = document.body;
const logo = document.querySelector('.logo'); 


function changeTheme() {

    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');  
        logo.src = 'byui-logo_white.png';  
    } else {
        body.classList.remove('dark'); 
        logo.src = 'logo.webp'; 
    }
}


themeSelector.addEventListener('change', changeTheme);