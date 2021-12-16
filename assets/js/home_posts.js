{
    // mthod to submit form data using ajax
    let createPost = function () {
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/posts/create-post',
                data: newPostForm.serialize(),
                success: function (data) {
                    let newPost = newPostDom(data.data.post);
                    $('#posts-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost));
                }, error: function (error) {
                    console.log( "error occured in homepost" +error.responseText);
                }
            })
        })
    }
    // method to create post in dom
    let newPostDom = function (post) {
      
        return $(`<li id="post-${post._id}">
    <p>
      
        <small>
          <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
        </small>
       
        ${post.content}
            <br>
            <small>
            
            ${post.user.name}
            </small>
    </p>
    <div class="comment-container">
    
        <form action="/comment/create" method="POST">
          <input type="text" placeholder="Add comment" name="content" required>
          <input type="hidden" name="post" value="${post._id}">
          <input type="submit" value="Add comment">
        </form>
      
          <div class="post-comments-list">
            <ul id="post-comments-${post._id}">
             
            </ul>
          </div>
    </div>

  </li>`)

    }
    // method to delete a post
    let deletePost = function(deleteLink){
      $(deleteLink).click(function(e){
        e.preventDefault();
        $.ajax({
          type : 'get',
          url : $(deleteLink).prop('href'),
          success : function(data){
            $(`#post-${data.data.post_id}`).remove();
          }, error : function(error){
            console.log(error.responseText);
          }
        })
      })
    }
    createPost();
}