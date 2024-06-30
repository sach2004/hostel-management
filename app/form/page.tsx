"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import { useSession } from 'next-auth/react';
import Headerform from '@/components/Headerform';

const Form: React.FC = () => {
  const { data: session } = useSession();

  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [reason, setReason] = useState("");

  const handleChangeCheckIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(e.target.value);
  };

  const handleChangeCheckOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(e.target.value);
  };

  const handleChangeReason = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      checkin,
      checkout,
      reason,
      sessionId: (session?.user as { id?: string })?.id 
    };

    try {
      const response = await axios.post('/api/form', formData); 
      console.log(response.data);
<<<<<<< HEAD
      alert("Form Submitted!!")
=======
>>>>>>> 37cf247e240e3c14044ee6ade5214dbaac4cc82e
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!session) {
   
    return <div>Please sign in</div>;
  }


  return (
<<<<<<< HEAD
    <div className="flex min-h-screen bg-gray-100">
=======
    <div className="flex h-screen bg-gray-100">
>>>>>>> 37cf247e240e3c14044ee6ade5214dbaac4cc82e
      
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Headerform session={session} />
      <div className="flex flex-grow justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Leave Form</h2>
          <div className="mb-4">
            <label htmlFor="checkin" className="block text-gray-700">Check-in Date</label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              value={checkin}
              onChange={handleChangeCheckIn}
              className="mt-2 w-full p-2 border rounded text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="checkout" className="block text-gray-700">Check-out Date</label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={checkout}
              onChange={handleChangeCheckOut}
              className="mt-2 w-full p-2 border rounded text-gray-700"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="reason" className="block text-gray-700">Reason</label>
            <textarea
              id="reason"
              name="reason"
              rows={15}
              value={reason}
              onChange={handleChangeReason}
              className="mt-2 w-full p-2 border rounded text-gray-700"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div></div>
      
    </div>
  );
};

export default Form;
