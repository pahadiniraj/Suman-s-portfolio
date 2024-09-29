import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";
import {
  boxShadowPrimary,
  buttonPrimary,
  dashboardRootDivStyle,
  deleteButtonStyle,
  deleteIcon,
  editButtonStyle,
  editIcon,
  formStyle,
  inputStyle,
} from "../../utils/StyleUtils";
import { blogPosts } from "../../assets/dummyData/blogData";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { utcDateToLocalDate } from "../../utils/Utils";

const BlogPostModal = ({
  showBlogPostModal,
  operation,
  selectedPost,
  closeBlogPostModal,
}) => {
  if (!showBlogPostModal) return null;

  return (
    <div className="bg-custom-dark bg-opacity-90 backdrop-blur-md fixed left-0 top-0 h-full w-full flex justify-center items-center">
      <form
        className={`border border-gray-600 space-y-3 p-5 bg-custom-dark rounded-xl`}
      >
        <div className="w-full text-xl font-bold border-b border-primary pb-2">
          <span className="text-primary">{operation} Post</span>
          <span
            className="fa-solid fa-xmark float-end text-custom-light-high text-2xl hover:text-primary cursor-pointer"
            onClick={closeBlogPostModal}
          ></span>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <p className="text-primary font-medium">Title:</p>
            <input
              className={`${inputStyle} w-96`}
              type="text"
              name="title"
              // value={selectedExperience.duration}
              // onChange={handleOnChangeInput}
              required
            />
          </div>

          <div className="space-y-1">
            <p className="text-primary font-medium">Category:</p>
            <input
              className={`${inputStyle} w-96`}
              type="text"
              name="category"
              // value={selectedExperience.duration}
              // onChange={handleOnChangeInput}
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Description:</p>
          <input
            className={`${inputStyle} w-full`}
            type="text"
            name="description"
            // value={selectedExperience.duration}
            // onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="space-y-1">
          <p className="text-primary font-medium">Content:</p>
          <textarea
            className={`${inputStyle} w-full`}
            type="text"
            name="content"
            rows={5}
            // value={selectedExperience.duration}
            // onChange={handleOnChangeInput}
            required
          />
        </div>

        <div className="grid grid-cols-2">
          <div className="space-y-1">
            <p className="text-primary font-medium">Image (Thumbnail):</p>
            <input
              className={`border border-custom-light-low rounded p-1 text-custom-light-low w-96`}
              type="file"
              name="image"
              // value={selectedExperience.duration}
              // onChange={handleOnChangeInput}
              required
            />
          </div>

          <div className="space-y-1">
            <p className="text-primary font-medium">Author:</p>
            <input
              className={`${inputStyle} w-96`}
              type="text"
              name="author"
              // value={selectedExperience.duration}
              // onChange={handleOnChangeInput}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button className={`${buttonPrimary} w-56 mt-5`}>Apply</button>
        </div>
      </form>
    </div>
  );
};

