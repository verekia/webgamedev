import { useEffect, useState } from 'react'

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const fn = async () => {
      // fetch from https://sponsors.trnck.dev/sponsors/verekia
      // and display the sponsors

      const res = await fetch('https://sponsors.trnck.dev/sponsors/verekia')
      const data = await res.json()
      setSponsors(data.sponsors)
    }
    fn()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        margin: '16px auto',
        minHeight: 48,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {sponsors.map(s => (
        <a href={s.profile} key={s.handle} target="_blank" rel="noopener">
          <img
            src={s.avatar}
            alt={s.handle}
            title={s.handle}
            style={{ borderRadius: 999, height: 48, margin: 2 }}
          />
        </a>
      ))}
    </div>
  )
}

export default Sponsors
