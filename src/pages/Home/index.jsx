import React, { useState } from "react";
import { Header, Footer, Navbar } from "../../layout";

const Index = () => {
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-white text-gray-900 font-sans p-5 rounded-lg">
      <Header
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />{" "}
    </div>
  );
};

export default Index;
