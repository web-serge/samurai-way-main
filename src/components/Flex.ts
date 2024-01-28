import styled from 'styled-components';

type FlexPropsType = {
    align?: string
    justify?: string
    gap?: number
    wrap?: string
    direction?: 'column'
    height?: string
}
export const Flex = styled.div<FlexPropsType> `
  display: flex;
  height: ${props => props.height};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};
  gap: ${props => props.gap || 0 }rem;
  flex-wrap: ${props => props.wrap || 'nowrap'};
`