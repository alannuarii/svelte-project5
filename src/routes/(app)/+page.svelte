<script>
	import { timeRemining } from '../../lib/js/timeConfig';
	import ModalDeleteUser from '$lib/components/ModalDeleteUser.svelte';

	export let data;
	export let form;
	const users = data.users;
</script>

<section class="mx-3">
	{#if form?.message}
		<div class="alert alert-success alert-dismissible fade show" role="alert">
			{form.message}
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	{/if}
	{#if users && users.length > 0}
		{#each users as user, index}
			<div class="card p-1 rounded-4 mb-2">
				<div
					class="btn p-2"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapse{index}"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<div><h6 class="fw-bold text-start">{index + 1}. {user.name}</h6></div>
					<hr />
					<div class="text-center">
						<span class="badge text-bg-primary">PIN : {user.pin}</span>
						<span class="badge text-bg-success">Role : {user.role}</span>
						{#if timeRemining(user.expiresAt) !== 'Expired'}
							<span class="badge text-bg-secondary">{timeRemining(user.expiresAt)}</span>
						{:else}
							<span class="badge text-bg-danger">{timeRemining(user.expiresAt)}</span>
						{/if}
					</div>
				</div>
				<div class="collapse mx-3 my-2" id="collapse{index}">
					<div class="card card-body">
						<div class="d-flex justify-content-evenly">
							<a href="/update/{user.id}" class="btn btn-sm btn-secondary w-25">Edit</a>
							<button
								class="btn btn-sm btn-danger"
								data-bs-toggle="modal"
								data-bs-target="#Modal{user.id}">Delete</button
							>
						</div>
					</div>
				</div>
			</div>
			<ModalDeleteUser id={user.id} name={user.name} />
		{/each}
	{:else}
		<p>No users found.</p>
	{/if}
</section>

<style>
	h6 {
		margin: 0px;
	}
</style>
