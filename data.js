import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
export const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        share: 7,
        commentnumber: 1,
        isLiked: false,
        isShared: false,
        uuid: uuidv4()
        
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        share: 10,
        commentnumber: 1,
        isLiked: false,
        isShared: false,
        uuid: uuidv4()
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        share: 20,
        commentnumber: 1,
        isLiked: false,
        isShared: false,
        uuid: uuidv4()
    }
]
