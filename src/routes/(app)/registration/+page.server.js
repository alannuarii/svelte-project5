import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const name = formData.get('name');
        const role = formData.get('role');
        const pin = String(formData.get('pin'));
        const expires = new Date(formData.get('expires_at'));

        const userId = generateUserId();

        try {
            await db.insert(table.user).values({ id: userId, name, role, pin, expiresAt: expires });

            return {
                message: 'Data saved successfully'
            };
        } catch (e) {
            return fail(500, { message: e.message });
        }
    }
};

function generateUserId() {
    const bytes = crypto.getRandomValues(new Uint8Array(15));
    const id = encodeBase32LowerCase(bytes);
    return id;
}
