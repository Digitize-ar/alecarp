import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isEmailValid = validateEmail(email);

  const handleSubmit = async () => {
    if (!email || !message || !name || !phone || !isEmailValid) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);
    formData.append("name", name);
    formData.append("phone", phone);

    try {
      const response = await fetch(
        "https://getform.io/f/7b650b4d-d3ab-40a0-9c1a-725dc59485d6",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Aquí puedes manejar el éxito del envío
        console.log("Formulario enviado con éxito");
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
      } else {
        // Aquí puedes manejar un error en el envío
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud HTTP:", error);
    } finally {
      setIsSubmitting(false);
      onOpenChange(false);
    }
  };

  return (
    <>
      <Button onClick={onOpen} color="primary">Contacto</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">¡ Contactanos !</ModalHeader>
              <ModalBody>
                <Input
                  value={email}
                  type="email"
                  label="Email"
                  variant="bordered"
                  isInvalid={!isEmailValid}
                  color={isEmailValid ? "success" : "danger"}
                  errorMessage={!isEmailValid && "Please enter a valid email"}
                  onValueChange={setEmail}
                  className="max-w"
                />
                <Input
                  value={name}
                  type="text"
                  label="Nombre"
                  placeholder="Ingresa tu nombre"
                  labelPlacement="outside"
                  onValueChange={setName}
                />
                <Input
                  value={phone}
                  type="number"
                  label="Número de teléfono"
                  placeholder="Ingresa tu celular"
                  labelPlacement="outside"
                  onValueChange={setPhone}
                />
                <Input
                  value={message}
                  type="text"
                  label="Mensaje"
                  placeholder="¿Qué estás buscando?"
                  labelPlacement="outside"
                  onValueChange={setMessage}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

