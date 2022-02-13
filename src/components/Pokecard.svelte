<script>
   export let name = "undefined";
   export let pokedexIndex = "000";
   export let portrait = "https://via.placeholder.com/150";
   export let type = ["undefined"];
</script>

<div class="{ type[0] } pokecard">
    <div class='pokecard-flex-container'>
        <span class='name-number'> { name }</span>
        <span class='name-number'>#{ pokedexIndex }</span>
        <div class='flex-break'></div>
        <img src='{ portrait }' alt='{ name }-image'>
    </div>
    <div class='pokecard-flex-container'>
        <span class='type-badge'>{ type[0] }</span>
    </div>
</div>

<style>
    .pokecard {
        flex: 0 0 25%;
        background-color: #808080;
        height: 400px;
        box-shadow: 0 0 6px #404040;
        margin-top: 4rem;
        border-radius: 5px;
    }

    .flex-break {
        flex-basis: 100%;
        height: 0;
    }

    .pokecard-flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .pokecard-flex-container .name-number {
        margin-top: 2rem;
    }

    .pokecard-flex-container img {
        margin-top: 1rem;
        padding: 1rem;
        height: 250px;
        width: 250px;
        box-shadow: 0 0 4px #404040;
    }

    .type-badge {
        border-radius: 10px;
        box-shadow: 0 0 6px #404040;
        margin-top: 0.75rem;
        padding: 0 10px 0 10px;
    }
    .grass { background-color: #4FC1A6; opacity: 0.8; }
    .fire { background-color: #FA6555; opacity: 0.8;}
    .water { background-color: #429BED; opacity: 0.8; }
    .bug { background-color: #32CD32; opacity: 0.8; }
    .normal { background-color: #99AABB; opacity: 0.8; }
    .poison { background-color: #7C538C; opacity: 0.8; }
    .electric { background-color: #F6C747; opacity: 0.8; }
    .ground { background-color: #B1736C; opacity: 0.8; }
    .fighting { background-color: #99AABB; opacity: 0.8; }
    .psychic {background-color: #7C538C; opacity: 0.8; }
    .rock { background-color: #303943; opacity: 0.8; }
    .ghost { background-color: #7C538C; opacity: 0.8; }
    .ice { background-color: #429BED; opacity: 0.8; }
    .dragon { background-color: #B1736C; opacity: 0.8; }
</style>