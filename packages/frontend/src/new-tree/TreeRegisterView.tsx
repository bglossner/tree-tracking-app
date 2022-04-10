import { PostRegistrationView } from "./post-registration-view/PostRegistrationView";

export const TreeRegisterView = () => {
  const submitAnotherTree = () => {

  };

  return (
    <PostRegistrationView treeNumber={2081} submitAnotherTree={submitAnotherTree} />
  );
};