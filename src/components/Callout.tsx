const Callout = ({ children, ...props }) => (
  <aside {...props} className={`full-width-mobile callout ${props.className ?? ''}`}>
    {children}
  </aside>
)

export default Callout
