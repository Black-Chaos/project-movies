import { NavLink, Outlet } from 'react-router-dom'
import  {SiteNav, Header, Container } from './SharedLayout.styled'
import { Suspense } from 'react';

export function SharedLayout() {
    return (
      <>
        <Header>
          <Container>
            <SiteNav>
              <NavLink className={'nav-link'} to={'/'}>
                Home
              </NavLink>
              <NavLink className={'nav-link'} to={'movies'}>
                Movies
              </NavLink>
            </SiteNav>
          </Container>
        </Header>
        <main>
          <section>
            <Container>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </Container>
          </section>
        </main>
      </>
    );
}