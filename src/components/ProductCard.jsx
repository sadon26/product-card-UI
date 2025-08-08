import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import classNames from "classnames";

const ProductCard = ({
  product,
  className,
  showDescription = true,
  showPrice = true,
}) => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className={classNames("card text-center", className)} key={product.id}>
      <img
        className="card-img-top p-3 object-fit-contain"
        src={product.image}
        alt={product.title}
        height={300}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
        {showDescription && (
          <p className="card-text">{product.description.substring(0, 90)}...</p>
        )}
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <label className="mr-2 mb-0 text-xs">Select variant</label>
        <select
          name="variants"
          class={classNames("form-select w-auto", {
            "btn-disabled": !product.isAvailable,
          })}
          disabled={!product.isAvailable}
        >
          {product.variants?.map((variant) => (
            <option value={variant}>{variant}</option>
          ))}
        </select>
      </div>
      {showPrice && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">$ {product.price}</li>
        </ul>
      )}
      <div className="card-body">
        {product.isAvailable && (
          <Link to={"/product/" + product.id} className="btn btn-dark m-1">
            Buy Now
          </Link>
        )}
        <button
          className={classNames("btn btn-dark m-1", {
            "btn-disabled": !product.isAvailable,
          })}
          disabled={!product.isAvailable}
          onClick={() => {
            toast.success("Added to cart");
            addProduct(product);
          }}
        >
          {product.isAvailable ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
