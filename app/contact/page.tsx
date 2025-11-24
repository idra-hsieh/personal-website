"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { useForm, ValidationError } from "@formspree/react";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", info: "+886 975-665-265" },
  { icon: <FaEnvelope />, title: "Email", info: "idra.hsieh@gmail.com" },
  { icon: <FaLinkedin />, title: "LinkedIn", info: "@idra-hsieh" },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("manzwrjb");
  const [submittedName, setSubmittedName] = useState("");

  const handleOnSubmit = (e) => {
    // Create a FormData object from the form element (e.currentTarget)
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstname");

    // Save the name to state
    if (firstName) {
      setSubmittedName(firstName.toString());
    }

    // Pass the event to Formspree's handler
    handleSubmit(e);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container m-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          {/* form */}
          <div className="lg:w-[60%] order-2 lg:order-none font-sans">
            {/* 3. Handle success state */}
            {state.succeeded ? (
              <div className="h-auto flex flex-col items-center justify-center p-10 bg-[#E8E6E4] rounded-lg">
                <h3 className="text-2xl font-bold text-accent font-primary mb-6">
                  Message Sent!
                </h3>
                <div className="text-center text-foreground/80 max-w-[450px]">
                  <p className="mb-4">
                    Thanks for reaching out, <span>{submittedName}</span>. I
                    will respond via{" "}
                    <span className="underline">idra.hsieh@gmail.com</span>{" "}
                    within 48 hours.
                  </p>
                  <p className="text-sm italic">
                    ❈ If you have not heard back after 7 days, please feel free
                    to resubmit.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleOnSubmit}
                className="flex flex-col gap-6 p-10 bg-[#E8E6E4] rounded-lg"
              >
                <h3 className="text-2xl font-bold text-accent font-primary">
                  Let's build something meaningful together.
                </h3>
                <p>
                  Whether it’s a collaboration, project idea, or opportunity,
                  I’d love to hear from you.
                </p>

                {/* input */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium px-1 mb-1">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      type="text"
                      name="firstname"
                      required
                      placeholder="Idra"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium px-1 mb-1">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      type="text"
                      name="lastname"
                      required
                      placeholder="Hsieh"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium px-1 mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="idra.hsieh@gmail.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium px-1 mb-1">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+886 975-665-265"
                    />
                  </div>
                </div>

                {/* select */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium px-1 mb-1">
                    What Brings You Here?{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  {/* 5. Added name="service" so this field is sent */}
                  <Select name="service" required>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={
                          <span className="text-foreground/25 font-light">
                            I’m reaching out about...
                          </span>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="job">Job Opportunity</SelectItem>
                        <SelectItem value="freelance">
                          Freelance Project
                        </SelectItem>
                        <SelectItem value="lecture">
                          Speaking/Lecture Invitation
                        </SelectItem>
                        <SelectItem value="collab">
                          Collaboration Proposal
                        </SelectItem>
                        <SelectItem value="media">
                          Media/Press Inquiry
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* textarea */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium px-1 mb-1">
                    Leave a Message <span className="text-red-600">*</span>
                  </label>
                  {/* 6. Added name="message" so this field is sent */}
                  <Textarea
                    name="message"
                    required
                    className="h-[200px]"
                    placeholder="Type your message here..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* btn */}
                <Button
                  size="md"
                  className="max-w-40"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0 mr-10">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#E8E6E4] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/60">{item.title}</p>
                      <h3 className="text-xl">{item.info}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
