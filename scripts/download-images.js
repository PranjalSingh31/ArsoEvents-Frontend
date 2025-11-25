import fs from "fs";
import https from "https";

const images = {
  "happy_wedding_couple_portrait.png":
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "elegant_wedding_reception_venue.png":
    "https://images.unsplash.com/photo-1519741497674-611481863552",
  "event_planning_team_working.png":
    "https://images.unsplash.com/photo-1556139930-d20f1043d7ce",
  "outdoor_wedding_ceremony_setup.png":
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
  "corporate_event_venue_setup.png":
    "https://images.unsplash.com/photo-1503428209695-5c631b049b0a",
  "birthday_celebration_party_setup.png":
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
  "engagement_party_elegant_setup.png":
    "https://images.unsplash.com/photo-1522107177-7c36a8063e8b",
  "traditional_wedding_mandap_decoration.png":
    "https://images.unsplash.com/photo-1591608515761-8a2e97a26947",
  "baby_shower_celebration_setup.png":
    "https://images.unsplash.com/photo-1506045412240-22980140a405",
  "anniversary_celebration_elegant_setup.png":
    "https://images.unsplash.com/photo-1529634806980-1f1a90446fd1",
};

const folder = "./src/assets/generated_images/";

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}

for (const [filename, url] of Object.entries(images)) {
  const file = fs.createWriteStream(folder + filename);

  https.get(url, (res) => {
    res.pipe(file);
    console.log(`Downloaded: ${filename}`);
  });
}
