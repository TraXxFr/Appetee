function resize() {

    var ipad_match_rotate = window.matchMedia("(max-width: 1024px)").matches;
    let footer = $("footer");
    let footer_logo = $("#footer-logo");
    let footer_right = $("#footer-right");
    let footer_downloads = $("#footer-downloads");
    if (ipad_match_rotate) {
        footer[0].style.backgroundImage = "url('img/footer_background_responsive.png')";
        footer_logo[0].src = "img/footer_logo_responsive.png";
        footer_right[0].removeChild(footer_downloads[0]);
        footer_right[0].appendChild(footer_downloads[0]);
    }

    var iphone_match_rotate = window.matchMedia("(max-width: 414px)").matches;

    let body = $("body");

    // HEADER
    let logo = $("#logo");
    let links = $("#links");
    let slogan = document.createElement("h1");
    slogan.id = "slogan";
    slogan.innerHTML = "Petit à petit vient l'appetee !";
    let header = $("header");

    // FIND MERCHANT
    let find_merchants = $("#find-merchants");
    let phone_img = $("#phone-img");

    // TASTES
    let tastes_right = $("#tastes-right");

    // NUMBER
    let number_img = $("#number-img");

    // BALANCED
    let balanced = $("#balanced");
    let balanced_img = $("#balanced-img");

    if(iphone_match_rotate) {

        // HEADER
        body[0].style.backgroundImage = "url('img/header_background_responsive.png')";
        header[0].removeChild(links[0]);
        header[0].appendChild(slogan);
        logo[0].src = "img/footer_logo_responsive.png";

        // FIND MERCHANT
        find_merchants[0].removeChild(phone_img[0]);
        find_merchants[0].prepend(phone_img[0])

        // TASTES
        tastes_right[0].style.background = "url('img/tastes_background_responsive.png') no-repeat right 98% top 0";
        tastes_right[0].style.backgroundSize = "175%";

        // NUMBER IMG
        number_img[0].src = "img/number_img_responsive.png";
        balanced_img[0].src = "img/balanced_img_responsive.png";
        balanced[0].removeChild(balanced_img[0]);
        balanced[0].appendChild(balanced_img[0]);
    }
}

resize();
window.addEventListener('resize', resize, false);