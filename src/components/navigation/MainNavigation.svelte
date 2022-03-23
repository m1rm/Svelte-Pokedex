<script>
    import { Router, Route, Link } from "svelte-routing";
    import Pokedex from "../Pokedex.svelte";
    import News from "../News.svelte";
    import Team from "../Team.svelte";
    export let pokemon = [];
    export let url = ""; //avoid ignore the Router
</script>
<div>
    <Router url="{url}">
        <nav class="main-nav-flex-container">
            <Link to="news">News</Link>
            <Link to="/">Pokédex</Link>
            <Link to="team">Manage Your Team</Link>
        </nav>
        <div>
            <Route path="news" component="{News}" />
            <Route path="/" component="{Pokedex}" />
            <Route path="/team" component="{Team}" />
        </div>
    </Router>
</div>

<style>
    .main-nav-flex-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 100%;
    }
</style>
