let monthNameEl = document.getElementById("month-name")
let dayNameEl = document.getElementById("day-name")
let dayNumberEl = document.getElementById("day-number")
let yearEl = document.getElementById("year")



const date = new Date()

monthNameEl.innerText = date.toLocaleString("en", {
  month: "long"
})

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long"
})


dayNumberEl.innerHTML=date.getDate()

yearEl.innerText = date.getFullYear()