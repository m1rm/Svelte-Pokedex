<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';
    import Pokecard from '../components/Pokecard.svelte';

    export let pokemon = [];
    export let team = [];

    // add 6 random pokémon to the team
    let i = 1;
    while (i < 7) {
        let index = Math.floor(Math.random() * 151);
        team.push(pokemon[index])
        i++
    }
</script>
<div class="flex-container">
    <h2>Your Team</h2>
    <Swiper
            autoHeight="true"
            slidesPerView={2}
            on:slideChange={() => console.log('slide change')}
            on:swiper={(e) => console.log(e.detail[0])}
    >
        {#each team as teamMember}
        <SwiperSlide class="swiper-slide">
            <Pokecard
                    name={teamMember.name}
                    pokedexIndex={teamMember.num}
                    type={teamMember.type}
                    portrait={teamMember.img}
            />
        </SwiperSlide>
        {/each}
    </Swiper>
</div>

<style>
    .flex-container {
        margin: 1rem 1rem 0 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    h2 {
        text-align:center !important;
        display:inline-block !important;
        width: 100%;
    }

    .swiper-slide {
        width: 100%;
    }
</style>
