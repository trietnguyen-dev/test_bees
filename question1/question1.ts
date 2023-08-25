 export function rgb(r: number, g: number, b: number): string {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const hexR = r.toString(16).padStart(2, "0").toUpperCase();
  const hexG = g.toString(16).padStart(2, "0").toUpperCase();
  const hexB = b.toString(16).padStart(2, "0").toUpperCase();

  const RGB = hexR + hexG + hexB;

  return RGB
}

console.log(rgb(255, 2,255)); 