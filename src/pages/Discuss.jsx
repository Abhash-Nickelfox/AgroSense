import { useState } from "react";
import Icon from "../components/shared/Icon";
import { CONTACT_EMAIL } from "../lib/constants";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  interest: "",
  message: "",
};

export default function Discuss() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Let's discuss AgroSense${
      form.organization ? ` — ${form.organization}` : ""
    }`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organization: ${form.organization}`,
      `Primary Interest Area: ${form.interest}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="pt-20">
      <div className="relative py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Content */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              Connect
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              Start Your Intelligence Journey.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Discover how AgroSense transforms raw environmental data into actionable
              geospatial wisdom for your enterprise.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="col-span-1 md:col-span-7">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-surface-variant/30">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@enterprise.com"
                      className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Acme Agriculture"
                      className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    Primary Interest Area
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent appearance-none"
                  >
                    <option value="">Select an area...</option>
                    <option>Precision Farming</option>
                    <option>Supply Chain Intelligence</option>
                    <option>Sustainability Reporting</option>
                    <option>Custom Enterprise Solution</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you bridge the gap between data and action?"
                    className="w-full px-4 py-3 rounded border border-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-on-primary w-full py-4 rounded font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  Submit
                  <Icon name="arrow_forward" className="text-sm" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
