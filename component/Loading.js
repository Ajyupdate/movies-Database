import * as React from "react";
import { ThreeDots } from "react-loader-spinner";



export default function Loading() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				position: "fixed",
				inset: 0,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<ThreeDots color="#5147CD" height="100" width="100" />
		</div>
	);
}
