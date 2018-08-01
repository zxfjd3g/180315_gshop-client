# day01
## 1. 项目开发准备
    项目描述
    技术选型
    API接口
    你能从此项目中学到什么?

## 2. 开启项目开发
    使用脚手架创建项目
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与发布

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta

## 6. 后台接口相关
    运行后台项目(启动mongodb服务), 
    使用postman测试后台接口, 如果不一致, 修改接口文档

## 7. 异步数据
    1). 封装ajax: 
        promise+axios封装ajax请求的函数
        封装每个接口对应的请求函数(能根据接口定义ajax请求函数)
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    
    2).vuex编码
        创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现index: 创建store对象
        main.js: 配置store
    
    3). 组件异步显示数据
        在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
        mapState(['xxx'])读取state中数据到组件中
        在模板中显示xxx的数据
    
    4. 模板中显示数据的来源
        data: 自身的数据(内部改变)
        props: 外部传入的数据(外部改变)
        computed: 根据data/props/别的compute/state/getters
        
        
# day02
## 1. 异步显示分类轮播

## 2. Star组件

## 3. 登陆/注册功能
### 1. 界面效果
    1). 切换登陆方式
    2). 手机号验证
    3). 倒计时效果
    4). 密码显示/隐藏的切换

