"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useFetchingFeedbacks } from "@/hooks/useFetchingFeedbacks";

const ReviewsPage = () => {
  const { data:reviews, isFetching, error } = useFetchingFeedbacks();
  console.log(reviews);
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Reviews</h1>
        <p className="text-gray-500">See what customers are saying about La Perla Negra.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card><CardContent className="p-4">
          <p className="text-gray-500">Total Reviews</p>
          <h2 className="text-xl font-semibold">{reviews?.Reviews.length}</h2>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <p className="text-gray-500">5-Star Ratings</p>
          <h2 className="text-xl font-semibold">
            {reviews?.Reviews.filter(r => r.Rating === 5).length}
          </h2>
        </CardContent></Card>

        <Card>
          <CardContent className="p-4">
          <p className="text-gray-500">Would Recommend</p>
          <h2 className="text-xl font-semibold">
            {reviews?.Reviews.filter(r => r.WouldRecommand === "Definitely Yes" || r.WouldRecommand === "Probably Yes" || r.WouldRecommand === "Maybe").length}
          </h2>
        </CardContent></Card>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews?.Reviews.map((r, idx) => (
          <Card key={idx} className="shadow rounded-2xl">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{r.Name}</h3>
                <span className="text-yellow-500">{r.Rating} ⭐</span>
              </div>
              <p className="text-gray-600 text-sm">{r.Email}</p>
              <p className="text-gray-800">
                <p className="font-semibold">Feedback: </p>{r.Feedback}</p>
              <p className="text-gray-800 ">
                <p className="font-semibold">Would Recommend: </p>{r.WouldRecommand  &&  r.WouldRecommand === "Definitely Yes" ? "✅ Definitely Yes" : r.WouldRecommand === "Probably Yes" ? "✅ Probably Yes" : r.WouldRecommand === "Maybe" ? "✅ Maybe" : r.WouldRecommand === "Probably No" ? "❌ Probably No" : r.WouldRecommand === "Definitely No" ? "❌ Definitely No" : "❌ Not Recommended"}
              </p>
              <p className="text-gray-400 text-xs">
                {new Date(r.CreatedAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;