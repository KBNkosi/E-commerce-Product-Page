import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const {id}=useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response)=>{
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log("Error fecthing products:",error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, [id]);


  if(loading){
    return(
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if(error){
    return(
      <div className="container mx-auto p-4 text-red-500 text-center">
        <h2 className="text-2xl font-bold">{error}</h2>
      </div>
    );
  }

  const handleQauntityChange=(change)=>{
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const calculateFinalPrice=()=>{
    if(!product) return 0;
    const discount=product.price*(product.discountPercentage/100);
    return (product.price-discount).toFixed(2);
  };

  if(!product) return null;



  return (
   <div className="container mx-auto px-4 py-8">
    {/*Breadcrumb navigation */}
    <div className="mb-6">
      <Link to="/" className="text-indigo-600 hover:text-indigo-800">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
        Products
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-600">{product.title}</span>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/*Image Section */}
      <div className="space-y-4">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img 
           src={product.images[selectedImage]}
           alt={product.title}
           className="w-full h-96 object-cover rounded-lg"
            />

        </div>
        {/*Thumbnail Images */}
        <div className="flex gap-2 overflow-x-auto">
          {product.images.map((image,index)=>(
            <button
              key={index}
              onClick={()=>setSelectedImage(index)}
              className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden
                ${selectedImage===index ? "ring-2 ring-indigo-500" : ""}`}
            >
              <img 
                src={image}
                alt={`${product.title}-${index+1}`}
                className="w-full h-full object-cover" 
              />

            </button>
          ))}
        </div>
      </div>

      {/*product Details section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>
         {/*Brand and Category */}
         <div className="space-y-2">
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">Category: {product.category}</p>
         </div> 

         {/*Raing */}
         <div className="flex items-center gap-2">
           <div className="flex items-center">
              {[...Array(5)].map((_, index)=>(
                <span
                  key={index}
                  className={`text-2xl ${
                    index < Math.floor(product.rating)? "text-yellow-400":"text-gray-300"
                  }`}
                >
                  ★
                 
                </span>
              ))}
           </div>
           <span className="text-gray-600">({product.rating})</span>
         </div>

         {/*Price */}
         <div className="space-y-2">
           {product.discountPercentage > 0 && (
            <p className="text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </p>
           )}
           <div className="flex items-center gap-2">
             <p className="text-3xl font-bold text-indigo-600">
                ${calculateFinalPrice()}
             </p>
             {product.discountPercentage > 0 &&(
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                {product.discountPercentage}% OFF
              </span>
             )}
           </div>
         </div>

         {/*Description */}
         <p className="text-gray-700">
           {product.description}
         </p>

         {/*Stock */}
         <p className="text-sm text-gray-600">
           stock Available: {product.stock}
         </p>

         {/*Quantity Selector */}
         <div className="flex items-center space-x-4">
          <span className="text-gray-700">Quantity:</span>
          <div className="flex item-center border roounded-md"> 
           <button
             onClick={()=>handleQauntityChange(-1)}
             className="px-3 py-1 border-r hover:bg-gray-100"
           >
            -
           </button>
           <span className="px-4 py-1">{quantity}</span>
           <button
             onClick={()=>handleQauntityChange(1)}
             className="px-3 py-1 border-1 hover:bg-gray-100"
           >
               +
           </button>
          </div>
         </div>

         {/*Add to cart Button */}
         <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
           Add to Cart
         </button>
      </div>

    </div>
   </div>
  );
};

export default ProductDetailPage