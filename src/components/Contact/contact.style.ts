import styled, { DefaultTheme } from 'styled-components'
import { Button, Entry } from '../../styles/global'

type CardProp = {
  edit_status: string
  theme: DefaultTheme
}

function hasBorder({ edit_status: editStatus, theme }: CardProp) {
  if (editStatus === 'true') return `2px solid ${theme.backgroundEditing}`
  else return 'none'
}

export const CardFav = styled.div<CardProp>`
  background-color: ${({ theme }) => theme.backgroundElement};
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border: ${(param) => hasBorder(param)};
  border-radius: 16px;

  h3 {
    font-weight: bold;
  }

  h4:nth-child(2) {
    margin-top: 4px;
  }

  @media (max-width: 824px) {
    // display: block;
    text-align: center;
  }
`

export const Card = styled(CardFav)`
  display: grid;
  align-items: center;
  grid-template-columns: auto 20%;

  label {
    display: flex;
    align-items: center;
    width: 230px;
  }

  h4 {
    width: 210px;
  }
  .tel-field {
    width: 150px;
  }

  div:nth-child(1) {
    // área de informações
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 1120px) {
    display: block;
    padding: 16px 16px 8px;
    // background-color: #333;

    div:nth-child(1) {
      justify-content: space-between;
    }
  }
`

export const Entry2 = styled(Entry)`
  font-size: 14px;
  text-transform: none;
`

export const Field = styled.h3``

export const ActionArea = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;

  button:nth-child(1) {
    margin-right: 8px;
  }
`

export const ActionAreaHz = styled.div`
  display: flex;
  margin-left: 5px;
  // padding: 5px;
  justify-content: space-around;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 1120px) {
    margin: 8px 5px 8px;
    padding-top: 5px;
    justify-content: left;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    button:nth-child(1) {
      margin-right: 8px;
    }
  }
`

export const ButtonCancel = styled(Button)`
  type: 'button';
  background-color: ${({ theme }) => theme.redAlert};
`