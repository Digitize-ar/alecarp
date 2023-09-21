import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardPaint() {
  return (
    <Card className="max-w-[450px] bg-gray-900">
      <CardHeader className="flex gap-3 bg-gray-950">
      <FontAwesomeIcon icon={faPaintRoller} width={30} color="#9bf6ff"/>
        <div className="flex flex-col">
          <p className="text-2xl font-medium text-white">Laqueados</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <li className="text-white">Realizamos acabados de laqueado profesional para brindar a los muebles un aspecto elegante y duradero.</li>
        <li className="text-white">Trabajamos en estrecha colaboración con los arquitectos y clientes para asegurarnos de que los acabados se alineen con la visión de diseño general.</li>
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
