import React, { useEffect, useState } from "react";
import { blogPosts, postCategories } from "../assets/dummyData/blogData";
import { useDispatch, useSelector } from "react-redux";
import BlogSlider from "./BlogSlider";
import { boxShadowPrimary, titlePrimary } from "../utils/StyleUtils";
import { scrollToTop } from "../utils/Utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/state";

export default function Blog() {
  const { category } = useParams();
  const isDarkMode = useSelector((state) => state.darkMode);
  const initialPostCount = 20;
  const [visiblePost, setVisiblePost] = useState([]);
  const [visiblePostCategory, setVisiblePostCategory] = useState(category);
  const [page, setPage] = useState(1);
  const [hasMorePost, setHasMorePost] = useState(false);
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const dispatch = useDispatch();
  const { showPageLoaderAction } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    checkHasMore();
  }, [visiblePost]);

  useEffect(() => {
    handleVisiblePost();
  }, [visiblePostCategory, page]);

  const handleVisiblePost = () => {
    if (visiblePostCategory === "all")
      setVisiblePost(blogPosts.slice(0, initialPostCount * page));
    else
      setVisiblePost(
        blogPosts
          .filter((post) => post.category === visiblePostCategory)
          .slice(0, initialPostCount * page)
      );
  };

  const handleCategoryChange = (category) => {
    setVisiblePostCategory(category);
    setPage(1);
    handleShowCategories();
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const checkHasMore = () => {
    if (visiblePostCategory === "all")
      blogPosts.length > visiblePost.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    else {
      blogPosts.filter((post) => post.category === visiblePostCategory).length >
      visiblePost.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    }
  };

  const handlePostView = (postId) => {
    navigate("/blog-home/post/" + postId);
  };

  const handleShowCategories = () =>{
    setShowCategories(prevState => !prevState);
  }

  return (
    <>
      <div className="mt-16 px-3 py-10 md:px-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm text-center space-y-5">
        <p className="text-4xl font-bold text-primary">Welcome to my blog</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          accusantium deserunt quod quae corrupti molestiae aperiam nam autem
          voluptatibus, sapiente repellendus blanditiis eveniet earum cupiditate
          minus asperiores quo mollitia. Veniam.
        </p>
        <div>
          <p className="text-sm font-bold">GET UPDATES ON</p>
          <div className="flex items-center justify-center gap-5 h-full p-2">
            <i
              className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                isDarkMode ? "border-custom-light-high" : "border-custom-dark"
              } hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-instagram `}
            ></i>
            <i
              className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                isDarkMode ? "border-custom-light-high" : "border-custom-dark"
              } hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-facebook `}
            ></i>
            <i
              className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                isDarkMode ? "border-custom-light-high" : "border-custom-dark"
              } hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-youtube `}
            ></i>
            <i
              className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                isDarkMode ? "border-custom-light-high" : "border-custom-dark"
              } hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-x-twitter `}
            ></i>
            <i
              className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                isDarkMode ? "border-custom-light-high" : "border-custom-dark"
              } hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-linkedin-in `}
            ></i>
          </div>
        </div>
      </div>

      <div id="blogPostsBody" className="px-3 py-10 md:px-20 space-y-10">
        <div className="space-y-5">
          <div className="">
            <p className={`${titlePrimary} text-center`}>LATEST POSTS</p>
            <hr />
          </div>

          <div
            className={`bg-gray-500 bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden ${boxShadowPrimary}`}
          >
            <BlogSlider />
          </div>
        </div>

        <div className="space-y-5">
          <div className="">
            <p className={`${titlePrimary} text-center`}>
              {visiblePostCategory.toUpperCase()} POSTS
            </p>
            <hr />
          </div>
          <div className="relative">
            <div className="flex flex-col-reverse md:flex-row bg-gray-500 bg-opacity-10 rounded-xl">
              <div className={`w-full md:w-8/12`}>
                {visiblePost && (
                  <InfiniteScroll
                    className={`space-y-5 p-2`}
                    dataLength={visiblePost.length}
                    next={handleNext}
                    hasMore={hasMorePost}
                    loader={<Loading />}
                    endMessage={
                      <div className="flex justify-center items-center gap-3">
                        <span className="font-bold">It was the last post.</span>
                      </div>
                    }
                  >
                    {visiblePost.map(
                      (post, index) =>
                        post.urlToImage && (
                          <div
                            key={index}
                            className={`rounded-xl overflow-hidden ${boxShadowPrimary}`}
                          >
                            <img
                              className="object-cover"
                              src={post.urlToImage}
                              alt={post.title}
                            />
                            <div className="p-3 md:p-5 space-y-2 ">
                              <p className="bg-primary text-center text-custom-light-high text-sm inline-block py-1 px-5 rounded-xl">
                                {post.category.toUpperCase()}
                              </p>
                              <div
                                className="cursor-pointer space-y-2"
                                onClick={() => handlePostView(post.id)}
                              >
                                <p className="text-2xl font-medium text-primary hover:underline">
                                  {post.title}
                                </p>
                                <p>{post.description}</p>
                                <p className="hover:underline">Read more...</p>
                              </div>

                              <div className="flex items-center">
                                <div className="flex-1">
                                  <p className="text-custom-light-low text-sm font-medium">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                    &nbsp; {post.source.name}
                                  </p>
                                </div>
                                <div className="flex-1 text-right">
                                  <i className="fa-solid fa-share-nodes text-xl"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </InfiniteScroll>
                )}
              </div>

              <div className="flex md:w-4/12 flex-col gap-5 p-2">
                <div className={`${boxShadowPrimary} p-5 rounded-xl space-y-1`}>
                  <p className="font-medium text-primary">Search</p>
                  <div
                    className={`flex justify-center items-center rounded-xl overflow-hidden border border-custom-light-low`}
                  >
                    <input className="outline-none p-2 w-full" type="text" />
                    <i className="fa-solid fa-magnifying-glass py-2 px-3 cursor-pointer hover:text-primary"></i>
                  </div>
                </div>

                <div className={`${boxShadowPrimary} p-5 rounded-xl space-y-2`}>
                  <p className="font-medium text-primary">Categories</p>
                  <div className="md:hidden">
                    <span>Current Category: </span>
                    <p 
                    className="underline cursor-pointer font-medium text-primary"
                    onClick={handleShowCategories}
                    >
                      {visiblePostCategory.toLocaleUpperCase()}{" "}
                      <i className="fa-solid fa-caret-down"></i>
                    </p>
                  </div>

                  <div className={`${showCategories ? "block" : "hidden"} md:block pl-2`}>
                    <p
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleCategoryChange("all")}
                    >
                      All
                    </p>
                    {postCategories.map((category, index) => (
                      <p
                        key={index}
                        className="cursor-pointer hover:text-primary"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
