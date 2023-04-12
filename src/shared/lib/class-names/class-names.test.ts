import { classNames } from './class-names';

describe('classNames', () => {
  test('first parameter', () => {
    expect(classNames('class')).toBe('class');
  });

  test('array parameter', () => {
    const expected = 'class class-1 class-2';
    expect(classNames('class', {}, ['class-1', 'class-2'])).toBe(expected);
  });

  test('mode parameter', () => {
    const expected = 'class class-1 class-2 active hover';
    const result = classNames('class', { active: true, hover: true }, ['class-1', 'class-2']);
    expect(result).toBe(expected);
  });

  test('mode parameter with false', () => {
    const expected = 'class class-1 class-2 hover';
    const result = classNames('class', { active: false, hover: true }, ['class-1', 'class-2']);
    expect(result).toBe(expected);
  });
});
