export function Social(properties) {
  const { platform, userName } = properties

  return (
    <a href={`www.${platform}.com/${userName}`}>{platform}</a>
  )
}
