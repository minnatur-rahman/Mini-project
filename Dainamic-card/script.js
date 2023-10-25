// Dummy data

// const posts = [

// { 
//     title : "this is a title 1",
//     body : "This is a body 1",
// },
// { 
//     title : "this is a title 2",
//     body : "This is a body 2",
// },
// { 
//     title : "this is a title 3",
//     body : "This is a body 3",
// },
// { 
//     title : "this is a title 4",
//     body : "This is a body 4",
// },
// { 
//     title : "this is a title 5",
//     body : "This is a body 5",
// },
// { 
//     title : "this is a title 6",
//     body : "This is a body 6",
// },
// { 
//     title : "this is a title 7",
//     body : "This is a body 7",
// },
// { 
//     title : "this is a title 8",
//     body : "This is a body8",
// },

// ] 

  /* 
      <div class="post">
         <h4 class="post-title">Post title 1</h4>
         <p class="post-body">Post description 1</p>
       </div> 
    */


//  Fatch data
const fatchData = async (config) =>{
 try{
  const res =await axios(config)
  return res.data;
 }catch(error){
  throw Error("data is not fatch")
 }
 
}
fatchData();


// Selection
const postsElement = document.querySelector(".posts")

const loadAllData = async ()=>{
  const posts = await fatchData('https://jsonplaceholder.typicode.com/posts')
    posts.map(post =>{

    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);  
    } );
    
};
loadAllData()


  