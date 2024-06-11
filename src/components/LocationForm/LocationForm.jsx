import s from './LocationForm.module.css';

const LoacationForm = () => {
  return (
    <form action="" className={s.form}>
      <label htmlFor="location" className={s.location}>
        Location
      </label>
      <input
        className={s.input}
        type="text"
        id="location"
        placeholder="Kyiv, Ukraine"
      />
    </form>
  );
};

export default LoacationForm;
