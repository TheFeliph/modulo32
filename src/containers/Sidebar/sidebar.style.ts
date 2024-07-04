import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 100vh;
  padding: 8px;
`

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  padding-top: 16px;

  div:nth-child(5) {
    grid-column: 1 / span 2;
  }
`

export const ButtonNavigate = styled(Link)`
  display: flex;
  margin: 16px auto;
  height: 64px;
  width: 128px;
  color: #fff;
  background-color: ${({ theme }) => theme.btnNormal};
  font-size: 40px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`