### 开发背景

公司与腾讯合作开发景区电子语音导览项目，数据录入之后需要预览，然之前内部使用都是高德地图，使用的瓦片也是高德的，直接切换至腾讯地图时发现瓦片编号对应不上，导致瓦片加载错乱无法预览，后经查询发现腾讯地图的瓦片加载规则跟google，高德的不一样，需要重新针对腾讯地图瓦片定义瓦片加载规则，所以有了以下的插件


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
