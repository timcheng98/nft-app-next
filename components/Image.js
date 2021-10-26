import React from 'react';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
	return `https://wallstreetbets-nft.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = ({
	layout = 'responsive',
	alt = 'icon',
	src = '',
	width = '100%',
	height = '100%',
	className = '',
}) => {
	return (
		<Image
			draggable={false}
			loader={myLoader}
			layout={layout}
			alt={alt}
			src={src}
			width={width}
			height={height}
			className={className}
		/>
	);
};

export default MyImage;
