function Content({ children }) {
  return (
    <div className="flex-grow overflow-auto px-6">
      {children}
    </div>
  )
}

export default Content
