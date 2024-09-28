//print the even numbers in the array

var arr=[]
for(i=2;i<=100;i++){
    arr.push(i);//used to insert an element in an array
}
for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0){
    console.log(arr[i]);
}
}

// 3 examples
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Practice 3 methods in array
let ar=["hello",null,true,11,12,13]
ar.push("manisha")
console.log(ar)
ar.pop()
console.log(ar)
ar.unshift(true,"javascript")
console.log(ar)
ar.shift(true)
let array=[true,11,12,13,"manisha","gay3","satwika"]
array.splice(1,2,"HTML")
console.log(array)
let array1=[false,null,15,16,"html","java","css"]
console.log(array1.indexOf(15))
let array2=[1,9,5,7,3,8,2,4]
console.log(array2.sort())
console.log(array2.reverse())

