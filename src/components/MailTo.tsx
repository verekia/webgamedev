import { useEffect, useState } from 'react'

const MailTo = ({ email, fakeEmail, ...props }: { email: string; fakeEmail: string }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <a
      className="_text-primary-600 _underline _decoration-from-font [text-underline-position:under]"
      href={`mailto:${hasMounted ? email : fakeEmail}`}
      {...props}
    >
      {hasMounted ? email : fakeEmail}
    </a>
  )
}

export default MailTo
