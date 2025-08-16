"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useFetchFormContact } from "@/hooks/useFetchFormContact";

const HelpPage = () => {
  const { data:helpMessages, isFetching, error } = useFetchFormContact();
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-gray-500">Messages received from customers.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card><CardContent className="p-4">
          <p className="text-gray-500">Total Messages</p>
          <h2 className="text-xl font-semibold">{helpMessages?.ContactForm.length}</h2>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <p className="text-gray-500">Today</p>
          <h2 className="text-xl font-semibold">
            {helpMessages?.ContactForm.filter(m => 
              new Date(m.CreatedAt).toDateString() === new Date().toDateString()
            ).length}
          </h2>
        </CardContent></Card>
      </div>

      {/* Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {helpMessages?.ContactForm.map((m, idx) => (
          <Card key={idx} className="shadow rounded-2xl">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{m.FName}</h3>
                <span className="text-gray-400 text-xs">
                  {new Date(m.CreatedAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{m.Email}</p>
              <p className="text-gray-800">{m.Message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;