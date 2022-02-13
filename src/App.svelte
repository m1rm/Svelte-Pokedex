<script>
	export let name;
	import Pokecard from './components/Pokecard.svelte';
	import pokemon from './assets/pokeData.json';
	console.log(pokemon);
</script>

<main>
	<h1>Hello {name}!</h1>
	<div class="flex-container">
		{#each pokemon as monster}
			<Pokecard
					  name="{monster.name}"
					  pokedexIndex="{monster.pokedexIndex}"
					  type="{monster.type}"
					  portrait="{monster.portrait}"
			></Pokecard>
		{/each}
	</div>
</main>

<style>
	h1 {
		font-size:48px;
		text-align:center !important;
		display:inline-block !important;
		width:100%;
	}

	.flex-container {
		margin: 1rem 1rem 0 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>