import { Image } from "@chakra-ui/react"

const RenderImage = ({ url }) => {
    return (
        <Image
            src={getImageUrl(url)}
            alt="Header Icon"
            boxSize="100px"
            objectFit="cover"
        />
    )
}

function getImageUrl(url) {
    console.log(url)
    return '/icon/' + url + '.jpg'
}

export default RenderImage;