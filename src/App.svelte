<script>
	import pokemon from './assets/pokeData.json';
	import Pokedex from "./components/Pokedex.svelte";
	console.log(pokemon);
</script>

<main>
	<Pokedex pokemon={pokemon}></Pokedex>
</main>