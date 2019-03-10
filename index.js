import { Geometry } from './geometry.js';
import { KeyboardStateManager } from './keyboard.js';

const c = document.getElementById('c');
const ctx = c.getContext('2d');

c.width = 1024;
c.height = 768;

const fullCircle = Math.PI * 2;

const controlledCreature = {
  location: {
    x: 50,
    y: 50
  },
  direction: 0.125,
  color : {
    r: 0.1,
    g: 0.6,
    b: 0.3
  },
  eye: [{
    depth: 90,
    width: 0.09
  },{
    depth: 100,
    width: 0.05
  },{
    depth: 90,
    width: 0.09
  }]
};

const range = count => [...Array(count).keys()];

const creatures = range(10)
  .map(t => {
    return {
      location: {
        x: Math.random() * c.width,
        y: Math.random() * c.height,
      },
      direction: Math.random(),
      color : {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
      },
      eye: []
    };
  })
  .concat(controlledCreature);

const originPoint = { x: 0, y: 0 };
const vector = { x: 1, y: 0 };

const drawCreature = creature => {
  ctx.beginPath();
  ctx.arc(creature.location.x, creature.location.y, 20, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${creature.color.r * 256}, ${creature.color.g * 256}, ${creature.color.b * 256})`;
  ctx.fill();
  ctx.stroke();
  const faceStartLocation = {
    x: creature.location.x + 20, 
    y: creature.location.y
  };
  const faceLocation = Geometry.rotatePoint(faceStartLocation , creature.location, creature.direction * fullCircle);
  ctx.beginPath();
  ctx.arc(faceLocation.x, faceLocation.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  const totalEyeWidth = creature.eye.map(v => v.width).reduce((acc, curr) => acc + curr, 0);
  let eyeStart = -creature.direction - (totalEyeWidth / 2);
  creature.eye.forEach(v => {
    ctx.beginPath();
    ctx.arc(creature.location.x, creature.location.y, v.depth, eyeStart * fullCircle, (eyeStart + v.width) * fullCircle);
    ctx.lineTo(creature.location.x, creature.location.y);
    ctx.closePath();
    ctx.stroke();
    eyeStart += v.width;
  });
};

const drawAnglesControlledCreature = () => {
  const creature = controlledCreature;
  creatures
    .filter(t => t != creature)
    .forEach(t => {
      const angle = Geometry.angleOfPoint(t.location, creature.location);
      const startLocation = {
        x: creature.location.x + 200, 
        y: creature.location.y
      };
      const loc = Geometry.rotatePoint(startLocation, creature.location, -angle);
      ctx.beginPath()
      ctx.moveTo(creature.location.x, creature.location.y);
      ctx.lineTo(loc.x, loc.y);
      ctx.stroke();
    });
}

const update = () => {
  const creature = controlledCreature;
  const keyState = KeyboardStateManager.getState();
  if (keyState['KeyA']) {
    creature.direction = (creature.direction + 0.01) % 1;
  }
  if (keyState['KeyD']) {
    creature.direction = (creature.direction - 0.01) % 1;
  }
  if (keyState['KeyW']) {
    var move = Geometry.rotatePoint(vector, originPoint, creature.direction * fullCircle);
    creature.location.x += move.x;
    creature.location.y += move.y;
  }
}

const draw = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  creatures.forEach(drawCreature);
  drawAnglesControlledCreature();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
