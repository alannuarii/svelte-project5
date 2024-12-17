<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Master Authentication</title>
	<meta name="description" content="Project5" />
</svelte:head>

<main>
	<div class="position-relative">
		<div class="header position-absolute top-0 start-50 translate-middle-x">
			<Header />
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
</main>

<style>
	main {
		background-image: url('../../lib/img/bg.jpg');
		background-size: cover;
	}
	.header {
		width: 100%;
	}
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 80px;
	}
</style>
