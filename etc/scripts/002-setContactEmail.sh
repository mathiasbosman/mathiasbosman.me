constantsFile="./src/Constants.js";
placeholder="{{CONTACT_EMAIL}}";

echo "Setting contact email in $constantsFile";
sed -i -e "s/$placeholder/$SECRET_CONTACT_EMAIL/gi" $constantsFile;
