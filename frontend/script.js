async function generateLetter() {

    document.getElementById("loading").classList.remove("hidden");
  
    const data = {
      name: document.getElementById("name").value,
      role: document.getElementById("role").value,
      company: document.getElementById("company").value,
      skills: document.getElementById("skills").value
    };
  
    try {
  
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
  
      if (result.letter) {
        document.getElementById("output").value = result.letter;
      } else {
        document.getElementById("output").value = "Error generating letter";
      }
  
    } catch (error) {
      document.getElementById("output").value = "Backend not connected!";
    }
  
    document.getElementById("loading").classList.add("hidden");
  }
  
  async function generateFromResume() {
  
    document.getElementById("loading").classList.remove("hidden");
  
    const formData = new FormData();
  
    formData.append("name", document.getElementById("name").value);
    formData.append("role", document.getElementById("role").value);
    formData.append("company", document.getElementById("company").value);
  
    const fileInput = document.getElementById("resume");
  
    if (!fileInput.files[0]) {
      alert("Please upload a PDF file");
      return;
    }
  
    formData.append("resume", fileInput.files[0]);
  
    try {
  
      const res = await fetch("http://localhost:5000/generate-with-resume", {
        method: "POST",
        body: formData
      });
  
      const result = await res.json();
  
      if (result.letter) {
        document.getElementById("output").value = result.letter;
      } else {
        document.getElementById("output").value = "Error processing resume";
      }
  
    } catch (error) {
      document.getElementById("output").value = "Backend error!";
    }
  
    document.getElementById("loading").classList.add("hidden");
  }
  
  function copyText() {
    navigator.clipboard.writeText(
      document.getElementById("output").value
    );
  
    alert("Copied!");
  }
  