# Object 游戏内对象的父类

## scene
游戏场景，可将游戏内的其他对象放到游戏场景内。

## canvas
画布，独立于场景之外，显示在屏幕上，可用于按钮等

## camera
摄像机，摄像机的拍摄到的内容将会显示在屏幕上。

## customObject
自定义游戏对象，可挂载多个组件


# Component 可以挂载到游戏对象上

## rect
位置

## text
文字

## animation
动画

## animator
动画管理器

## image
图片

## music
音乐

## custom
自定义组件，可以自己创建组件，控制对象属性、修改对象上的组件等


## Object
	static distroy({name})
	static find({name})

	construct({name, gameObject, components})

	find({name})
	addComponent(component)
	removeComponent(component)
	getComponent(component)
	setActive(flag)

## component
	awake()
	start()
	preUpdate()
	update()
	lateUpdate()
	distroy()



