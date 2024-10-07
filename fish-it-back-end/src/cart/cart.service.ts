import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AlsuperItemType } from './types/alsuperItemType';
import axios from 'axios';
const ALSUPER_API_URL = 'https://prod.alsuperapi.com';
const ALSUPER_CART_URL = 'https://alsuper.com/carrito';
const ALSUPER_URL = 'https://alsuper.com';
const ALSUPER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NDM1MiwiZW1haWwiOiJzaGFya2VyOTJAaG90bWFpbC5jb20iLCJhdHRyaWJ1dGVzIjoiQW5kcmVzIE1vcmFsZXMgUmV5ZXMiLCJnZW5kZXIiOiJIIiwidHlwZSI6ImNsaWVudCIsImRhdGVfYmlydGgiOiIxOTkyLTA1LTExIiwibWVtYmVyc2hpcCI6IjAyMDk0NTk0NzA1NSIsImZpcmViYXNlX3Rva2VucyI6WyJmaDFDam9aU1EwNnJScDl0cElaM0RxOkFQQTkxYkVHQWZmcW5mTUVGX19jOGJPQ1R2enFQTHF5TFZfUG1HTWl4aUtvWkdWeGJyYjMwYWgxUnFzVzVpTFVHMHBkWGpJdEZwQ3I3Nlp0QjVMV3plUnFyNGlsTGJ2cGZrN2VXOHlkOENRUms5cHRQdllpUzJYMGtBejVPaTBab3NMWW5PSjVIVUlXIl0sImlhdCI6MTcyNTI0MDc2OX0.Me-uS9d9FeHc4fkioJuILd-6oyscFliYHa90jVzJj3c';
@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);
  constructor() {}

  async create(jsonData: AlsuperItemType[]) {
    const loadedItemsResponse = await this.loadItemsInCart(jsonData);
    const loadedAndCommentedItemsResponse =
      await this.addCommentsToItems(loadedItemsResponse);
    return loadedAndCommentedItemsResponse;
  }
  private async addCommentsToItems(loadedItems: any) {
    const commentItemsUrl = `${ALSUPER_API_URL}/cart/items/comments`;
    const commentedItems = [];
    const nonCommentedItems = [];
    const commentedItemsWithPossibleError = [];
    const itemsWithComments = loadedItems.productosCargados.filter(
      (item) => item?.comment,
    );
    for (const item of itemsWithComments) {
      try {
        const res = await axios.put(commentItemsUrl, item, {
          headers: {
            Authorization: `Bearer ${ALSUPER_TOKEN}`,
          },
        });
        if (res?.data?.data?.message === 'Se ha agregado un comentario') {
          commentedItems.push(item);
          this.logger.log(res?.data?.data?.message, item);
        } else {
          commentedItemsWithPossibleError.push(item);
        }
      } catch (error) {
        nonCommentedItems.push({
          ...item,
          errorAlsuper: error?.response?.data?.data?.message,
          error: error.message,
        });
        this.logger.error(error);
      }
    }
    const responseMessage = {
      ...loadedItems,
      productosComentados: commentedItems,
      productosNoComentados: nonCommentedItems,
      productosComentadosConPossibleError: commentedItemsWithPossibleError,
    };
    return responseMessage;
  }
  private async loadItemsInCart(jsonData: AlsuperItemType[]) {
    const loadItemsUrl = `${ALSUPER_API_URL}/cart/items`;
    const nonLoadedItems = [];
    const loadedItems = [];
    const loadedItemsWithPossibleError = [];
    for (const item of jsonData) {
      try {
        const res = await axios.post(
          loadItemsUrl,
          { items: [item] },
          {
            headers: {
              Authorization: `Bearer ${ALSUPER_TOKEN}`,
            },
          },
        );
        const itemAdded = res?.data?.data?.items[0];
        if (itemAdded) {
          loadedItems.push({ ...itemAdded, ...item });
          this.logger.log(res?.data?.data?.message, res?.data?.data?.items[0]);
        } else {
          loadedItemsWithPossibleError.push({ ...item });
        }
      } catch (error) {
        nonLoadedItems.push({
          ...item,
          errorAlsuper: error?.response?.data?.data?.message,
          error: error.message,
        });
        this.logger.error(error);
      }
    }
    const responseMessage = {
      message: 'Tus productos han sido cargados al carrito',
      cart: ALSUPER_CART_URL,
      numProductosNoCargados: nonLoadedItems.length,
      productosNoCargados: nonLoadedItems,
      numProductosCargadosConPossibleError: loadedItemsWithPossibleError.length,
      productosCargadosConPossibleError: loadedItemsWithPossibleError,
      numProductosCargados: loadedItems.length,
      productosCargados: loadedItems,
    };
    return responseMessage;
  }
  // add the verify not sure if also when creating the cart
  // https://alsuper.com/carrito
  // /cart/verify-cart
  async get() {
    const getCartUrl = `${ALSUPER_API_URL}/cart`;
    try {
      const res = await axios.get(getCartUrl, {
        headers: {
          Authorization: `Bearer ${ALSUPER_TOKEN}`,
        },
      });
      const cartData = res?.data?.data;
      return cartData;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async delete() {
    const deleteItemsUrl = `${ALSUPER_API_URL}/cart`;
    try {
      const res = await axios.delete(deleteItemsUrl, {
        headers: {
          Authorization: `Bearer ${ALSUPER_TOKEN}`,
        },
      });
      const responseMessage = res?.data?.data?.message;
      if (responseMessage !== 'Cart 579207 is now empty.') {
        this.logger.warn(`Response message isn't the expected`);
      }
      return responseMessage;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
