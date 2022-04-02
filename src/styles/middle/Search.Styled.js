import tw from 'twin.macro';
import styled from 'styled-components';

export const InputContainer = styled.input`
::placeholder {
    color: #ffffff;
    text-align: center;
}
&:focus {
    transition: 0.5s all ease-out;
    background-color: white;
    border-none
}

background-color: rgba(180, 176, 167, 0.596);

${tw`
    my-4
    py-1
    inline-flex
    self-center    
    w-3/5
    rounded
    border-none
    text-center
`}
`;
