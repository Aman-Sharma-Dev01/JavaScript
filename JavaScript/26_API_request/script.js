document.querySelector('p').hidden = true
let img = document.querySelector('.card')
function apiData1(){

    const url = 'https://api.github.com/users/Aman-Sharma-Dev01'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url )
    
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
          const data = JSON.parse(this.responseText)
            // console.log(data);
            cardmaker(data)
        }
        
    }
    xhr.send();


}
apiData1();
// console.log(data.avatar_url);

function cardmaker (card){
    img.innerHTML = `<img src = "${card.avatar_url}" ><h1>${card.name}</h1> <h4><a href="${card.html_url}">My gitHub Profile <~~~~</a></h4> <h3>My BIO</h3> <p>${card.bio}</p>`
}