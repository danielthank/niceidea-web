function NumberInput({ value, init, min, max, onChange, ...props }) {
  return (
    <input
      {...props}
      value={value}
      className="focus:border-black focus:ring-1 focus:ring-black focus:outline-none w-full text-black border border-gray-200 p-2"
      onChange={(e) => {
        let newNumber = Number(e.target.value);
        if (isNaN(newNumber)) newNumber = init;
        else if (newNumber < min) newNumber = min;
        else if (newNumber > max) newNumber = max;
        onChange(newNumber)
      }}
    />
  )
}

export default NumberInput;
