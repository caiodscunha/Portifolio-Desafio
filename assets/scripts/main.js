let stage = {
    references: {
        logo_img: document.getElementById('brand_logo'),
        toggleThemeIcon: document.getElementById('toggleTheme'),
        root: document.documentElement,
        menuLinks: document.querySelectorAll('.menu__link'),
    },
};



function toggleTheme(){
    let currTheme = stage.references.root.getAttribute('data-theme');

    if (currTheme === "lightmode"){
        stage.references.root.setAttribute('data-theme', 'darkmode')

        stage.references.toggleThemeIcon.classList.remove('bi-sun');
        stage.references.toggleThemeIcon.classList.add('bi-moon-stars');

    }else {
        stage.references.root.setAttribute('data-theme', 'lightmode')

        stage.references.toggleThemeIcon.classList.remove('bi-moon-stars');
        stage.references.toggleThemeIcon.classList.add('bi-sun');
    }
}

function toggleActiveAccordion(button){
    const accordionItem = button.parentElement;
    accordionItem.classList.toggle('active');
}

stage.references.menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        stage.references.menuLinks.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});