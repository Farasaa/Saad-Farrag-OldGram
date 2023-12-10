import { posts } from '/data.js'


document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        handleClickIcon(e.target.dataset.like)
    } else if(e.target.dataset.share){
        handleShareIcon(e.target.dataset.share)
    } 
})

function handleShareIcon(itemId){
    const shareObj = posts.filter(function(shareIcon){
        return shareIcon.uuid === itemId
    })[0]
    if(shareObj.isShared){
        shareObj.share--
    } else {
        shareObj.share++   
    }
    shareObj.isShared = !shareObj.isShared
    render()
}


function handleClickIcon(itemId){
    const likeObj = posts.filter(function(likeIcon){
        return likeIcon.uuid === itemId
    })[0]
    if(likeObj.isLiked){
        likeObj.likes--
    }else{
        likeObj.likes++
    }
    likeObj.isLiked = !likeObj.isLiked
    render()
}


function getPostsHtml(){
let newsFeedHtml = ``
posts.forEach(function(newPost){
let lovedIconClass = ''
if(newPost.isLiked){
    lovedIconClass = 'loved'
} 

let sharedIconClass = ''
if(newPost.isShared){
    sharedIconClass ='shared'
}
newsFeedHtml += `
<div class="post-border">
<div class="post">
<img class="avatar-photo" src="${newPost.avatar}">

    <div>
        <h2>${newPost.username}</h2>
        <h3>${newPost.location}</h3>
</div>
</div>   
<div>
 <img class="post-photo" src="${newPost.post}">
</div>
<div class="reaction">
<i class="fa-solid fa-heart ${lovedIconClass}" data-like="${newPost.uuid}"></i>
<i class="fa-solid fa-share ${sharedIconClass}" data-share="${newPost.uuid}"></i>

</div>
<div class="style-p">
 <p>${newPost.likes}</p>
 <p>${newPost.share}</p>
 
 </div>
 <P>vincey1853 <span class="imp-text">${newPost.comment}</span></P>
 
</div>
</div>
`
})

return newsFeedHtml

}

function render(){
    document.getElementById('news-feed').innerHTML= getPostsHtml()
}

render()














