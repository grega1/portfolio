import * as React from "react"
import styled from "styled-components"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
