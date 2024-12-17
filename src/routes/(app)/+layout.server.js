import * as auth from '$lib/server/auth.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async (event) => {
    if (!event.locals.user) {
        return redirect(302, '/login');
    }
    return { user: event.locals.user };
};