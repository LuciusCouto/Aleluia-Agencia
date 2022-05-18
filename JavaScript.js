function iconemodifica() {
    var iconeAleluia = window.document.querySelector(".marca_aleluia_agencia");

    if (clientWidth < 400) {
        iconeAleluia.src = "imagens/Icones, marcas e logotipos/ìcone-do-site.png";
        iconeAleluia.style.width = "30px";
        iconeAleluia.style.height = "30px";
    } else if (clientWidth > 400 && clientWidth < 1300) {
        iconeAleluia.src = "imagens/Icones, marcas e logotipos/Logotipo.png";
        iconeAleluia.style.width = "89.8px";
        iconeAleluia.style.height = "29.9px";
    } else {
        iconeAleluia.style.width = "6.58vw";
        iconeAleluia.style.height = "2.19vw";
    }
}