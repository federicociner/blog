import React from "react";

const BlogImage = ({ path, title, alt }) => {
  const captionStyle = {
    fontSize: "smaller",
    fontStyle: "italic",
    textAlign: "center"
  };

  const tinyImage = `${path}?nf_resize=fit&w=200 200w`;
  const smallImage = `${path}?nf_resize=fit&w=400 400w`;
  const mediumImage = `${path}?nf_resize=fit&w=800 800w`;
  const largeImage = `${path}?nf_resize=fit&w=1200 1200w`;
  const hugeImage = `${path}?nf_resize=fit&w=1600 1600w`;

  return (
    <div>
      <picture>
        <source media="(min-width: 1800px)" data-srcset={hugeImage} />
        <source media="(max-width: 1300px)" data-srcset={largeImage} />
        <source media="(max-width: 900px)" data-srcset={mediumImage} />
        <source media="(max-width: 500px)" data-srcset={smallImage} />
        <source media="(max-width: 300px)" data-srcset={tinyImage} />
        <img data-src={path} alt={alt} class="lazyload" />
      </picture>
      <p style={captionStyle}>{title}</p>
    </div>
  );
};

export default BlogImage;
