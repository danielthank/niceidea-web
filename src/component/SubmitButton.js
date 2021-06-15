function SubmitButton({ onClick, children }) {
  return (
    <button
      className="w-full flex items-center justify-center bg-purple-700 text-white text-2xl p-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SubmitButton;
