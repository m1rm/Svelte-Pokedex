<script>
	import Pokedex from "./components/Pokedex.svelte";
	export let pokemon = [];
</script>

<main>
	<Pokedex pokemon={pokemon}></Pokedex>
</main>