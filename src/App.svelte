<script>
	import Pokedex from "./components/Pokedex.svelte";
	import MainNavigation from "./components/navigation/MainNavigation.svelte";
	export let pokemon = [];
</script>

<main>
	<div class="main-heading-container">
		<h1>Welcome to the Pokémon World - written in Svelte!</h1>
	</div>
	<MainNavigation></MainNavigation>
	<Pokedex pokemon={pokemon}></Pokedex>
</main>

<style>
	.main-heading-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>