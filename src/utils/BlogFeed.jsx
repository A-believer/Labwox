import { blogFeed } from "../data/data"


const BlogFeed = () => {
 

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
                    
                      </div>

                  </div>
              ))}
          </div>
    </div>
  )
}

export default BlogFeed