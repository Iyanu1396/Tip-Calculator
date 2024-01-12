function Form({
  billInput,
  setBillInput,
  serviceInput,
  setServiceInput,
  setFriendInput,
  friendInput,
}) {
  return (
    <div className="form">
      <div className="bill-input">
        <label htmlFor="bill-input">How much was the bill</label>
        <input
          value={billInput}
          id="bill-input"
          type="text"
          onChange={(e) => setBillInput(+e.target.value)}
        />
      </div>

      <div className="service-rating">
        <label htmlFor="service-rating">How did you like the service</label>
        <select
          value={serviceInput}
          name=""
          id="service-rating"
          onChange={(e) => setServiceInput(+e.target.value)}
        >
          {" "}
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div className="friend's-rating">
        <label htmlFor="friend's-rating">
          How did your friend like the service
        </label>
        <select
          value={friendInput}
          onChange={(e) => setFriendInput(+e.target.value)}
          name=""
          id="friend's-rating"
        >
          {" "}
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
