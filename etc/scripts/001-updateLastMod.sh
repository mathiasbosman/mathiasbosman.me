sitemapFile="./public/sitemap.xml";
placeholder="{{LAST_MOD}}";
currentDate=$(date +"%Y-%m-%dT%T%z");

sed -i -e "s/$placeholder/$currentDate/gi" $sitemapFile;
