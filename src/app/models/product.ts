// Interfaz Product
export interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    onSale: boolean;
    image: string;
  }
  
  // Lista de productos
  export const PRODUCTS: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image: 'assets/images/laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image: 'assets/images/smartphone.jpg' },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image: 'assets/images/tablet.jpg' },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image: 'assets/images/monitor.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'assets/images/teclado.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image: 'assets/images/mouse.jpg' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image: 'assets/images/impresora.jpg' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'assets/images/auriculares.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image: 'assets/images/silla.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'assets/images/microfono.jpg' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, image: 'assets/images/ssd.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: 'assets/images/camara.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: 'assets/images/router.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: 'assets/images/rtx4060.jpg' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, image: 'assets/images/smartwatch.jpg' }
  ];
  