export async function generatePropertyDescription(
  formData: any
) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Generate AI gagal.");
  }

  return result.description;
}
