const { existsSync } = require('fs')
const fs = require('fs/promises')
const path = require('path')
const sass = require('sass')

async function main() {
  const filepath = path.resolve(__dirname, '..', 'index.scss')

  let { css } = await sass.compileAsync(filepath)
  let { css: minifiedCss } = await sass.compileAsync(filepath, {
    style: 'compressed',
  })

  const OUTPUT_DIRECTORY = path.resolve(__dirname, '..', 'css')

  if (!existsSync(OUTPUT_DIRECTORY)) {
    await fs.mkdir(OUTPUT_DIRECTORY)
  }

  await fs.writeFile(path.join(OUTPUT_DIRECTORY, 'styles.css'), css)

  await fs.writeFile(path.join(OUTPUT_DIRECTORY, 'styles.min.css'), minifiedCss)
}

main()
