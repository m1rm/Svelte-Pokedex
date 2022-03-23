import App from './App.svelte';
import monsters from './assets/pokeData.json';
console.log('monsters', monsters);

const app = new App({
	target: document.body,
	hydrate: true,
	props: {
		pokemon: monsters
	}
});

export default app;