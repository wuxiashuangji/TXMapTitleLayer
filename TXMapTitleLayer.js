L.TileLayer.TXMapTileLayer = L.TileLayer.extend({
    getTileUrl: function (tilePoint) {
        var urlArgs,
            getUrlArgs = this.options.getUrlArgs;

        if (getUrlArgs) {
            var urlArgs = getUrlArgs(tilePoint);
        } else {
            urlArgs = {
                z: tilePoint.z,
                x: tilePoint.x,
                y: tilePoint.y
            };
        }

        return L.Util.template(this._url, L.extend(urlArgs, this.options, {
            s: this._getSubdomain(tilePoint)
        }));
    }
});

L.tileLayer.txMapTileLayer = function (type) {
    var getUrlArgs, url, subdomain = '012',options;
    if (type == 'Normal') { //地图带路线轮廓 有轮廓/有路线
        url = 'http://rt1.map.gtimg.com/realtimerender/?z={z}&x={x}&y={y}&type=vector&style=1&v=1.1.1'; //ok //普通地图
        getUrlArgs = function (tilePoint) {
            return {
                //地图
                z: tilePoint.z,
                x: tilePoint.x,
                y: Math.pow(2, tilePoint.z) - 1 - tilePoint.y
            };
        }

    } else if (type == 'Satellite') { //卫星图,无轮廓/无路线

        url = 'http://p3.map.gtimg.com/sateTiles/{z}/{x}/{y}/{G}_{H}.jpg?version=229';
        getUrlArgs = function (tilePoint) {
            return {
                //卫星图
                z: tilePoint.z,
                x: Math.floor(tilePoint.x / 16),
                y: Math.floor((Math.pow(2, tilePoint.z) - 1 - tilePoint.y) / 16),
                G: tilePoint.x,
                H: Math.pow(2, tilePoint.z) - 1 - tilePoint.y
            };
        }


    }  else if (type=='Landform') {//地形图,有轮廓/有路线
        url = 'http://rt1.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=263' //ok //地形地图
        getUrlArgs = function (tilePoint) {
            return {
                //地形图
                z: tilePoint.z,
                x: tilePoint.x,
                y: Math.pow(2, tilePoint.z) - 1 - tilePoint.y
            };
        }
    }
    options={
        subdomain:'012',
        getUrlArgs:getUrlArgs,
    }
    return new L.TileLayer.TXMapTileLayer(url, options);
};