export const NoBulletListStyles = () => (
  <style global jsx>{`
    main ul {
      list-style-type: none !important;
      margin-left: 0 !important;
    }
    main ul img {
      margin-right: 2px;
    }
    @media (max-width: 500px) {
      article main ul {
        margin-left: 0 !important;
      }
    }
  `}</style>
)

export const NewsletterStyles = () => (
  <style global jsx>{`
    main ul {
      line-height: 1.6rem;
    }
  `}</style>
)

export const IconsInTitlesStyles = () => (
  <style global jsx>{`
    main h1 img,
    main h2 img,
    main h3 img,
    main h4 img,
    main h5 img,
    main h6 img {
      position: relative;
      top: -2px;
    }
  `}</style>
)
