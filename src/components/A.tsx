const A = ({ children, className = '', isExternal = true, ...props }) => (
  <a
    {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
    className={`nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under] ${
      className ?? ''
    }`}
    {...props}
  >
    {children}
  </a>
)

export default A
