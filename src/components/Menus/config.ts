import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
  },
  {
    label: 'Navigation Three',
    key: 'SubMenu',
  }
];