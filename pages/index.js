import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react'

import { baseUrl, fetchAPI } from '../utilities/fetchAPI';
import Property from '../components/Property'

const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}) => (
  <Flex flexWrap='wrap' 
    justifyContent='center' alignItems='center'
    m='10'>
      <Image src={imageUrl} width={500} height={300} alt='banner' />
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium' > {purpose} </Text>
        <Text fontSize='3xl' fontWeight='bold' > {title1} <br /> {title2} </Text>
        <Text color='gray.700' fontSize='lg' py='3' > {desc1} <br /> {desc2} </Text>
        <Link href={linkName} passHref> 
          <Button fontSize='xl' cursor='pointer'>
            {buttonText}
          </Button>
        </Link>
        {/* <Button fontSize='xl'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button> */}
      </Box>
    </Flex>

)

export default function Home({ propertiesForRent, propertiesForSale }) {
  // console.log(propertiesForRent, propertiesForSale)
  return (
    <Box>
      <Banner purpose='RENT A HOME'
        title1='Rental Properties for'
        title2='Everyone'
        desc1='Explore Apartments, Homes'
        desc2='and more'
        buttonText='Browse Rentals'
        linkName='/search?purpose=for-rent'
        imageUrl='https://images.unsplash.com/photo-1541123603104-512919d6a96c?%26auto=format%26fit=crop%26w=1170%26q=80'
      />
      <Flex flexWrap='wrap' >
        {propertiesForRent.map((property) =>  <Property property={property} key={property.id} /> )}
      </Flex>
      <Banner purpose='BUY A HOME'
        title1='Buy and Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Homes'
        desc2='and more'
        buttonText='Browse Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://images.unsplash.com/photo-1503174971373-b1f69850bded?%26auto=format%26fit=crop%26w=1213%26q=80'
      />
      <Flex flexWrap='wrap' >
      {propertiesForSale.map((property) =>  <Property property={property} key={property.id} /> )}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForRent = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  const propertyForSale = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    },
  };
}