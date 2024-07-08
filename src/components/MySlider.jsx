import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dotbg from '../assets/dots-bg.png';
import { MdPerson } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
<div className="slider-bg relative container m-auto">
  <div>
    <img className="absolute right-11 md:right-52" src={dotbg} alt="dots" />
  </div>

    <div className='w-3/4 m-auto py-10  '>
      <div className="mt-20 ">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white shadow-lg text-black rounded-xl w-[70%] ">
           
              <img className="rounded-xl w-[100%]" src={d.img} alt="pic"/>
            
            <div className="flex flex-col justify-center gap-4 p-4 m-3">
              <p className="text-sm font-bold">{d.course}</p>
              <p className=" font-bold md:text-lg text-sm">{d.details}</p>

<div className="flex justify-between">

<p className="inline-flex"> <span className="pt-1 text-yellow-500 pr-3"><MdPerson /></span>
Beginner
</p>

<p className="inline-flex">
<span className="pt-1 text-gray-700 pr-2"><GiSandsOfTime /></span>
2h 24m
</p>

</div>


              {/* <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>

  );
}

const data = [
  {
    course: `FRONT END`,
    img: `https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-03.jpg`,
    details:`HTML 5 Web Component Fundamentals`
  },
  {
    course: `FRONT END`,
        img: `https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-02.jpg`,
    details:`Mastering CSS 3 Flexbox With Real World Projects`
  },
  {
    course: `FRONT END`,
        img: `https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-01.jpg`,
    details:`Full Stack Web Development with React Hooks and Redux`
  },
  {
    course: `BACK END`,
        img: `https://itadstore.co.za/cdn/shop/collections/ITAD_AFRICA_LAPTOP_1200x800.jpg?v=1637658129`,
    details:`HTML 5 Web Component Fundamentals`
  },
  {
    course: `BACK END`,
        img: `https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/11/shutterstock_1702515205.jpg`,
    details:`Full Stack Web Development with React Hooks and Redux`
  },
  {
    course: `BACK END`,
        img: `https://magazine.techis.io/wp-content/uploads/2022/11/kelly-sikkema-YK0HPwWDJ1I-unsplash-scaled.jpg`,
    details:`Mastering CSS 3 Flexbox With Real World Projects`,
  },

  
];

export default MySlider;