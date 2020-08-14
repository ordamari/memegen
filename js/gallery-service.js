'use strict'

var gfilter='all'

var gKeywords = {'all': 20,'politics': 20,'animals': 20, 'babys':20,'mans':20,'womans': 20, 'cartoons':20, 'your images':20 }

var gImgs=[
    {id:1, url:'imgs/1.jpg',keywords:['politics','mans']},
    {id:2, url:'imgs/2.jpg',keywords:['animals']},
    {id:3, url:'imgs/3.jpg',keywords:['animals','babys']},
    {id:4, url:'imgs/4.jpg',keywords:['animals']},
    {id:5, url:'imgs/5.jpg',keywords:['babys']},
    {id:6, url:'imgs/6.jpg',keywords:['mans']},
    {id:7, url:'imgs/7.jpg',keywords:['babys']},
    {id:8, url:'imgs/8.jpg',keywords:['mans']},
    {id:9, url:'imgs/9.jpg',keywords:['babys']},
    {id:10, url:'imgs/10.jpg',keywords:['politics','mans']},
    {id:11, url:'imgs/11.jpg',keywords:['mans']},
    {id:12, url:'imgs/12.jpg',keywords:['mans']},
    {id:13, url:'imgs/13.jpg',keywords:['mans']},
    {id:14, url:'imgs/14.jpg',keywords:['mans']},
    {id:15, url:'imgs/15.jpg',keywords:['mans']},
    {id:16, url:'imgs/16.jpg',keywords:['mans']},
    {id:17, url:'imgs/17.jpg',keywords:['politics','mans']},
    {id:18, url:'imgs/18.jpg',keywords:['cartoons']},  
    {id:19, url:'imgs/19.jpg',keywords:['mans']},  
    {id:20, url:'imgs/20.jpg',keywords:['politics','mans']},  
    {id:21, url:'imgs/21.jpg',keywords:['cartoons']},  
    {id:22, url:'imgs/22.jpg',keywords:['animals']},  
    {id:23, url:'imgs/23.jpg',keywords:['animals','babys']},  
    {id:24, url:'imgs/24.jpg',keywords:['babys']},  
    {id:25, url:'imgs/25.jpg',keywords:['animals']},  
    {id:26, url:'imgs/26.jpg',keywords:['mans']},  
    {id:27, url:'imgs/27.jpg',keywords:['babys']},  
    {id:28, url:'imgs/28.jpg',keywords:['mans']},  
    {id:29, url:'imgs/29.jpg',keywords:['mans']},  
    {id:30, url:'imgs/30.jpg',keywords:['mans']},  
    {id:31, url:'imgs/31.jpg',keywords:['babys']},  
    {id:32, url:'imgs/32.jpg',keywords:['politics','mans']},  
    {id:33, url:'imgs/33.jpg',keywords:['babys']},  
    {id:34, url:'imgs/34.jpg',keywords:['animals']},  
    {id:35, url:'imgs/35.jpg',keywords:['politics','mans']},  
    {id:36, url:'imgs/36.jpg',keywords:['mans']},  
    {id:37, url:'imgs/37.jpg',keywords:['mans']},  
    {id:38, url:'imgs/38.jpg',keywords:['mans']},  
    {id:39, url:'imgs/39.jpg',keywords:['mans']},  
    {id:40, url:'imgs/40.jpg',keywords:['womans']},  
    {id:41, url:'imgs/41.jpg',keywords:['mans']},  
    {id:42, url:'imgs/42.jpg',keywords:['politics','mans']},  
    {id:43, url:'imgs/43.jpg',keywords:['cartoons']},  
];

function getImgs(){
    if(gfilter==='all') return gImgs;
    return gImgs.filter(img=>{
        return img.keywords.some(keyword=>keyword===gfilter)
    })
}

function findImgId(src){
    var selectedImg = gImgs.find(img=>src===img.url);
    return selectedImg.id
}

function findImgById(id){
    var selectedImg = gImgs.find(img=>id===img.id);
    return selectedImg
}

function setFilter(filterKey){
    gfilter= filterKey;
    gKeywords[filterKey]+=3;
}









function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    
    loadImageFromInput(ev, renderCanvas)
}
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();
    
    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
        gImgs.push({id:gImgs.length+1,url:img.src,keywords:['your images'] })
        renderGallery();
        renderSearch();
        renderFilters();
        
    }
    reader.readAsDataURL(ev.target.files[0]);
}
