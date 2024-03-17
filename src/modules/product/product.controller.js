import { authMiddlware } from "../../middleware/auth.middleware";
import { tryCatch } from "../../utils/trycatch";
import * as ProductService from "./product.service";

const _handleFetchProducts = async (req, res) => {
  const products = await ProductService.fetchProducts(req.params.id);
  res.status(200).json(products);
};

const _handleFetchProduct = async (req, res) => {
  const products = await ProductService.fetchProduct(req.params.id);
  res.status(200).json(products);
};

const _handleInsertProduct = async (req, res) => {
  const product = await ProductService.insertProduct(req.body);
  res.status(201).json(product);
};

const _handleUpdateProduct = async (req, res) => {
  const product = await ProductService.updateProduct(req.params.id, req.body);
  res.status(200).json(product);
};

const _handleDeleteProduct = async (req, res) => {
  const product = await ProductService.deleteProduct(req.params.id);
  res.status(200).json(product);
};

export const handleFetchProducts = [tryCatch(_handleFetchProducts)];

export const handleFetchProduct = [tryCatch(_handleFetchProduct)];

export const handleInsertProduct = [
  authMiddlware,

  tryCatch(_handleInsertProduct),
];

export const handleUpdateProduct = [tryCatch(_handleUpdateProduct)];

export const handleDeleteProduct = [tryCatch(_handleDeleteProduct)];
