import "./PlantPage.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

/* Interface for data in an accordion */
interface IAccordionData {
  label: string;
  content: JSX.Element;
}

/* Interface for a section of accordions */
interface IAccordionSection {
  heading: string;
  items: IAccordionData[];
}

/* Helper function for converting strings to paragraph elements */
const stringToElement = (string: string) => <p>{string}</p>;

/* List of all accordion sections, and their contents */
const accordionList: IAccordionSection[] = [
  {
    heading: "Getting Started",
    items: [
      {
        label: "Why should I plant or help care for a tree?",
        content: (
          <div>
            <p>
              "Urban forests are a form of “green infrastructure” that provide
              or contribute to numerous environmental and social benefits
              including air pollution removal, reduction of flooding and soil
              erosion, noise reduction, wind protection, reduced energy use
              via shading and cooling, wildlife habitat, carbon storage,
              beautification, walkability, increased contentment and social
              interaction, crime reduction, and increased property values and
              retail business traffic. In addition, park and open space areas
              that host urban trees often provide opportunities for public
              recreation, and individual trees often have historic or other
              significant cultural value.
            </p>
            <p>
              In the face of increasing human population and global climate
              change, these benefits are now more important than ever before.
              Yet despite ever-growing recognition of these advantages, the
              United States is losing more and more urban tree cover with each
              passing year, estimated at roughly 36 million trees lost
              annually (Nowak and Greenfield, 2018). Planting and caring for
              a tree is a rich and rewarded experience. Not only do you get to
              see the tree grow and change over time, but you are giving a
              gift to future generations who will benefit from that tree.
            </p>
            <p>
              Read more about the benefits of trees{" "}
              <a href="https://canopy.org/tree-info/benefits-of-trees/">
                here
              </a>
              !
            </p>
          </div>
        ),
      },
      {
        label: "How do I plant my tree?",
        content: (
          <p>
            See this great guide:{" "}
            <a href="https://canopy.org/tree-info/planting-trees/">
              https://canopy.org/tree-info/planting-trees/
            </a>
          </p>
        ),
      },
      {
        label: "What kind of tree should I plant?",
        content: (
          <p>
            You can plant any kind of tree. To select the species that best
            matches your site and desires, visit{" "}
            <a href="https://selectree.calpoly.edu">SelecTree</a>. Rarely,
            some trees become weedy and reproduce on their own and we don’t
            recommend that you plant one of these trees. SelecTree will tell
            you if your tree is weedy.
          </p>
        ),
      },
      {
        label:
          "What if I plant a fruit tree and after a few years it’s making so much fruit that I can’t keep up with it, and the fallen fruit is creating a mess? Can I donate the fruit to someone?",
        content: (
          <p>
            Yes, register your fruit tree with{" "}
            <a href="http://www.gleanslo.org/site_registration.php">
              Glean Slo
            </a>{" "}
            and they will harvest and donate your fruit!
          </p>
        ),
      },
      {
        label:
          "How does water conservation relate to this program, given that we are perpetually in drought and always being asked to conserve water?",
        content: (
          <p>
            We encourage you to plant drought tolerant trees that can survive
            through dry hot weather. Planting very water demanding trees is
            great for some situations, but not for most street trees. Drought
            tolerant trees can be searched on{" "}
            <a href="https://selectree.calpoly.edu">SelecTree</a>.
          </p>
        ),
      },
    ],
  },
  {
    heading: "City of San Luis Obispo Policy",
    items: [
      {
        label: "Is the City giving away trees for free?",
        content: stringToElement(
          "Currently, there are no free tree give aways but you can puy a tree at any of our local nurseries.  Once you have the tree, read the How to Plant a tree link, plant your tree, and then register your tree."
        ),
      },
      {
        label:
          "Does the city supply assistance in planting/caring for these trees?",
        content: (
          <p>
            To have a healthy urban forest, we need everyone to pitch in. A
            newly planted tree should get 5 gallons of water once a week. A
            year worth of water will cost you less than $10. Part of being
            part of the solution is watering your tree each week. For more
            info on tree care, click{" "}
            <a href="https://canopy.org/tree-info/caring-for-trees/">here</a>.
          </p>
        ),
      },
      {
        label:
          "Will someone from the City be checking on my tree(s) periodically to make sure it/they are healthy?",
        content: stringToElement(
          "If you plant your trees on your property, such as in your front or back yard, they are your responsibility.  The City is trying to grow it’s tree crew to better care for street trees in the City’s sidewalk easement.  But with 20,000 trees and only two current staff, most trees will need your caring help to get them through their early life."
        ),
      },
      {
        label:
          "What if, for whatever reason, I want to remove my tree(s)? Will the City prevent me from doing that, or charge me/fine me if I do?",
        content: (
          <p>
            The City does have a tree removal ordinance. More info about it
            can be found{" "}
            <a href="https://www.slocity.org/living/natural-resources/trees-and-urban-forestry">
              here
            </a>
            .
          </p>
        ),
      },
    ],
  },
];

interface IFAQAccordionMap {
  [key: string]: boolean;
}

const calcInitialAccordionMap = (): IFAQAccordionMap => {
  // Make a working copy of the map
  const newMap: IFAQAccordionMap = {};
  // Set all to closed
  accordionList.forEach(({ heading, items }) => {
    items.forEach((_item, index) => {
      newMap[`${heading}${index}`] =  false;
    });
  });

  return newMap;
};

export const PlantPage = () => {
  /* Hook for expanding FAQ accordions */
  const [accordionMap, setAccordionMap] = React.useState(calcInitialAccordionMap);

  /* Change the expanded value of an accordion. The label is made from the 
     accordion section heading + the index of the accordion element. */
  const handleChange =
    (label: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setAccordionMap({
        ...accordionMap,
        [label]: isExpanded,
      });
    };

  /* Helper function that returns true is any accordion menu in the
     given map is closed. */
  const anyAccordionClosed = (map: IFAQAccordionMap) => {
    return Object.values(map).some(v => !v);
  };

  /* When the expand/close button is pressed, if all accordions are open, then
     close them all. Otherwise, open all the accordions. Should only be called
     after map is initialized. */
  const handleExpandButton = () => (event: React.SyntheticEvent) => {
    const anyClosed = anyAccordionClosed(accordionMap);

    const accordionMapClone = {...accordionMap};

    // Expand or close all entries in the map
    Object.entries(accordionMap).forEach(([key]) => {
      accordionMapClone[key] = anyClosed;
    });

    // Update map
    setAccordionMap(accordionMapClone);
  };

  /* Assemble page */
  return (
    <div className="plant-tree">
      <p>
        Never planted a tree before? No worries! We have all the resources for
        you to get started.
      </p>
      <button type="button" onClick={handleExpandButton()}>
        <p>{anyAccordionClosed(accordionMap) ? "Expand" : "Close"} All</p>
      </button>
      <div className="accordion-container">
        {
          /* Create accordion menus from list */
          accordionList.map(({ heading, items }) => (
            <div className="accordion-section">
              {/* Add section heading */}
              <h2>{heading}</h2>

              {/* List out accordion menus */}
              {items.map(({ label, content }, index) => (
                <div className="accordion-menu">
                  <Accordion
                    expanded={!!accordionMap[`${heading}${index}`]}
                    onChange={handleChange(heading + index)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={"panel" + index + "-content"}
                      id={"panel" + index + "-header"}
                      className="accordion-label"
                    >
                      <Typography>{label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="accordion-content">
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

      <p>
        Still curious? Click <a href="https://www.arborday.org/">here</a> to
        learn more about tree planting!
      </p>
    </div>
  );
};
