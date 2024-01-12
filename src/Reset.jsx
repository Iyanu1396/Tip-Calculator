function Reset({ setBillInput, setServiceInput, setFriendInput }) {
  return (
    <div>
      <button
        onClick={() => {
          setBillInput(0);
          setServiceInput(0);
          setFriendInput(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
