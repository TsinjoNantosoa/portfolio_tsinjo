
import React, { useState } from "react";
import Button from "./Button";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Firstname"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Lastname"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
          />
        </div>
      </div>
      
      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full appearance-none rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="web-development">Web Development</option>
          <option value="backend-development">Backend Development</option>
          <option value="data-science">Data Science</option>
          <option value="machine-learning">Machine Learning</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/10 bg-darkcard px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          className="w-auto px-6 py-3"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          icon={<Send size={16} />}
        >
          Send message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
