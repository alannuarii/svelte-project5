<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let form;

	onMount(() => {
		if (form?.message === 'Data updated successfully') {
			setTimeout(() => {
				goto('/');
			}, 1500);
		}
	});
</script>

<div class="mx-3">
	{#if form?.message}
		{#if form.status === 'OK'}
			<div class="alert alert-success" role="alert">
				{form.message}
			</div>
		{:else}
			<div class="alert alert-danger alert-dismissible fade show" role="alert">
				{form.message}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		{/if}
	{/if}
</div>
