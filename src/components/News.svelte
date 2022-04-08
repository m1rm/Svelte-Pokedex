<div class="flex-container">

    {#await data then value}
        {#each data as resultObject}
            <div class="news-card">
                {#if resultObject.image}
                    <img src="{resultObject.image.thumbnail.contentUrl}" alt="news teaser"/>
                {:else}
                    <img src="images/default-placeholder.png" alt="placholder" height="100px" width="100px"/>
                {/if}
                <div class="news-card-content">
                    <span>{resultObject.name}</span>
                    <span>{resultObject.description}</span>
                </div>
            </div>

        {/each}
    {/await}

</div>

<style>
    .flex-container {
        margin: 1rem 1rem 0 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .news-card {
        display: flex;
        align-items: center;
    }

    .news-card-content {
        display: flex;
        align-items: center;
        flex-direction: column;
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