   let info = []
   let contactBtn = document.querySelector(".contact-btn")
   let loginBtn = document.querySelector(".login-btn")
   let contactDiv = document.querySelector(".contact-div")
   let fieldOne = document.querySelector(".field-one")
   let fieldTwo = document.querySelector(".field-two")
   let loginDiv = document.querySelector(".login-div")
   let contactInfo = document.querySelector(".contact-info")
   let contactName = document.querySelector(".contact-name")
   let contactTel = document.querySelector(".contact-tel")
   const infoLocalStorage = JSON.parse(localStorage.getItem("info"))
   const deleteAll = document.querySelector(".delete-all")

   if(infoLocalStorage){
  info = infoLocalStorage
  render()
}
loginBtn.addEventListener("click", function(){
  if(!(fieldOne.value === "") && !(fieldTwo.value === "")){
  contactDiv.style.display = "grid"
   loginDiv.style.display = "none"
   console.log("hello")
  }
  })
   contactBtn.addEventListener("click", function(){
    if(!(contactInfo.value === "") && !(contactTel.value === "")){
    info.push(contactName.value + " " + contactTel.value ) 
    contactName.value = ""
    contactTel.value = ""
    localStorage.setItem("info", JSON.stringify(info) )
    render()
    }
  })
  function render(){
    contactInfo.innerHTML = ""
    info.forEach(function(info){
    let element = document.createElement("div") 
    element.innerHTML = info
    contactInfo.appendChild(element)
   
    })
  }
  
  deleteAll.addEventListener("click", function(){
    localStorage.clear()
    info = []
    render()
  })

