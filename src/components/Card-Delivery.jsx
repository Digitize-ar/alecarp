import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck} from "@fortawesome/free-solid-svg-icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardDelivery() {
  return (
    <Card className="max-w-[450px] bg-gray-900">
      <CardHeader className="flex gap-3 bg-gray-950">
      <FontAwesomeIcon icon={faTruck} width={30} color="#9bf6ff"/>
        <div className="flex flex-col">
          <p className="text-2xl font-medium text-white">Entrega y colocación</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <li className="text-white">Nos encargamos de la entrega segura de los muebles a medida directamente en el lugar especificado por el cliente.</li>
        <li className="text-white">Nuestro equipo de instalación profesional se asegura de que los muebles se coloquen correctamente y se ajusten a los diseños y planos proporcionados por el arquitecto y el cliente.</li>
      </CardBody>
      <Divider/>
    </Card>
  );
}
