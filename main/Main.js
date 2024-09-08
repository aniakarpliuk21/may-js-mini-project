let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url).then(res=>res.json())
    .then(users =>{
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user')
            let h2 = document.createElement('h2');
            h2.innerText =`${user.id}`
            let p = document.createElement('p');
            p.innerHTML = `<b>${user.name}</b>`
            let button = document.createElement('button')
            button.innerText = `Детальніше`
            button.addEventListener('click',() =>{
                location.href ='UserDetails.html?id='+user.id;
            })
            divUser.append(h2,p,button)
            document.body.appendChild(divUser)
        }
    })