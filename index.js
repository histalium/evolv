const c = document.getElementById('c');
const ctx = c.getContext('2d');

c.width = 1024;
c.height = 768;

const fullCircle = Math.PI * 2;

var creature = {
  location: {
    x: 50,
    y: 50
  }
};

const drawCreature = creature => {
  ctx.beginPath();
  ctx.arc(creature.location.x, creature.location.y, 20, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(creature.location.x + 20, creature.location.y, 5, 0, Math.PI * 2);
  ctx.fill();
};

drawCreature(creature);
