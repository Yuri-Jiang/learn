const compose = (...funcs) => {
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce((pre, cur) => (...args) => pre(cur(...args)));
}
// 创建数组
const range = range => Array.from({length: range}).map((v,k) => k + 1);
// 筛选
const filter = divisible => indivisible => array => {
    return array.filter(number => !(number % divisible) && (number % indivisible));
}
// 次方
const map = power => array => array.map(number => Math.pow(number, power));
// 求和
const sum = array => array.reduce((pre, cur) => (pre + cur), 0);
compose(sum, map(2), filter(7)(2))(range(1000));

filter(7)(2)([1,2,3,4,5,6,7,8,9,10,11,12,13,14])