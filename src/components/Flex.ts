import styled from 'styled-components';

type FlexPropsType = {
    align?: string
    justify?: string
    gap?: number
}
export const Flex = styled.div<FlexPropsType> `
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};
  gap: ${props => props.gap || 0 }rem;
`