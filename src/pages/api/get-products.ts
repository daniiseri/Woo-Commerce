import { NextApiResponse, NextApiRequest } from "next";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_BACKEND_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
  queryStringAuth: true
});

/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const responseData = {
    success: false,
    products: [],
    error: {}
  }

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get(
      'products',
      {
        per_page: perPage || 50
      }
    );

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);

  } catch (error: any) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}