export default function BlogManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [visibleBlogPosts, setVisibleBlogPosts] = useState([]);
  const [visiblePostCategory, setVisiblePostCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMorePost, setHasMorePost] = useState(false);
  const initialPostCount = 20;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showBlogPostModal, setShowBlogPostModal] = useState(false);
  const [operation, setOperation] = useState("New");

  useEffect(() => {
    titleOnDashboard("Blog Management");
    setVisibleBlogPosts(blogPosts);
  }, []);

  useEffect(() => {
    checkHasMore();
    setIsLoading(false);
  }, [visibleBlogPosts]);

  useEffect(() => {
    handleVisiblePost();
  }, [visiblePostCategory, page]);

  const handleVisiblePost = () => {
    if (visiblePostCategory === "all")
      setVisibleBlogPosts(blogPosts.slice(0, initialPostCount * page));
    else
      setVisibleBlogPosts(
        blogPosts
          .filter((post) => post.category === visiblePostCategory)
          .slice(0, initialPostCount * page)
      );
  };

  const handleNext = () => {
    console.log("[CUSTOM] I am inside handleNext.");
    setIsLoading(true);
    setPage((prevState) => prevState + 1);
  };

  const checkHasMore = () => {
    if (visiblePostCategory === "all")
      blogPosts.length > visibleBlogPosts.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    else {
      blogPosts.filter((post) => post.category === visiblePostCategory).length >
      visibleBlogPosts.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    }
  };

  const handlePostView = (postId) => {
    const url = "/blog-home/post/" + postId;
    window.open(url, "_blank");
  };

  const closeBlogPostModal = () => {
    setShowBlogPostModal(false);
  };

  const handleNewBlogPost = () => {
    setShowBlogPostModal(true);
  };

  return (
    <>
      <BlogPostModal
        showBlogPostModal={showBlogPostModal}
        operation={operation}
        closeBlogPostModal={closeBlogPostModal}
      />
      <div className={`${dashboardRootDivStyle}`}>
        <p className="text-xl text-primary font-bold">
          <i className="fa-regular fa-newspaper w-8"></i>Blog Posts
        </p>
        <div className={`${formStyle} md:w-6/12 gap-5`}>
          <p className=" font-bold text-custom-light-high">
            <i className="fa-solid fa-wrench w-8"></i>
            Setup Blog Info
          </p>

          <div className="space-y-1">
            <div>
              <div className="space-y-1">
                <p className="text-custom-light-low">Header Text:</p>
                <input
                  className="outline-none py-2 px-2 rounded focus:ring-2 w-full"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="space-y-1">
                <p className="text-custom-light-low">Description:</p>
                <textarea
                  className="outline-none py-1 px-2 rounded focus:ring-2 w-full"
                  type="text"
                />
              </div>
            </div>
          </div>

          <button className={`${buttonPrimary} w-44 mx-auto`}>Apply</button>
        </div>

        <div className={`${formStyle} gap-5`}>
          <div className="flex items-center mb-5">
            <p className="font-bold text-custom-light-high">
              <i className="fa-regular fa-newspaper w-8"></i>
              Posts
            </p>
            <button
              className="ms-auto me-0 text-custom-light-high font-bold text-left hover:text-primary border-b border-custom-light-low hover:border-primary"
              onClick={handleNewBlogPost}
            >
              <span className="fa-solid fa-square-plus w-6"></span>Publish New
              Post
            </button>
          </div>

          <div className="flex items-center">
            <div
              className={`flex justify-center items-center rounded-xl overflow-hidden border border-custom-light-low w-96`}
            >
              <input
                className="outline-none p-2 w-full"
                type="text"
                placeholder="Search post..."
              />
              <i className="fa-solid fa-magnifying-glass py-2 px-3 cursor-pointer text-custom-light-low hover:text-primary"></i>
            </div>

            <div className="flex items-center gap-2 ms-auto me-0">
              <p className="text-custom-light-low">Category:</p>
              <select className="p-2 rounded w-40" name="" id="">
                <option className="" value="">
                  All
                </option>
                <option className="" value="">
                  Science
                </option>
                <option className="" value="">
                  Education
                </option>
                <option className="" value="">
                  Technology
                </option>
              </select>
            </div>
          </div>

          <InfiniteScroll
            className={`space-y-5`}
            dataLength={visibleBlogPosts.length}
            next={handleNext}
            hasMore={hasMorePost}
            // loader={<Loading />}
            endMessage={
              <div className="flex justify-center items-center gap-3">
                <span className="font-bold">It was the last post.</span>
              </div>
            }
          >
            <div className="grid grid-cols-3 gap-5">
              {visibleBlogPosts.map(
                (post, index) =>
                  post.urlToImage && (
                    <div
                      key={index}
                      className={`rounded-xl overflow-hidden ${boxShadowPrimary}`}
                    >
                      <img
                        className="object-cover h-44"
                        src={post.urlToImage}
                        alt={post.title}
                      />
                      <div className="p-3 md:p-5 space-y-2 bg-custom-dark text-custom-light-high">
                        <p className="text-xs text-custom-light-low">
                          Post ID: {post.id}
                        </p>
                        <p className="text-xs text-custom-light-low">
                          Category: {post.category}
                        </p>
                        <div
                          className="cursor-pointer space-y-2"
                          onClick={() => handlePostView(post.id)}
                        >
                          <p className="hover:underline">
                            {post.title.slice(0, 50)}...
                          </p>
                          <p className="text-xs text-custom-light-low">
                            {utcDateToLocalDate(post.publishedAt)}
                          </p>
                        </div>
                        <button
                          className={`${editButtonStyle} bg-primary`}
                          onClick={() => handlePostView(post.id)}
                        >
                          View <i className="fa-solid fa-eye"></i>
                        </button>
                        <div className="flex gap-2 mt-2">
                          <button className={editButtonStyle}>
                            <span className={editIcon}></span> Edit
                          </button>
                          <button className={deleteButtonStyle}>
                            <span className={deleteIcon}></span> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </InfiniteScroll>
          {hasMorePost && (
            <button
              className={`p-2 text-custom-light-high hover:text-primary font-medium hover:underline`}
              onClick={handleNext}
            >
              <i
                className={`fa-solid fa-spinner ${
                  isLoading ? "animate-spin" : ""
                }`}
              ></i>{" "}
              Load more...
            </button>
          )}
        </div>
      </div>
    </>
  );
}
