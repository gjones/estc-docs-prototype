import React, { Fragment, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components'

import SuggestionSelect from './suggestion_select'

import {
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHideFor,
  EuiText,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui'

export default function SearchBarArea(props: any) {
  const { placeholder, spacerSize, subtitle } = props
  const [isClearable] = useState(true)
  const [value] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(true)
  const headerRef = useRef()
  const router = useRouter()
  let subTitle

  useEffect(() => {
    const header = headerRef.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1)
      },
      { threshold: [1] },
    )

    if (header) {
      observer.observe(header)
    }

    // unmount
    return () => {
      observer.unobserve(header)
    }
  }, [headerRef])

  const sendUser = () => {
    router.push('/docs/?' + value)
  }

  if (subtitle) {
    subTitle = (
      <Fragment>
        <EuiSpacer size='s' />
        <EuiFlexItem>
          <EuiText>
            <Subtitle>
              Need help? Here you’ll find complete coverage of Elasticsearch,
              Kibana, and more.
            </Subtitle>
          </EuiText>
        </EuiFlexItem>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <SearchBarSection>
        <GreenCircleImage src='https://gareth-misc.s3.amazonaws.com/abstract/header-bg-green-circle.svg' />
        <EuiFlexGroup gutterSize='none' direction='column'>
          <EuiFlexItem>
            <EuiSpacer size={spacerSize} />
            <EuiSpacer size='l' />
            <EuiTitle size='l'>
              <MainTitle>Elastic Documentation</MainTitle>
            </EuiTitle>
          </EuiFlexItem>
          {subTitle}
          <EuiSpacer size='xl' />
          <EuiHideFor sizes={['xs', 's']}>
            <EuiSpacer size={spacerSize} />
          </EuiHideFor>
          <EuiFlexItem>
            <EuiFlexGroup gutterSize='none' justifyContent='center'>
              <EuiFlexItem></EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <SuggestionSelect isOpen={isOpen} />
        <BlueCircleImage src='https://gareth-misc.s3.amazonaws.com/abstract/header-bg-blue-circle.svg' />
        <PinkCircleImage src='https://gareth-misc.s3.amazonaws.com/abstract/header-bg-pink-circle.svg' />
      </SearchBarSection>

      <MainSearch
        className={isSticky ? 'isSticky' : 'isNotSticky'}
        ref={headerRef}>
        <EuiFieldSearch
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          value={value}
          //onChange={(e) => onChange(e)}
          isClearable={isClearable}
          onSearch={sendUser}
        />
      </MainSearch>
    </Fragment>
  )
}

SearchBarArea.defaultProps = {
  placeholder: 'Search this',
  subtitle: true,
  spacerSize: 'xxl',
}

const SearchBarSection = styled.section`
  margin-top: 6.5rem;
  background-color: #0076cb;
  box-shadow: inset 0px -2px 2px rgba(200, 200, 200, 0.2);

  @media only screen and ${(props) => props.theme.mediaQueries.mediumScreens} {
    background-size: auto 100%;
    height: 14.5rem;
  }

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    background-size: auto 100%;
    height: 18.5rem;
  }
`

const MainTitle = styled.h1`
  text-align: center;
  font-size: ${(props: any) => props.theme.fontSizes.textLargest};
  color: ${(props: any) => props.theme.header.text};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    font-size: ${(props: any) => props.theme.fontSizes.textLarger};
  }
`

const Subtitle = styled.p`
    text-align: center;
    color: ${(props: any) => props.theme.header.text}};

    @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
      padding: 0 ${(props) => props.theme.sizes.sizeL};
    }
  `

const MainSearch = styled.header`
  margin-top: -3rem;
  position: sticky;
  top: -1px;
  z-index: 1000;

  .euiFormControlLayout {
    max-width: 50rem;
    margin: 0 auto;

    @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
      max-width: 85%;
    }
  }

  input {
    width: 100%;
    max-width: 50rem;
    height: 4rem;
    margin-top: 0.875rem;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
    transition: none;
  }

  svg {
    margin-top: 1rem;
  }
`

const PinkSlide = keyframes`
  0% { top: 5%; right: 5%;}
  100% { top: 5.2%; right: 5.4%;}
`

const PinkCircleImage = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  transition: transform 1s ease-in-out 0s;
  animation-duration: 4s;
  animation-delay: 4.5s;
  animation-name: ${PinkSlide};
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const BlueCircleImage = styled.img`
  position: absolute;
  top: 15%;
  right: 15%;
`

const GreenCircleImage = styled.img`
  position: absolute;
  top: 5.6rem;
  left: 0%;
`
