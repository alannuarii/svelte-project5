<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<h1>Register</h1>
<form method="post" action="?/register" use:enhance>
	<label>
		Nama
		<input type="text" name="username" placeholder="Masukkan username" required />
	</label>
	<label>
		Role
		<input type="password" name="password" placeholder="Masukkan password" required />
	</label>
	<button>Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>
