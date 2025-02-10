import { Pool } from 'pg';

export const pool = new Pool({
    user: 'bitespeed',
    host: 'localhost',
    database: 'bitespeed',
    password: 'Admin',
    port: 5432,
});