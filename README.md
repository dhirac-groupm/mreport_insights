# mreport_insights
Because of pacakage issue we have to puth to app engine manually

copy the code to google cloud using goolge editor

then run 

yarn install

if error related engine comes then

yarn config set ignore-engines true 

or package related icon issues then

yarn add @material-ui/icons

yarn add @material-ui/core

yarn run build

then build and remove all files put only build and app.yaml file

put app.yaml file in same location and run 

gcloud app deploy 

then it will work
