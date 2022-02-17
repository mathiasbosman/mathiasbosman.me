indexFile="./public/index.html";

echo "Adding Matomo base url";
sed -i -e "s/{{MATOMO_BASE_URL}}/$SECRET_MATOMO_BASE_URL/gi" $indexFile;

echo "Adding Matomo site id";
sed -i -e "s/{{MATOMO_SITE_ID}}/$SECRET_MATOMO_SITE_ID/gi" $indexFile;