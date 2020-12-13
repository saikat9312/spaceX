This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the custom development server:

```bash
npm run dev
```

Or run the default server:

```bash
npm run build 
&&
npm start -p <port>
```

Run test cases:

```bash
npm run test
```

Run test cases along with coverage:

```bash
npm run test:coverage
```

**Note:** Custom server is created to ease the monitoring of code change during developement, rather than build and run every time. No additional server functioanlity is added, but the future scope is there to use this custom server as per requirement.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can open [https://space-x-navy.vercel.app/] or [https://spacex-mock.herokuapp.com/] to see the deployed app.

## Features:
1. Initial landing page is displayed using server side rendering.
2. After the initial launch, user is able to filter the results with help of provided hard-coded filters. 
3. Applied filters would change the URL and update the Page with latest records without refreshing the page ( Shallow Routing ).
4. If the page is refreshed with the applied filters in the URL – the resulting page will be server side rendered & subsequent filters will again be client side rendered.
5. A mobile-first design approach is implemented using modular css where,
    - device < 701px will render 1 card per row
    - 700px < device < 1025px will render 2 cards per row
    - devices > 1024px will render 4 cards per row
6. CI/CD has been implemented using [circleci](https://circleci.com/docs/2.0/deployment-integrations/#section=deployment) and integrated with heroku platform.
7. Jest has been configured for unit testing.
8. Additional Reset button is added to reset the state and clear localstorage. Clicking on Reset would change the URL and update the Page with all records without refreshing the page
    

## Asumptions:
1. Each button click will trigger an api call along with the query stirng to get the filtered results. The page will be client side rendered.  
2. To persist the state, localstorage has been used instead of using any additional library (Eg., Redux) to avoid unnecessary app size increase.
3. No other 3rd party library (Eg., React-bootstarp, Antd, Material-UI) has been used for the same reason.
4. Error handling is not implemented.

## Project Structure:
1. index.js is the main page and only under "Page" folder under the root.
2. 4 components are added under the component folder.
    - layout for overall layout of the app
    - filtes for left panel filter component
    - cardItem for individial card item
    - cardItemList for list of card item. This component is dynamically imported to index.js to improve performance
3. Style folder contains modular css file for each component.   
4. .circleci folder consist of config.yml file which is required for build
5. __test__ folder contains test case file for filter component.
6. jest.setup.js and jest.config.js - these 2 files are added for the necessary set up for jest.


## Screenshots

![SpaceX](/public/SS_desktop1.png?raw=true "Desktop View")

![SpaceX](/public/SS_desktop2.png?raw=true "Desktop View With Filter Applied")

![SpaceX](/public/SS_tab1.png?raw=true "Tab View")

![SpaceX](/public/SS_mobile1.png?raw=true "Mobile View - Filter")

![SpaceX](/public/SS_mobile2.png?raw=true "Mobile View - Card")

![SpaceX](/public/SS_DesktopLighthouseScore.png?raw=true "Mobile View - Card")


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
