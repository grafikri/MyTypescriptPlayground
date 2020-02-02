let arr = [
  [[4, 8], [0, 0], [0, 0], [0, 0]],
  [[1, 5], [0, 0], [0, 0], [4, 8]],
  [[3, 4], [0, 0], [0, 0], [4, 8]],
  [[1, 1], [0, 0], [0, 0], [4, 8]]
]

function transpose(arr: any){

  let arrTranspose:any[][] = []

  for (let i = 0;i < arr.length;i++) {
    const subArr = arr[i]
    arrTranspose[i] = []
    for (let j = 0;j < subArr.length;j++) {
      
      const item = subArr[j]
      arrTranspose[j][i] = item

      //console.log("item: ", item);
      // console.log("total: ", total);
      // console.log("positions: ", positions[i]);
    }
  }

  console.log(arrTranspose);
}

transpose(arr)

// function detectPositions(arr: any){
//   let size = arr[0].length
//   let positions = []

//   for(let i=0; i < arr.length; i++){
//     const subArr = arr[i]
//     if (positions[i] !== undefined) break
//     for (let j = 0;j < subArr.length;j++) {
      

//       const item = subArr[j]
//       const total = item[0] + item[1]
      
//       if (total > 0) {
//         console.log("rank item: ", item);
//         console.log("positions: ", positions[i], i);
//         positions[i] = item
//       }
      
//       //console.log("item: ", item);
//       // console.log("total: ", total);
//       // console.log("positions: ", positions[i]);
//     }
//   }

//   return positions
  
// }

// console.log(detectPositions(arr))



// function transpose(arr: any) {

//   let transposeArr: any[][]
//   transposeArr = []

//   arr.reduce((first: any, subItems: any, firstIndex: number) => {
//     transposeArr[firstIndex] = []
//     subItems.reduce((second: any, item: any, index: number) => {
//       //transposeArr[index][firstIndex] = item

//       //console.log("item: ", item)
//       // console.log("index: ", index)
//     }, [])

//   }, [])

//   return transposeArr
// }

// console.log(transpose(arr));
// //console.log("arr: ", );