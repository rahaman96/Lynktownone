import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import ViewCard from "/components/Blog/ViewCard";
import HeaderSection from "/components/Blog/HeaderSection";
// import StudyCard from "/components/Blog/StudyCard";
// import Image from "next/image";
// import ImageSlide from "/components/Blog/CardsComponents/ImageSlider";

const Blogs = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [recent_blogs, setRecentBlogs] = useState([]);
  const [reload, setReload] = useState(true);
  const [previousId, setPreviousId] = useState({ id: null });
  const [blogId, setBlogId] = useState();
  const clickHandler = (id) => {
    setReload(true);
    setBlogId(id);
  };
  async function getBlogsId(id) {
    if (blogId == previousId.id && id != undefined) {
      setReload(false);
      return;
    }
    await fetch(`https://api.cdcs.lesoft.io/api/blog/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setRecentBlogs(data.recent_blogs);
        setReload(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    fetch(`https://api.db-ip.com/v2/free/self`, { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://api.cdcs.lesoft.io/api/blogread/${id}/${data.ipAddress}`,
          {
            method: "POST",
            body: JSON.stringify({
              ip: data.ipAddress,
              blog_id: id,
            }),
          }
        );
      });
  }
  useEffect(() => {
    const id = router.query.id;
    getBlogsId(id);
    setPreviousId(JSON.parse(JSON.stringify({ id: router.query.id })));
  }, [router.query.id, blogId, reload]);
  return (
    <>
      {reload ? (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: 10000,
            backgroundColor: "#ffffff91",
          }}
        >
          <img
            style={{ height: 300 }}
            src="https://api.cdcs.lesoft.io/public/blogs/output-onlinegiftools.gif"
          />
        </div>
      ) : (
        <p></p>
      )}
      {blog ? (
        <section className="text-gray-600 body-font lg:overflow-x-hidden">
          <div className="md:py-10 lg:w-full md:w-full">
            <HeaderSection />
          </div>
          <div style={{ maxHeight: 700, overflow: "hidden" }}>
            <img src={blog.cover} style={{ width: "100%", height: "auto" }} />
          </div>

          <div className="flex flex-col ">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <h2
                class="md:w-[70%] w-[85%]"
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}
              >
                {blog ? blog.title : "Blog Expired"}
              </h2>
              <div
                class="md:w-[70%] w-[85%]"
                dangerouslySetInnerHTML={{ __html: blog ? blog.data : "" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {blog.file_type == "image" ? (
                  <img
                    style={{ width: "60%", borderRadius: 10 }}
                    src={blog.src}
                  ></img>
                ) : blog.file_type == "video" ? (
                  <iframe
                    class="w-[80%] h-[200px] md:w-[50%] md:h-[550px]"
                    style={{ borderRadius: 10, allowTransparency: true }}
                    src={blog.src}
                  ></iframe>
                ) : (
                  <p></p>
                )}
              </div>
              {/* <iframe src="https://docs.google.com/gview?url=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx&embedded=true" style={{ height: 600, width: '40%' }}></iframe> */}
              {blog.ppt_url ? (
                <embed
                  className="h-[200px] md:h-[600px]"
                  style={{ width: "70%" }}
                  src={blog.ppt_url}
                ></embed>
              ) : (
                ""
              )}
              {blog.pdf_url ? (
                <iframe
                  className="h-[200px] md:h-[500px]"
                  src={blog.pdf_url + "#toolbar=0"}
                  style={{
                    border: 0,
                    marginTop: 30,
                    width: "70%",
                    borderColor: "red",
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <h1 className="text-[#000000] font-inter leading-[50.83px] w-[271px] h-[51px] font-bold m-12 text-[42px] ">
              Recent Posts
            </h1>
            <div className="w-[100%]">
              <ViewCard
                clickHandler={clickHandler}
                blogs={recent_blogs ? recent_blogs : []}
              />
            </div>
          </div>
        </section>
      ) : (
        <p></p>
      )}

      {/* <section className="text-gray-600 body-font">
        <div className="lg:ml-5 mt-10 py-10 md:py-0">
          <HeaderSection />
        </div>
        <div className="container px-5  mx-auto flex flex-wrap flex-col">
          <h1 className="h-[120px] md:h-full lg:h-full md:px-0 text-[#313131] text-[30px] md:text-[30px]  leading:[42px] md:leading-[40px] text-left lg:px-4 font-medium	font-serif font-semibold not-italic">
            {blog?.title}
          </h1>
          <div className="container  flex flex-wrap flex-col md:flex-row items-cente mb-12 md:mb-0 md:py-4">
            <div className="md:ml-auto md:mr-auto flex flex-wrap w-[946px] text-base sm:text-1x text-1x ">
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900 ">
                By Thomas Frank
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <GoPrimitiveDot />
              </p>
              <p className="text-[30px]  md:text-[20px] mr-1 hover:text-gray-900">
                Published : a year ago
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <RxDividerVertical />
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900">
                Update : a year ago
              </p>
            </div>
          </div>

          <div className="w-[946px] h-[700px] md:h-full block mx-auto  object-cover object-center mb-">
            <StudyCard />
          </div>
          <p className="py-10 md:px-0 mt- w-[946px] block mx-auto text-[30px] md:text-[20px]  object-cover object-center">
            {blog?.body}
          </p>

          <div className="">
            <ViewCard />
          </div>
        </div>
        <div></div>
      </section> */}
    </>
  );
};
export default Blogs;
