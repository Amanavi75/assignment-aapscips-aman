import React from 'react'

const SingleCard = ({
    image,
    CardDescription,
    CardTitle,
    titleHref,
  }) => {
    return (
      <>
        {/*  */}
        <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={titleHref ? titleHref : "/#"}
                className="product-text"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="decription">
              {CardDescription}
            </p>
          </div>
        </div>
        {/*  */}
      </>
    );
  };

export default SingleCard