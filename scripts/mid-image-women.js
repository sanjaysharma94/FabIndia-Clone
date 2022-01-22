let images = [];
let s1 = 'https://www.fabindia.com/file/general/wmn-hp-lfts-24nov21-1-min.jpg';
let s2 = 'https://www.fabindia.com/file/general/wmn-hp-lfts-8dec21-1-min.jpg';
let s3 = 'https://www.fabindia.com/file/general/wmn-hp-lfts-24nov21-3-min.jpg';
let s4 = 'https://www.fabindia.com/file/general/wmn-hp-lfts-27sep-1-min.jpg';
let s5 = 'https://www.fabindia.com/file/general/wmn-hp-lfts-27sep-2-min.jpg';
let s6 = 'https://www.fabindia.com/file/general/hp-latestfr-30jul21-1-min.jpg';
let s7 = 'https://www.fabindia.com/file/general/ww-hp-lfts1-20july21-min.jpg';
let s8 = 'https://www.fabindia.com/file/general/ww-28feb21-3-min.jpg';

images.push(s1, s2, s3, s4, s5, s6, s7, s8);
let div = document.getElementById('mid-image-women');
let img = document.createElement('img');
let i = 1;
img.src = images[0];

div.append(img);
id = setInterval(function () {
  if (i === images.length) {
    i = 0;
  }
  img.src = images[i];
  div.append(img);
  i++;
}, 2000);
