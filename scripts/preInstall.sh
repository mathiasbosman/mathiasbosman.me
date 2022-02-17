# scripts run pre-install (pre-build) executed from the root

# update sitemap
sitemapFile="./public/sitemap.xml";
placeholder="{{LAST_MOD}}";
currentDate=$(date -u +"%Y-%m-%dT%H:%M:%SZ");

echo "Updating sitemap lastmod date to: $currentDate";
sed -i -e "s/$placeholder/$currentDate/gi" $sitemapFile;

# set contact email
constantsFile="./src/Constants.js";
placeholder="{{CONTACT_EMAIL}}";
echo "Setting contact email in $constantsFile";
sed -i -e "s/$placeholder/$SECRET_CONTACT_EMAIL/gi" $constantsFile;
