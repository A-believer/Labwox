import { blogFeed } from "../data/data"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogFeed = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };


  return (
      <div>
          <div className="lg:flex hidden ">
              {blogFeed && blogFeed.map((feed, i) => (
                  <div key={feed.id + i} className="bg-[#F4F4F6] lg:p-4 p-2 gap-x-6">
                      <div className="bg-white lg:p-6 p-4">
                        <p className="text-yellow lg:text-xl text-sm lg:leading-8 leading-5 font-bold">{ feed.title}</p>
                        <p className="text-blackii lg:text-2xl text-sm lg:leading-8 leading-5 font-bold lg:mt-[8px] lg:mb-[19px]">{ feed.subtext}</p>
                        <a href="#" className="text-[#071A2B] lg:text-lg text-xs lg:leading-5 leading-3 font-bold underline underline-offset-4">Read More</a>
                        <div className="bg-black/20 w-[336px] h-[175px] mt-[37px]"></div>
                      </div>
                      
                  </div>
              ))}
          </div>

      <div className="lg:hidden block relative">
        <Slider {...settings}>
           {blogFeed && blogFeed.map((feed, i) => (
                  <div key={feed.id + i} className="bg-[#F4F4F6] lg:p-4 p-2 gap-x-20">
                      <div className="bg-white lg:p-6 p-4">
                        <p className="text-yellow lg:text-xl text-sm lg:leading-8 leading-5 font-bold">{ feed.title}</p>
                        <p className="text-blackii lg:text-2xl text-sm lg:leading-8 leading-5 font-bold lg:mt-[8px] lg:mb-[13px]">{ feed.subtext}</p>
                        <a href="#" className="text-[#071A2B] lg:text-lg text-xs lg:leading-5 leading-3 font-bold underline underline-offset-4">Read More</a>
                        <div className="bg-black/20 w-[219px] h-[101px] mt-[25px]"></div>
                      </div>
                      
                  </div>
              ))}
        </Slider>
              
          </div>
          
          
    </div>
  )
}

export default BlogFeed