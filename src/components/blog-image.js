import React from "react";

const BlogImage = ({ path, title, alt }) => {
  const captionStyle = {
    fontSize: "smaller",
    fontStyle: "italic",
    textAlign: "center"
  };

  const tinyImage = `${path}?nf_resize=fit&w=200`;
  const smallImage = `${path}?nf_resize=fit&w=400`;
  const mediumImage = `${path}?nf_resize=fit&w=800`;
  const largeImage = `${path}?nf_resize=fit&w=1200`;
  const hugeImage = `${path}?nf_resize=fit&w=1600`;

  return (
    <div>
      <picture>
        <source media="(max-width: 300px)" data-srcset={tinyImage} />
        <source media="(max-width: 500px)" data-srcset={smallImage} />
        <source media="(max-width: 900px)" data-srcset={mediumImage} />
        <source media="(max-width: 1300px)" data-srcset={largeImage} />
        <source media="(min-width: 1800px)" data-srcset={hugeImage} />
        <img data-src={path} alt={alt} className="lazyload" />
      </picture>
      <p style={captionStyle}>{title}</p>
    </div>
  );
};

export default BlogImage;
