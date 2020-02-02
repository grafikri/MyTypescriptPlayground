let arr = [
  [[0, 0], [0, 0], [0, 0], [2, 4]],
  [[1, 5], [1, 1], [0, 0], [4, 8]],
  [[3, 4], [0, 0], [0, 0], [4, 8]],
  [[1, 1], [0, 0], [0, 0], [4, 8]]
]

function transpose(arr) {

  let arrTranspose = []

  for (let i = 0;i < arr.length;i++) {
    const subArr = arr[i]
    arrTranspose[i] = []
    for (let j = 0;j < subArr.length;j++) {
      arrTranspose[i][j] = []
    }
  }

  for (let i = 0;i < arr.length;i++) {
    const subArr = arr[i]
    for (let j = 0;j < subArr.length;j++) {
      const item = subArr[j]
      arrTranspose[j][i] = item
    }
  }

  return arrTranspose
}




function detectPositions(arr){

  let positions = []

  for (let i = 0;i < arr.length; i++) {
    const subArr = arr[i]
    for (let j = 0;j < subArr.length;j++) {
      const item = subArr[j]
      const total = item[0] + item[1]

      if(positions[i] !== undefined) break

      if(total > 0){
        positions[i] = item
        break
      }

      const isLastItem = subArr.length -1 === j

      if(isLastItem && total === 0){
        positions[i] = item
        break
      }
    }
  }

  return positions
}


let arrTranspose = transpose(arr)
let positions = detectPositions(arrTranspose)

console.log("pos: ", positions);
