import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

export default function GenreList() {
  const { data, error, loading } = useGenres()

  if (error) return null
  if (loading) return <Spinner/>
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id}>
            <HStack paddingY={1}>
                <Image src={getCroppedImageUrl(d.image_background)} boxSize='32px' borderRadius={8} />
                <Text fontSize='lg'>{d.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  )
}
