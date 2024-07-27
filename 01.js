// // # 1 Print Hello World to the console

// // let greet = "Hello World!"

// // console.log(greet)




// // # 2 Print the numbers from 1 to 5 to the console using a loop.


// // <-----------------FOR LOOP------------------->
// // for (let i = 1; i <= 5; i++) {
// //     console.log(i)
// //     }

// // <---------------OR--------------->

// // <-----------------WHILE LOOP------------------->

// // let i = 1
// // while(i<=5){
// //     console.log(i)
// //     i++
// // }

// // <-----------------DO WHILE LOOP------------------->

// // let j = 1
// // do{
// //     console.log(j)
// //     j++
// // }while(j<=5)



// // # 3  Write a function to add two numbers and return the result


// // function AddTwoNumbers(a,b){
// //     return a+b
// // }

// // let sum = (AddTwoNumbers(5,10))
// // console.log(sum)


// // # 4  Create a function to calculate the areaand perimeter of a rectangle given its width and height.

// // function AreaofRectangle(w,h){
// //     return w*h
// // }

// // let area = (AreaofRectangle(2,3))
// // console.log(area)

// // function PerimeterofRectangle(w,h){
// //     return 2*(w+h)
// // }

// // let Perimeter = (PerimeterofRectangle(2,3))
// // console.log(Perimeter)

// // <---------------OR--------------->
// // function findArea(width,height) {
// //     return width*height
// // }

// // function findPerimeter(width,height) {
// //     return 2*(width+height)
// // }

// // var width = 5
// // var height = 10

// // var area = findArea(width,height)
// // var perimeter = findPerimeter(width,height)

// // console.log(area)
// // console.log(perimeter)



// // #5 print the diamond pattern using loops

// // let x = 1 , y = 4

// // for(let row = 1; row<=9; row++){

// //     let s2 = ""
// //     for(let space =1; space<=y; space++){
// //         s2 = s2 + " "
// //     }

// //     let str = ""
// //     for(let col = 1; col<=x; col++){
// //         str = str +"*"
// //     }
// //     console.log(s2+str)

// //     if(row<5){
// //         y = y - 1
// //         x= x + 2
// //     }
// //     else if(row>=5) {
// //         y = y + 1
// //         x = x - 2
// //     }
// // }


// // #6 print the starbox pattern using loops

// // function starbox(rows,cols){
// //     for (let i = 0; i < rows; i++) {
// //         let row = ''

// //         for(let j = 0; j < cols; j++){
// //             row = row + '* '
// //         }
// //         console.log(row)
// //     }
// // }
// // starbox(5,8)


// // #7  write a function that takes a string and returns the reversed version of it.


// // let str = "hello World";
// // function string(str){
// //     return str.split("").reverse().join()
// //     // console.log(string)
// // }
// // console.log(string(str))



// // #8 find the gcd or hcf of a and b.(potential approach)

// // function gcd(a,b) {
// //     let ans = 1

// //     for (let i = 2; i < Math.min(a,b); i++) {
// //         if(a%i == 0 && b%i == 0) {
// //             ans = i
// //         }
// //     }
// //     return ans
// // }
// // console.log(gcd(28,24))



// // #9  Find the factorial of a number using recursion

// // function factorial(n) {
// //     //  base case

// //     if(n==0 || n==1) {
// //         return 1
// //     }

// //     let chotti = factorial(n-1)
// //     let badi = n * chotti

// //     return badi
// // }
// // console.log(factorial(5))
// //  ___________________________________________________________________________________________________________________________________
// // |                                                                                                                                  |
// // | if we remove the base case then the error is come while running the code and this error is called segmentation fault.            |
// // | which means when we called factorial like factorial of 6 then you called 5, then 4, then 3 , then 2, then 1 , then 0 then for -1,|
// // | then for -2 and so on until the stack overflow.                                                                                  |
// // |__________________________________________________________________________________________________________________________________|

// // #10 Find the power of 2 using recursion

// // function power(n) {
// //     // base case

// //     if(n==0){
// //         return 1
// //     }
// //     // recursive relation
// //     let small = power(n-1)
// //     let big = 2*small

// //     return big
// // }
// // console.log(power(5))

//  #11 print the counting using recursion

// function counting(n){
//     // base case
//     if(n>0){
        
//         counting(n-1)
//         console.log(n)
//     }
// }
// console.log(counting(9))

// #12