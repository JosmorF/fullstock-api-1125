import pg from "pg";

export const pool = new pg.Pool({
  connectionString: process.env["DATABASE_URL"],
});

export function query(text: string, params?: unknown) {
  console.log("ejecutando consulta", text);
  return pool.query(text, params);
}
