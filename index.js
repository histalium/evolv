var c = document.getElementById('c');
var ctx = c.getContext('2d');

c.width = 1024;
c.height = 768;

ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2);
ctx.stroke();