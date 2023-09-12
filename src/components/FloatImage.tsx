export const FloatRightImage = ({
  src,
  alt,
  height,
  width,
  style,
}: {
  src: string
  alt: string
  height: number
  width: number
  style?: any
}) => (
  <img
    className="float-img"
    style={{
      float: 'right',
      height,
      width,
      borderRadius: 4,
      marginLeft: 24,
      marginTop: 24,
      marginBottom: 24,
      ...style,
    }}
    src={src}
    alt={alt}
  />
)

export const FloatLeftImage = ({
  src,
  alt,
  height,
  width,
  style,
}: {
  src: string
  alt: string
  height: number
  width: number
  style?: any
}) => (
  <img
    className="float-img"
    style={{
      float: 'left',
      height,
      width,
      borderRadius: 4,
      marginRight: 24,
      marginTop: 24,
      marginBottom: 24,
      ...style,
    }}
    src={src}
    alt={alt}
  />
)
