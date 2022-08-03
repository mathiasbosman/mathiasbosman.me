const {readFile, writeFile, promises: fsPromises} = require('fs');
const file = "./public/sitemap.xml";
readFile(file, 'utf-8', function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  const currentDate = new Date().toISOString();
  const replaced = contents.replace(/__LAST_MOD__/g, currentDate);

  writeFile(file, replaced, 'utf-8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("<lastMod> set to " + currentDate);
    }
  });
});