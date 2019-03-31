import React from 'react';
import styled from 'styled-components';

const Image = props => {
  const width =
    typeof props.width === 'number' ? `${props.width}px` : props.width || null;
  const height =
    typeof props.height === 'number'
      ? `${props.height}px`
      : props.height || null;

  const StyledImage = styled.div`
    background-repeat: no-repeat;
    background-size: ${props.cover ? 'cover' : props.backgroundSize};
    background-image: ${props.url ? `url(${props.url})` : 'none'};
    background-position: ${props.backgroundPosition};
    ${props.fit ? 'width: 100%; height: 100%;' : ''} ${
    width !== null ? `width: ${width};` : ''
  } ${height !== null ? `height: ${height};` : ''};
  `;

  return (
    <StyledImage className={`image ${props.className}`}>
      {props.children}
    </StyledImage>
  );
};

export default Image;
