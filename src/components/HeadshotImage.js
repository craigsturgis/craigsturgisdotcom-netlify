import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const HeadshotImage = ({ imageInfo }) => {
  const style = { 
    borderRadius: '5px', 
  }
  const imageStyle = {
    className: 'is-rounded',
  }

  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <figure className="image is-128x128">
        <Img imgStyle={imageStyle} style={style} fluid={image.childImageSharp.fluid} alt={alt} />
      </figure>
    )
  }

  if (!!childImageSharp) {
    return (
      <figure class="image is-128x128">
        <Img imgStyle={imageStyle} style={style} fluid={childImageSharp.fluid} alt={alt} />
      </figure>
    )
  }

  if (!!image && typeof image === 'string')
    return (
      <figure class="image is-128x128">
        <img className='is-rounded' style={style} src={image} alt={alt} />
      </figure>
    )

  return null
}

HeadshotImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default HeadshotImage
