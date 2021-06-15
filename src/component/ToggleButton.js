function ToggleButton({ selected, onToggle, children, ...props }) {
  return (
    <button
      {...props}
      className={selected ?
        "flex items-center justify-center p-2 border bg-black text-white" :
        "flex items-center justify-center p-2 border border-gray-200"}
      onClick={() => onToggle()}
    >
      {children}
    </button>
  )
}

export default ToggleButton
