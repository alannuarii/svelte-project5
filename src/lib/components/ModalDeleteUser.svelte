<script>
	export let id;
	export let name;
</script>

<div
	class="modal fade"
	id="Modal{id}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body">Are you sure to delete user <span class="fw-bold">{name}</span>?</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<form method="post" action="?/delete" class="w-25">
					<input type="hidden" name="id" value={id} />
					<button type="submit" class="btn btn-danger">Delete</button>
				</form>
			</div>
		</div>
	</div>
</div>
