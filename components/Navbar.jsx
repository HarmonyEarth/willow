import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Text } from '@chakra-ui/react';
import {FcMenu, FcHome} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey, FiHome} from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='pink.500' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>
                Willow
            </Link>
        </Box>
        <Spacer />
        <Box>
            <a href='https://github.com/HarmonyEarth/willow' p='2' target='_blank' style={{color: 'blue'}} rel='noreferrer'>
                View on GitHub
            </a>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='pink.500' />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}> Home </MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}> Search </MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}> Rent Property </MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FiHome />}> Buy Property </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;