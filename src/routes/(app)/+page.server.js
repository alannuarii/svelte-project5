import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema';

export const load = async () => {
    try {
        const users = await db.select().from(table.user);
        return { users };
    } catch (error) {
        console.error('Error fetching data:', error);
        return fail(500, { message: error.message });
    }
};

export const actions = {
    delete: async (event) => {
        const formData = await event.request.formData();
        const id = formData.get('id')

        try {
            await db.delete(table.user).where(eq(table.user.id, id));

            return {
                message: 'Data deleted successfully'
            };
        } catch (e) {
            return fail(500, { message: e.message });
        }
    }
};
