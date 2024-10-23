// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardHeight = 600;
// let boardWidth = 1000;
// let square = 50;

// let snakeCells = [[0,0]];

// let direction = 'right';

// let gameOver = false;

// let foodCell = generateRandomCell();

// let score = 0;

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     direction = 'left';
//   } else if (event.key === 'ArrowDown') {
//     direction = 'down';
//   } else if (event.key === 'ArrowRight') {
//     direction = 'right';
//   } else {
//     direction = 'up';
//   }
// })

// let intervalId = setInterval(function() {
//   update();
//   draw();
// }, 100);

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];

//   let newX;
//   let newY;

//   if (direction === 'right') {
//     newX = headX + square;
//     newY = headY;

//     if (newX === boardWidth) {
//       gameOver = true;
//     }
    
//   } else if (direction === 'left') {
//     newX = headX - square;
//     newY = headY;

// //     if (newX < 0) {
// //       gameOver = true;
// //     }

// //   } else if (direction === 'up') {
// //     newX = headX;
// //     newY = headY - square;

// //     if (newY < 0) {
// //       gameOver = true;
// //     }

// //   } else {
// //     newX = headX;
// //     newY = headY + square;

// //     if (newY === boardHeight) {
// //       gameOver = true;
// //     }
// //   }

// //   snakeCells.push([newX, newY]);

// //   if (foodCell[0] === headX && foodCell[1] === headY) {
// //     foodCell = generateRandomCell();
// //     score += 1;
// //   } else {
// //     snakeCells.shift();
// //   }
// // }

// // function draw() {

// //   if (gameOver === true) {
// //     clearInterval(intervalId);
// //     ctx.fillStyle = 'red';
// //     ctx.font = '40px sans-serif';
// //     ctx.fillText('Game over', 50, 150);
// //     return;
// //   }

// //   ctx.clearRect(0, 0, boardWidth, boardHeight);
// //   for (let cell of snakeCells) {
// //     ctx.fillStyle = 'yellow';
// //     ctx.fillRect(cell[0], cell[1], square, square);
// //     ctx.fillStyle = 'red';
// //     ctx.strokeRect(cell[0], cell[1], square, square);
// //   }

// //   ctx.fillStyle = 'red';
// //   ctx.fillRect(foodCell[0], foodCell[1], square, square);
// //   ctx.fillStyle = 'yellow';

// //   // draw score
// //   ctx.fillStyle = 'white';
// //   ctx.font = '20px sans-serif';
// //   ctx.fillText(`Score: ${score}`, 50, 50);
// // }

// // function generateRandomCell() {
// //   return [
// //     Math.round((Math.random()*(boardWidth - square))/square)*square,
// //     Math.round((Math.random()*(boardHeight - square))/square)*square
// //   ]
// // }


//      let canvas=    document.querySelector('canvas')


//     let pen=   canvas.getContext('2d')


//     let snakeCells=[[0,0]]
//     let cell=50
//     let gameOver=false
//     let direction='right'
//     let score=10

// let generateRandomCell=random()

//    let id=   setInterval(()=>{
//         draw()
//         update()

//     },100)



//     document.addEventListener('keydown',(e)=>{
//         // console.log(e);
//         if(e.key==='ArrowUp'){
//             direction='up'

//         }
//         else if(e.key==='ArrowDown'){
//             direction='down'
//         }
//         else if(e.key==='ArrowLeft'){
//             direction='left'
//         }
//         else{
//             direction='right'
//         }
        
//     })

//     function draw(){
//         if(gameOver==true){
//             clearInterval(id)
//             pen.fillText('gameOver',150,100)
//             return

//         }
//         pen.clearRect(0,0,1200,600)
//         for(let i of snakeCells){
//             pen.fillStyle='red'
//             pen.fillRect(i[0],i[1],cell,cell)
//         }
//         pen.fillStyle='yellow'
//         pen.fillRect(generateRandomCell[0],generateRandomCell[1],cell,cell)
        
//         //   pen.font(`${score}`, 50,50)
//         pen.font='50px sans-sarif'
//         pen.fillText(`${score}`,100,50)

