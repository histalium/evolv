import { Geometry } from './geometry.js';

const c = document.getElementById('c');
const ctx = c.getContext('2d');

c.width = 1024;
c.height = 768;

const fullCircle = Math.PI * 2;

var creature = {
  location: {
    x: 50,
    y: 50
  },
  direction: 0.125
};

const drawCreature = creature => {
  ctx.beginPath();
  ctx.arc(creature.location.x, creature.location.y, 20, 0, Math.PI * 2);
  ctx.stroke();
  const faceStartLocation = {
    x: creature.location.x + 20, 
    y: creature.location.y
  };
  const faceLocation = Geometry.rotatePoint(faceStartLocation , creature.location, creature.direction * fullCircle);
  console.log(faceLocation);
  ctx.beginPath();
  ctx.arc(faceLocation.x, faceLocation.y, 5, 0, Math.PI * 2);
  ctx.fill();
};

drawCreature(creature);
