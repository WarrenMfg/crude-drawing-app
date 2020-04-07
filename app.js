document.querySelector('button').addEventListener('mousedown', clear);
document.querySelector('.colors').addEventListener('mousedown', changeColor);
const body = document.querySelector('body');
body.addEventListener("mousedown", draw);
body.addEventListener('mouseup', removeMouseMove);

function clear(e) {
  e.stopPropagation();
  document.querySelectorAll('.dot').forEach(node => node.remove());
}

let color = 'blue';
function changeColor(e) {
  e.stopPropagation();

  color = e.target.className;
}

function draw(e) {
  e.preventDefault();
  
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (e.pageX - 4) + "px";
  dot.style.top = (e.pageY - 4) + "px";
  dot.style.backgroundColor = color;
  document.body.appendChild(dot);

  window.addEventListener('mousemove', moved);
}

function moved(e) {
  draw(e);
}

function removeMouseMove(e) {
  window.removeEventListener('mousemove', moved);
}