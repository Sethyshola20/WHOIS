export async function makeRequest(e: React.FormEvent<HTMLFormElement>) {
  try {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const prenom = formData.get("prenom") as string;
     const site = formData.get("site") as string;
     const email = formData.get("email") as string;
    const response = await fetch("/api/form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prenom, email, site }),
    });
    console.log(prenom, email, site)
    if (!response.ok) {
        throw new Error("An error occurred while sending the message");
    }
    const data=await response.json();
    return  data
  } catch (error:any) {
    throw new Error(error.message);
  }
}