const { readFile, writeFile, copyFile } = require(`fs`);
const buildDir = "./dist/";
const encoding = `utf-8`;

// update <lastMod> in the sitemap
const sitemap = buildDir + "sitemap.xml";
readFile(sitemap, encoding, function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  const currentDate = `<lastmod>` + new Date().toISOString() + `</lastmod>`;
  const replaced = contents.replace(/<lastmod>.+<\/lastmod>/g, currentDate);

  writeFile(sitemap, replaced, encoding, function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`${sitemap} now contains ${currentDate}`);
    }
  });
});

// copy index.html to 404.html
copyFile(buildDir + "index.html", buildDir + "404.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Index file copied to 404");
});
