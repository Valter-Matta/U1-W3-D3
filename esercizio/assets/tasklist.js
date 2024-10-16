const ulList = document.getElementById('ul-list')

const form = document.getElementById('new-task')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const newTask = document.getElementById('task')
  const newTaskValue = newTask.value
  //   console.log(newTaskValue)

  newList = document.createElement('li')
  newList.classList.add('list')
  newList.innerHTML = `${newTaskValue}<button>delete</button>`
  //   console.log(newList)

  ulList.appendChild(newList)

  form.reset()

  const liList = document.getElementsByClassName('list')

  for (let i = 0; i < liList.length; i++) {
    console.log(liList[i])
    const change = liList[i]
    change.addEventListener('click', function () {
      change.style.textDecorationLine = 'line-through'
    })
  }

  const deleteButton = document.querySelectorAll('li button')
  console.log(deleteButton)

  for (let i = 0; i < deleteButton.length; i++) {
    if (i === 0) {
      const each = deleteButton[0]
      each.addEventListener('click', function () {
        liList[0].style.display = 'none'
        // liList[0].remove()
      })
    } else if (i === 1) {
      const each = deleteButton[1]
      each.addEventListener('click', function () {
        liList[1].style.display = 'none'
      })
    } else if (i === 2) {
      const each = deleteButton[2]
      each.addEventListener('click', function () {
        liList[2].style.display = 'none'
      })
    } else if (i === 3) {
      const each = deleteButton[3]
      each.addEventListener('click', function () {
        liList[3].style.display = 'none'
      })
    } else if (i === 4) {
      const each = deleteButton[4]
      each.addEventListener('click', function () {
        liList[4].style.display = 'none'
      })
    } else if (i === 5) {
      const each = deleteButton[5]
      each.addEventListener('click', function () {
        liList[5].style.display = 'none'
      })
    } else if (i === 6) {
      const each = deleteButton[6]
      each.addEventListener('click', function () {
        liList[6].style.display = 'none'
      })
    } else if (i === 7) {
      const each = deleteButton[7]
      each.addEventListener('click', function () {
        liList[7].style.display = 'none'
      })
    } else if (i === 8) {
      const each = deleteButton[8]
      each.addEventListener('click', function () {
        liList[8].style.display = 'none'
      })
    } else if (i === 9) {
      const each = deleteButton[9]
      each.addEventListener('click', function () {
        liList[9].style.display = 'none'
      })
    } else if (i === 10) {
      const each = deleteButton[10]
      each.addEventListener('click', function () {
        liList[10].style.display = 'none'
      })
    } else if (i === 11) {
      const each = deleteButton[11]
      each.addEventListener('click', function () {
        liList[11].style.display = 'none'
      })
    } else if (i === 12) {
      const each = deleteButton[12]
      each.addEventListener('click', function () {
        liList[12].style.display = 'none'
      })
    } else if (i === 13) {
      const each = deleteButton[13]
      each.addEventListener('click', function () {
        liList[13].style.display = 'none'
      })
    } else if (i === 14) {
      const each = deleteButton[14]
      each.addEventListener('click', function () {
        liList[14].style.display = 'none'
      })
    } else if (i === 15) {
      const each = deleteButton[15]
      each.addEventListener('click', function () {
        liList[15].style.display = 'none'
      })
    } else if (i === 16) {
      const each = deleteButton[16]
      each.addEventListener('click', function () {
        liList[16].style.display = 'none'
      })
    } else if (i === 17) {
      const each = deleteButton[17]
      each.addEventListener('click', function () {
        liList[17].style.display = 'none'
      })
    } else if (i === 18) {
      const each = deleteButton[18]
      each.addEventListener('click', function () {
        liList[18].style.display = 'none'
      })
    } else if (i === 19) {
      const each = deleteButton[19]
      each.addEventListener('click', function () {
        liList[19].style.display = 'none'
      })
    }
  }
})
