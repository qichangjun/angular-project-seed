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
  state?: string;
  nodes?:ChildrenItems[];
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
    state: 'missionCenter',
    name: '任务中心',
    type: 'link',
    icon: 'ti-comments',
    //menuCode : ['da_superuser_role','admin']
    menuCode : 'taskCenter'
  },
  {
    state: 'workAbilityAssessment',
    name: '工作能力评估',
    type: 'drawer',
    icon: 'ti-harddrives',
    children:[
      {name:'数据管理', menuCode : 'receiveLibrary:receiveManage',nodes:[
        {name:'接收库', menuCode : 'receiveLibrary:receiveManage:receiveHouse',state:'receiveList'}
      ]}
    ],
    menuCode : 'receiveLibrary'
  }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
