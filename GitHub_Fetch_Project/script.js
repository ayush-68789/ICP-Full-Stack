const username = document.querySelector('#username') ; 
const btn = document.querySelector('#fetchBtn') ;

const getUser = async() => {
    const url = `https://api.github.com/users/${username.value}` ;
    const response = await fetch (url) ; 
    const data = await response.json() ; 
    console.log(data) ; 
}

btn.addEventListener('click' , () => {
    getUser() ;
}) ;

