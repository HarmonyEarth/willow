import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/house.jpg'

const Property = ({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref >
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='House' />
            </Box>
            <Box w='full'>
                <Flex pt='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box pr='3' color='blue.400'>
                            {isVerified && <GoVerified />}
                        </Box>
                        <Text fontWeight='bold' fontSize='lg'>USD ${ millify(Math.round(price * 0.2723))}{rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    
                    <Box>
                        <Avatar size='sm' width='full' src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='pink.500' >
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(Math.round(area * 10))} sq. ft. <BsGridFill />
                </Flex>
                <Text fontSize='lg'>
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;
