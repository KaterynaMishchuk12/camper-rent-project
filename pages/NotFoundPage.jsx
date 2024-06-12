import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Page is not found</h1>
      <NavLink to="/">Back to home page</NavLink>
    </>
  );
}
