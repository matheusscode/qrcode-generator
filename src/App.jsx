import React, { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode"
import "./App.css";


const App = () => {
  const [link, setLink] = useState("");
  const [qrCodeLink, setQrCodeLink] = useState("")

  const handleGenerate = (link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrCodeLink(url)
    })
  }

  const handleQrcode = (e) => {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">

      <div className="qrcode">
        <QRCode value={link} />
      </div>

      <input
        type="text"
        placeholder="Digite seu link"
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QRCode</a>

    </div>
  );
};

export default App;
