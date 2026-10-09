import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'NEXST | Tu negocio, en control',description:'NEXST: gestión comercial para mayoristas y minoristas. Stock, ventas, pedidos y revendedores en un solo lugar.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
