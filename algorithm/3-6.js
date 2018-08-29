//传入一个数组，先买入后卖出，返回最佳买点与卖点
function time1(a) {
    var b = [];
    var o = {};
    var s = a[0] - a[1];
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (s >= (a[i] - a[j])) {
                s = a[i] - a[j];
                console.log(s, i, j);
                o.buy = i;
                o.sell = j
            }
        }
    }
    return o
}
function time2(a) {
    var r = [];
    var max = Math.max(...a);
    var min = Math.min(...a)
    var o1 = {};
    o1.sell = a.findIndex(function (value) { return value == max });
    o1.max = max;
    o1.arr = a.slice(0, o1.sell);
    o1.min = Math.min(...o1.arr);
    o1.s = o1.min - max;
    o1.buy = a.findIndex(function (value, index) { if (index < o1.sell) { return value == o1.min } });
    var o2 = {};
    o2.buy = a.findIndex(function (value) { return value == min });
    o2.min = min;
    o2.arr = a.slice(o2.buy + 1);
    o2.max = Math.max(...o2.arr);
    o2.sell = a.findIndex(function (value, index) { if (index > o2.buy) { return value == o2.max } })
    o2.s = o2.min - o2.max;
    if (o1.s < o2.s) {
        r.push({ "buy": o1.buy, "sell": o1.sell });
    } else if (o1.s == o2.s) {
        r.push({ "buy": o1.buy, "sell": o1.sell });
        r.push({ "buy": o2.buy, "sell": o2.sell });
    } else {
        r.push({ "buy": o2.buy, "sell": o2.sell });
    }
    return r
}
time([0, 2, 3, 4, 5, 4, 3, 2, 0, -2, -3, -4, -5, -4, -3, -2, 0]);
time2([0, 2, 3, 4, 5, 4, 3, 2, 0, -2, -3, -4, -5, -4, -3, -2, 0]);