import * as auth from '$lib/server/auth.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async (event) => {
        if (!event.locals.session) {
            return fail(401);
        }
        await auth.invalidateSession(event.locals.session.id);
        auth.deleteSessionTokenCookie(event);

        return redirect(302, '/login');
    }
};
