import React from 'react'
import styled from 'styled-components'

import {styles} from '../utils'

const BannerWrapper = styled.div`
    margin-bottom: 3rem;
    text-align: center;

    .title{
        color: ${styles.colors.mainWhite};
        font-size: 3rem;
        text-transform: uppercase;
        ${styles.letterSpacing({spacing: '.75rem'})};
        
    }
    .subtitle{
        color: ${styles.colors.mainWhite};
        ${styles.letterSpacing({spacing: '.15rem'})};
        font-family:'Caveat', cursive;
        font-size: 1.7rem;
        text-transform: capitalize

    }
`

const Banner = ({title, subtitle, children}) => {
  return (
    <BannerWrapper>
        <h1 className="title">{title}</h1>
        <p  className="subtitle">{subtitle}</p>
        {children}
    </BannerWrapper>
  )
}

Banner.defaultProps = {
    title: "Default Title"
}

export default Banner

