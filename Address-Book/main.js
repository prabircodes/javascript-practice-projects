document.getElementById("filterInput").addEventListener("keyup", function () {
  let filterValue = document.getElementById("filterInput").value.toLowerCase()

  let ul = document.getElementById("name")
  let li = ul.querySelectorAll("li.collection-item")
  let liHeader = ul.querySelectorAll("li.collection-header")

  li.forEach((item) => {
    let a = item.getElementsByTagName("a")[0]
    item.style.display = a.innerText.toLowerCase().startsWith(filterValue)
      ? "block"
      : "none"
  })
  liHeader.forEach((item) => {
    let h5 = item.getElementsByTagName("h5")[0]
    item.style.display = h5.innerText
      .toLowerCase()
      .startsWith(filterValue.substring(0, 1))
      ? "block"
      : "none"
  })
})
