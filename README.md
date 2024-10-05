## Dev notes

Application is developed using Vue 3, TypeScript, Vite, Tailwind CSS, Jest, MSW, Storybook.

### MSW
- Mock Service Worker is used to mock the API calls. It is used to mock the API calls in the tests.
- To start in msw - npm run dev:fake

### Storybook
- Storybook is used to create the components in isolation.
- To start in storybook - npm run storybook


### Deploy
- App is deployed to Surge - https://ecwid-demo-shop.surge.sh/
- To redeploy - npm run deploy

### Configuration
- The configuration is done in the .env file

## Test task for TypeScript/Vue.js developer in Ecwid

## Goal

Write an application that contains three pages:

- A page with a list of categories and products
- product page
- shopping cart page

### Data

Store data must be accessed using [Ecwid REST API](https://api-docs.ecwid.com/reference/rest-api)

The easiest way is to use a demo store. It's access info is like this:

- StoreID: 108362264
- Token: public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs

### Page «products and categories list»

The page contains a list of products and categories in any convenient format: grid, list table.

Category page content:

- category name
- category image

Product page content:

- product name
- product price
- product image
- buy button

#### Opening category details

When you click on a category, the app takes you to a page with subcategories and products belonging to that category.

#### Opening product details

When you click on a product, the app goes to the Product Details page.

### «Product details» page

The page contains details about the product:

- product name
- product description
- product image
- product price
- buy button

### «Buy» button

The button adds an item to the "cart"
Shopping cart - any local storage with a list of added items.

### «Cart» icon

All pages display a cart icon with the number of items added to it. When you click on the icon, the application goes to the "Shopping cart" page

### «Cart» page

The page contains a list of added items and the "Place order" button.
Any item in the list can be deleted by clicking on the "Delete" button.

### Page navigation

The page state is displayed in the url. When you navigate to a url, the page that belongs to that url is displayed.

### «Place order» button

When you click on the button, a text congratulating you on your purchase is shown.

## Technologies

- Typescript
- VueJS
- HTML/CSS

## Design

Pages should look nice and readable. You can use any CSS framework.

## Code sharing platform

You can upload the code to your GitHub/Bitbucket or use the Web IDE: <https://codesandbox.io>.


# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).



https://app.ecwid.com/api/v3/108362264/categories


https://app.ecwid.com/api/v3/108362264/categories