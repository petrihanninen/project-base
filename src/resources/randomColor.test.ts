import { generateColor, rgbToHex, textColorFromBg } from './randomColor';

test('Convert RGB to HEX value', () => {
  expect(rgbToHex({r: 0, g: 0, b: 0})).toBe('#000000')
  expect(rgbToHex({r: 255, g: 255, b: 255})).toBe('#ffffff')
});

test('Get text colors from bg', () => {
  expect(textColorFromBg({r: 0, g: 0, b: 0})).toEqual({r: 255, g: 255, b: 255})
  expect(textColorFromBg({r: 255, g: 255, b: 255})).toEqual({r: 18, g: 18, b: 18})
})

test('Generate colors from random values', () => {
  expect(generateColor(0.5)).toEqual({r: 0, g: 255, b: 255});
  expect(generateColor(0)).toEqual({r: 255, g: 0, b: 0});
  expect(generateColor(0.1)).toEqual({r: 255, g: 128, b: 0});
})