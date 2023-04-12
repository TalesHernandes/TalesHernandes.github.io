var textoLista = ['Introducing our <span style="color: rgb(233, 115, 72);"> innovative plataform </span> for managing your investiment portifolio','The <span style="color: rgb(233, 115, 72);"> newest </span> financial App','An App made for <span style="color: rgb(233, 115, 72);"> pratical and simple </span> use', 'Our <span style="color: rgb(233, 115, 72);">  new service </span> mobile app to set your financial plan']
var paragLista = ['Donwload now on the local app store on your smartphone','Enabling banking transactions on-the-go, from any, using your smartphone','Empowering you to bank at your fingertips, anytime and from any place with a mobile device','Making it possible to perform banking activities anytime and any where using a mobile device']

function mudarImg(num) {

    if (num == 3) {

        document.getElementById("img"+ 0).style.zIndex=3;
        document.getElementById("img"+ 0).style.opacity=1;
        document.getElementById("img"+ 1).style.zIndex=5;
        document.getElementById("img"+ 1).style.opacity=1;
        document.getElementById("img"+ 2).style.zIndex=4;
        document.getElementById("img"+ 2).style.opacity=1;

        document.getElementById("texto1").innerHTML = textoLista[3];
        document.getElementById("parag1").innerHTML = paragLista[3];

        document.getElementById("img0").src = 'imagens/card3_inativo.png'
        document.getElementById("img1").src = 'imagens/card1_ativo.png'
        document.getElementById("img2").src = 'imagens/card2_inativo.png'

    }


    else {

        for(i =0; i < 3; i++){

            document.getElementById("img"+i).style.opacity=0.15;  
            document.getElementById("img"+i).style.zIndex=0;
        }
    
        document.getElementById("img"+num).style.zIndex=5;
        document.getElementById("img"+num).style.opacity=1;

        document.getElementById("texto1").innerHTML = textoLista[num];
        document.getElementById("parag1").innerHTML = paragLista[num];
    }

            
    if (num == 0) {
        document.getElementById("img0").src = 'imagens/card3_ativo.png'
        document.getElementById("img1").src = 'imagens/card1_inativo.png'
        document.getElementById("img2").src = 'imagens/card2_inativo.png'
    }

    if (num == 1) {
        document.getElementById("img0").src = 'imagens/card3_inativo.png'
        document.getElementById("img1").src = 'imagens/card1_ativo.png'
        document.getElementById("img2").src = 'imagens/card2_inativo.png'
    }

    if (num == 2) {
        document.getElementById("img0").src = 'imagens/card3_inativo.png'
        document.getElementById("img1").src = 'imagens/card1_inativo.png'
        document.getElementById("img2").src = 'imagens/card2_ativo.png'
    }

}
