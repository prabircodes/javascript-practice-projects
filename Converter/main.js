document.getElementById("kgsInput").addEventListener("input", function (e) {
  let kgs = e.target.value

  document.getElementById("lbsOutput").innerText = kgs * 2.2046
})

document.getElementById("feetInput").addEventListener("input", function (e) {
  let feet = e.target.value

  document.getElementById("cmsOutput").innerText = feet * 30.48
})
