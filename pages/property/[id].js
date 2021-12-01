import {Box, Text, Spacer, Image, Flex} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';

import { fetchAPI, baseUrl } from '../../utilities/fetchAPI';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}}) => (
    <Box maxW='1000px' m='auto' p='4'>
        {photos && <ImageScrollbar data={photos} />}
        <Box w='full' p='6'>
            <Flex pt='2' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Box pr='3' color='blue.400'>
                        {isVerified && <GoVerified />}
                    </Box>
                    <Text fontWeight='bold' fontSize='lg'>USD ${ millify(Math.round(price * 0.2723))}{rentFrequency && `/${rentFrequency}`}
                    </Text>
                </Flex>
                <Box>
                    <Image boxSize='100px' objectFit='cover' src={agency?.logo?.url} alt='Agency logo' />
                </Box>
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='pink.500' >
                {rooms} <FaBed /> | {baths} <FaBath /> | {millify(Math.round(area * 10))} sq. ft. <BsGridFill />
            </Flex>
            <Box mt='2'>
                <Text fontSize='lg' mb='2' fontWeight='semibold'>
                    {title}
                </Text>
                <Text lineHeight='2'>
                    {description}
                </Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                <Flex justifyContent='space-between' w='400px' borderBottom='1ox' borderColor='gray.100' p='3'>
                    <Text>Type</Text>
                    <Text fontWeight='semibold'>{type}</Text>    
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1ox' borderColor='gray.100' p='3'>
                    <Text>Purpose</Text>
                    <Text fontWeight='semibold'>{purpose}</Text>    
                </Flex>
                {furnishingStatus && (
                    <Flex justifyContent='space-between' w='400px' borderBottom='1ox' borderColor='gray.100' p='3'>
                    <Text>Furnishing Status</Text>
                    <Text fontWeight='semibold'>{furnishingStatus}</Text>    
                    </Flex>)}
            </Flex>
            <Box>
                {amenities.length && (<Text fontSize='2xl' fontWeight='semibold' mt='5'>Amenities:</Text>)}
                <Flex flexWrap='wrap'>
                {amenities?.map((item) => (
                    item?.amenities?.map((amenity) => (
                    <Text key={amenity.text} fontWeight='bold' color='pink.500' fontSize='l' p='2' bg='gray.50' m='1' borderRadius='5'>
                        {amenity.text}
                     </Text>
                    ))
                ))}
        </Flex>
            </Box>
        </Box>
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({params : {id}}) {
    const data = await fetchAPI(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props:{
            propertyDetails: data
        }
    }
}