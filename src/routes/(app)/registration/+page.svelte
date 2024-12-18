<script>
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/Alert.svelte';

	export let form;
</script>

<section>
	<div class="card mx-3 p-3">
		<div class="mb-3"><h4 class="text-center fw-bold">REGISTRATION</h4></div>
		<Alert {form} />
		<form method="post">
			<div class="px-2 mb-3">
				<div class="form-floating mb-3">
					<input
						type="text"
						class="form-control"
						id="floatingInput"
						placeholder="name"
						name="name"
						required
					/>
					<label for="floatingInput">Name</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="number"
						class="form-control"
						id="floatingInput"
						placeholder="role"
						name="role"
						required
					/>
					<label for="floatingInput">Role</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="number"
						class="form-control"
						id="floatingInput"
						placeholder="pin"
						name="pin"
						maxlength="4"
						required
					/>
					<label for="floatingInput">PIN</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="datetime-local"
						class="form-control"
						id="floatingInput"
						name="expires_at"
						placeholder="expires"
						required
					/>
					<label for="floatingInput">Expired Time</label>
				</div>
			</div>
			<div class="d-flex justify-content-evenly">
				<button class="btn btn-sm btn-secondary w-25" type="reset">Reset</button>
				<button class="btn btn-sm btn-success w-25" type="submit">Submit</button>
			</div>
		</form>
	</div>
</section>
