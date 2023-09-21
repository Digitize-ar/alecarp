import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardImg() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img src="public/img-home2.jpg" alt="" className="rounded-lg"/>
      </CardBody>
    </Card>
  );
}
