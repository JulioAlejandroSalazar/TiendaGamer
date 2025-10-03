# 🕹️ Tienda Gamer

## Descripción
Tienda Gamer es un **proyecto de eCommerce** desarrollado con **React** y **React-Bootstrap**, que permite a los usuarios:  

- Visualizar un catálogo de productos cargados dinámicamente desde un archivo JSON.  
- Agregar y eliminar productos del carrito de compras.  
- Visualizar la cantidad de productos en el carrito y el total de la compra.  
- Alternar entre la vista de catálogo y el carrito de manera interactiva.  

El proyecto sirve como ejemplo de **gestión de estados con `useState`**, **efectos con `useEffect`** y **renderizado condicional** en React.

---

## 🚀 Tecnologías utilizadas
- React 18  
- React-Bootstrap  
- Bootstrap 5  
- HTML5 / CSS3  
- JavaScript ES6  
- JSON para datos de productos  

---

## ⚙️ Funcionalidades

1. **Listado dinámico de productos**  
   - Los productos se cargan desde `public/assets/data.json` usando `useEffect`.  

2. **Gestión de carrito**  
   - Agregar productos (`addToCart`)  
   - Eliminar productos (`removeFromCart`)  
   - Contador de productos en el carrito visible en la barra de navegación  

3. **Renderizado condicional**  
   - Mostrar mensaje si el carrito está vacío  
   - Alternar entre catálogo y carrito usando `showCart`  
   - Cambiar texto del botón “Agregar” a “En carrito” si el producto ya está agregado  

4. **Diseño responsivo y centrado**  
   - Productos se muestran uno al lado del otro si hay espacio, o uno debajo de otro en pantallas pequeñas  
   - Fondo gris en toda la página  
   - Tarjetas de productos con sombras y diseño limpio
