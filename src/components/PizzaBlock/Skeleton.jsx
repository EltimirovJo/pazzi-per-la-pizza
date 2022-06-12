import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="125" r="125" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="70" />
    <rect x="0" y="411" rx="10" ry="10" width="95" height="23" />
    <rect x="139" y="404" rx="25" ry="25" width="141" height="38" />
  </ContentLoader>
)

export default Skeleton