const { readFile, writeFile } = require(`fs`)
const file = `./dist/sitemap.xml`
const encoding = `utf-8`

readFile(file, encoding, function (err, contents) {
  if (err) {
    console.log(err)
    return
  }

  const currentDate = `<lastmod>` + new Date().toISOString() + `</lastmod>`
  const replaced = contents.replace(/<lastmod>.+<\/lastmod>/g, currentDate)

  writeFile(file, replaced, encoding, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`${file} now contains ${currentDate}`)
    }
  })
})
