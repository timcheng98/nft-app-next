import React from 'react';
import Image from 'next/image';

const defaultLoader = ({ src, width, quality }) => {
	return `https://wallstreetbets-nft.com/${src}?w=${width}&q=${quality || 75}`;
};

const externalLoader = ({ src, width, quality }) => {
	return `https://api.wallstreetbets-nft.com/api/creature/images/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = ({
	layout = 'responsive',
	alt = 'icon',
	src = '',
	width = '100%',
	height = '100%',
	className = '',
	external = false,
}) => {
	return (
		<Image
			draggable={false}
			loader={external ? externalLoader : defaultLoader}
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
