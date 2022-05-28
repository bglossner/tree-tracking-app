import { useEffect, useState } from "react";
import { getNumberOfTrees } from "../util/common-queries";
import { usePrevious } from "../util/hooks/usePrevious";
import { PostRegistrationView } from "./post-registration-view/PostRegistrationView";
import { ITreeSubmission, TreeTrackingForm } from "./TreeTrackingForm";

// Represents a given state for tree submission
// PageState.LOADING is currently unused
enum PageState {
  NEW_TREE, POST_REGISTRATION, LOADING,
};

// Whether the given tree number is the current number of trees in the DB.
// Defaults to false unless environment variable set
const LOAD_FROM_COUNT = process.env.REACT_APP_LOAD_FROM_COUNT === "true";

/**
 * Component that acts as controller for whether to show the tree submission form
 * or the post registration page
 */
export const TreeRegisterView = () => {
  const [treesSubmitted, setTreesSubmitted] = useState<ITreeSubmission[]>([]);
  const [currentTreeNumber, setCurrentTreeNumber] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.NEW_TREE);

  const prevPage = usePrevious(currentPage);

  const submitAnotherTree = () => {
    setCurrentPage(PageState.NEW_TREE);
  };

  const onTreeSubmitted = (newTree: ITreeSubmission) => {
    setTreesSubmitted([...treesSubmitted, newTree]);
    setCurrentPage(PageState.LOADING);
  };

  useEffect(() => {
    // If the page state is loading and wasn't before, get the tree number 
    if (currentPage === PageState.LOADING && prevPage !== PageState.LOADING) {
      if (LOAD_FROM_COUNT) {
        getNumberOfTrees()
          .then((treeNumber) => {
            setCurrentTreeNumber(treeNumber);
            setCurrentPage(PageState.POST_REGISTRATION);
          });
      } else {
        // Get the last tree number for the last tree submitted
        setCurrentTreeNumber(treesSubmitted[treesSubmitted.length - 1].surveyFeatureSet.features[0].objectId);
        setCurrentPage(PageState.POST_REGISTRATION);
        window.scrollTo(0, 0);
      }
    }
  }, [treesSubmitted, currentPage, prevPage]);

  switch (currentPage) {
    case PageState.POST_REGISTRATION:
      return (
        <PostRegistrationView treeNumber={currentTreeNumber!} submitAnotherTree={submitAnotherTree} />
      );
    // Currently no loading page so just stay on form page
    case PageState.LOADING:
    case PageState.NEW_TREE:
    default:
      return (
        <>
          <TreeTrackingForm onNewTreeSubmission={onTreeSubmitted} />
        </>
      );
  }
};