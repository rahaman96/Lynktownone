import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";

const Consider = ({ data, posts, modalHandler, linkHandler }) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [show_subscriber, setShowSubscriber] = useState('');
  const [blog_view_count, setBlogViewCount] = useState('');
  useEffect(() => {
    // localStorage.setItem("show_subscriber", 1);
    var _blog_view_count = localStorage.getItem("blog_view");
    setBlogViewCount(_blog_view_count);
    var _show_subscriber = localStorage.getItem("show_subscriber");
    setShowSubscriber(_show_subscriber);
  }, []);

  const openLink = (href) => {
    linkHandler.call();
    router.push(href, undefined, { shallow: true }); 
  };

  return (
    <>
      {(data.length != 0 ? data : posts).map((post) => {
        
        const title = post.title.replace(/ /g,"-");
        const href = `/blogs/${encodeURIComponent(post.id)}/${encodeURIComponent(title.toLowerCase())}`;
        return (
        
        <div
          onClick={()=> { (localStorage.getItem("blog_view") > 6 && localStorage.getItem("show_subscriber")) ? modalHandler.call() : openLink(href) } }
          // href={(blog_view_count > 10 && show_subscriber) ? '#' : `/blogs/${post.id}/${title}`}
          key={post.id}
          className="mx-auto w-[416px]  md:w-[340px] lg:w-[300px] xl:w-[380px] md:h-[396px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer  "
        >
          <div className="bg-white p-2">
            <Image
              src={post.cover}
              alt=""
              srcSet=""
              className="object-cover"
              width={400}
              height={200}
              style={{height: 200}}
              priority
            />
          </div>

          <div className="px-2 h-[60px]">
            <h1 className="w-[300px] mr-[20p] text-[15px] font-medium">
              {post?.title}
            </h1>
            <p className="text-lg text-gray-400">by {post?.user_name ? post?.user_name : 'Admin' }</p>
          </div>

          <div className="flex justify-between items-center px-5">
            <div className="flex gap-4">
              <div className="flex gap-2">
                <p className="py-1">
                  <AiFillEye />
                </p>
                <p className="text-[14px]">{post?.viewers ? post.viewers.length : 0}</p>
              </div>
            </div>

            <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
              Read more
            </div>
          </div>
        </div>
      )}
      )}
    </>
  );
};

export default Consider;
