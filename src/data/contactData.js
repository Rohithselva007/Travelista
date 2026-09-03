import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export const contactInfoData = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Office",
    lines: ["221B Voyager Lane", "Chennai, Tamil Nadu, India"],
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 12345 67890"],
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    lines: ["hello@travelista.com", "support@travelista.com"],
  },
  {
    icon: FaClock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
  },
];


export const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
