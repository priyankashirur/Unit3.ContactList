import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await response.json();
        setContact(json);
      } catch (error) {
        console.log("error");
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div></div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>
        Address: {contact.address.street}, {contact.address.suite},{" "}
        {contact.address.city}, {contact.address.zipcode}
      </p>
      <p>Company: {contact.company.name}</p>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}
