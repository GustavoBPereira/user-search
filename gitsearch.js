var perfilUser = document.querySelector('div#perfilUser');

function searchUser(){
    perfilUser.innerHTML = '';
    var user = document.querySelector('div#form input#user').value;
    axios.get('https://api.github.com/users/' + user)
        .then(function(response){
            var perfilTable = document.createElement('ul');

            var itemName = document.createElement('li');
            var userName = document.createTextNode(response.data.login);
            itemName.appendChild(userName);

            var itemAvatar = document.createElement('li');
            var imgAvatar = document.createElement('img')
            imgAvatar.setAttribute('src', response.data.avatar_url)
            itemAvatar.appendChild(imgAvatar)

            var itemBio = document.createElement('li');
            var dataBio = response.data.bio;
            console.log(dataBio)
            if (dataBio === null){
                var userBio = document.createTextNode('Perfil sem bio!');    
            } else{
                var userBio = document.createTextNode(response.data.bio);
            }
            itemBio.appendChild(userBio);

            // var itemBio = document.createElement('li');
            // var dataBio = response.data.bio;
            // var checkedBio = (dataBio != null ? userBio : 'Perfil sem bio')
            // userBio = document.createTextNode(checkedBio);
            // itemBio.appendChild(userBio);
            
            perfilTable.appendChild(itemName);
            perfilTable.appendChild(itemAvatar);
            perfilTable.appendChild(itemBio);

            perfilUser.appendChild(perfilTable);
        })
        .catch(function(error){
            var notFound = document.createElement('p');
            var textNotFound = document.createTextNode('Profile not found!');
            notFound.appendChild(textNotFound);
            perfilUser.appendChild(notFound);
        });
}

// pegar response.data.login e colocar no html
// pegar response.data.avatar_url e colocar em uma img no html
// pegar response.data.bio, verificar se nao e nulo e colocar no html



var btnSearch = document.querySelector('div#form button#search');
btnSearch.onclick = searchUser;
