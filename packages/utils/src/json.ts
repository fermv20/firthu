export const format = (value: any, tabSize = 2) =>
  JSON.stringify(value, null, tabSize)

const log = {
  format,
}

export default log
