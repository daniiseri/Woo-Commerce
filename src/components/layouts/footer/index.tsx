import { IFooter } from "@/types"
import { getIconComponentByName } from "@/utils/icons-map";
import { sanitize } from "@/utils/miscellaneous"
import { isArray, isEmpty } from "lodash"
import Link from "next/link"
import { useEffect, useState } from "react";

export function Footer(props: IFooter) {
  const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = props;
  const [isMounted, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <footer className="footer bg-blue-600 p-6">
      <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
        {
          isMounted
          && (
            <>
              {/*Widget One*/}
              <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }} />
              </div>
              {/*Widget Two*/}
              <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }} />
              </div>
            </>
          )
        }
        {/*	Footer Menus*/}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          {!isEmpty(footerMenuItems) && isArray(footerMenuItems)
            ? <ul>
              {footerMenuItems.map(menuItem => {
                return (
                  <li key={menuItem.ID}>
                    <Link
                      href={menuItem.url}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                )
              })
              }
            </ul>
            : null
          }
        </div>

        <div className="mb-8 mt-8 w-full flex flex-wrap">
          {/*Copyright Text*/}
          <div className="w-full md:w-1/2 lg:w-1/4 text-white">
            {copyrightText ? copyrightText : '© Codeytek Academy 2021'}
          </div>
          <div className="w-full lg:w-3/4 flex justify-end">
            {
              !isEmpty(socialLinks) && isArray(socialLinks) ? (
                <ul className="flex item-center mb-0">
                  {
                    socialLinks.map(socialLink => {
                      return (
                        <li key={socialLink.iconName} className="no-dots-list mb-0 flex items-center">
                          <Link href={socialLink.iconUrl || '/'} target="_blank" title={socialLink.iconName}>
                            <span className="ml-2 inline-block">
                              {
                                getIconComponentByName(socialLink.iconName)
                              }
                            </span>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>)
                : null
            }
          </div>
        </div>
      </div>
    </footer>
  )
}