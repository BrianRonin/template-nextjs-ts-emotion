import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { S_Container } from './S.container'

export default {
  title:
    'components/Only styles/Containers/Container_0',
} as Meta

const _S_Container = styled.div`
  ${({ theme }) => css`
    ${S_Container};
    border: solid 4px ${theme.colors.bg[4]};
    text-align: center;
  `}
`

export const Template: Story = () => (
  <_S_Container>
    <h1>conteudo</h1>
  </_S_Container>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'dark',
  },
}
