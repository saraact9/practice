const saveBtn = document.getElementById('save');
const textInput = document.getElementById('text');
const fileInput = document.getElementById('file');
const modeBtn = document.getElementById('mode_btn'); 
const destroyBtn = document.getElementById('destroy_btn');
const eraserBtn = document.getElementById('eraser_btn');
const colorOption = Array.from(document.getElementsByClassName('color-option'));
const lineWidth = document.getElementById('line_width');
const color = document.getElementById('color');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = 'round';
let isPainting = false;
let isFilling = false;

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = ctx.fillStyle = event.target.value;
}
function onColorCick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = ctx.fillStyle = color.value = colorValue;
}
function onModeClick() {
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = 'Fill';
    } else {
        isFilling = true;
        modeBtn.innerText = 'Draw';
    }
}
function onCanvasClick() {
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onDestroyClick() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
    ctx.strokeStyle = 'white';
    isFilling = false;
    modeBtn.innerText = 'Fill';
}

function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick(event){
    const text = textInput.value;
    if (text !== "") {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = '48px serif'
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = url;
    a.download = "myDrwaing.png";
    a.click();
}


canvas.addEventListener('dblclick', onDoubleClick);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('mousedown', onCanvasClick);
lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

colorOption.forEach(color => color.addEventListener('click',onColorCick));

modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);
fileInput.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);
// const colors = [
//     '#55efc4',
//     '#81ecec',
//     '#74b9ff',
//     '#a29bfe',
//     '#dfe6e9',
//     '#ffeaa7',
//     '#fab1a0',
//     '#ff7675',
//     '#fd79a8',
//     '#636e72'
// ];

// function onClick(event){
//     ctx.beginPath();
//     ctx.moveTo(0,0);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener('mousemove', onClick);