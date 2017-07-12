export default {
  user: {},
  loading: false,
  refresh: false,
  newsList: [],
  albums: [],
  online: false,
  menuList: [
    {title: '工作区域', index: 'work', child: [{title: '管理员', child: [{index: 'admin/edit_user', title: '管理用户'}, {index: 'admin/set_auth', title: '设置权限'}]}, {title: '物流查询', child: [{index: 'wuliu/sf', title: '顺丰'}, {index: 'wuliu/jd', title: '京东'}]}]},
    {title: '酒店管理', index: 'hotal'},
    {title: '餐饮管理', index: 'food'}
  ]
}
