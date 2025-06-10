"use client";
import { Button } from "@/components/ui/button";
import { usePopStore } from "stores/popStore";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import axios from "axios"

interface FormData {
  title: string;
  description?: string;
  welcome?: string;
  end?: string;
}

export default function CreateFormPop() {
  const isOpen = usePopStore((state) => state.isOpen);
  const closePop = usePopStore((state) => state.closePop);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [endText, setEndText] = useState("");

  const handleCreateForm = async(e: React.FormEvent) => {
    e.preventDefault();
    const data: FormData = {
      title: title,
      description: description,
      welcome: welcomeText,
      end: endText,
    }
    await axios.post("/api/forms", data)
    .then((res) => {
      console.log("Form created successfully:", res.data);
    })
    .catch((error) => {
      console.error("Error creating form:", error);
    });
    console.log("Form Data:", data);
    console.log("Form submitted");
    // You can add your form submission logic here, such as sending data to an API
    closePop(); // Close the pop-up after submission
  };
  return (
    <div
      className={
        isOpen
          ? "fixed flex inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm"
          : "hidden"
      }
    >
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <IoIosCloseCircle onClick={closePop} className="absolute text-3xl top-5 right-5" />
        <h2 className="text-xl font-bold mb-4">Create New Form</h2>
        <form onSubmit={(e) => handleCreateForm(e)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Form Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter form title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter form description"
            ></textarea>
            <label className="block text-sm font-medium mb-2">
              Welcome Text
            </label>
            <textarea
              value={welcomeText}
              onChange={(e) => setWelcomeText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter form description"
            ></textarea>
            <label className="block text-sm font-medium mb-2">
              End Text
            </label>
            <textarea
              value={endText}
              onChange={(e) => setEndText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter form description"
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:ring-offset-2 focus:ring-offset-white/10">
            Create Form
          </Button>
        </form>
      </div>
    </div>
  );
}
