const menuList = [
  {
    name: '首页',
    icon: 'el-icon-location',
    id: '1',
  },
  {
    name: '文章管理',
    icon: 'el-icon-menu',
    id: '2',
    children: [
      {
        name: '文章列表',
        id: '2-1',
      },
      {
        name: '新增文章',
        id: '2-2',
      },
    ],
  },
  {
    name: '笔记管理',
    icon: 'el-icon-edit',
    id: '3',
    children: [
      {
        name: '笔记列表',
        id: '3-1',
      },
      {
        name: '新增笔记',
        id: '3-2',
      },
    ],
  },
  {
    name: '分类管理',
    icon: 'el-icon-document',
    id: '4',
  },
  {
    name: '标签管理',
    icon: 'el-icon-document',
    id: '5',
  },
];

export default menuList;
