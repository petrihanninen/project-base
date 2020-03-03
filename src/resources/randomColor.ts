export type Color = {
  r: number,
  g: number,
  b: number
}

export const generateColor = (random: number) => {
  let f = (n: number, k = Math.round((n + random * 12) % 12)) => Math.round((.5 - .5 * Math.max(Math.min(k - 3, 9 - k, 1), -1)) * 255);

  return ({
    r: f(0),
    g: f(8), 
    b: f(4)
  });
}

export const randomColor = () => generateColor(Math.random());

export const rgbToHex = (c:Color) => "#" + [c.r, c.g, c.b].map(x => x.toString(16).padStart(2, "0")).join(''); 

export const textColorFromBg = (c: Color) => {
  const config = {
    black: 18,
    white: 255
  }
  const THERESHOLD = 10;
  const luminancy = Math.sqrt(0.299 * c.r^2 + 0.587 * c.g^2 + 0.114 * c.b^2)

  const val = luminancy > THERESHOLD ? config.black : config.white;

  return {r: val, g: val, b: val};
}