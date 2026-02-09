document.write(`
  <p><strong><i>"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax."</i></strong><br>
  -- Abraham Lincoln</p>
  <hr />
`);

function repeatingText() {
  for (let i = 1; i <= 50; i++) {
    document.write(`<div>${i}. This line is repeated by repeatingText()</div>`);
  }
}

document.write(`<p><strong>Exercise 2 output:</strong></p>`);
repeatingText();
document.write(`<hr />`);

const images = [
  "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const url = images[randomIndex];

  document.write(`<p><strong>Exercise 5 random image:</strong></p>`);
  document.write(`<img src="${url}" alt="Random image" style="max-width:300px; height:auto;">`);
  document.write(`<p>Index used: ${randomIndex}</p>`);
  document.write(`<hr />`);
}

showRandomImage();