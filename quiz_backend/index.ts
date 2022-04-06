import { DataSource } from "typeorm";

import { ApolloServer, gql } from "apollo-server";
import { fetchProducts } from "./fetchProducts.postgres";
import { fetchProduct } from "./fetchProduct.postgres";
import { createProduct } from "./createProduct";
import { updateProduct } from "./updateProduct";
import { deleteProduct } from "./deleteProduct";

const typeDefs = gql`
  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  input CreateProductInput {
    name: String
    detail: String
  }

  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts(page: Int): [Product!]
    fetchProduct(productId: ID): String
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): String
    deleteProduct(productId: ID): String
  }
`;

const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await fetchProducts.find();
      return result;
    },
    fetchProduct: async () => {},
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await createProduct.insert({
        ...args.createProductInput,
      });
      return "상품을 등록했습니다.";
    },
    updateProduct: async (_: any, args: any) => {
      await updateProduct.update(
        { _id: args.updateProductInput.productId },
        { ...args.updateProductInput }
      );
      return "상품을 수정했습니다.";
    },
    deleteProduct: async (_: any, args: any) => {
      await deleteProduct.update(
        { _id: args.updateProductInput.productId },
        { deletedAt: new Date() }
      );
      return "상품을 삭제했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5017,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [
    fetchProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  ],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!");
  });
