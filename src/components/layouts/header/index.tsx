import Link from "next/link";
import Head from 'next/head'
import { isEmpty } from 'lodash'
import { useState } from "react";

import { IHeader } from "@/types";
import TailwindIcon from '@/components/icons/TailwindIcon'
import User from '@/components/icons/User'
import Wishlist from '@/components/icons/Wishlist'
import Bag from '@/components/icons/Bag'
import BurguerIcon from '@/components/icons/BurguerIcon'
import { sanitize } from "@/utils/miscellaneous";

export function Header(props: IHeader) {
  const { headerMenuItems, siteTitle, favicon, siteLogoUrl, siteDescription } = props
  const [isMenuVisible, setMenuVisibility] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>{siteTitle || 'Nextjs WooCommerce Website'}</title>
        <link rel="icon" href={favicon} />
      </Head>
      <header>
        <nav className="bg-white py-5">
          <div
            className="flex items-center justify-between flex-wrap container mx-auto"
          >
            <div className="flex items-center flex-shrink-0 mr-20">
              <Link
                className="font-semibold text-xl tracking-tight"
                href='/'
              >
                {
                  siteLogoUrl
                    ? <img className="mr-2" src={siteLogoUrl} alt={`${siteTitle} logo`} width={86} height={32} />
                    : <TailwindIcon />
                }
              </Link>
              <span>
                <Link className="font-semibold text-xl tracking-tight" href="">{siteTitle || 'WooNext'}</Link>
                {siteDescription ? <p className="mb-0">{siteDescription}</p> : null}
              </span>
            </div>

            <div
              className="block lg:hidden"
            >
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
              >
                <BurguerIcon className='fill-current w-3 h-3' />
              </button>
            </div>

            <div
              className={`${isMenuVisible ? 'max-h-full' : 'h-0'} overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm font-medium uppercase lg:flex-grow">
                {
                  !isEmpty(headerMenuItems) && headerMenuItems.length
                    ? headerMenuItems.map(menuItem => {
                      return (
                        <Link
                          className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
                          key={menuItem.ID}
                          href={menuItem.url || '/'}
                          dangerouslySetInnerHTML={{ __html: sanitize(menuItem.title) }}
                        />
                      )
                    })

                    : null
                }
              </div>
              <div className="text-sm font-medium">
                <Link href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                  <span className="flex flex-row items-center lg:flex-col">
                    <User className="mr-1 lg:mr-0" />
                    Profile
                  </span>
                </Link>
                <Link href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                  <span className="flex flex-row items-center lg:flex-col">
                    <Wishlist className="mr-1 lg:mr-0" />
                    Wishlist
                  </span>
                </Link>
                <Link
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/cart"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Bag className="mr-1 lg:mr-0" />
                    Bag
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}