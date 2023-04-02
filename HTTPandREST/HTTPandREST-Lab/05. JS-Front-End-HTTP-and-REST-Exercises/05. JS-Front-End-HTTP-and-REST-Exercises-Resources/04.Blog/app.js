function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/'
    const btnLoadPosts = document.getElementById('btnLoadPosts')
    const posts = document.getElementById('posts')
    const btnViewPost = document.getElementById('btnViewPost')
    let data = null

    btnLoadPosts.addEventListener('click', loadPostHandler)
   
    btnViewPost.addEventListener('click', viewPostHandler)

    async function loadPostHandler(){
        try {
            const respone = await fetch(`${BASE_URL}posts`)
            let dataPost = await respone.json()
            data = dataPost
            let posted  = Object.values(dataPost)
            for (const {body, id ,title} of posted) {
                let option = document.createElement('option')
                option.value = id
                option.textContent = title.toUpperCase()

                posts.appendChild(option)
                
                

            }
            btnLoadPosts.disabled = true
           

        }
         catch (error) {
            
        }
        
    }

    async function viewPostHandler(){
        try {
            const responePost = await fetch(`${BASE_URL}comments`)
            const commentsData = await responePost.json()
            let comments = Object.values(commentsData)
            let postsValue = posts.value
            let postTitle = document.getElementById('post-title')
            let p = document.getElementById('post-body')
           
            for (let i = 0; i < posts.options.length; i++) {
                const opt = posts.options[i];
                if (opt.value === postsValue) {
                  const selectedText = opt.text;
                  postTitle.textContent = selectedText
                  break;
                }
              }
            p.textContent = data[postsValue].body
            commentsValue = Object.values(comments)
            const ul = document.getElementById('post-comments')
            
            for (let i = 0; i < commentsValue.length; i++) {
                const li = document.createElement('li')
                const {id,postId,text} = commentsValue[i]
                if(postId === postsValue){
                    ul.appendChild(li)
                    li.innerText = text
                    
                
                }
                
                
           
            }
            ul = null
            
           
            
              


         
            
            


        } catch (error) {
            
        }
    }
}


attachEvents();