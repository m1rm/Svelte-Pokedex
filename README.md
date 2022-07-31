# Svelte-Pokédex

This is a training project made with [Svelte](https://svelte.dev).  

## This project includes
- importing data from JSON
- basic routing using [svelte-roung](https://github.com/EmilTholin/svelte-routing)
- a swiper using [nolimits4web/swiper](https://github.com/nolimits4web/swiper)
  - see also: https://swiperjs.com/svelte

## Prerequisites
-  [Node.js](https://nodejs.org)

## Get started

Install the dependencies...

```bash
yarn install
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Bing News API
The news section is build using the [Bing News Search API](https://docs.microsoft.com/en-us/bing/search-apis/bing-news-search/overview). You will have to create an account registering to the free plan.
You will then have access to your API Key. The key as well as the API host must be provided in a 
.env file, which you can create based on the exemplary template (.env.example).

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
