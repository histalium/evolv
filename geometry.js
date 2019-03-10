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

const angleOfPoint = (point, center) => {
 const refPoint = {
   x: point.x - center.x,
   y: point.y - center.y
 };

 return Math.atan2(refPoint.y, refPoint.x)
};

const distanceBetweenPoints = (point1, point2) => {
  return Math.hypot(point2.x - point1.x, point2.y - point1.y);
}

const Geometry = {
  rotatePoint,
  angleOfPoint,
  distanceBetweenPoints
};

export { Geometry };