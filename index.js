function saturdayFun (activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork (activity1='go to the office'){;
    return`This Monday, I will ${activity1}.` ;
}
mondayWork (`work from home`);
let wrapAdjective = function (style="*") {
    return function (adj='a hard worker'){
        return `You are ${style}${adj}${style}!`
    };
}

const Calculator = {
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    }

}
let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
