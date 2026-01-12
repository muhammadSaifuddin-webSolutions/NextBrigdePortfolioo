"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-red-600 text-sm font-medium mb-2">
              Write a Line
            </p>
            <h2 className="text-4xl font-bold text-black mb-6">GET IN TOUCH</h2>
            <p className="text-gray-600 mb-8">
              Have a question, feedback, or just want to say hello? Fill out the
              form below and our team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                SEND
              </Button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749234567!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded shadow-sm">
                  <p className="text-sm font-medium">101/111 Market St</p>
                  <button className="text-xs text-blue-600 hover:underline">
                    View larger map
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-medium text-gray-700">Address:</span>
                  <p className="text-gray-600">
                    101/111 Market St, South Melbourne VIC 3205
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Phone:</span>
                  <p className="text-gray-600">0450 562 511</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-red-600">hungervalley2511@gmail.com</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">City:</span>
                  <p className="text-gray-600">South Melbourne, VIC 3205</p>
                </div>
              </div>

              {/* Opening Times */}
              {/* <div className="border-t pt-6">
                <h3 className="text-red-600 font-semibold text-lg mb-4">Opening Timings</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Friday:</span>
                    <span className="text-gray-600">11:30am – 12:00am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Saturday:</span>
                    <span className="text-gray-600">11:30am – 12:00am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Sunday:</span>
                    <span className="text-gray-600">11:30am – 11:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Monday:</span>
                    <span className="text-gray-600">11:30am – 11:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Tuesday:</span>
                    <span className="text-gray-600">11:30am – 11:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Wednesday:</span>
                    <span className="text-gray-600">11:30am – 11:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Thursday:</span>
                    <span className="text-gray-600">11:30am – 11:00pm</span>
                  </div>
                </div>
              </div> */}

              {/* Large Phone Number */}
              <div className="border-t pt-6 mt-6">
                <a
                  href="tel:+61450562511"
                  className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  +61 450 562 511
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
