import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qrData, setQrData] = useState("");

  const generateQrCode = () => {
    if (!name || !phone || !email) {
      alert("Please fill all fields!");
      return;
    }

    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD`;

    setQrData(vCardData);
  };

  return (
    <div className="App" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contact QR Code Generator</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
      </div>

      <button
        onClick={generateQrCode}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Generate QR Code
      </button>

      <div style={{ marginTop: "20px" }}>
        {qrData && (
          <>
            <QRCodeCanvas value={qrData} size={256} />
            <p style={{ marginTop: "10px" }}><b>{name}</b><br/>{phone}<br/>{email}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
