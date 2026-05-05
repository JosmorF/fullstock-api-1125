import * as categoryRepository from "../repositories/category.repository.ts";
import type { Category } from "../repositories/category.repository.ts";

export async function getCategories(): Promise<Category[]> {
  return categoryRepository.getAll();
}

export async function getCategory( //preguntar al profe porque no se incluye la parte del reglon 4 anterior
  slug: categoryRepository.CategoryRow["slug"],
): Promise<Category | null> {
  return categoryRepository.findBySlug(slug);
}
