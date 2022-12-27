import React, { useState, useRef } from "react";
import ItemsRightSidebar from "./ItemsRightSideBar";
import Header from "../../Components/Header";
import "../../styles/font.css"
import axios from '../../axios';


export default function AddItems() {
  const[name, setName] = useState("");
  const [price, setPrice] = useState(false);
  const [quantity, setQuantity] = useState(false);
  const [image, setImage] = useState(false);
  const [url, setUrl] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);
  let isitem = false;
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    setImage(event.target.files[0]);
    img();
  };

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handlePrice = (event) => {
    setPrice(event.target.value);
  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
    if (quantity !== 0){
      setStatus("Available (In Stock)");
    }
    else{
      setStatus("Out of Stock");
    }
  }

  // uploading image on cloudinary
  const img = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset","player_image");
    //data.append("cloud_name","dyapmvalo");
    axios.post("https://api.cloudinary.com/v1_1/dyapmvalo/image/upload", data)
    .then((res) => {
      setUrl(res.data.url)
      console.log(url)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  // sending request
  const addItem = async () => {
    let res = await axios.post('/shop/additem', {name : name, price : price, quantity : quantity, image : url, isitem:isitem})
    .then (
      setError(false)
    )
    .catch((error) => {
        setError(error.response.data);
        console.log(error);
    })
  }


  // chart


  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"All Items"} />

        <div className="flex  divide-x xl:w-full ">
          {/* Upload Of user  */}
          <div className="w-full pr-12">
            <h3 className="text-xl font-medium text-white font-lexend whitespace-nowrap  ml-9 mt-[32px]"> Add Items</h3>

            {/*foam  */}
            <foam>
              <div className="flex font-lexend">
                <div className="flex-1">
                  <div className="flex ml-4 p-5 pt-4">
                    <div className="flex-1 font-lexend text-md text-[#7E7E7E]">
                      <label>Product Name</label>
                    </div>
                    <div className="flex-1">
                      <div className="flex">
                        <div className="flex-1  text-md text-[#7E7E7E]">
                          <label className="ml-2">Price</label>
                        </div>
                        <div className="flex-1   text-md text-[#7E7E7E]">
                          <label className="ml-2">Quantity</label>
                        </div>
                      </div>


                    </div>

                  </div>

                  <div className="flex ml-4 p-5 pt-4">
                    <div className="flex-1 ">
                      <input className="text-md w-full font-lexend text-white placeholder-gray-400 bg-[#212121] p-4"
                        type={"text"}
                        placeholder="Nike Drift Shirt" 
                        onChange={handleName}/>

                      {/* Upload Button */}
                      <div
                        onClick={handleClick}
                        className=" flex bg-[#212121] font-lexend w-full mt-6 text-white  text-sm  block  p-4    border-gray-600 placeholder-gray-400"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.625 0H4.375C1.95967 0.00224297 0.00224297 1.95967 0 4.375V30.625C0.00224297 33.0403 1.95967 34.9978 4.375 35H30.625C33.0403 34.9978 34.9978 33.0403 35 30.625V4.375C34.9978 1.95967 33.0403 0.00224297 30.625 0ZM4.375 33.25C2.92589 33.2484 1.7516 32.0741 1.75 30.625V21.4819L8.33472 14.8972C9.53175 13.7043 11.4682 13.7043 12.6653 14.8972L30.9834 33.2136C30.8651 33.23 30.7477 33.2499 30.625 33.25H4.375ZM33.25 30.625C33.2493 31.2871 32.9955 31.8848 32.5908 32.3465L20.4875 20.2443L22.3347 18.3972C23.5318 17.2043 25.4682 17.2043 26.6653 18.3972L33.25 24.9819V30.625ZM33.25 22.5074L27.9026 17.16C26.0223 15.2836 22.9777 15.2836 21.0974 17.16L19.2503 19.0071L13.9026 13.6599C11.9986 11.8416 9.00143 11.8416 7.09741 13.6599L1.75 19.0073V4.375C1.7516 2.92589 2.92589 1.7516 4.375 1.75H30.625C32.0741 1.7516 33.2484 2.92589 33.25 4.375V22.5074Z"
                            fill="white"
                          />
                        </svg>

                        <div className="ml-2"> Upload Group Picture</div>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                      </div>
                      {error?(
                <div>
                <p className="text-white font-lexend text-sm p-3 text-center">{error}</p>
                </div> 
              ):(
                <>
                 </>
              )}

                      {/* Cancel and additem button */}
                      <div className="flex mt-7 mr-2">
                        <div className="flex-1">
                          <button
                            type="submit"
                            class=" font-dm items-center w-full font-lexend py-2   mt-3  text-sm font-normal bg-white rounded-[4px] "
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="flex-1 ">
                          <button
                            type="submit"
                            class=" font-dm caret-white items-center font-lexend w-full py-2  ml-2 mt-3 text-sm font-normal bg-white rounded-[4px] "
                            onClick={addItem}
                          >
                            Add Items
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex">
                        <div className="flex-1">
                          <input className=" ml-3 text-md w-full placeholder-lexend text-white placeholder-gray-400 bg-[#212121] p-4"
                            type={"number"}
                            step={".1"}
                            placeholder="500.56" 
                            onChange = {handlePrice}/>
                        </div>
                        <div className="flex-1  text-md text-[#7E7E7E] ml-2">
                          <input className=" ml-3 text-md w-full  placeholder-lexend text-white placeholder-gray-400 bg-[#212121] p-4"
                            type={"number"}

                            placeholder="45" 
                            onChange = {handleQuantity}/>
                            
                        </div>
                      </div>
                    </div>

                  </div>



                </div>
                <div className="flex-1"></div>

              </div>
            </foam>



            {/* Side bar */}


          </div>

          {/*skill cards */}
          <div className=" xl:w-4/12 border-[#7E7E7E]">
            <div className="ml-10 mr-10  2xl:grid 2xl:grid-cols-1 ">
              return <ItemsRightSidebar name = {name} image = {url} quantity = {quantity} price = {price} status = {status}/>;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
