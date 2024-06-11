import s from './SideBar.module.css';

const SideBar = ({ className, children, id = '' }) => {
  return (
    <section className={`${s.sideBar} ${className}`} id={id}>
      {children}
    </section>
  );
};

export default SideBar;
