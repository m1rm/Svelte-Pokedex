<script>
	import MainNavigation from "./components/navigation/MainNavigation.svelte";
	export let pokemon = [];
</script>

<main>
	<div class="main-heading-container">
		<h1>Welcome to the Pokémon World - written in Svelte!</h1>
	</div>
	<MainNavigation pokemon={pokemon} />
</main>

<style>
	.main-heading-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>