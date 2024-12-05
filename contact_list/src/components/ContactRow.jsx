import { useState, useEffect } from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
    //render a single row (tr element) with name, email, phone (td element)
  );
}
