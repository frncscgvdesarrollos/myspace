'use client';

import { useState } from 'react';
import { sendMessage } from '../firebase';

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(form)
      .then(() => {
        alert('Mensaje enviado con éxito');
        // Aquí puedes reiniciar el formulario si lo deseas
        setForm({
          nombre: '',
          email: '',
          mensaje: '',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md z-[999] relative lg:h-full lg:w-[70vw]">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu correo electrónico"
        />
      </div>
      <div className="my-[3rem]">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          id="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:h-[40vh]"
          placeholder="Escribe tu mensaje aquí"
          rows="4"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
