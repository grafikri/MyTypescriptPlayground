let arr = [
  [[4, 8], [0, 0], [0, 0], [0, 0]],
  [[1, 5], [0, 0], [0, 0], [4, 8]],
  [[3, 4], [0, 0], [0, 0], [4, 8]],
  [[1, 1], [0, 0], [0, 0], [4, 8]]
]


function transpose(arr: any) {

  let transposeArr: any[][]
  transposeArr = []

  arr.reduce((first: any, subItems: any, firstIndex: number) => {
    transposeArr[firstIndex] = []
    subItems.reduce((second: any, item: any, index: number) => {
      //transposeArr[index][firstIndex] = item

      //console.log("item: ", item)
      // console.log("index: ", index)
    }, [])

  }, [])

  return transposeArr
}

console.log(transpose(arr));
//console.log("arr: ", );