# SSR with Angular
A fun project to demonstrate Server Side Rendering (SSR) in Angular with **Angular Universal** and **NestJS**. The deployed version of the [app](https://ssr-with-angular.web.app/) only has prerendered pages for each route. SSR can be deployed online with the help of cloud services like [Google Cloud Run](https://cloud.google.com/run)   

## Local Setup
1. Clone the project 
    ```
    git clone https://github.com/masif2002/ssr-with-angular
    ```
2. Install package dependencies
    ```
    cd ssr-with-angular && npm install
    ```
3. Start the dev server
    ```
    ng serve
    ```
    * This starts the development server, but each route is rendered in the client Side. 
    * To render pages server side, run:    
    ```
    npm run build:ssr && npm run serve:ssr
    ```
    * This creates two seperate modules in the `dist/` directory, one for browser and one for the server
    * The dev server can be viewed locally on [localhost:8080](http://localhost:8080) 
### Prerendering
* To pre-render all static pages, run
    ```
    npm run prederender
    ```
    * This parses all the routes in the [routes.txt](./routes.txt) file and renders webpages for each route which is then saved in `dist/` folder 
    * To verify locally, run `npm run serve:ssr` and go to [localhost:8080](http://localhost:8080) 

## Verify SSR
* Head over to [ssr-with-angular.web.app](https://ssr-with-angular.web.app/) and choose a card
* Go to the [twitter card validator](https://cards-dev.twitter.com/validator) and paste the link to see if the page has been rendered correctly
* You can do the same once you've deployed your app online