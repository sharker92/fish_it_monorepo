import { Injectable } from '@nestjs/common';
import { AlsuperItemType } from './types/alsuperItemType';
import axios from 'axios';

const ALSUPER_API_URL = 'https://prod.alsuperapi.com';
const ALSUPER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NDM1MiwiZW1haWwiOiJzaGFya2VyOTJAaG90bWFpbC5jb20iLCJhdHRyaWJ1dGVzIjoiQW5kcmVzIE1vcmFsZXMgUmV5ZXMiLCJnZW5kZXIiOiJIIiwidHlwZSI6ImNsaWVudCIsImRhdGVfYmlydGgiOiIxOTkyLTA1LTExIiwibWVtYmVyc2hpcCI6IjAyMDk0NTk0NzA1NSIsImZpcmViYXNlX3Rva2VucyI6WyJmaDFDam9aU1EwNnJScDl0cElaM0RxOkFQQTkxYkVHQWZmcW5mTUVGX19jOGJPQ1R2enFQTHF5TFZfUG1HTWl4aUtvWkdWeGJyYjMwYWgxUnFzVzVpTFVHMHBkWGpJdEZwQ3I3Nlp0QjVMV3plUnFyNGlsTGJ2cGZrN2VXOHlkOENRUms5cHRQdllpUzJYMGtBejVPaTBab3NMWW5PSjVIVUlXIl0sImlhdCI6MTcyNTI0MDc2OX0.Me-uS9d9FeHc4fkioJuILd-6oyscFliYHa90jVzJj3c';
@Injectable()
export class CartService {
  constructor() {}
  async create(jsonData: AlsuperItemType[], jsonFile) {
    try {
      // const userDataUrl = `${ALSUPER_API_URL}/users/user-data`;
      // const res2 = await axios.get(userDataUrl, {
      //   headers: {
      //     Authorization: `Bearer ${ALSUPER_TOKEN}`,
      //   },
      // });
      const loadItemsUrl = `${ALSUPER_API_URL}/cart/items`;
      const res = await axios.post(
        loadItemsUrl,
        {
          items: jsonData,
        },
        {
          headers: {
            Authorization: `Bearer ${ALSUPER_TOKEN}`,
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
    for (const item of jsonData) {
      try {
        console.log(item);
        const res = await axios.post(ALSUPER_API_URL, item, {
          headers: {
            Authorization: `Bearer ${ALSUPER_TOKEN}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
    return 'This action adds a new cart';
  }
}
