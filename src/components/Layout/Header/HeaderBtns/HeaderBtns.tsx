import React from 'react';
import { Flex } from '@chakra-ui/react';
import AuthButtons from './AuthButtons';
import AuthModal from '../../Modal/Auth/AuthModal';

type HeaderBtnsProps = {
    // user: any;
};

const HeaderBtns:React.FC<HeaderBtnsProps> = () => {
    
    return (
        <>
            <AuthModal />
            <Flex justify='center' align='center'>
                <AuthButtons />
            </Flex>
        </>
    )
}
export default HeaderBtns;