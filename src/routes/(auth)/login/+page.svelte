<script>
	import { enhance } from '$app/forms';
	import np from '$lib/img/np.png';
</script>

<section>
	<div class="outer ms-auto d-flex flex-column align-items-center justify-content-center">
		<div class="d-flex justify-content-center">
			<img src={np} class="img-fluid mb-5" alt="" />
		</div>
		<div class="mb-3 text-center">
			<h1 class="text-light">MASTER</h1>
			<h2 class="text-light">AUTHENTICATION</h2>
		</div>
		<form method="post" action="?/login" use:enhance class="w-75">
			<div class="input-group mb-1">
				<span class="input-group-text text-light"><i class="bi-person-circle"></i></span>
				<div class="form-floating">
					<input
						type="text"
						class="form-control bg-dark-subtle"
						id="floatingInputGroup1"
						placeholder="Username"
						name="username"
					/>
					<label for="floatingInputGroup1">Username</label>
				</div>
			</div>
			<div class="input-group">
				<span class="input-group-text text-light"><i class="bi-key"></i></span>
				<div class="form-floating">
					<input
						type="password"
						class="form-control bg-dark-subtle"
						id="floatingInputGroup1"
						placeholder="Password"
						name="password"
					/>
					<label for="floatingInputGroup1">Password</label>
				</div>
			</div>
			<div class="mt-3 d-flex justify-content-center">
				<button class="btn btn-login w-50 text-light" type="submit">Login</button>
			</div>
		</form>
		<p class="mt-5 author text-light">Created by: <span>Alan Nuari</span></p>
	</div>
</section>

<style>
	section {
		background-image: url('../../../lib/img/bg.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.95;
	}
	.outer {
		/* width: 30%; */
		height: 100vh;
	}

	button,
	input,
	span {
		border-radius: 0px;
	}

	.btn-login {
		background-color: #22223b;
	}

	.btn-login:hover {
		background-color: #22223bdf;
	}

	span {
		background-color: #22223b;
	}
	img {
		height: 40px;
	}
	h1 {
		font-weight: 900;
		font-size: 32px;
		margin: 0px;
	}
	h2 {
		font-weight: 900;
		margin: 0px;
	}
	.author {
		margin-top: 300px !important;
		font-size: 13px;
	}
	.author span {
		font-weight: 700;
		background-color: transparent;
	}
</style>
