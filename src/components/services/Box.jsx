import React from "react";

export const Box = ({ imgSrc, imgAlt, title, isNew }) => {
	return (
		<div className="box">
			<img src={imgSrc} alt={imgAlt} />
			{isNew ? <span className="new"></span> : null}
			<div>
				<p>{title}</p>
			</div>
		</div>
	);
};
