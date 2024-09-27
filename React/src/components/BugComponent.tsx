// <===================== component that create the bug =================>

const BugComponent = () => {
  const flag = true;
  if (flag) {
    throw new Error("error found");
  }
  return (
    <div>
      <p>No bugs found</p>
    </div>
  );
};

export default BugComponent;
