'use strict'

function onInit() {
    renderFilters();
    renderGallery();
}

function renderGallery() {
    var imgs = getImgs();
    var strHtmls = imgs.map(img => {
        return `
        <div>
            <img  onclick="onCelectedImg(this,${img.id})" src="${img.url}" alt="${img.keywords[0]}">
        </div>
      `
    });
    strHtmls = strHtmls.join('');
    document.querySelector('.imgs-container').innerHTML = strHtmls;
}

function renderFilters() {
    var strHTMLs = [];
    for (const keyword in gKeywords) {
        var strHTML = `<span onclick="onFilter('${keyword}')" style="font-size: ${gKeywords[keyword]}px;">${keyword}</span>`;
        strHTMLs.push(strHTML);
    }
    strHTMLs = strHTMLs.join('  | ');
    document.querySelector('.filter').innerHTML = strHTMLs;
}

function onFilter(filterKey) {
    setFilter(filterKey);
    renderFilters();
    renderGallery();
}

function onOpenGallery() {
    document.querySelector('.gallery').hidden = false;
    document.querySelector('.canvas-page').classList.add('hide');
    document.querySelector('.about').classList.add('hide');
    onNavOpen();
}

function onCelectedImg(elImg, imgId) {
    setMemeImg(imgId);
    document.querySelector('.gallery').hidden = true;
    document.querySelector('.canvas-page').classList.remove('hide');
    renderImg();
    return elImg.src
}

function onOpenAbout() {
    document.querySelector('.gallery').hidden = true;
    document.querySelector('.canvas-page').classList.add('hide');
    document.querySelector('.about').classList.remove('hide');
    onNavOpen();


}

function renderSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filterBy');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myKeywords");
    if (filter !== '') ul.hidden = false;
    else ul.hidden = true;
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}















