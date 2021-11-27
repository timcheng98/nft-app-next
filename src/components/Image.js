import React from 'react';
import Image from 'next/image';

const defaultLoader = ({ src, width, quality }) => {
	return `${process.env.NEXT_PUBLIC_STATICE_SERVER_URL}/${src}?w=${width}&q=${quality || 50}`;
};

const externalLoader = ({ src, width, quality }) => {
	return `https://api.squatpanda.online/api/creature/images/${src}?w=${width}&q=${
		quality || 50
	}`;
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
