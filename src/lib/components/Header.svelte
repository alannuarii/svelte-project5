<script>
	import { enhance } from '$app/forms';
</script>

<nav class="navbar bg-dark shadow">
	<div class="container-fluid">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="navbar-brand text-light d-flex align-items-center" href="/">Master Authentication</a>
		<a href="/registration" class="btn btn-sm btn-primary">Register</a>
		<form method="post" action="/logout" use:enhance>
			<button class="btn btn-sm btn-secondary" type="submit">Sign out</button>
		</form>
	</div>
</nav>

<style>
	nav {
		height: 60px;
	}
	.navbar-brand {
		font-size: 16px;
		font-weight: 700;
	}
</style>
