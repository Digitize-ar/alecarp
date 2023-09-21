import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardMake() {
  return (
    <Card className="max-w-[450px] bg-gray-900">
      <CardHeader className="flex gap-3 bg-gray-950">
      <FontAwesomeIcon icon={faHammer} width={30} color="#9bf6ff" />
        <div className="flex flex-col">
          <p className="text-2xl font-medium text-white">Fabricación en melamina o madera</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <li className="text-white">Ofrecemos la fabricación de muebles utilizando melamina de alta calidad o madera, según las preferencias del cliente y las especificaciones del arquitecto.</li>
        <li className="text-white">Nuestros personal se encarga de garantizar una construcción precisa y duradera.</li>
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
