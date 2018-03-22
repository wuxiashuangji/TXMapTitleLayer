

### 引入本插件

```html

 <!-- 1.引入leaflet.js,依赖 -->
    <script src="./leaflet.js"></script>
 <!--2.引入leaflet.css -->
    <link rel="stylesheet" href="./leaflet.css">
 <!--3.引入插件js -->
    <script src="./TXMapTitleLayer.js"></script>

```


### 定义要插入的腾讯底图类型

```javascript
    var map = L.map('map', {
                center: [23.12262, 113.324579],
                zoom: 10,
                maxZoom: 23,
                minZoom: 3,
            });
	var Normal = L.tileLayer.txMapTileLayer("Normal"); //调用 腾讯地图
	var Landform = L.tileLayer.txMapTileLayer("Landform"); //调用 地形地图
    var Satellite = L.tileLayer.txMapTileLayer("Satellite"); //调用 卫星地图

    Normal.addTO(map) //将底图瓦片添加到地图
    
```

### 移除腾讯底图
```javascript
   	map.removeLayer(Normal) //移除即可
```
