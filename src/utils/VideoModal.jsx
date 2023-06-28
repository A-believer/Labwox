import closeFeed from "../assets/closeFeed.png"
import blogFeedVid from "../assets/blogFeedVid.mp4"
import { useState } from "react"

const VideoModal = () => {
    const [hide, setHide] = useState(false)

    const handleClose = () => {
        setHide(true);
        console.log("hello")
    }
    
  return (
      <>
        <div className={`absolute top-0 max-w-screen-md h-[200px] flex flex-row-reverse justify-between`}>
            <div className={`${!hide ? "block":"hidden" }`}>
                <button type="button" className={`self-start`} onClick={handleClose}>
                <img src={closeFeed} alt="closeFeed" />
                </button>
                <video
                className="mt-8 rounded"
                autoPlay={true}
                controls
                muted>
                <source type='video/mp4' src={blogFeedVid} />
                  </video>
              </div>          
        </div>
    </>
  )
}

export default VideoModal