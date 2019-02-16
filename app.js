const githubFellow = async () => {

    // fetch your github fello here
    const uri = 'https://api.github.com/users/Linasasmita/followers'
    let response = await fetch(uri)
     .then(async response => {
         response = await response.json()
         return response
     })
     .catch(error => {
         return error
     })
     console.log(response)
     response.map(res =>{
         document.getElementById('github-follower').innerHTML =
            document.getElementById("github-follower").innerHTML +
            `<div>
                <div class="card mt-3" style="width: 10 rem">
                    <img class="card-img-top" src="${res.avatar_url}" alt="Follower Avatar />"
                    <div class="card-body">
                    <h5 class="card_title">${res.login}</h5>
                    <a href="${res.html_url}" class="btn btn-primary">Go to profile</a>
                    </div>
                </div>
            </div>`
     })
  }
  
  githubFellow();
