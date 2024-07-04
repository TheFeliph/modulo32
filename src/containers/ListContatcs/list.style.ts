import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px 16px;
  padding: 5px;
  margin-top: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 824px) {
    grid-template-columns: 1fr;
  }
`

const Stack = styled.div`
  display: block;
  padding: 5px;
  margin-top: 16px;
`

export default { Grid, Stack }