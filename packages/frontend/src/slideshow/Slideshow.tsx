import './Slideshow.scss';
import { useEffect } from 'react';
import { BasicTextSlideView } from './basic-text-slideview/BasicTextSlideView';
import { PartnersSlide } from './logo-slideview/PartnersSlide';

// Only used original slides 1 & 4
import slide1Src from '../assets/images/slideshow/slide1.png';
import slide4Src from '../assets/images/slideshow/slide4.png';

/* Define an abstract slide */
interface ISlide {
  // Element that defines the structure and content of a slide
  // Currently can be a <BasicTextSlideView> or <PartnersSlide>
  slideView: React.ReactNode;
  // Location of slide background image
  imageSrc: string,
  // Label of slide in top-left corner
  labelText: string
}

/* Create slide list */
const slideList: ISlide[] = [
  {
    slideView: (
      <BasicTextSlideView
        text="As part of San Luis Obispo's initiative to be Carbon Neutral by 2023, we are collectively planting 10,000 trees by 2035."
      />),
    imageSrc: slide1Src,
    labelText: "MISSION"
  },
  {
    slideView: (
      <PartnersSlide />
    ),
    imageSrc: slide4Src,
    labelText: "OUR PARTNERS"
  },
];

/* Slideshow modified from https://www.w3schools.com/howto/howto_js_slideshow.asp */
/**
 * Slideshow displaying information about the project and our partners
 */
export const Slideshow = () => {
  var slideIndex: number = 0;

  /* Called when an arrow is clicked */
  const arrowClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    // Only call on arrow element
    event.stopPropagation();
    // Get the specific arrow clicked
    const arrow = event.currentTarget;

    // Increment or decrement slide index
    if (arrow.className === "next") {
      slideIndex = (slideIndex + 1) % slideList.length;
    } else {
      slideIndex = (slideIndex + slideList.length - 1) % slideList.length;
    }
    changeSlide(slideIndex);
  };

  /* Called when a dot is clicked */
  const dotClickHandler = (event: React.MouseEvent<HTMLElement>, index: number) => {
    // Only call on dot element
    event.stopPropagation();
    
    // Change slide index
    slideIndex = index;
    changeSlide(slideIndex);
  };

  /* Does the work of updating the current slide to a new index */
  const changeSlide = (index: number) => {
    var i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    // Bounds safety check
    if (index >= slides.length) { index = 0; }    
    if (index < 0) { index = slides.length-1; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";  
    }
    
    // Reset all the dots
    for (i = 0; i < dots.length; i++) {
      const dot = dots[i] as HTMLElement;
      dot.className = dot.className.replace(" active", "");
    }
    
    // Show new slide and change active dot
    const slide = slides[index] as HTMLElement;
    slide.style.display = "block";  
    dots[index].className += " active";
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
      slideList.map(({slideView, imageSrc, labelText}, index, arr) => (
        <div className="slide" style={{backgroundImage: 'url('+imageSrc+')'}}>
          <div className="numbertext">{index+1} / {arr.length}</div>
          <div className="labelText">{labelText}</div>
          {/*<img className='bg-image' src={imageSrc} />*/}
          
          {slideView}
        </div>
      ))
      }

      <a className="prev" onClick={arrowClickHandler}>&lt;</a>
      <a className="next" onClick={arrowClickHandler}>&gt;</a>

      <div className='dotContainer'>
        {
          /* Create a dot for each slide */
          slideList.map((slide, idx) => (
            <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,idx)}></span> 
          ))
        }
      </div>
    </div>
  );
};