import styled from 'styled-components'
import { Querier } from '../../styles/global'

export const Form = styled.form`
  max-width: 520px;
  width: 100%;
  margin: 32px 0;
  font-weight: bold;
  font-size: 18px;
`

export const Name = styled(Querier)`
  text-transform: capitalize;
`

export const Email = styled(Querier)`
  margin: 16px 0;
`

export const Options = styled.div`
  margin: 16px 0;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 5px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`