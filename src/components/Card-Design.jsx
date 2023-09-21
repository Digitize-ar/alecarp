import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardDesign() {
  return (
    <Card className="max-w-[450px] bg-gray-900">
      <CardHeader className="flex gap-3 bg-gray-950">
      <FontAwesomeIcon icon={faPen} width={30}  color="#9bf6ff"/>
        <div className="flex flex-col">
          <p className="text-2xl font-medium text-white">Diseño del mueble a medida del cliente</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <li className="text-white">Trabajamos estrechamente con nuestros clientes y sus arquitectos para crear diseños personalizados que se ajusten a sus necesidades y preferencias.</li>
        <li className="text-white">Seguimos los planos diseñados por los arquitectos del cliente</li>
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
