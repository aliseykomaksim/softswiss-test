export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={`${import.meta.env.BASE_URL}spaceship.png`} className="footer__logo" />
        <p className="footer__text">Exciting space adventure!</p>
      </div>
    </footer>
  );
};
