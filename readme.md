1. Construir un Endpoint que permita listar los productos con los datos basicos y la información de stock en cada
   tienda donde esté disponible.
   El stock se obtiene de la tabla PRODUCTOS_STOCKS donde se tiene la relación del producto y la Tienda

**Endpoint:** `http://localhost:3000/api/productos` **Method** `GET`

2. Construir un endpoint que liste los 10 productos más vendidos en orden Descendente por la cantidad de
   unidades vendidas
   Para saber cuántas veces se ha vendido un producto se debe consultar la tabla PEDIDOS_PRODUCTOS y
   obtener la cantidad de cada producto.

**Endpoint:** `http://localhost:3000/api/productos/mas-vendidos` **Method** `GET`

**No se alcanzo a finalizar**

3. Construir un Endpoint que liste las categorías que tengan al menos un Producto en orden Descendente por la
   cantidad de Productos.

**Endpoint:** `http://localhost:3000/api/categorias` **Method** `GET`

4. Construir un Endpoint que permita listar las Promociones que apliquen según un día de la semana.
   En la Tabla PROMOCIONES en la Columna DIAS_SEMANA se encuentra un array con las posiciones de los
   días de la semana donde 0=No aplica - 1=Si aplica empezando el Lunes.
   También de cada promoción se deben obtener las tiendas que tienen la promocion disponible según “INICIO” y
   “FIN” de la tabla TIENDAS_PROMOCIONES
   Ejemplo:
   Si el dia proporcionado es miércoles (3) entonces solo se deben listar las promociones donde en dias_semana la
   tercera posición sea igual a 1

**Endpoint:** `http://localhost:3000/api/promociones` **Method** `GET`

Se maneja un parametro en el GET a la hora de hacer la consulta, es **dia**, debe ser un numero del 1 al 7.

**Ejemplo:** `http://localhost:3000/api/promociones?dia=1` **Method** `GET`

