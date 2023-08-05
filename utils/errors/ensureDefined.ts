export const ensureDefined = <T>(value: T | null | undefined, errorMessage: string = "Value is undefined"): T => {
  console.log('utils: ensureDefined')
  if (value === null || value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
}
