import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

export default function colorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  )
}