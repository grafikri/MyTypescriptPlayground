

const text = "Bugün güzel bir gün"
const search = "bugün bir güzel"

function findSearchIndexes(text, search) {
  const arrText = text.toLocaleLowerCase("tr").split(" ")
  const arrSearch = search.toLocaleLowerCase("tr").split(" ")

  return {
    arrText,
    arrSearch
  }
}

function detectIndexes(arrText, arrSearch) {

  let positions = []
  for (i = 0; i < arrSearch.length; i++) {
    const searhingItem = arrSearch[i]
    positions[i] = []
    for (j = 0; j < arrText.length; j++) {
      let textItem = arrText[j]
      let index = textItem.indexOf(searhingItem)


      if (index !== -1) {
        const firstPosition = index
        const lastPosition = index + searhingItem.length
        positions[i].push([firstPosition, lastPosition])
      } else {
        positions[i].push([0, 0])
      }
    }
  }

  return positions
}



function transpose(arr) {
  let arrTranspose = []

  let xPos = arr.length
  let yPos = arr[0].length

  for (let i = 0; i < yPos; i++) {
    arrTranspose[i] = []
    for (let j = 0; j < xPos; j++) {
      arrTranspose[i][j] = []
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]
    for (let j = 0; j < subArr.length; j++) {
      let item = subArr[j]
      arrTranspose[j][i] = item
    }
  }

  return arrTranspose
}




function determinePositions(arr) {

  let positions = []

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i]
    for (let j = 0; j < subArr.length; j++) {
      const item = subArr[j]
      const total = item[0] + item[1]

      if (positions[i] !== undefined) break

      if (total > 0) {
        positions[i] = item
        break
      }

      const isLastItem = subArr.length - 1 === j

      if (isLastItem && total === 0) {
        positions[i] = item
        break
      }
    }
  }

  return positions
}


// let arr = [
//   [[0, 0], [0, 0], [0, 0], [2, 4]],
//   [[1, 5], [1, 1], [0, 0], [4, 8]],
//   [[3, 4], [0, 0], [0, 0], [4, 8]],
//   [[1, 1], [0, 0], [0, 0], [4, 8]]
// ]

let arr = findSearchIndexes(text, search)
let { arrText, arrSearch } = arr
let positions = detectIndexes(arrText, arrSearch)
let arrTranspose = transpose(positions)
let results = determinePositions(arrTranspose)


console.log("pos: ", positions);
console.log("result: ", results);
