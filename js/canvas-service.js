'use strict'

var gColorText = 'white';
var gColorStroke = 'black';
var gFont = 'Impact';
var gfontSize = 40;
var gTextAlign = 'center';
var gYindex = 0;
var gTxt = 'Enter your text'
var gIsMouseDown=false;

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Enter your text',
        size: gfontSize,
        align: gTextAlign,
        color: gColorText,
        strokeColor: gColorStroke,
        font: gFont,
        pos: { x: 175, y: gfontSize + 10 }
    }]
}

function createLine(txt = gTxt, size = gfontSize, color = gColorText, strokeColor = gColorStroke, align=gTextAlign,font='Impact') {
    var line = {
        txt,
        size,
        align,
        color,
        strokeColor,
        font,
        pos: {
            x: 175, y: gfontSize + 10
        }
    }
    return line;
}

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function setChangeLine(str) {
    gMeme.lines[gMeme.selectedLineIdx].txt = str;

}

function setPosY(num) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += num;
}

function setPosX(num){
    gMeme.lines[gMeme.selectedLineIdx].pos.x += num;
}

function setFontSize(num) {
    var curSize=gMeme.lines[gMeme.selectedLineIdx].size
    gMeme.lines[gMeme.selectedLineIdx].size= (curSize + num<=10)? 10: curSize+num
}

function setTextAlign(str) {
    gMeme.lines[gMeme.selectedLineIdx].align = str;
}

function setFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function setTextColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}
    
function setNewLine(line) {
    gMeme.lines.push(line);
    var lastIdx=gMeme.lines.length-1
    if (lastIdx === 0) gMeme.lines[lastIdx].pos.y=gMeme.lines[lastIdx].size+10;
    else gMeme.lines[lastIdx].pos.y= (lastIdx === 1)? 350-gMeme.lines[lastIdx].size-10: 175-(gMeme.lines[lastIdx].size/2);  
}

function  setLineIdx(){
    gMeme.selectedLineIdx++;
    if(gMeme.selectedLineIdx===gMeme.lines.length) gMeme.selectedLineIdx=0;
}

function deleteLine(){
    if(gMeme.lines.length===1)return;
    gMeme.lines.splice(gMeme.selectedLineIdx,1);
    gMeme.selectedLineIdx=0;
}

function getSelectedLineIdx(){
    return gMeme.selectedLineIdx
}

function ChooseLine(ev){
    var y=ev.offsetY
    gMeme.selectedLineIdx = gMeme.lines.findIndex(line=> {
        return Math.abs(line.pos.y-y)<line.size+10;
    }) 
}


