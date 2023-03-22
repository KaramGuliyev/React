import React, { useEffect, useRef, useState } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef();
  const [currentCar, setCurrentCar] = useState(null);

  useEffect(() => {
    formRef.current.model.value = "";
    formRef.current.year.value = "";
    formRef.current.color.value = "";
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carDetails = {
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
    };

    setCurrentCar(carDetails);

  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <br />
      <input
        type="text"
        name="model"
        defaultValue={initialData.model}
      />
      <br />
      <input
        type="number"
        model="year"
        name="year"
        defaultValue={initialData.year}
      />
      <br />
      <input
        type="text"
        name="color"
        defaultValue={initialData.color}
      />
      <button type="submit">Send</button>
      <br />
      <br />
      {!currentCar
        ? "Send a car!"
        : `New car is sent! Model : ${currentCar.model} Year : ${currentCar.year} and Color is ${currentCar.color}`}
    </form>
  );
}

export default CarDetails;
