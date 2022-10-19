import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="265" rx="10" ry="10" width="280" height="27"/>
        <circle cx="137" cy="125" r="125"/>
        <rect x="0" y="425" rx="10" ry="10" width="90" height="27"/>
        <rect x="129" y="419" rx="25" ry="25" width="152" height="45"/>
        <rect x="0" y="315" rx="10" ry="10" width="280" height="88"/>
    </ContentLoader>
)

export default Skeleton

