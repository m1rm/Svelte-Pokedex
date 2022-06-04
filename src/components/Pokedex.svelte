<script>
    import Pokecard from '../components/Pokecard.svelte';
    export let pokemon = [];
</script>

<div class="flex-container">
    <h2>Pokédex</h2>
    {#each pokemon as monster}
        <Pokecard
                name={monster.name}
                pokedexIndex={monster.num}
                type={monster.type}
                portrait={monster.img}
        />
    {/each}
</div>

<style>
    h2 {
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