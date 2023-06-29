import { blogFeed } from "../data/data"
import { useEffect, useState } from "react";
// import VideoModal from "./VideoModal";
import closeFeed from "../assets/closeFeed.png"
import blogFeedVid from "../assets/blogFeedVid.mp4"


const BlogFeed = () => {
  const [id, setId] = useState(null);
  const [hide, setHide] = useState(false)

 useEffect(() => {
    if (!hide) {
      setId(null);
    }
  }, [hide]);

  const handleOpen = (videoId) => {
    setId(videoId);
    setHide(true);
  };

  const closeModal = () => {
    setHide(false);
  };

  return (
    <div>
      {/* Desktop View  */}
          <div className="flex lg:flex-row flex-col gap-x-2">
              {blogFeed.map((feed, i) => (
                  <div key={feed.id + i} className="bg-[#F4F4F6] lg:p-4 p-2 gap-x-4">
                      <div className="bg-white lg:p-6 p-2">
                        <p className="text-yellow lg:text-xl text-sm lg:leading-8 leading-5 font-bold">{ feed.title}</p>
                        <p className="text-blackii lg:text-2xl text-sm lg:leading-8 leading-5 font-bold lg:mt-[8px] lg:mb-[19px]">{ feed.subtext}</p>
                    <a href="#" className="text-[#071A2B] lg:text-lg text-xs lg:leading-5 leading-3 font-bold underline underline-offset-4">Read More</a>
                    
                    <div className="bg-black/20 lg:px-[150px] px-[100px] lg:py-[75px] py-[50px] mt-[37px]" onClick={() => handleOpen(feed.id)}>
                        {id && <div className={`absolute top-0 max-w-screen-md h-[200px] flex flex-row-reverse justify-between ${id === feed.id ? "block" : "hidden"}`}>
                              <button type="button" className={`self-start`} onClick={closeModal}>
                                <img src={closeFeed} alt="closeFeed" />
                              </button>
                              <video
                                className="mt-8 rounded"
                                autoPlay={true}
                                controls
                                muted>
                                <source type='video/mp4' src={blogFeedVid} />
                              </video> 
                      </div>}          
                    </div>
                      </div>

                  </div>
              ))}
          </div>
    </div>
  )
}

export default BlogFeed