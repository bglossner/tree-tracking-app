import './Slideshow.scss';

/* Slideshow modified from https://www.w3schools.com/howto/howto_js_slideshow.asp */

export const Slideshow = () => {
  const slideCount: number = 4;
  var slideIndex: number = 0;

  // Called when an arrow is clicked
  const arrowClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    // Only call on arrow element
    event.stopPropagation();
    // Get element
    const arrow = event.currentTarget;

    // Change slide
    if (arrow.className == "next") {
      slideIndex = (slideIndex + 1) % slideCount;
    } else {
      slideIndex = (slideIndex + slideCount - 1) % slideCount;
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
  }

  return (
    <div className='slideshow'>

      <div className="slide fade">
        <div className="numbertext">1 / 4</div>
        <img src="calpoly-logo.png"/>
        <div className="text">Caption Text</div>
      </div>

      <div className="slide fade">
        <div className="numbertext">2 / 4</div>
        <img src="calpoly-logo.png"/>
        <div className="text">Caption Two</div>
      </div>

      <div className="slide fade">
        <div className="numbertext">3 / 4</div>
        <img src="calpoly-logo.png"/>
        <div className="text">Caption Three</div>
      </div>

      <div className="slide fade">
        <div className="numbertext">4 / 4</div>
        <img src="calpoly-logo.png"/>
        <div className="text">Caption Four</div>
      </div>

      <a className="prev" onClick={arrowClickHandler}>&lsaquo;</a>
      <a className="next" onClick={arrowClickHandler}>&rsaquo;</a>

      <div className='dotContainer'>
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,0)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,1)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,2)}></span> 
        <span className="dot" onClick={(event: React.MouseEvent<HTMLElement>) => dotClickHandler(event,3)}></span> 
      </div>
    </div>
  );
};