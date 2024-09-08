let postId = new URL(location.href).searchParams.get('id');
let url = 'https://jsonplaceholder.typicode.com/posts/'+postId;
fetch(url).then(res=>res.json())
    .then(post=> {
        let posts = document.createElement('div')
        posts.classList.add('post')
        let p = document.createElement('p')
        p.innerText = `Користувач - ${post.userId} Пост № - ${post.id}`
        let h3 = document.createElement('h3')
        h3.innerText = `${post.title}`
        let p3 = document.createElement('p')
        p3.innerText = `${post.body}`
        posts.append(p,h3,p3)
        document.body.appendChild(posts)
    })
setTimeout(function (){
    let commentsDiv = document.createElement('div')
    commentsDiv.classList.add('comments')
    let url2 = 'https://jsonplaceholder.typicode.com/posts/'+postId+'/comments'
    fetch(url2).then(res=>res.json())
        .then(comments=>{
            for (const comment of comments) {
                let commentDiv = document.createElement('div')
                commentDiv.classList.add('comment')
                let h3 = document.createElement('h3')
                h3.innerText = `Comment ${comment.id}`
                let p2= document.createElement('p')
                p2.innerText = `
            Name - ${comment.name}
            Email - ${comment.email}
            ${comment.body}
           `
                commentDiv.append(h3,p2)
                commentsDiv.appendChild(commentDiv)
                document.body.appendChild(commentsDiv)
            }
        })
},200);