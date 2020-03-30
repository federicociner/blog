import React from "react";

const BlogImage = ({ path, title, alt }) => {
  const captionStyle = {
    fontSize: "smaller",
    fontStyle: "italic",
    textAlign: "center"
  };

  const tinyImage = `${path}?nf_resize=fit&w=100`;
  const smallImage = `${path}?nf_resize=fit&w=450`;
  const mediumImage = `${path}?nf_resize=fit&w=750`;
  const largeImage = `${path}?nf_resize=fit&w=900`;

  return (
    <div>
      <picture>
        <source media="(min-width: 1200px)" data-srcset={largeImage} />
        <source media="(max-width: 900px)" data-srcset={mediumImage} />
        <source media="(max-width: 600px)" data-srcset={smallImage} />
        <source media="(max-width: 200px)" data-srcset={tinyImage} />
        <img data-src={path} alt={alt} class="lazyload" />
      </picture>
      <p style={captionStyle}>{title}</p>
    </div>
  );
};

export default BlogImage;
