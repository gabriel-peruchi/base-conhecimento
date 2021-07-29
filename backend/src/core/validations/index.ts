export function existsOrError(value: any, msg: string) {
  if (!value) {
    throw new Error(msg)
  }

  if (Array.isArray(value) && value.length === 0) {
    throw new Error(msg)
  }

  if (typeof value === "string" && !value.trim()) {
    throw new Error(msg)
  }
}

export function notExistsOrError(value: any, msg: string) {
  try {
    existsOrError(value, msg)
  } catch (msg) {
    return
  }
  throw new Error(msg)
}

export function equalsOrError(valueX: any, valueY: any, msg: string) {
  if (valueX !== valueY) {
    throw new Error(msg)
  }
}