import type { Request, Response } from "express";
import { ApiError } from "../lib/errors.ts";
import type { ProductRow } from "../repositories/product.repository.ts";
import * as categoryService from "../services/category.service.ts";
import * as productService from "../services/product.service.ts";
import * as categoryController from "./category.controller.ts";

export interface SlugParams {
  slug: ProductRow["slug"];
}

export async function getProductsByCategory(
  // req: Request<categoryController.SlugParams, _ResBody, _ReqBody, QueryString>,
  req: Request<categoryController.SlugParams>,
  res: Response,
) {
  const { slug } = req.params;

  const category = await categoryService.getCategory(slug);

  if (!category) {
    throw new ApiError(404, "Categoria no encontrada");
  }

  const products = await productService.getProductsByCategory(slug);

  res.json({ status: "success", data: products });
}

export async function getProductBySlug(
  req: Request<SlugParams>,
  res: Response,
) {
  const { slug } = req.params;
  const product = await productService.getProductBySlug(slug);
  if (!product) {
    throw new ApiError(404, "Producto no encontrado.");
  }
  res.json({ status: "success", data: product });
}
