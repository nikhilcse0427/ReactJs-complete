// const ProductCard = ()=>{
//   // const {title, price, rating} = props //destructuring
//   return(
//     <div className="product-card">
//       <Product title="T-Shirt" rating="4.5" price="Rs.120" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYyqFhQdWBOHc8TIjIm3C16TyT9sAcjzwYg&s"/>
//       <Product title="Pant" rating="4.7" price="Rs.140" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK9L91lKWfhCq519aMARav5zlRjz2SlQRdQ&s"/>
//       <Product title="Shirt" rating="4.8" price="Rs.180" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aWRPt3C3shZzZcQ-cuMo7EhTrTZlCGc5lg&s"/>

//       {/* <Product />
//       {Product("Tshirt")} we cancall component like this */}

//     </div>
//   )
// }

// const Product = (props)=>{
// const {title, price, rating} = props //destructuring
//   console.log(props)
//   return(
//     <div className="product-box">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYyqFhQdWBOHc8TIjIm3C16TyT9sAcjzwYg&s"></img>
//       <p style={{fontWeight: "bold"}}>{props.title}</p>
//       <p>Rating: {props.rating}</p>
//       <p>Price: {props/price}</p>
//     </div>
//   )
// }
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HOF } from "./Product";
import Product from "./Product";
import Skelleton from "./Skelleton";
import UserContext from "../utils/UserContext"; // ✅ import

const ProductCard = () => {
  const [prodList, setProdList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { name, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      console.log("useEffect render");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchData = async () => {
    const resultData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await resultData.json();
    setProdList(jsonData);
    setFilteredList(jsonData);
  };

  const HOFComponent = HOF(Product);

  return prodList.length === 0 ? (
    <Skelleton />
  ) : (
    <>
      {/* Search + Filter + Username input */}
      <div className="flex gap-5 ml-8 pt-5">
        {/* Search Bar */}
        <div className="flex">
          <input
            className="border h-10 w-60 rounded-l-sm pl-2"
            placeholder="Search product..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="bg-blue-400 w-20 h-10 rounded-r-sm text-white font-bold"
            onClick={() => {
              const filteredProd = prodList.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredProd);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <button
          className="h-10 px-3 bg-[#2D2D34] text-white font-bold rounded"
          onClick={() => {
            const topRated = prodList.filter(
              (product) => product.rating.rate > 4
            );
            setFilteredList(topRated);
          }}
        >
          Top Rated Product
        </button>

        {/* Username Updater */}
        <input
          type="text"
          placeholder="Change username..."
          className="pl-2 h-10 w-60 border rounded-md"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-5 p-5">
        {filteredList.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="text-black no-underline"
          >
            {product.rating.rate >= 4 ? (
              <HOFComponent products={product} />
            ) : (
              <Product products={product} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
