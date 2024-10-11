/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="page-not-found">
      <div className="content container">
        <h2 className="mb-3">OOPS!</h2>
        <h3 className="mb-3">Stranica nije pronađena</h3>
        <p className="mb-3">
        Nažalost, nismo mogli pronaći stranicu koju ste tražili. Predlažemo
          da se vratite na početnu stranicu.
        </p>
        <Link
          to={"/"}
          className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
        >
          Natrag
        </Link>
      </div>
    </section>
  );
}
