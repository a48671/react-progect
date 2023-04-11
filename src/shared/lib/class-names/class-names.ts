type TClassNamesMode = Record<string, boolean | string>;

export function classNames(cls: string, mode: TClassNamesMode = {}, restClasses: Array<string> = []): string {
  return [
    cls,
    ...restClasses.filter(Boolean),
    ...Object.entries(mode).reduce((acc, [key, value]) => (value ? [...acc, key] : acc), []),
  ].join(' ');
}
