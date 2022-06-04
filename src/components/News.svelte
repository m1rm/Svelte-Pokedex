<div class="flex-container">
    <h2>News</h2>
    {#await data then value}
        {#each data as resultObject}
            <div class="news-card">
                {#if resultObject.image}
                    <img class="news-image" src="{resultObject.image.thumbnail.contentUrl}" alt="news teaser"/>
                {:else}
                    <img class="news-image" src="images/default-placeholder.png" alt="placholder" height="100px" width="100px"/>
                {/if}
                <div class="news-card-content">
                    <span>{resultObject.name}</span>
                    <span class="on-mobile-hidden">{resultObject.description}</span>
                </div>
            </div>
        {/each}
    {/await}
</div>

<style>
    h2 {
        text-align:center !important;
        display:inline-block !important;
        width:100%;
    }

    .flex-container {
        margin: 24px 24px 0 16px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .news-card {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0 0 24px 0;
    }

    .news-image {
        margin-right: 16px;
    }

    .news-card-content {
        display: flex;
        align-items: start;
        flex-direction: column;
    }

    @media screen and (max-width: 720px) {
        .on-mobile-hidden {
            display: none;
        }
    }
</style>

<script>
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': process.env.BING_API_SDK,
            'X-RapidAPI-Host': process.env.API_HOST,
            'X-RapidAPI-Key': process.env.API_KEY
        }
    };

    let data = [];

    fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=pokemon&safeSearch=Off&textFormat=Raw&freshness=Day', options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.value)
            data = response.value;
        })
</script>