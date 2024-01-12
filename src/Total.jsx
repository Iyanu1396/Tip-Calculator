function Total({ billInput, serviceInput, friendInput }) {
  const average = (serviceInput + friendInput) / 2;
  const tip = billInput + average;

  return billInput > 0 ? (
    <div>
      <h1>
        You pay ${tip} (${billInput} + ${average} tip)
      </h1>
    </div>
  ) : (
    <></>
  );
}

export default Total;
