import css from './Home.module.css';
export default function Home() {
  return (
    <div className={css.homePage}>
      <h1 className={css.titleHomePage}>Welcome to phonebook!</h1>
    </div>
  );
}
