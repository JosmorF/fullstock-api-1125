import pg, { type QueryResultRow } from "pg";

export const pool = new pg.Pool({
  connectionString: process.env["DATABASE_URL"],
});

export function query<T extends QueryResultRow>(
  text: string,
  params?: unknown[],
) {
  console.log("ejecutando consulta", text);
  return pool.query<T>(text, params);
}
