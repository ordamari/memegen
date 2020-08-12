'use strict'

function onInit(){
    renderGallery();   
}

function renderGallery(){
    var imgs=getImgs();
    var strHtmls= imgs.map(img=>{
        return `
        <div>
            <img  onclick="onCelectedImg(this,${img.id})" src="${img.url}" alt="${img.keyword[0]}">
        </div>
      `
    });
    strHtmls=strHtmls.join('');
    document.querySelector('.imgs-container').innerHTML= strHtmls;
}

function onCelectedImg(elImg,imgId){
    setMemeImg(imgId);
    document.querySelector('.gallery').hidden=true;
    document.querySelector('.meme-generator').hidden=false;
    renderImg();
    return elImg.src
}





