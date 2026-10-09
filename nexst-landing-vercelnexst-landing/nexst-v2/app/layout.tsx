import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'NEXST | Tu negocio, bajo control',description:'Gestioná stock, pedidos y clientes desde un solo lugar. Software para mayoristas y minoristas.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
