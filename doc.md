# Thallo

## GameObject 游戏内对象的父类

### scene
游戏场景，可将游戏内的其他对象放到游戏场景内。

### canvas
画布，独立于场景之外，显示在屏幕上，可用于按钮等

### camera
摄像机，摄像机的拍摄到的内容将会显示在屏幕上。

### customObject
自定义游戏对象，可挂载多个组件

### Object
	static distroy({name})
	static find({name})

	construct({name, gameObject, components})

	find({name})
	addComponent(component)
	removeComponent(component)
	getComponent(component)
	setActive(flag)
	distroy()


## Component 可以挂载到游戏对象上

### transform
位置大小

### text
文字

### animation
动画

### animator
动画管理器

### image
图片

### music
音乐

### customComponent
自定义组件，可以自己创建组件，控制对象属性、修改对象上的组件等

### component
	start()
	preUpdate()
	update()
	lateUpdate()
	distroy()

## DataTypes

### Vector2 二维坐标向量
	static minus() 多个Vector相减
	static add()。 相加
	x
	y

### Rect 矩形
	x
	y
	width
	height



## 游戏组件依赖
Canvas > Scene > Camera > GameObjects

Canvas 显示一个 Camera 的内容

Camera 需要一个 Scene


