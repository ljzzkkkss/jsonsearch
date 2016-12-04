/**
 * Created by 刘骏 on 2016/11/15.
 */
var _proto = Object.prototype;

_proto.Query = function (text) {
    var result = [];
    for(var key in this){
        if(new RegExp(text).test(this[key].name)){
            result.push({
                name:this[key].name,
                age:this[key].age
            })
        }
        if(this[key].children){
            Array.prototype.push.apply(result, this[key].children.Query(text));
        }
    }
    return result;
}

var test = function(){
    var testarr = [{name:"haha",age:"1"},
                   {name:"我和你",age:"2"},
                   {name:"我们",age:"3",children:[{name:"heihei",age:1},{name:"haha2",age:2}]}];
    return testarr.Query("haha");
}