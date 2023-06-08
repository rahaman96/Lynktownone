import React, { useState, useEffect } from "react";
import Consider from "./CardsComponents/Consider";

const BodySection = (props) => {
  const [posts, setPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");
  const [filledValue, setFilValue] = useState("all");
  const [filteredPosts, setFilteredPost] = useState([]);
  const modalHandler = () => {
    props.modalHandler();
  }
  
  const linkHandler = () => {
    props.linkHandler();
  }

  const fetchPost = () => {
    fetch("https://api.cdcs.lesoft.io/api/blogs", {method: "POST"})
      .then((res) => res.json())
      .then((data) => { 
        setPost(data.data.slice(0, 30));
        // console.log(data.data);
      });
  };
  const fetchcategories = () => {
    fetch("https://api.cdcs.lesoft.io/api/blog_category", {method: "POST"})
      .then((res) => res.json())
      .then((data) => { 
        setCategories(data.data);
        // console.log(data.data);
      });
  };
  useEffect(() => {
    fetchPost();
    fetchcategories();
  }, []);

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setSelectedValue(filterValue);
    if (filterValue === "all") {
      setFilteredPost(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.category_id == parseInt(filterValue)
      );
      console.log(filterValue, '12');
      setFilteredPost(filtered);
    }
  };

  const changeCategory = (filterValue) => {
    setFilValue(filterValue);
    if (filterValue === "all") {
      setFilteredPost(posts);
    } else {
      const filtered = [];
      const viewers = [];
      if(filterValue == "popular") {
        posts.sort(function(a, b){return a.viewers.length - b.viewers.length});
        posts.reverse();
        console.log(posts, 'sasd');
      } else if (filterValue == "recent"  || filterValue == "all") {
        posts.sort(function(a, b){return a.id - b.id});
      }
      // console.log(posts, 'assss');
      // posts.map((item, index) => {
      //   viewers[index] = item.viewers != undefined ? item.viewers : 0;
      // });

      // posts.map((item, index) => {
      //   posts.map((_item, i) => {
      //   if(filterValue == "popular") {
      //       if(
      //         filtered.length && 
      //         filtered[0].viewers != undefined && 
      //         item.viewers != undefined && 
      //         item.viewers.length > filtered[0].viewers.length
      //         ) {

      //       }
      //     }
      //   })
      // })
      setFilteredPost(filtered);
    }
  };
  return (
    <div>
      <header className="text-gray-600 body-font" style={{ marginTop: 20 }}>
        <div className="container mx-aut flex flex-wra md:flex-row   ">
          <div className="md:ml-auto w-ful flex px-4">
            <div className="flex w-[220px] md:w-full md:py-4 md:px-[40px] overflow-x-auto overflow-y-hidden" style={{ alignItems: 'center' }}>
              
              <div className="flex">
                <div>
                  <a onClick={()=>changeCategory('all')} className="hover:bg-[#E5E5E5] rounded-[2px] md:rounded-[5px] px-2 py-1 cursor-pointer">
                    All
                  </a>
                </div>
                <div>
                  <a  onClick={()=>changeCategory('popular')} className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                    Popular
                  </a>
                </div>
                <div>
                  <a  onClick={()=>changeCategory('recent')} className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                    Recent
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <select
                  // defaultValue={"all"}
                  value={selectedValue}
                  onChange={handleChange}
                  className="rounded-[5px] border border-[#DADADA] appearance-none focus:outline-none  pl-3  w-[150px] h-[40px]"
                >
                  <option value="all">All</option>
                  {categories.map((item, index)=>{
                    return (
                      <option key={index} value={item.id}>{item.name}</option>
                    );
                  })}
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    className="w-4 h-4 mt-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        <Consider linkHandler={linkHandler} modalHandler={modalHandler} data={filteredPosts} posts={posts} />
      </div>
    </div>
  );
};

export default BodySection;
