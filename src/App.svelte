<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>

	body {
		background-color: #808080;
		font-family: Helvetica, Sans-Serif, serif;
		font-size: 20px;
	}
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
	}

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