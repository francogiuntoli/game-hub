import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"


interface Props{
  onSelectGenre: (genre:Genre) => void;
}

export default function GenreList({onSelectGenre}:Props) {
  const { data, error, loading } = useGenres()

  if (error) return null
  if (loading) return <Spinner/>
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id}>
            <HStack paddingY={1}>
                <Image src={getCroppedImageUrl(d.image_background)} boxSize='32px' borderRadius={8} />
                <Button onClick={()=>onSelectGenre(d)} variant='link' fontSize='lg'>{d.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
  )
}
