'use client';

import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Programas', href: '/programas' },
  { name: 'Admisiones', href: '/admisiones' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
            <span className="text-xl font-bold">PrideDragon Tech</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.href}
                color="inherit"
                className={pathname === item.href ? 'text-secondary' : ''}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}