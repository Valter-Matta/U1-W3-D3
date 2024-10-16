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
    }
  }
})
