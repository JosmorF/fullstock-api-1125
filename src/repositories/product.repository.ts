import camelCaseKeys from "camelcase-keys";

export interface ProductRow {
  id: number;
  title: string;
  slug: string;
  img_src: string;
  price: number;
  description: string;
  features: string[];
  category_id: number;
  create_at: Date;
  update_at: Date;
}

export type Product = ReturnType<typeof camelCaseKeys<ProductRow>>;

export function getByCategorySlug() {}
