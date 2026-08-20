const username = document.querySelector('#username') ; 
const btn = document.querySelector('#fetchBtn') ;
const status = document.querySelector(".status");
const profile = document.querySelector('.profile') ;

const getUser = async() => {
    const url = `https://api.github.com/users/${username.value}` ;
    const response = await fetch (url) ; 
    const data = await response.json() ;
    status.textContent = '' ; 
    console.log(data) ;
    displayUser(data) ; 
}

btn.addEventListener('click' , () => {
    statusbar.textContent = 'Loading...' ;
    getUser() ;
}) ;

const displayUser = (user) => {
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <p>${user.bio}</p>`
}

