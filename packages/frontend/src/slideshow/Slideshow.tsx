import { useEffect } from 'react';
import './Slideshow.scss';

/* Slideshow modified from https://www.w3schools.com/howto/howto_js_slideshow.asp */

export const Slideshow = () => {
  var slideIndex: number = 0;

  /* Define abstract slide */
  interface ISlide {
    text: string,
    imageSrc: string,
    labelText: string
  }

  /* Create slide list */
  const slideList: ISlide[] = [
    {
      text: "As part of the mission for San Luis Obispo to be Carbon Neutral by 2035, we are on a journey to plant 10,000 trees in the city by 2035.",
      imageSrc: "/images/slide1.png",
      labelText: "MISSION"
    },
    {
      text: "Want to plant a tree but don’t know how? Don’t worry! We have all the resources for you to have a successful planting experience.",
      imageSrc: "/images/slide2.png",
      labelText: "HOW TO PLANT"
    },
    {
      text: "Not comfortable with planting your own tree? Sign up to adopt a tree! By adopting, you will take care of the tree you sign-up for by watering and more. We appreciate your help!",
      imageSrc: "/images/slide3.png",
      labelText: "ADOPTING A TREE"
    },
    {
      text: "Want to help in other ways? Check out resources from our partners.",
      imageSrc: "/images/slide4logos.png",
      labelText: "OUR PARTNERS"
    }
  ];

  // Called when an arrow is clicked
  const arrowClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    // Only call on arrow element
    event.stopPropagation();
    // Get element
    const arrow = event.currentTarget;

    // Change slide
    if (arrow.className == "next") {
      slideIndex = (slideIndex + 1) % slideList.length;
    } else {
      slideIndex = (slideIndex + slideList.length - 1) % slideList.length;
    }
    changeSlide(slideIndex);

    // Debug
    console.log("Clicked arrow \"",arrow.className,"\", index is ",slideIndex);
  };

  // Called when a dot is clicked
  const dotClickHandler = (event: React.MouseEvent<HTMLElement>, index: number) => {
    // Only call on dot element
    event.stopPropagation();
    
    // Change slide
    slideIndex = index;
    changeSlide(slideIndex);

    console.log("Clicked dot ",index,", index is now ",slideIndex);
  };

  // Does the work of changing a slide
  const changeSlide = (index: number) => {
    var i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    /* Bounds safety check */
    if (index >= slides.length) { index = 0; }    
    if (index < 0) { index = slides.length-1; }
    
    /* Hide all slides */
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";  
    }
    
    /* Reset all the dots */
    for (i = 0; i < dots.length; i++) {
      const dot = dots[i] as HTMLElement;
      dot.className = dot.className.replace(" active", "");
    }
    
    /* Show slide and change active dot */
    const slide = slides[index] as HTMLElement;
    slide.style.display = "block";  
    dots[index].className += " active";
    
    // Debug
    console.log("Slide changed to ",index);
  }

  /* Preload images */
  useEffect(() => {
    slideList.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageSrc;
    });
  }, []);

  /* Create page structure */
  return (
    <div className='slideshow' onLoad={() => changeSlide(0)}>

      {
      /* Create slides from list */
      slideList.map(({text, imageSrc, labelText}, index, arr) => (
        <div className="slide">
          <div className="numbertext">{index+1} / {arr.length}</div>
          <div className="labelText">{labelText}</div>
          <img src={imageSrc}/>
          <div className="text">{text}</div>
        </div>
      ))
      }

      <a className="prev" onClick={arrowClickHandler}>&lt;</a>
      <a className="next" onClick={arrowClickHandler}>&gt;</a>

      <div className='dotContainer'>
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,0)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,1)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,2)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,3)}></span> 
      </div>
    </div>
  );
};