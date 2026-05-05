import camelCaseKeys from "camelcase-keys";
import * as db from "../db/index.ts";

export interface CategoryRow {
  // esto es lo que viene de la base de datos
  id: number;
  title: string;
  slug: string;
  img_src: string;
  alt: string | null;
  description: string;
  create_at: Date;
  update_at: Date;
}

//aqui usamos el camelcasekey para extraer el tipo
// type Category = typeof camelcaseKeys<CategoryRow>; aqui tenemos la definicion de la funcion
export type Category = ReturnType<typeof camelCaseKeys<CategoryRow>>; //aqui ya obtenemos el tipo
//Siempre debemos hacer esto asi, definimos del ElementoRow y posterior sacamos el tipado de la funcion

export async function getAll(): Promise<Category[]> {
  const result = await db.query<CategoryRow>("SELECT * FROM categories");
  return camelCaseKeys(result.rows);
}

export async function findBySlug(slug: CategoryRow["slug"]) {
  const result = await db.query<CategoryRow>(
    `SELECT * FROM categories WHERE slug = $1`,
    [slug],
  );

  return result.rows[0] !== undefined ? camelCaseKeys(result.rows[0]) : null;
}
