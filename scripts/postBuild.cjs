// update <lastMod> in the sitemap
const { readFile, writeFile, copyFile } = require(`fs`);
const file = `./dist/sitemap.xml`;
const encoding = `utf-8`;

readFile(file, encoding, function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  const currentDate = `<lastmod>` + new Date().toISOString() + `</lastmod>`;
  const replaced = contents.replace(/<lastmod>.+<\/lastmod>/g, currentDate);

  writeFile(file, replaced, encoding, function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`${file} now contains ${currentDate}`);
    }
  });
});

// copy index.html to 404.html
copyFile("./dist/index.html", "./dist/404.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Index file copied to 404");
});
