const img = document.getElementById('stopSign');
const text = document.getElementById('text');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const nb = document.getElementById('back-button');

function replace() {

  img.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  nb.style.display = "block";
  text.style.display = "block"
  text.textContent = "blah blah balasdasdoaido sike no giragefef 234111111111111111111111111111111111oyio87g8gyusdfygsdgyygfyud dddddddddddddddddddddddddddddddd  j j j jj  jj j j j  jj j j  jj  jj  j jjj  jj  j jj  jj  jj j j j j j j"
}

function show() {
  img.style.display = "block";
  button1.style.display = "inline";
  button2.style.display = "inline";
  button3.style.display = "inline";
  nb.style.display = "none";
  text.style.display = "none"
  text.textContent = "";
}