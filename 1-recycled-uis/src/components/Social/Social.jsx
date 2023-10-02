export function Social(properties) {
  console.log(properties)
  /** Destructuring of properties is quite common */
  const { platform, userName } = properties

  return (
    <a href={`www.${platform}.com/${userName}`}>{platform}</a>
  )
}
