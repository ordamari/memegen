'use strict'

var gCanvas = document.getElementById('meme');
var gCtx = gCanvas.getContext('2d');
var gLastTouchX
var gLastTouchY

function renderImg() {
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.forEach((line, idx) => {
            if (getSelectedLineIdx() === idx) {
                gCtx.rect(0, line.pos.y, 5000, line.size + 10); /// x, y, width, height
                gCtx.fillStyle = 'yellow';
                gCtx.fillRect(0, line.pos.y - line.size, 5000, line.size + 10)
            }
            drawText(line)
        })
    }
    const selectedimg = findImgById(gMeme.selectedImgId)
    img.src = selectedimg.url;
}

function onHideMark() {
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

function onChooseLine(ev) {
    ChooseLine(ev)
    document.querySelector('.text-input').value = gMeme.lines[gMeme.selectedLineIdx].txt;
    renderImg();
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

function onChangePosLeft() {
    setPosX(-5);
    renderImg();
}

function onChangePosRight() {
    setPosX(5);
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
    document.querySelector('.text-input').focus();
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

function onStartTouch() {
    gLastTouchX = null
    gLastTouchY = null
}

function onChangePosTouch(ev) {
    ev.preventDefault();
    if (!gLastTouchX) {
        gLastTouchX = ev.touches[0].clientX
    }
    else {
        setPosX(Math.floor(ev.touches[0].clientX - gLastTouchX))
    }
    if (!gLastTouchY) {
        gLastTouchY = ev.touches[0].clientY
    } else {
        setPosY(Math.floor(ev.touches[0].clientY - gLastTouchY))
    }
    gLastTouchX = ev.touches[0].clientX
    gLastTouchY = ev.touches[0].clientY
    renderImg();
}

function onChangePos(ev) {
    if (gIsMouseDown) {
        setPosX(ev.movementX)
        setPosY(ev.movementY)
    }
    renderImg();
}

function onMouseChange() {
    gIsMouseDown = !gIsMouseDown;
}

function onToggleModal() {
    document.querySelector('.modal').hidden = !document.querySelector('.modal').hidden;
}

function onControlByKey(ev) {
    if (document.querySelector('.canvas-page').classList.contains('hide')) return;
    switch (ev.code) {
        case 'ArrowUp':
            event.preventDefault();
            onChangePosUp();
            break;
        case 'ArrowDown':
            event.preventDefault();
            onChangePosDown();
            break;
        case 'ArrowRight':
            event.preventDefault();
            onChangePosRight();
            break;
        case 'ArrowLeft':
            event.preventDefault();
            onChangePosLeft();
            break;
        case 'Escape':
            event.preventDefault();
            onDeleteLine();
            break;
        case 'Tab':
            event.preventDefault();
            onChangeLine();
            break;
        case 'Backslash':
            event.preventDefault();
            onAddLine();
            break;
        case 'Equal':
            event.preventDefault();
        case 'NumpadAdd':
            onIncreaseFontSize();
            break;
        case 'Minus':
        case 'NumpadSubtract':
            event.preventDefault();
            onDecreaseFontSize();
            break;
        case 'Backquote':
            event.preventDefault();
            onAddLine();
            break;
        default:
            break;
    }
}

function onNavOpen() {
    document.querySelector('.nav-container ul').classList.toggle('hamburger-clicked');
    document.querySelector('.black-page').classList.toggle('zIndexPlay');
}