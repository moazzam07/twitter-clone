$(document).ready(() => {

    if(selectedTab === "replies"){
        loadReplies();
    }
    else
        loadposts();
})

function loadposts(){
    $.get("/api/posts", { postedBy: profileUserId, isReply: false }, results => {
        outputPosts(results, $(".postsContainer"));
    })
}

function loadReplies(){
    $.get("/api/posts", { postedBy: profileUserId, isReply: true }, results => {
        outputPosts(results, $(".postsContainer"));
    })
}