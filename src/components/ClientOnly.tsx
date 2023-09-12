import { Fragment, useEffect, useState } from 'react'

const ClientOnly = ({ children, ...rest }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <Fragment {...rest}>{children}</Fragment>
}

export default ClientOnly
