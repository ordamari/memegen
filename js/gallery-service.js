'use strict'
var gKeywords = {'politics': 0,'animals': 0, 'babys':0,'mans':0, 'cartoon':0 }

var gImgs=[
    {id:1, url:'imgs/1.jpg',keyword:['politics']},
    {id:2, url:'imgs/2.jpg',keyword:['animals']},
    {id:3, url:'imgs/3.jpg',keyword:['animals','babys']},
    {id:4, url:'imgs/4.jpg',keyword:['animals']},
    {id:5, url:'imgs/5.jpg',keyword:['babys']},
    {id:6, url:'imgs/6.jpg',keyword:['mans']},
    {id:7, url:'imgs/7.jpg',keyword:['babys']},
    {id:8, url:'imgs/8.jpg',keyword:['mans']},
    {id:9, url:'imgs/9.jpg',keyword:['babys']},
    {id:10, url:'imgs/10.jpg',keyword:['politics']},
    {id:11, url:'imgs/11.jpg',keyword:['mans']},
    {id:12, url:'imgs/12.jpg',keyword:['mans']},
    {id:13, url:'imgs/13.jpg',keyword:['mans']},
    {id:14, url:'imgs/14.jpg',keyword:['mans']},
    {id:15, url:'imgs/15.jpg',keyword:['mans']},
    {id:16, url:'imgs/16.jpg',keyword:['mans']},
    {id:17, url:'imgs/17.jpg',keyword:['politics']},
    {id:18, url:'imgs/18.jpg',keyword:['cartoons']}  
];

function getImgs(){
    return gImgs;
}

function findImgId(src){
    var selectedImg = gImgs.find(img=>src===img.url);
    return selectedImg.id
}

function findImgById(id){
    var selectedImg = gImgs.find(img=>id===img.id);
    return selectedImg
}