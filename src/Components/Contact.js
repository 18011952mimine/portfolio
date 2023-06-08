import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation et envoi du formulaire au bdd
  }

  return (
    <div className="container mt-5 contact-form">
      <h2 className="mb-4">Contactez moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={5} name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
