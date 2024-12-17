import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.references(() => user.id), 
	masterId: text('master_id')
		.references(() => master.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const master = pgTable('master', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	role: integer('role').notNull(),
	pin: text('pin').notNull().unique(),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});