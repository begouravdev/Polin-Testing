import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="relative overflow-hidden">
      <Link to={`/products/${product?.id}`}>
        <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none lg:h-80 h-96 border border-gray-700/50 ">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110 duration-500 ease-out transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-400/70 via-gray-400/40 to-gray-400/20 rounded-md transition-transform ease-out duration-500 group-hover:translate-y-0 translate-y-[-100%]" />
        </div>
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-foreground">
            <Link to={`/products/${product?.id}`}>
              <span aria-hidden="true" className="inset-0">
                {product?.name}
              </span>
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-foreground">
          ${product?.new_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
