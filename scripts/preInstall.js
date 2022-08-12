const {readFile, writeFile} = require('fs');
const file = "./public/sitemap.xml";
readFile(file, 'utf-8', function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  const currentDate = "<lastmod>" + new Date().toISOString() + "</lastmod>";
  const replaced = contents.replace(/<lastmod>.+<\/lastmod>/g, currentDate);

  writeFile(file, replaced, 'utf-8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(file + " now contains " + currentDate);
    }
  });
});