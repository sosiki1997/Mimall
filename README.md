# mimall
使用Vue全家桶高仿小米商城——练习

0-init
1-项目目录结构设置
2-项目基础架构
3-开发页面

- 首页index　
  - NavHeader 通用头部组件
  - NavFooter 通用底部组件
  - ServiceBar 首页底部组件
  - swiperSlide 轮播图
  - Left-menu-hover 左侧菜单
  - Ads 广告位
  - phoneList 手机商品
  - Modal 弹窗
  - 图片懒加载
- 产品页面product/ProductParam
  - 视频弹窗动画 
  - 拉取产品信息实现交互
- 详情页面detail
  - 加购物车的交互功能
- 购物车页面
  - Order-Header组件
  - cart组件
    - 列表渲染
    - 选择是否全选toggleAll
    - 更新和删除商品 
    - 结算
    - 退出账户NavHeader
- 订单页面
  - order组件 架构封装
  - orderConfirm组件 订单确认
    - 数据渲染
    - 删除地址
    - 新增地址与交互实现
  - orderPay组件 订单结算
    - 根据订单号拉取订单明细
    - 支付宝对接
    - 微信对接
    - 弹框是否支付及跳转
  - orderList组件 订单列表
    - 数据渲染
    - 分页器

4-线上打包部署


