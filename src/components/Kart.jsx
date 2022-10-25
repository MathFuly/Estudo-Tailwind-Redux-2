import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToKart } from "../redux/slicers/kartSlice";
import { BsFillBagFill } from "react-icons/bs";

const Kart = () => {
  const { prodList, kartItems } = useSelector((state) => state.kart);
  const dispatch = useDispatch();

  const kartCount = Object.keys(kartItems).length;

  const total = kartItems.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const [view, setView] = useState(false);

  return (
    <div className="flex justify-center p-4 shadow-md shadow-gray-400 bg-gray-100 m-4">
      <div className="flex flex-col w-1/3 animate-slideleft">
        <div className="text-white bg-orange-500 w-full flex justify-between py-2 px-4 rounded-md">
          <p className="font-semibold ">Store</p>

          <button onClick={() => setView(!view)}>
            {kartCount >= 1 && (
              <div className="absolute ml-[18px] bg-red-600 text-sm h-7 w-7 rounded-full text-center pt-[1.5px] pr-[1px] border-[3px] border-orange-500 animate-wave">
                <p className="font-semibold">{kartCount || 0}</p>
              </div>
            )}

            <BsFillBagFill size={35} />
          </button>
        </div>
        <div className="w-full ">
          <ul className="flex flex-col">
            {prodList?.map((prod) => (
              <li
                key={prod.id}
                className="flex items-center bg-gray-200 p-2 rounded-lg my-4 w-full hover:shadow-md hover:shadow-gray-400"
              >
                <img
                  src={prod.image}
                  alt="overview"
                  className="h-28 w-28 object-cover rounded-md "
                />
                <div className="h-full w-full flex flex-col items-center justify-center ml-4 text-gray-700">
                  <p className="font-bold w-full text-center truncate">
                    {prod.title}
                  </p>
                  <p className="text-base font-semibold">
                    R$:{prod?.price?.toFixed(2).toString().replace(".", ",")}
                  </p>
                  <button
                    onClick={() => dispatch(addToKart([...kartItems, prod]))}
                    className="text-base w-48 py-1 my-2 rounded-md bg-orange-500 text-white opacity-70 hover:opacity-100 transition-opacity"
                    type="button"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {view == true || kartCount > 0 ? (
        <div className="w-1/2 p-4 flex justify-center">
          <div className="w-1/2 bg-gray-200 rounded-md overflow-hidden animate-slideright">
            <div className="bg-slate-800 text-gray-400 text-base p-4">
              <h1 className="text-3xl font-semibold mb-2 text-white">
                Carrinho
              </h1>
              <p>Quantidade de Items: {kartCount || 0}</p>
              <p>
                Valor Total: R${total?.toFixed(2).toString().replace(".", ",")}
              </p>
            </div>
            <div>
              <ul className=" min-h-[390px] max-h-[390px] overflow-y-scroll scrollbar mb-4">
                {kartItems?.map((item) => (
                  <li
                    key={item.key}
                    className="flex items-center bg-gray-200 p-2 my-2 mx-auto w-[95%] border-b-2 border-gray-300 hover:bg-gray-300"
                  >
                    <img
                      src={item.image}
                      alt="overview"
                      className="h-28 w-28 object-cover rounded-md "
                    />
                    <div className="h-full w-full flex flex-col items-center justify-center ml-4 text-gray-700">
                      <p className="font-bold w-full text-center truncate">
                        {item.title}
                      </p>
                      <p className="text-base font-semibold">
                        R$:
                        {item?.price?.toFixed(2).toString().replace(".", ",")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Kart;
