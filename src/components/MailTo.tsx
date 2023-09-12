import { useEffect, useState } from 'react'

const MailTo = ({ email, fakeEmail, ...props }: { email: string; fakeEmail: string }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <a
      className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
      href={`mailto:${hasMounted ? email : fakeEmail}`}
      {...props}
    >
      {hasMounted ? email : fakeEmail}
    </a>
  )
}

export default MailTo
