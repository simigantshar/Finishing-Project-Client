import React from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    {
      name: "Rolex",
      link:"/watches/brands/rolex",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755760/zpqzvesee3yp5bdkoxbb.png",
    },
    {
      name: "Patek Philippe",
      link:"/watches/brands/patek philippe",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755820/naqllshdhdvyj0tbrvtk.png",
    },
    {
      name: "Audemars Piguet",
      link:"/watches/brands/audemars piguet",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755779/gyzxzz9tlo2cmur9cggy.jpg",
    },
    {
      name: "H. MOSER & CIE.",
      link:"/watches/brands/h. moser & cie.",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755790/qllkfnyf2xvlewjg88t7.jpg",
    },
    {
      name: "A. LANGE & SÖHNE",
      link:"/watches/brands/a. lange & söhne",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755771/orenbxtex2dlieskhld7.png",
    },
    {
      name: "F.P. JOURNE",
      link:"/watches/brands/f.p. journe",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755812/osvll3llrj3v8fpy3wag.webp",
    },
    {
      name: "DE BETHUNE",
      link:"/watches/brands/de bethune",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755803/tg3dmwm8iwpvqugyijay.jpg",
    },
    {
      name: "VACHERON CONSTANTIN",
      link:"/watches/brands/vacheron constantin",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1695755832/fqym1f83othckadrkh8n.png",
    },
    {
      name: "GREUBEL FORSEY",
      link:"/watches/brands/greubel forsey",
      img_url:
        "https://res.cloudinary.com/dbkctdxui/image/upload/v1697546909/download_iphvlu.png",
    },
  ];

  return (
    <div>
      <div className="px-10 py-4 gap-y-2 grid">
        {brands.map((item) => (
          <Link to={item.link} className="flex items-center hover:bg-stone-200 bg-">
            <img className="w-20 aspect-square object-contain bg-white" src={item.img_url} alt="" />
            <h2 className="ml-5 text-xl font-thin">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
