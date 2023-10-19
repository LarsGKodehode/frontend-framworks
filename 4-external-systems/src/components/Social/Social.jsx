import { FaGithub as IconGitHub, FaLinkedin as IconLinkedIn, FaTwitter as IconTwitter } from 'react-icons/fa'
const IconMap = {
  github: <IconGitHub size={40} />,
  linkedin: <IconLinkedIn size={40} />,
  twitter: <IconTwitter size={40} />,
}


export function Social(properties) {
  const { platform, userName } = properties
  IconTwitter
  return (
    <a href={`www.${platform}.com/${userName}`}>{IconMap[platform] ? IconMap[platform] : platform}</a>
  )
}
