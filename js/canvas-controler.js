'use strict'


var gCanvas = document.getElementById('meme');
var gCtx = gCanvas.getContext('2d');

function renderImg() {
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.forEach((line, idx) => {
            if (getSelectedLineIdx() === idx) {
                gCtx.rect(0, line.pos.y, 5000, line.size+10); /// x, y, width, height
                gCtx.fillStyle = 'yellow';
                gCtx.fillRect(0, line.pos.y-line.size, 5000, line.size+10)
            }
            drawText(line)
        })
    }

    const selectedimg = findImgById(gMeme.selectedImgId)
    img.src = selectedimg.url;
}

function onHideMark(){
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.forEach((line, idx) => {
            drawText(line)
        })
    }

    const selectedimg = findImgById(gMeme.selectedImgId)
    img.src = selectedimg.url;
}

function drawText(line) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.pos.x, line.pos.y);
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
}

function onAddLine() {
    var line = createLine()
    setNewLine(line);
    renderImg();
}

function onChangePosUp() {
    setPosY(-5);
    renderImg();
}

function onChangePosDown() {
    setPosY(5);
    renderImg();
}

function onIncreaseFontSize() {
    setFontSize(10);
    renderImg();
}

function onDecreaseFontSize() {
    setFontSize(-10);
    renderImg();
}

function OnSetTextAlignLeft() {
    setTextAlign('left')
    renderImg();
}

function OnSetTextAlignRight() {
    setTextAlign('right')
    renderImg();
}

function OnSetTextAlignCenter() {
    setTextAlign('center')
    renderImg();
}

function onSelecFont(font) {
    setFont(font);
    renderImg();
}

function onDownloadMeme(elLink) {
    
    var imgContent = gCanvas.toDataURL('image/png');
    elLink.href = imgContent
}

function onChangeLineText() {
    var str = document.querySelector('.text-input').value
    setChangeLine(str);
    renderImg();
}

function onChangeLine() {
    setLineIdx();
    renderImg();
}

function onDeleteLine() {
    deleteLine();
    renderImg();
}

function onChangeTextColor(color) {
    setTextColor(color);
    renderImg();
}

function onChangeStrokeColor(color) {
    setStrokeColor(color);
    renderImg();
}



function getCanvasWidth() {
    return gCanvas.width;
}