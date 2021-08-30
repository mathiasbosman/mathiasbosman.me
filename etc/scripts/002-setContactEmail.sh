constantsFile="./src/Constants.js";
placeholder="{{CONTACT_EMAIL}}";

sed -i -e "s/$placeholder/$SECRET_CONTACT_EMAIL/gi" $constantsFile;
