import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const S_Container = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 8rem auto;
    padding: ${theme.spacings.xlarge};
  `}
`
