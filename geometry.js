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
}

const Geometry = {
  rotatePoint,
  angleOfPoint
};

export { Geometry };