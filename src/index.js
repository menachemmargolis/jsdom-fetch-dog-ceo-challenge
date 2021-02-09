const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const collection = document.getElementById("dog-image-container")
const ul = document.getElementById("dog-breeds")
const dogBreedMenu = document.getElementById("breed-dropdown")



fetch(imgUrl)
.then(response => response.json())
.then(loop)


function loop(dogs){
    for(const element of dogs.message){
       const div = document.createElement('div')
       div.innerHTML += `<img id = "img" src =${element} />`
       collection.append(div)
    }
}

fetch(breedUrl)
.then(response => response.json())
.then(loopTwo )


function loopTwo(breeds){
    for(const element of Object.keys(breeds.message) ){
        const li = document.createElement('li')
        li.className = 'breeds'
        li.innerHTML += `${element}`
        ul.append(li)
        li.setAttribute("hidden", true)
        
    }
}

dogBreedMenu.addEventListener('change', displayBreedsWithThatLetter)

function displayBreedsWithThatLetter(breeds){
    const breed = document.getElementsByClassName('breeds')
    for(let i = 0; i < breed.length; i++){
    if(breed[i].innerText.startsWith(breeds.target.value)  ){
      
      breed[i].removeAttribute("hidden", false)
      
  }else{breed[i].setAttribute("hidden",true)}
}  
  
  
}