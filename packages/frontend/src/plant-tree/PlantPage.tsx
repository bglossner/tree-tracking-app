import './PlantPage.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export const PlantPage = () => {

  let lorem_ipsum = "Lorem ipsum dolor sit amet. Sit quia et facere aut perspiciatis. Eveniet quia minima dignissimos voluptatibus voluptatem itaque. Modi natus excepturi debitis suscipit sed quisquam aspernatur. Numquam ea quia reiciendis. Suscipit dolorum reprehenderit totam sed quia. Rerum rerum doloribus optio. Id fuga explicabo sed ea non consequatur minus. Maxime reprehenderit ea nihil.";

  interface IAccordionData {
    label: string,
    content: string
  };

  interface IAccordionSection {
    heading: string,
    items: IAccordionData[]
  }

  const accordionList: IAccordionSection[] = [
    {
      heading: "Getting Started",
      items: [
        {
          label: "Why should I plant a tree?",
          content: lorem_ipsum
        },
        {
          label: "What kind of tree should I plant?",
          content: lorem_ipsum
        },
        {
          label: "How much work does it take to care for a tree?",
          content: lorem_ipsum
        }
      ]
    },
    {
      heading: "City of San Luis Obispo Policy",
      items: [
        {
          label: "Do I need a permit to plant a tree?",
          content: lorem_ipsum
        },
        {
          label: "Does the city supply assistance in planting/caring for these trees?",
          content: lorem_ipsum
        },
        {
          label: "What do I do if I see damage to the tree, sidewalk, or other potential problems?",
          content: lorem_ipsum
        },
        {
          label: "Am I liable if my tree damages sidewalks, pipes, or private property?",
          content: lorem_ipsum
        }
      ]
    }
  ];

	return (
      <div className="plant-tree">
        <p>Never planted a tree before? No worries! We have all the resources for you to get started.</p>
        
        <div className="accordion-container">
        {
        /* Create accordion menus from list */
        accordionList.map(({heading, items}) => (
          <div className='accordion-section'>
            {/* Add section heading */}
            <h2>{heading}</h2>

            {/* List out accordion menus */}
            {items.map(({label, content}, index) => (
              <div className='accordion-menu'>
                <Accordion>
                  <AccordionSummary
                    //expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel"+index+"-content"}
                    id={"panel"+index+"-header"}
                    className='accordion-label'
                  >
                    <Typography>{label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordion-content'>
                      {content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        ))
        }
        </div>
        
        <p>Still curious? Click <a href="https://www.arborday.org/">here</a> to learn more about tree planting!</p>
      </div>
	);
};