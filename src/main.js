import App from './App.svelte';
import monsters from './assets/pokeData.json';
console.log(monsters);

const app = new App({
	target: document.body,
	props: {
		pokemon: monsters
	}
});

export default app;