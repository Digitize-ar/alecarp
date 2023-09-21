import { React, useEffect, useState } from "react";
import ModalContact from "./ContactModal";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const menuItems = ["Inicio", "Servicios", "Galeria",];
  const [activeNavItem, setActiveNavItem] = useState(""); // Estado para almacenar el elemento activo
  useEffect(() => {
    // Función para determinar el elemento activo en función de la URL actual
    const determineActiveNavItem = () => {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        setActiveNavItem("inicio");
      } else if (currentPath === "/galeria") {
        setActiveNavItem("galeria");
      } else if (currentPath === "/servicios") {
        setActiveNavItem("servicios");
      } else if (currentPath === "/contacto") {
        setActiveNavItem("contacto");
      } else {
        setActiveNavItem(""); // Ningún elemento activo si la URL no coincide
      }
    };
    determineActiveNavItem(); // Llamar a la función al principio

    // Agregar un evento de escucha de cambio de ruta para actualizar el elemento activo
    window.addEventListener("popstate", determineActiveNavItem);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener("popstate", determineActiveNavItem);
    };
  }, []);

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="public/logo-snl.png" alt="" width={40} />
          <p className="font-bold text-inherit text-3xl m-4">Alecarp</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src=".././public/logo-snl.png" alt="" width={45} />
          <p className="font-bold text-inherit text-3xl m-4">Alecarp</p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={`text-xl ${activeNavItem === "inicio" ? "isActive" : ""}`}
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/servicios"
            className={`text-xl ${
              activeNavItem === "servicios" ? "isActive" : ""
            }`}
          >
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/galeria"
            className={`text-xl ${
              activeNavItem === "galeria" ? "isActive" : ""
            }`}
          >
            Galeria
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" >
        <NavbarItem>
          <ModalContact/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2
                ? "warning"
                : index === menuItems.length - 1
                ? "danger"
                : "foreground"
            }
            href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
    </Navbar>
  );
}