//     }



//     function update(){
//      let headX=      snakeCells[snakeCells.length-1][0]  
//        let headY=    snakeCells[snakeCells.length-1][1] 
       
       
//     let newX  
//        let newY 


//        if(direction=='right'){
        
//         newX=headX+cell,
//         newY=headY

//         if(newX===1200){
//             gameOver=true
//         }
//        }
//        else if(direction=='left'){
//         newX=headX-cell
//         newY=headY
//         if(newX<0){
//             gameOver=true
//         }
//        }
//        else if(direction=='up'){
//         newX=headX
//         newY=headY-cell
//         if(newY<0){
//             gameOver=true
//         }

//        }
//        else{
//         newX=headX
//         newY=headY+cell
//         if(newY==600){
//             gameOver =true
//         }
//        }

//        if(newX===generateRandomCell[0]   && newY==generateRandomCell[1]){
//         generateRandomCell=random()
//         score+=10
//        }
//        else{
//         snakeCells.shift()
//        }
//        snakeCells.push([newX,newY])
    


//     }


//  function random(){
//         return[
//             Math.floor(Math.random()*1150/cell)*cell  ,
//             Math.floor(Math.random()*550/cell)*cell  
//         ]
//     }
    // console.log(rCell());
    

// pen.fillStyle='red'

//     pen.fillRect(0,0, 50,50)
//     pen.clearRect(0,0,50,50)


// setInterval(() => {
//     console.log('helllo');
    
    
// },1000);


// let arr=[1,2,34,5]
// arr.length-1



// let ar=[1,2,3,5]
// ar.push(7)
// console.log(ar);



// let arr=[1,2,3,4,56]
// arr.shift()
// console.log(arr);




// console.log(Math.random()*1200,"koi mil gyaa");


// console.log('helllo');
// Number 5, 5.5
// String 'c'  "C"
// Boolean 
// undefined
// int a=5
// var ,let .connstt
// var a='hello'
// let arrr=[1,2,34,'helloooo']
// arrr.push(45)
// arrr.shift()



// function sum(){
//     console.log('hello');
    
// }
// sum()
  
let canvas=   document.querySelector('canvas')
let pen=   canvas.getContext('2d')


let snakeCells=[[0,0]]
let cell=50
let score=0

let direction='right'
let gameOver=false
let generateRandomCell=random()

 let id=  setInterval(() => {
    draw()
    update()
    
}, 100);


  document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowUp'){
        direction='up'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
    }
    else{
        direction='right'
    }
    // console.log('hello');
    
  })

function draw(){
    if(gameOver==true){
        clearInterval(id)
        pen.fillStyle='pink'
        pen.font='50px sans-sarif'
        
        pen.fillText('gameOver', 150,100)
        return
    }
    pen.clearRect(0,0,1200,600)
    for(let i of snakeCells){
        pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='green'
    pen.fillRect(generateRandomCell[0],generateRandomCell[1],cell,cell)
   pen.font='50px sans-sarif'
    pen.fillText(`${score}`,100,50)
}


function update(){
   let headX=   snakeCells[snakeCells.length-1][0]
  let headY=  snakeCells[snakeCells.length-1][1]
   let newX
    let newY


    if(direction==='right'){
        newX=headX+cell
        newY=headY
        if(newX===1200){
            gameOver=true
        }
    }
    else if(direction==='left'){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
    }
    else if(direction==='up'){
        newX= headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
    }
    else{
        newX=headX
        newY=headY+cell
        if(newY===600){
            gameOver=true
        }
    }
    if(newX===generateRandomCell[0] && newY===generateRandomCell[1]){
        generateRandomCell=random()
        score+=1
    }
    else{
        snakeCells.shift()

    }
    snakeCells.push([newX,newY])
 



}




function random(){
    return[
        Math.floor(Math.random()*1150/cell)* cell
        ,
        Math.floor( Math.random()*550/cell)*cell
       
    ]
}


// pen.fillStyle='red'
// pen.fillRect(0,0,50,50)






// setInterval(()=>{
//     console.log('hello');
    
// },1000)