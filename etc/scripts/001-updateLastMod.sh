sitemapFile="./public/sitemap.xml";
placeholder="{{LAST_MOD}}";
currentDate=$(date -u +"%Y-%m-%dT%H:%M:%SZ");

echo "Updating sitemap lastmod date to: $currentDate";
sed -i -e "s/$placeholder/$currentDate/gi" $sitemapFile;