export function classWithModifiers(
  originClass: string,
  ...modifiers: Array<string | number | false | null | undefined>
): string {
  modifiers = modifiers.filter(Boolean)
  if (!modifiers.length) return originClass

  const space = " "
  const separator = "--"

  modifiers = modifiers.map(modifier => originClass + separator + modifier)
  return originClass + space + modifiers.join(space)
}
