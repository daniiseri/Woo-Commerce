import React from 'react';
import * as SvgIconsComponent from '../components/icons';

/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */

interface IComponent {
  [key: string]: (props: any) => React.JSX.Element
}

export function getIconComponentByName(name: string) {

  const ComponentsMap: IComponent = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    instagram: SvgIconsComponent.Instagram,
    youtube: SvgIconsComponent.Youtube
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name]

    return <IconComponent/>
  } else {
    return null
  }
};