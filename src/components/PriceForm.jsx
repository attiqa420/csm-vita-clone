import React, { useState } from 'react';
import { toast } from 'react-toastify';

function PriceForm({title}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    job: '',
    date: '',
    time: '',
  });

 
  const [error, setError] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number.";
    }

    if (!formData.company.trim()) errors.company = "Company is required.";
    if (!formData.job.trim()) errors.job = "Job title is required.";
    if (!formData.date.trim()) errors.date = "Date is required.";
    if (!formData.time.trim()) errors.time = "Time is required.";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setError(errors);

    if (Object.keys(errors).length === 0) {
     
    toast.success("form submitted successfully!");

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        job: '',
        date: '',
        time: '',
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-2 mb-3 font-bold text-2xl">
         {title}
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-3 w-full lg:max-w-4xl">
         
          <div className="col-span-4 flex flex-col">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-700 p-3"
            />
            {error.name && <div className="text-red-600 text-sm mt-1">{error.name}</div>}
          </div>

    
          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-700 p-3"
            />
            {error.email && <div className="text-red-600 text-sm mt-1">{error.email}</div>}
          </div>

     
          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-700 p-3"
            />
            {error.phone && <div className="text-red-600 text-sm mt-1">{error.phone}</div>}
          </div>

     
          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company/organization"
              className="border border-gray-700 p-3"
            />
            {error.company && <div className="text-red-600 text-sm mt-1">{error.company}</div>}
          </div>

          
          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Job Title/Role"
              className="border border-gray-700 p-3"
            />
            {error.job && <div className="text-red-600 text-sm mt-1">{error.job}</div>}
          </div>

        
          <label className="col-span-4 font-semibold p-1">
            What date and time work best for you to meet with our consultant?
          </label>

      
          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="border border-gray-700 p-3"
            />
            {error.date && <div className="text-red-600 text-sm mt-1">{error.date}</div>}
          </div>

          <div className="lg:col-span-2 col-span-4 flex flex-col">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-700 p-3"
            />
            {error.time && <div className="text-red-600 text-sm mt-1">{error.time}</div>}
          </div>

         
          <input
            type="submit"
            value="Submit"
            className="col-span-4 bg-gradient-to-r from-blue-600 to-blue-950 text-center text-white text-lg p-1 rounded-xl hover:bg-blue-950 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default PriceForm;
