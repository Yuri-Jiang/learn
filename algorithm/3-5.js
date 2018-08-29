//一个通用的科里化转化函数
function Curring(func) {
    return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        if(args.length < func.length){ // 如果形参小于实参参数
            return function(){
                var _args = args.concat(Array.prototype.slice.call(arguments, 0));  // 取得参数
                return Curring(func).apply(this, _args);   // 然后递归调用函数,获取所有参数
            }
        }else {
            return func.apply(this, args);
        }
    }
}
 
function f(x, y, z) {
    console.log([x, y, z])
}
var cuf = Curring(f);
cuf(2, 3, 4);
cuf(2, 3)(4);
cuf(2)(3)(4);
