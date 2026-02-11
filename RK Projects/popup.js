const preview = document.getElementById("preview");
const result = document.getElementById("result");
const btn = document.getElementById("generateBtn");

chrome.storage.local.get("imageUrl", (data) => {
  if (data.imageUrl) {
    preview.src = data.imageUrl;
    generatePrompt(data.imageUrl);
  } else {
    result.value = "Right click on an image and select 'Generate AI Prompt (RK Projects)'";
  }
});

function generatePrompt(imageUrl) {
  result.value = "Generating prompt...";

  setTimeout(() => {
    result.value = `Ultra-detailed AI art prompt:

A high-resolution professional image based on the selected photo. Cinematic lighting, ultra realistic, sharp focus, dramatic shadows, vibrant color grading, 8k resolution, highly detailed textures, professional photography style, trending on ArtStation.`;
  }, 1200);
}

btn.addEventListener("click", () => {
  chrome.storage.local.get("imageUrl", (data) => {
    if (data.imageUrl) {
      generatePrompt(data.imageUrl);
    }
  });
});
