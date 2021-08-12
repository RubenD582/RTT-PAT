var heading1 = document.querySelector('h1');
var rect = heading1.getBoundingClientRect();
var cursor = document.querySelector('.cursor');

document.body.onmousemove = function(e) {
  /*Pas die muis se wyser aan*/
  cursor.style.left=e.clientX-125+'px';
  cursor.style.top=e.clientY-125+'px';
  /*Verander die gradient van die headings*/
  heading1.style.setProperty('--x',(e.clientX-rect.top)+'px');
  heading1.style.setProperty('--y',(e.clientY-rect.left)+'px');
}