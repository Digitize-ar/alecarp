import { Card, CardHeader, CardBody } from "@nextui-org/react";

const cardData = [
  {
    title: "Tocador",
    description: "Realizado con melamina blanca",
    imageSrc: "./public/2.jpg",
  },
  {
    title: "Mueble de cocina",
    description: "Fabricado con rauvissio brillant",
    imageSrc: "./public/3.jpg",
  },
  {
    title: "Mueble para television",
    description: "Fabricado con rauvissio brillant",
    imageSrc: "./public/4.jpg",
  },
  {
    title: "Escalera",
    description: "Revestimiento de escalones con madera",
    imageSrc: "./public/5.jpg",
  },
  // Agrega los datos para las otras tres cards aquí
];

export default function App() {
  return (
    <div className="flex justify-around items-center flex-col md:flex-row">
      {cardData.map((data, index) => (
        <Card key={index} className="py-4 w-max mb-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{data.title}</p>
            <small className="text-default-500">{data.description}</small>
            <h4 className="font-bold text-large">{data.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center">
            <img
              alt={`Card ${index + 1}`}
              className="object-cover rounded-xl"
              src={data.imageSrc}
              width={260}
              height={160}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
