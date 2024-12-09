let stage = {
    references: {
        logo_img: document.getElementById('brand_logo'),
    },
};



function toggleTheme(){
    document.body.classList.toggle('lightmode');

    if (document.body.classList.contains("lightmode")){
        stage.references.logo_img.src = 'assets/images/logo/logo.png';
    }else {
        stage.references.logo_img.src = 'assets/images/logo/white-logo.png';
    }
}