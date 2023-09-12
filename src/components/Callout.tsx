const Callout = ({ children, ...props }) => (
  <aside className="full-width-mobile callout" {...props}>
    {children}
  </aside>
)

export default Callout
