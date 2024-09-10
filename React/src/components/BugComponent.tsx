// <===================== component that create the bug =================>

const BugComponent = () => {
  const somethingswrong = true;

  if (somethingswrong) {
    throw new Error("new error found");
  }
  return <div>no bug found</div>;
};

export default BugComponent;
