import React from 'react';
import { Flex, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import HeaderBtns from './HeaderBtns/HeaderBtns';

type HeaderInputProps = {
    //user;
}

const Header:React.FC<HeaderInputProps> = () => {
    
    return (
        <Flex bg='white' height='44px' padding='6px 12px'>
            <Flex align='center'>
                <Image src='/images/redditFace.svg' height='30px' />
                <Image 
                    src='/images/redditText.svg' 
                    height='46px' 
                    display={{ base: 'none', md:'unset' }} 
                />
            </Flex>
            <Flex grow={1} mr={2} align='center'>
                <InputGroup>
                    <InputLeftElement 
                     pointerEvents='none'
                     children={<SearchIcon color='gray.300' mb={1}/>}
                    />
                    <Input 
                        placeholder='Search Reddit' 
                        fontSize='10pt' 
                        _placeholder={{ color: 'grey.500'}}
                        _hover={{
                            bg: 'white',
                            border: '1px solid',
                            borderColor: 'blue.500',
                        }}
                        _focus={{
                            border: '1px solid',
                            borderColor: 'blue.500',
                            outline: 'none',
                        }} 
                        height='34px'
                        bg='gray.50'
                    />
                </InputGroup>
                <HeaderBtns />
            </Flex>
        </Flex>
    )
}
export default Header;