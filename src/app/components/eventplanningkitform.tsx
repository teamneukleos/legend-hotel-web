"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  jobTitle: "",
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function EventPlanningKitForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "Event Planning Kit Download" });
      }

      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-sm text-neutral-700">
        Sent! Check your inbox for the Corporate Event Planning Kit.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
        <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
        <Field label="Work/Personal Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        <Field label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} required />
        <Field label="Job Title" name="jobTitle" value={form.jobTitle} onChange={handleChange} required />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-black py-3 text-xs uppercase tracking-widest text-white transition hover:bg-neutral-800 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Download The Kit"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-neutral-500">
        {label} {required && <span className="text-black">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
      />
    </div>
  );
}