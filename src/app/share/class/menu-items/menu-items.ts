import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [

  {
    state: 'dataFormArea',
    name: '监督指导',
    type: 'link',
    icon: 'ti-comments',
    roleList : ['ast','da_business_guidance_role']
  },
  {
    state: 'distributionArea',
    name: '收集整理',
    type: 'link',
    icon: 'ti-files',
    roleList : ['ast']
  },
  {
    state: 'manageArea',
    name: '档案管理',
    type: 'link',
    icon: 'ti-archive',
    roleList : ['ast']
  },
  // {
  //   state: 'fileDispose',
  //   name: '档案处置',
  //   type: 'link',
  //   icon: 'ti-time',
  //   roleList : ['ast']
  // },
  {
    state: 'businessSet',
    name: '业务规则',
    type: 'link',
    icon: 'ti-control-shuffle',
    roleList : ['ast']
  },
  {
    state: 'systemManage',
    name: '系统管理',
    type: 'link',
    icon: 'ti-settings',
    roleList : ['superuser','admin']
  }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
