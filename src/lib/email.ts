/**
 * Helper utility to send email forms via Web3Forms API.
 * Ref: https://web3forms.com
 */

export interface EmailPayload {
  subject: string;
  from_name: string;
  email: string; // Customer's email (for routing & auto-responder)
  [key: string]: string | number | undefined; // Other custom fields
}

export async function sendFormEmail(payload: EmailPayload): Promise<{ success: boolean; error?: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Mock implementation for development if key is not configured
  if (!accessKey || accessKey === "your_web3forms_access_key_here") {
    console.warn(
      "Web3Forms access key not found. Ensure VITE_WEB3FORMS_ACCESS_KEY is set in your .env file.\n" +
      "Simulating email delivery in development mode..."
    );
    await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate network latency
    return { success: true };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...payload,
        // Web3Forms special fields
        cc: "Onyxespressobar@gmail.com", // Ensure Gmail also receives it (though key owner email is default)
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return { success: true };
    } else {
      return { success: false, error: data.message || "Failed to submit form to server." };
    }
  } catch (error: any) {
    console.error("Error submitting form:", error);
    return { success: false, error: error?.message || "An unexpected error occurred during submission." };
  }
}
