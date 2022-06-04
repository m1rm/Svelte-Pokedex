<script>
    import { Router, Route, link } from "svelte-routing";
    import Pokedex from "../Pokedex.svelte";
    import News from "../News.svelte";
    import Team from "../Team.svelte";
    export let pokemon = [];
</script>
<div>
    <nav class="main-nav-flex-container">
        <Router>
            <a href='/news' class='main-nav-link' use:link>News</a>
            <a href='/' class='main-nav-link' use:link>Pokédex</a>
            <a href='/team' class='main-nav-link' use:link>Manage Your Team</a>
            <Route path="news"><News /></Route>
            <Route path="/"><Pokedex pokemon={pokemon}/></Route>
            <Route path="/team"><Team /></Route>
        </Router>
    </nav>
</div>

<style>
    .main-nav-flex-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 100%;
    }

    .main-nav-link {
        text-decoration: none;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 600px) {
        .main-nav-flex-container {
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            list-style: none;
            width: 90%;
            margin-left: 20px;
        }
    }
</style>
