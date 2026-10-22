# Harshil Garg — Personal Portfolio Website

An authentic, modern, and personal portfolio website representing **Harshil Garg**—Computer Science undergraduate at **JECRC University, Jaipur**, creative media producer with **Harshil Media**, and aspiring software engineer.

---

## 💡 About This Portfolio

This website was engineered to reflect Harshil's genuine learning journey and entrepreneurial activities:
- **No Exaggerated Claims**: Strictly honest and grounded. Does not falsely portray Harshil as a "senior AI engineer" or "full-stack expert."
- **Harmonious Balance**: Highlights the intersection of **Computer Science** (algorithms, C++, Python, web development), **Creative Media** (video editing with Premiere Pro, Photoshop, CapCut), and **Entrepreneurship** (Harshil Media).
- **Centralized Content Management**: All personal data, projects, creative tools, skills, and contact links are maintained in [`portfolio-data.js`](portfolio-data.js).
- **Safe Link Handling**: Empty social links (`""`) are automatically hidden from the public UI, avoiding broken buttons.

---

## 🌟 Sections Overview

1. **Home / Hero**: Authentic introduction, university details, areas of interest (software dev, AI, web dev, creative media, digital marketing, entrepreneurship), and action buttons.
2. **About Me**: Grounded narrative emphasizing "learning by building", curiosity about technology, creative problem-solving, and continuous improvement.
3. **Entrepreneurial Experience (Harshil Media)**:
   - Dedicated showcase for **Harshil Media** (`https://harshil-media.lovable.app`).
   - All 8 activities documented: promotional videos, scripting, campaign ideation, social content, posters/banners, social media management exploration, client discussions, and project timelines.
4. **Creative Tools**:
   - Adobe Premiere Pro (Practical familiarity)
   - Adobe Photoshop (Practical familiarity)
   - Adobe After Effects (Beginner familiarity)
   - CapCut (Practical familiarity)
5. **Technology & Learning**:
   - **Currently Learning**: C++ & DSA, Python programming, AI fundamentals & Prompt engineering, Web development.
   - **Tools Previously Used**: C programming (coursework), Perplexity, NotebookLM, Gamma, Lovable.
   - **Demonstrable Through Projects**: Website deployment & hosting, AI-assisted development, Responsive UI structuring.
6. **Projects**:
   - **Project A**: Harshil Media Website (`https://harshil-media.lovable.app`)
   - **Project B**: Retail Marketing Campaigns (Roop Watches & Mobiles context noted as subject to confirmation/permission)
   - **Project C**: Teacher Planner Website (real modules from this project: dashboard, schedule, lesson planner, calendar, availability)
   - **Project D**: Digital Product Catalog (marked in progress/under review pending Urban Fry Homes completion confirmation)
7. **Education**: B.Tech in Computer Science Engineering, JECRC University, Jaipur, Rajasthan, India.
8. **Certifications & Achievements**: Honest placeholder (*"I'm continuing to learn and build practical experience. Verified certifications and achievements will be added here as I earn them."*) + a reusable blueprint interface.
9. **Career Goal**:
   > *"My goal is to become a good engineer by continuously learning, developing strong technical skills, and gaining practical experience. I want to build a solid foundation in Computer Science and apply what I learn to meaningful projects and real-world problems."*
10. **Contact**: Location, university, separate Harshil Media business card, dynamic social links (hiding empty entries), and interactive contact form.

---

## 🛠️ How to Customize (`portfolio-data.js`)

Open [`portfolio/portfolio-data.js`](portfolio-data.js) in your editor.

### 1. Adding Your Contact Links
Find the `contact` block:
```javascript
contact: {
  location: "Jaipur, Rajasthan, India",
  institution: "JECRC University",
  email: "your.email@example.com",       // Fill in when ready
  github: "https://github.com/...",     // Fill in when ready
  linkedin: "https://linkedin.com/in/..." // Fill in when ready
}
```
*Note: Any field left as `""` will automatically stay hidden from the public interface.*

### 2. Adding a Real Certification
Find the `certifications.items` array:
```javascript
certifications: {
  placeholderMessage: "...",
  items: [
    {
      name: "Data Structures & Algorithms in C++",
      issuer: "NPTEL / Coursera",
      date: "December 2026",
      credentialUrl: "https://...",
      image: ""
    }
  ]
}
```

### 3. Adding or Updating Projects
Modify or append items to the `projects` array in `portfolio-data.js`.

---

## 🚀 How to View and Host

### View Locally
Double-click [`portfolio/index.html`](index.html) or the root [`portfolio.html`](../portfolio.html) to open in any web browser.

### Free Deployment

#### GitHub Pages
1. Push the contents of the `portfolio` folder to a GitHub repository named `portfolio`.
2. Go to **Settings** > **Pages** > select **Deploy from a branch** (`main`), and click **Save**.
3. Live at `https://<your-username>.github.io/portfolio/`.

#### Vercel
1. Import your GitHub repository on [Vercel](https://vercel.com).
2. Set the Root Directory to `portfolio`.
3. Click **Deploy**.
