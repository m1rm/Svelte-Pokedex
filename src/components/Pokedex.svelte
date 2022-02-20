<script>
    import Pokecard from '../components/Pokecard.svelte';
    export let pokemon=[];
</script>

<div class="flex-container">
    <h1>Svelte Pokédex</h1>
    {#each pokemon as monster}
        <Pokecard
                name={monster.name}
                pokedexIndex={monster.pokedexIndex}
                type={monster.type}
                portrait={monster.img}
        ></Pokecard>
    {/each}
</div>

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