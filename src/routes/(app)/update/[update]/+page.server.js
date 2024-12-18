import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema';

export const load = async ({ url }) => {
    const id = url.pathname.replace('/update/', '')
    try {
        const user = await db.select().from(table.user).where(eq(table.user.id, id));
        return { user };
    } catch (error) {
        console.error('Error fetching data:', error);
        return fail(500, { message: error.message });
    }
};

export const actions = {
    update: async (event) => {
        const formData = await event.request.formData();
        const id = formData.get('id')
        const name = formData.get('name');
        const role = formData.get('role');
        const pin = String(formData.get('pin'));

        let expires = ''
        const expiresAfter = formData.get('expires_at');
        const expiresBefore = formData.get('expires_before');

        if (expiresAfter) {
            expires = new Date(expiresAfter)
        } else {
            expires = new Date(expiresBefore)
        }

        try {
            await db.update(table.user).set({ name, role, pin, expiresAt: expires }).where(eq(table.user.id, id));

            return {
                message: 'Data updated successfully', status: 'OK'
            };
        } catch (e) {
            return fail(500, { message: e.message, status: 'Not OK' });
        }
    }
};
