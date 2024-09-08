let userId = new URL(location.href).searchParams.get('id');
let baseUrl = 'https://jsonplaceholder.typicode.com/users/'+userId;
fetch(baseUrl).then(res=>res.json())
    .then(user=>{
        let h1 = document.createElement('h1')
        h1.classList.add('userText')
        h1.innerHTML = `<h2>${user.id}.${user.name}</h2> `
        let p2 = document.createElement('p')
        p2.classList.add('userText')
        p2.innerHTML = `Імейл -${user.email}<br>
    Телефон - ${user.phone}<br>
    Логін - ${user.username}<br>
    Вебсайт - ${user.website}`;
        let p3 = document.createElement('p')
        p3.classList.add('userText')
        p3.innerText = `Компанія:
    Назва - ${user.company.name}
    BS - ${user.company.bs}
    Catch Phrase - ${user.company.catchPhrase}`
        let p4 = document.createElement('p')
        p4.classList.add('userText')
        p4.innerText = `Адреса:
    Місто - ${user.address.city}
    Геолокація - Lat ${user.address.geo.lat} Lig${user.address.geo.lng}
    Вулиця - ${user.address.street}
    Suite - ${user.address.suite}
    Поштовий код - ${user.address.zipcode}`
        let button = document.createElement('button')
        button.innerText = 'Post of current user'
        let divText = document.createElement('div')
        divText.classList.add('divText')
        button.addEventListener('click', function () {
            if (divText.style.display==='none') {
                divText.style.display ='flex';
            } else {
                divText.style.display = 'none'
            }
        })
        let url2 =  'https://jsonplaceholder.typicode.com/users/'+userId+'/posts'
        fetch(url2).then(res => res.json())
            .then(posts=>{
                for (const post of posts) {
                    let divTitle = document.createElement('div')
                    divTitle.classList.add('flex')
                    let titlePost = document.createElement('p')
                    titlePost.innerHTML = `${post.id}.${post.title}`
                    let postButton = document.createElement('button')
                    postButton.innerText = `Детальніше`
                    divTitle.append(titlePost,postButton)
                    divText.appendChild(divTitle)
                    postButton.addEventListener('click',()=>{
                        location.href='PostDetails.html?id='+post.id;
                    })
                }
            })

        document.body.append(h1,p2,p3,p4,button,divText);
    })
