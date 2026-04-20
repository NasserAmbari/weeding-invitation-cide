import type { RSVPFormData } from "../schemas/rsvpSchema";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export const createRSVP = async (data: RSVPFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/rsvpSecond/2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit RSVP");
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    throw error;
  }
};
