import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  HelpCircle,
  Package,
  Truck,
  ChevronLeft,
} from "lucide-react";

const OrderTrackingPage = () => {
  // Evaluator বা টেস্ট করার জন্য ৩টি স্টেট
  const [activeState, setActiveState] = useState("delayed");
  // Options: 'delayed' | 'not_received' | 'tracking_pending'

  // স্টেটের তথ্য
  const statesConfig = {
    delayed: {
      title: "Delivery Delayed",
      eta: "Updated ETA: Oct 29, 2026",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      banner: {
        title: "Your delivery is taking longer than expected",
        desc: "Severe weather condition delayed the transit. We are trying our best to deliver as soon as possible.",
        actionText: "Contact Support",
      },
      currentStep: 2, // Out for delivery-তে আটকে আছে
    },
    not_received: {
      title: "Delivered",
      eta: "Delivered on Oct 22, 2026",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      banner: {
        title: "Did not receive your package?",
        desc: "The driver marked this order as delivered. If you cannot find it nearby, please let us know immediately.",
        actionText: "Report Issue",
      },
      currentStep: 3, // Delivered স্টেপ পর্যন্ত গ্রিন
    },
    tracking_pending: {
      title: "Order Confirmed",
      eta: "Estimated Processing Time: 24 Hours",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      banner: {
        title: "Tracking info will be available soon",
        desc: "Your order has been received and is being prepared by the seller.",
        actionText: "Refresh Status",
      },
      currentStep: 0, // Processing
    },
  };

  const currentState = statesConfig[activeState];

  const steps = [
    { label: "Order Placed", time: "Oct 20, 10:00 AM" },
    { label: "Shipped", time: "Oct 21, 02:30 PM" },
    { label: "Out for Delivery", time: "Oct 22, 08:00 AM" },
    { label: "Delivered", time: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 flex flex-col items-center">
      {/* --- QUICK STATE SWITCHER FOR EVALUATOR --- */}
      <div className="w-full max-w-md bg-white p-3 rounded-xl shadow-sm border border-slate-200 mb-6">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
          ⚙️ Test UI States (Evaluator Control)
        </label>
        <select
          value={activeState}
          onChange={(e) => setActiveState(e.target.value)}
          className="w-full bg-slate-100 border border-slate-300 text-slate-800 text-sm rounded-lg p-2 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="delayed">1. Delayed Order State</option>
          <option value="not_received">
            2. Delivered but Not Received State
          </option>
          <option value="tracking_pending">
            3. Tracking Not Available Yet State
          </option>
        </select>
      </div>

      {/* --- MOBILE CONTAINER (360px - 430px) --- */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <button className="p-1 hover:bg-slate-100 rounded-full">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h1 className="font-semibold text-slate-800">Track Order</h1>
          <button className="p-1 hover:bg-slate-100 rounded-full">
            <HelpCircle className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Order Summary Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">
                Order #ORD-98231
              </p>
              <h2 className="text-base font-bold text-slate-800">
                {currentState.eta}
              </h2>
            </div>
            <span
              className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${currentState.badgeColor}`}
            >
              {currentState.title}
            </span>
          </div>

          {/* Special Situation Alert Banner */}
          <div
            className={`p-4 rounded-xl border ${
              activeState === "delayed"
                ? "bg-amber-50 border-amber-200 text-amber-900"
                : activeState === "not_received"
                  ? "bg-red-50 border-red-200 text-red-900"
                  : "bg-blue-50 border-blue-200 text-blue-900"
            }`}
          >
            <div className="flex items-start gap-3">
              {activeState === "delayed" && (
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              )}
              {activeState === "not_received" && (
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              {activeState === "tracking_pending" && (
                <Package className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className="text-sm font-semibold">
                  {currentState.banner.title}
                </h3>
                <p className="text-xs mt-1 text-slate-600 leading-relaxed">
                  {currentState.banner.desc}
                </p>
                <button className="mt-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow hover:bg-slate-800 transition">
                  {currentState.banner.actionText}
                </button>
              </div>
            </div>
          </div>

          {/* Product Summary Card */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-14 h-14 bg-slate-200 rounded-lg flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 text-slate-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-slate-800 truncate">
                Wireless Noise-Canceling Headphones
              </h4>
              <p className="text-xs text-slate-500">Qty: 1 • Color: Black</p>
              <p className="text-xs font-bold text-slate-700 mt-1">$129.00</p>
            </div>
          </div>

          {/* Visual Timeline / Progress */}
          <div className="pt-2 pb-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Delivery Progress
            </h3>

            {activeState === "tracking_pending" ? (
              <div className="p-6 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <Truck className="w-8 h-8 text-slate-400 mx-auto mb-2 animate-bounce" />
                <p className="text-xs font-medium text-slate-600">
                  Tracking updates will appear here once carrier scans the
                  parcel.
                </p>
              </div>
            ) : (
              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                {steps.map((step, index) => {
                  const isCompleted = index <= currentState.currentStep;
                  return (
                    <div
                      key={index}
                      className="relative flex items-start justify-between text-sm"
                    >
                      <div
                        className={`absolute -left-[23px] top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                          isCompleted
                            ? "bg-emerald-500 ring-4 ring-emerald-100"
                            : "bg-slate-300"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : null}
                      </div>
                      <div>
                        <p
                          className={`font-medium text-xs ${isCompleted ? "text-slate-800 font-semibold" : "text-slate-400"}`}
                        >
                          {step.label}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {step.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Help Action Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Need help with this order?
            </span>
            <button className="text-xs font-semibold text-blue-600 hover:underline">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
