// app/db/index.ts
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

// This creates a local file named 'sqlite.db' in your project root automatically
const sqlite = new Database('sqlite.db');

export const db = drizzle(sqlite, { schema });