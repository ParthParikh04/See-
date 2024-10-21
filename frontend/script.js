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
  text.textContent = "giraffe, (genus Giraffa), any of four species in the genus Giraffa of long-necked cud-chewing hoofed mammals of Africa, with long legs and a coat pattern of irregular brown patches on a light background. Giraffes are the tallest of all land animals; males (bulls) may exceed 5.5 metres (18 feet) in height, and the tallest females (cows) are about 4.5 metres. Using prehensile tongues almost half a metre long, they are able to browse foliage almost six metres from the ground. Giraffes are a common sight in grasslands and open woodlands in East Africa, where they can be seen in reserves such as Tanzania’s Serengeti National Park and Kenya’s Amboseli National Park. The genus Giraffa is made up of the northern giraffe (G. camelopardalis), the southern giraffe (G. giraffa), the Masai giraffe (G. tippelskirchi), and the reticulated giraffe (G. reticulata)";
}

function show() {
  img.style.display = "block";
  button1.style.display = "inline";
  button2.style.display = "inline";
  button3.style.display = "inline";
  nb.style.display = "none";
  text.textContent = "";
}


