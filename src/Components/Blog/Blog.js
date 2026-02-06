import './Blog.css'
import BlogCard from './blogCards'
import img1 from '../img/post-1.jpg'
import img2 from '../img/post-2.jpg'
import img3 from '../img/post-3.jpg'


function Blog (){

    let BlogItem=[
        {
            image:img1,
            title:"post title 1",
            time:"10 min",
            Author:"Shayan mir"
        },
        {
            image:img2,
            title:"post title 2",
            time:"15 min",
            Author:"Hassan abs"
        },{
            image:img3,
            title:"post title 3",
            time:"20 min",
            Author:"Mahdi shi"
        },
    ]

    return(
        <section id="blog">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title">BLOG</h2>
          <p class="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="row">
         <BlogCard {...BlogItem[0]}/>
         <BlogCard {...BlogItem[1]}/>
         <BlogCard {...BlogItem[2]}/>
        </div>
      </div>
    </section>
    )
}
export default Blog