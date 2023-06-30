import { IProducts } from "@/types";
import { sanitize } from "@/utils/miscellaneous";
import { isArray, isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";

export function Products({ products }: { products: IProducts[] }) {
  if (isEmpty(products) || !isArray(products)) {
    return null;
  }

  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden justify-center">
      {
        products.map(product => {
          const img = product.images[0] ?? {}

          return (
            <div
              key={product.id}
              className="sm:w-1/2 md:w-1/3 xl:w-1/4 px-2 my-2"
            >
              <Link
                href={product.permalink ?? '/'}
                target="_blank"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  height={380}
                  width={380}
                />
                <h3 className="font-bold">{product.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: sanitize(product.price_html) }} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}