import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"
import { MdPhoneIphone, MdOutlineCastConnected } from "react-icons/md"
import { SiNintendo, SiSega, SiAtari, SiCommodore } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface Props {
  platforms: Platform[]
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
    atari: SiAtari,
    ["commodore-amiga"]: SiCommodore,
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  )
}
