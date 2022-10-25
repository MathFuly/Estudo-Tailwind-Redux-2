import { useSelector, useDispatch } from "react-redux";
import {
  getUrl,
  getName,
  getPhone,
  getDate,
} from "../redux/slicers/cardSlicer";

const Card = () => {
  const { url, name, phone, date } = useSelector((state) => state.card);

  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 flex items-center justify-evenly p-4 rounded-md m-4 flex-col md:flex-row">
      <h1 className="bg-gray-800 w-1/3 rounded-md text-center text-base font-semibold text-gray-300 py-2 mb-8 md:hidden">
        Crie Seu Card
      </h1>
      <div className="flex flex-col text-base text-white w-full md:w-1/4 mb-8 sm:mb-0 animate-slideleft">
        <label className="label-card">
          <span className="mr-2 border-r-[1px] border-gray-700 text-gray-300 pr-2">
            Url
          </span>
          <input
            placeholder="Digite a url da imagem"
            type="text"
            name="url"
            className="input-card"
            onChange={(e) => dispatch(getUrl(e.target.value))}
            autoComplete="off"
          />
        </label>
        <label className="label-card">
          <span className="mr-2 border-r-[1px] border-gray-700 text-gray-300 pr-2">
            Nome
          </span>
          <input
            placeholder="Digite seu nome"
            type="text"
            name="nome"
            className="input-card"
            onChange={(e) => dispatch(getName(e.target.value))}
          />
        </label>
        <label className="label-card">
          <span className="mr-2 border-r-[1px] border-gray-700 text-gray-300 pr-2">
            Celular
          </span>
          <input
            placeholder="Digite o seu número"
            type="text"
            name="phone"
            className="input-card"
            onChange={(e) => dispatch(getPhone(e.target.value))}
          />
        </label>
        <label className="label-card">
          <span className="mr-2 border-r-[1px] border-gray-700 text-gray-300 pr-2">
            Data de Nascimento
          </span>
          <input
            type="date"
            name="date"
            className="rounded-sm border-none outline-none bg-transparent"
            onChange={(e) => dispatch(getDate(e.target.value))}
          />
        </label>
      </div>
      <div className="w-[500px] h-[250px] flex rounded-md p-4 bg-gradient-to-r from-gray-800 shadow-lg shadow-gray-900 animate-slideright">
        {url != "" && (
          <img src={url} alt="" className="h-48 w-48 object-cover rounded-md" />
        )}
        {url == "" && (
          <div className="h-48 w-48 rounded-md animate-pulse bg-black opacity-20" />
        )}

        <div className="text-gray-300 opacity-70 text-base p-4">
          {name != "" && <p className="text-3xl truncate mb-4">{name}</p>}
          {name == "" && (
            <div className="h-10 w-60 rounded-md animate-pulse bg-black opacity-20 " />
          )}
          {phone != "" && <p>{phone}</p>}
          {phone == "" && (
            <div className=" mt-4 h-6 w-48 rounded-md animate-pulse bg-black opacity-20 " />
          )}
          {date != "" && <p>{date}</p>}
          {date == "" && (
            <div className=" mt-4 h-6 w-48 rounded-md animate-pulse bg-black opacity-20 " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
