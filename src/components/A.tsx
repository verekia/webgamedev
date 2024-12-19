const A = ({ children, className = '', isExternal = true, ...props }) => (
  <a
    {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
    className={`_text-primary-600 _underline _decoration-from-font [text-underline-position:under] ${
      className ?? ''
    }`}
    {...props}
  >
    {children}
  </a>
)

export default A
