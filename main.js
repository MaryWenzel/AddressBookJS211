let arrayOfUsers = [];

window.onload = function() {
    getUsers();
}

const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5&nat=au,us,fr,gb')
    .then(res => res.json())
    .then(users => arrayOfUsers = users)
    setTimeout(function(){
        console.log(arrayOfUsers)
    }, 1000)
}

getUsers();

const displayUsers = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfUsers.results.map((user) => {
      const li = document.createElement('li')
      li.classList.add('user')
      const ul = document.createElement('ul')
      const img = document.createElement('img')
        img.classList.add('user-image')
      const text = document.createTextNode(`${user.name.first} ${user.name.last}`)
      const button = document.createElement('button')
      img.src = user.picture.large
      button.innerHTML = "Display Info"
      button.classList.add("displayBtn")
      button.addEventListener('click', () =>{
          list1.appendChild(userMail)
          list2.appendChild(userPhone)
          list3.appendChild(userLocation)
          ul.appendChild(list1)
          ul.appendChild(list2)
          ul.appendChild(list3)
          ul.appendChild(hideButton)
          hideButton.addEventListener('click', () => {
              ul.innerHTML = null
          })
        //   const info = document.createTextNode(`Email: ${user.email} Phone Number: ${user.phone} Location: ${user.location.country} ${user.location.city}`)
        //   li.appendChild(info)
      })
      const list1 = document.createElement('li');
      const userMail = document.createTextNode(`Email: ${user.email}`)
      const list2 = document.createElement('li');
      const userPhone = document.createTextNode(`Phone: ${user.phone}`)
      const list3 = document.createElement('li');
      const userLocation = document.createTextNode(`Location: ${user.location.country}, ${user.location.city}`)
      const hideButton = document.createElement('button')
      hideButton.innerHTML = "Hide Info"
      li.appendChild(img)
      li.appendChild(text)
      li.appendChild(button)
      li.appendChild(ul)
      allPosts.append(li)
    //   nested liste
    })
  }