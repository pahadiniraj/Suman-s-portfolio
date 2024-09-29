import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../assets/dummyData/blogData";
import { scrollToTop, utcDateToLocalDate } from "../utils/Utils";
import { useSelector } from "react-redux";
import { renderTextWithParagraphs } from "../utils/RenderUtils";
import { boxShadowPrimary, buttonPrimary } from "../utils/StyleUtils";

export default function PostView() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((blogPost) => blogPost.id === parseInt(postId));
  const isDarkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleBack = () => {
    navigate("/blog-home");
  };

  const handlePostView = (postId) => {
    scrollToTop();
    navigate("/blog-home/post/" + postId);
  };

  return (
    <div className="mt-16 px-3 py-10 md:px-20 space-y-5">
      {/* <i className="fa-solid fa-arrow-left-long cursor-pointer" onClick={handleBack}></i> */}
      <div className="md:flex gap-5 space-y-10 md:space-y-0">
        <div className="md:w-8/12">
          {post ? (
            <div className="space-y-5">
              <p className="text-4xl font-medium text-primary">{post.title}</p>

              <div>
                <p className="font-medium">
                  By <span className="text-primary">{post.author}</span>
                </p>
                <p className="text-sm font-medium">
                  {utcDateToLocalDate(post.publishedAt)}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-share text-xl text-primary"></i>
                <div className="flex items-center gap-2">
                  <i
                    className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                      isDarkMode
                        ? "border-custom-light-high"
                        : "border-custom-dark"
                    } hover:border-primary hover:text-primary rounded-full flex justify-center items-center fa-brands fa-instagram `}
                  ></i>
                  <i
                    className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                      isDarkMode
                        ? "border-custom-light-high"
                        : "border-custom-dark"
                    } hover:border-primary hover:text-primary rounded-full flex justify-center items-center fa-brands fa-facebook `}
                  ></i>
                  <i
                    className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                      isDarkMode
                        ? "border-custom-light-high"
                        : "border-custom-dark"
                    } hover:border-primary hover:text-primary rounded-full flex justify-center items-center fa-brands fa-youtube `}
                  ></i>
                  <i
                    className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                      isDarkMode
                        ? "border-custom-light-high"
                        : "border-custom-dark"
                    } hover:border-primary hover:text-primary rounded-full flex justify-center items-center fa-brands fa-x-twitter `}
                  ></i>
                  <i
                    className={` hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-8 h-8 border ${
                      isDarkMode
                        ? "border-custom-light-high"
                        : "border-custom-dark"
                    } hover:border-primary hover:text-primary rounded-full flex justify-center items-center fa-brands fa-linkedin-in `}
                  ></i>
                </div>
              </div>

              <div className=" space-y-1">
                <img
                  className={`bg-gray-500 bg-opacity-10 rounded-xl p-2 md:p-2 ${boxShadowPrimary}`}
                  src={post.urlToImage}
                  alt={post.title}
                />
                <p className="italic text-sm">Source: {post.source.name}</p>
              </div>
              {renderTextWithParagraphs(post.content)}
            </div>
          ) : (
            <p>Post not found.</p>
          )}
        </div>
        <div className="md:w-4/12 bg-gray-500 bg-opacity-10 p-5 rounded-xl space-y-5">
          <div>
            <p className="text-center font-bold">Similar Posts</p>
            <hr />
          </div>
          <div className="space-y-5">
            {blogPosts
              .filter((blogPost) => blogPost.category === post.category)
              .slice(0, 20)
              .map((filteredPost, index) => (
                <div 
                key={index} 
                className={`${boxShadowPrimary} rounded-lg overflow-hidden cursor-pointer`}
                onClick={() => handlePostView(filteredPost.id)}
                >
                  <img src={filteredPost.urlToImage} alt={filteredPost.title} />
                  <p className="p-2 font-medium underline">{filteredPost.title}</p>
                </div>
              ))}

              <button 
              className={`${buttonPrimary} w-full`}
              onClick={() => navigate("/blog-home/blog/" + post.category)}
              >Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
