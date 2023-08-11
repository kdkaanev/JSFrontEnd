function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts'
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments'
    const btnLoadPosts = document.getElementById('btnLoadPosts')
    const btnViewPost = document.getElementById('btnViewPost')
    const selectPost = document.getElementById('posts')

    btnLoadPosts.addEventListener('click', loadPosts)
    btnViewPost.addEventListener('click', viewComents)

    async function loadPosts() {
      const res = await fetch(POSTS_URL);
      const data = await res.json();
      let objectData = Object.values(data);
      objectData.forEach((element) => {
        let option = document.createElement("option");
        option.textContent = element.title.toUpperCase();

        option.value = element.id;
        selectPost.appendChild(option);
      });
    }

    async function viewComents() {
        let postComments = document.getElementById('post-comments');
        postComments.innerHTML = '';
        let postId = selectPost.value;
        const response = await fetch(`${COMMENTS_URL}`);
        const data = await response.json();
        Object.values(data).forEach((element) => {
            if(element.postId == postId){
                let li = document.createElement('li');
                li.textContent = element.text;
                postComments.appendChild(li);
            }
        
        })
        const response2 = await fetch(`${POSTS_URL}/${postId}`);
        const data2 = await response2.json();
        document.getElementById('post-title').textContent = data2.title.toUpperCase();
        document.getElementById('post-body').textContent = data2.body;
      }
    }
    
    






attachEvents();