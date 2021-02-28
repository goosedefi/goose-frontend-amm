import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 2px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.colors.binance};
  font-weight: 500;
`

export const PinkCard = styled(Card)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`

const BlueCardStyled = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  width: fit-content;
`

export const BlueCard = ({ children, ...rest }: any) => {
  return (
    <BlueCardStyled {...rest}>
      <Text color="#24c7d6">{children}</Text>
    </BlueCardStyled>
  )
}
