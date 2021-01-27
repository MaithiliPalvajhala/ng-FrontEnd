# CalculatePremium

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5. 
The data required, OccupationRating and OccupationRateFactor tables are created as .json file, present at .src/app/services/Data.json
This project is a solely in angular. 
Unit test is performed manually to check validation and functionality.

## Development server
install dependencies :
npm install @angular/http
npm install currency-formatter --save
ng add @angular/material

creating new components - service and class
ng new CalculateDeathCoverPremium
ng g c userDetails
ng g service services\CalcPremium

Git related commands:
git config --global user.name "Maithili Palavajhala" 
git config --global user.email maithili.palavajhala@gmail.com 
git log
git init
git remote add origin https://github.com/MaithiliPalvajhala/ng-FrontEnd.git 
ng add angular-cli-ghpages.

using Visual Studio Code, source control explores, added changes to "staged changes". Then added description for changes and click on "commit".
git push origin master


---building and publishing in GitHub.
ng build --prod --base-href "https://MaithiliPalvajhala.github.io/ng-FrontEnd/"
ngh --dir dist/CalculatePremium

ng build (for development server)
Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

