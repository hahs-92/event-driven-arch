import { Request, Response } from "express";

import { AppDataSource } from "../database/dataSource";
import { Product } from "../entities/product.entity";

export async function getAll(req: Request, res: Response): Promise<void> {
  try {
    // const products = await AppDataSource.manager.find(Product);
    // const products = await AppDataSource.manager.find(Product);
    const repo = AppDataSource.getRepository(Product);
    const products = await repo.find();

    res.status(200).json({ count: products.length, data: products });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const { body } = req;
    const newProduct = new Product();
    newProduct.title = body.title;
    newProduct.image = body.image;

    // const result = await AppDataSource.manager.save(newProduct);
    const repo = AppDataSource.getRepository(Product);
    const result = await repo.save(newProduct);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Product);
    const product = await repo.findOne({ where: { id: parseInt(id) } });

    if (!product) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function update(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { body } = req;
    const repo = AppDataSource.getRepository(Product);
    let product = await repo.findOne({ where: { id: parseInt(id) } });

    if (!product) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    // repo.merge(product, body);
    product = { ...product, ...body } as Product;
    const result = await repo.save(product);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function remove(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Product);
    let product = await repo.findOne({ where: { id: parseInt(id) } });

    if (!product) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    await repo.remove(product);
    res.status(200).send("Product removed¡");
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function increaseLikes(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Product);
    let product = await repo.findOne({ where: { id: parseInt(id) } });

    if (!product) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    product.likes++;
    const result = await repo.save(product);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}
