import React, { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayerCard from '../components/playerCard';
import MyModal from '../components/mymodal'

function index() {
  

  const [pitchers, setPitchers] = useState([]);

  useEffect(() => {


    const fetchData = async () => {        
      try {
        const response = await fetch( `http://127.0.0.1:8080/info`);
        const data = await response.json();
        console.log(data);

      
        
        if (data && Array.isArray(data.total)) {
           
            setPitchers(data.total);
          } else {
            console.error('Invalid data structure received:', data);
          }
       
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


     fetchData();
  }, []);


  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="w-30 flex justify-left"
        style={{ ...style, left: "-30px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };
  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "-30px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };



 

  const extras = [
      {id: 657277, number: '#62', pictures: "/images/logan_webb.png"},
      {id: 668678, number:'#23', pictures: "/images/zac_gallen.png"},
      {id: 543037, number:'#45', pictures: "/images/gerrit_cole.png"},
      {id: 571945, number: '#39', pictures: "/images/miles_mikolas.png"},
      {id: 605135, number: '#40', pictures: "/images/chris_bassitt.png"},
      {id: 664285, number: '#59', pictures: "/images/framber_valdez.png"},
      {id: 622491, number: '#58', pictures: "/images/luis_castillo.png"},
      {id: 656605, number: '#23', pictures: "/images/mitch_keller.png"},
      {id: 641154, number: '#49', pictures: "/images/pablo_lopez.png"},
      {id: 605400, number: '#27', pictures: "/images/aaron_nola.png"},
      {id: 571578, number: '#46', pictures: "/images/patrick_corbin.png"},
      {id: 680686, number: '#40', pictures: "/images/josiah_gray.png"},
      {id: 669022, number: '#1', pictures: "/images/mackenzie_gore.png"},
      {id: 663623, number: '#27', pictures: "/images/jake_irvin.png"}
  ]



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };





  return (
      <div>
        <h1 className="text-6xl text-center mt-8 font-serif font-bold">Pitcher Dashboard</h1>
        <div className="mt-16">
          <SamplePrevArrow />
          <Slider {...settings}>
            {pitchers.map((pitcher) => {
              const extra = extras.find(item => item.id === pitcher.id) || {};
                return (
                 <>
                  <PlayerCard
                    key={pitcher.id}
                    position={pitcher.side}
                    playerName={pitcher.name}
                    team={pitcher.team}
                    pictureSrc={extra.pictures}
                    number={extra.number}
                    id = {pitcher.id}
                      />
                  </>
      );
    })}

          </Slider>
        </div>
        <div className="text-center mt-12 italic">
      <p>Select any pitcher and click "view stats" to see detailed metrics from the 2023 season!</p>
      </div>

        <div className="mt-24 mb-auto text-center ml-16 mr-16 p-8 border-4 border-slate-300 rounded-lg">
          <h1 className="text-2xl font-bold mt-2 mb-2">About</h1>
      <p className="mr-4 ml-4 mb-4">Hi my name is Rohan Iyer and I am currently a sophomore in Computer Engineering at the University of Illinois Urbana-Champaign.
        To say a little bit about myself, I am a huge sports fan. I enjoy watching all sports including football, basketball, and baseball,
        but I also keep a close following on other sports such as tennis, golf, and cricket. I am naturally drawn towards statistics
        and numbers so creating this project allowed me to combine a few of my interests into one. I really enjoyed working on this 
         web page and this experience has surely increased my enthusiasm for the opportunity to join the Washington Nationals in this position.  </p>
        
         <p>To create this page, I used a Flask (Python) backend in conjunction with a React JS frontend. I 
        began by establishing a few API routes within Flask to gather data from the database. Using SQL, I was able to query for all of the data
        that was needed and store it in easily accessible tables and lists. In React, I created a few
        components such as a card, modal, and table. I used "fetch" to call the data from the backend when necessary
        which allowed me to display important information when needed. I crafted the page so that each player has a card, and each card has a modal with 
        a table of their stats. Finally, I used Tailwind to develop the stlying of all components, resulting in a simple and cohesive web page. 
      </p>
      </div>
      
    </div>
    
    );


    }
    
    export default index;