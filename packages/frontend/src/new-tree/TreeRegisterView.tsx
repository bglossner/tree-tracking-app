import { useEffect, useState } from "react";
import { getNumberOfTrees } from "../util/common-queries";
import { usePrevious } from "../util/hooks/usePrevious";
import { PostRegistrationView } from "./post-registration-view/PostRegistrationView";
import { ITreeSubmission, TreeTrackingForm } from "./tree-tracking-form";

enum PageState {
  NEW_TREE, POST_REGISTRATION, LOADING,
};

const LOAD_FROM_COUNT = false;

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
    if (currentPage === PageState.LOADING && prevPage !== PageState.LOADING) {
      if (LOAD_FROM_COUNT) {
        getNumberOfTrees()
        .then((treeNumber) => {
          setCurrentTreeNumber(treeNumber);
          setCurrentPage(PageState.POST_REGISTRATION);
        });
      } else {
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