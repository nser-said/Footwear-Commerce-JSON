import React from "react";
import { promises as fs } from 'fs';
import path from 'path';

import Hero from "../components/Hero";
import Productsction from "../components/Productsction";

async function getProducts() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const data = await getProducts();

  return (
    <div className="bg-[#f5f6f7]">
      <Hero />
      <Productsction products={data.products} />
    </div>
  );
}
