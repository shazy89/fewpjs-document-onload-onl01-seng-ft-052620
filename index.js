// Your code goes here
let p = document.getElementById('text')
let body = document.querySelector('body')


document.addEventListener("DOMContentLoaded", function() {
    p.textContent = "This is really cool!"
  });

  let h1 = document.getElementById('h1')

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft"){
       h1.innerText = `Hello ${randomNames()}`
    } else if (e.key === "ArrowRight") {
      p.innerText = heyPeps()
    } else if (e.key == "ArrowUp") {
      body.style.backgroundColor = randomColor()
    }

  });
  function randomColor() {
    let colers = ["black", "white", "yellow", "purple"]
    let random =  Math.floor(Math.random()* 3)
    return colers[random]
  }


  function randomAge() {
    let random =  Math.floor(Math.random()* 50)
    console.log(`Hi im ${random} years old!!`)
  }


  function randomNames() {
    const names = ["erdo", "semra", "Floki", "Berlin"]
   let randomNumber =  Math.floor(Math.random()* 3)
   return names[randomNumber]
  }

  function heyPeps() {
    return `Hello Semraaaa i love you `
  }

  