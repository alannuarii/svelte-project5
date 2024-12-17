<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { timeRemining, convertDateTime } from '../../../../lib/js/timeConfig';

	export let data;
	export let form;

	const user = data.user;

	onMount(() => {
		if (form?.message === 'Data updated successfully') {
			setTimeout(() => {
				goto('/');
			}, 3000);
		}
	});
</script>

<section>
	<div class="card mx-3 p-3">
		<div class="mb-3"><h4 class="text-center fw-bold">REGISTRATION</h4></div>
		{#if form?.message}
			<!-- Gunakan optional chaining -->
			<div class="alert alert-success" role="alert">
				{form.message}
			</div>
		{/if}
		<form method="post" action="?/update">
			<div class="px-2 mb-3">
				<div class="form-floating mb-3">
					<input
						type="text"
						class="form-control"
						id="floatingInput"
						name="name"
						value={user[0].name}
						required
					/>
					<label for="floatingInput">Name</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="number"
						class="form-control"
						id="floatingInput"
						name="role"
						value={user[0].role}
						required
					/>
					<label for="floatingInput">Role</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="number"
						class="form-control"
						id="floatingInput"
						name="pin"
						maxlength="4"
						value={user[0].pin}
						required
					/>
					<label for="floatingInput">PIN</label>
				</div>
				<div class="form-floating mb-3">
					<input type="datetime-local" class="form-control" id="floatingInput" name="expires_at" />
					<label for="floatingInput">Expired Time</label>
				</div>
				<p class="ms-2">{convertDateTime(user[0].expiresAt)} ({timeRemining(user[0].expiresAt)})</p>
			</div>
			<input type="hidden" name="id" value={user[0].id} />
			<input type="hidden" name="expires_before" value={user[0].expiresAt} />
			<div class="d-flex justify-content-evenly">
				<button class="btn btn-sm btn-secondary w-25" type="reset">Reset</button>
				<button class="btn btn-sm btn-success w-25" type="submit">Submit</button>
			</div>
		</form>
	</div>
</section>

<style>
	p {
		margin: 0px;
		margin-top: -10px;
		font-size: 13px;
	}
</style>
