indexFile="./public/index.html";
toReplace="<!-- header scripts -->";
replacement="$SECRET_HEADER_SCRIPTS";

echo "Adding header scripts (if any)";
sed -i -e "s/$toReplace/$replacement/gi" $indexFile;