const rotatePoint = (point, center, angle) => {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const x = point.x - center.x;
  const y = point.y - center.y;

  return {
    x: cos * x + sin * y + center.x,
    y: sin * -x + cos * y + center.y,
  }
};

const Geometry = {
  rotatePoint
};

export { Geometry };