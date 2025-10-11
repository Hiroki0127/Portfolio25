# How to Add Project Images & Customize Content

## 📸 Adding Images

### Step 1: Prepare Your Images
1. Take screenshots of your projects
2. Resize/compress them if needed (use tools like TinyPNG or ImageOptim)
3. Name them according to the structure below

### Step 2: Add Images to the Project
Simply drag and drop your images into:
```
/public/projects/
```

Required images:
- `outfitease-thumbnail.png` (and outfitease-1.png, outfitease-2.png, etc.)
- `toeic-thumbnail.png` (and toeic-1.png, toeic-2.png, etc.)
- `tastycompass-thumbnail.png` (and tastycompass-1.png, etc.)

### Step 3: Enable Images in Code
In `/app/projects/[slug]/page.tsx`, uncomment lines ~61-68 to show real images:
```tsx
// Replace this section (lines 46-56):
<div className="text-gray-500 text-center p-8">
  <p className="font-medium">Screenshot {index + 1}</p>
  ...
</div>

// With this (uncomment):
<Image
  src={screenshot}
  alt={`${project.title} screenshot ${index + 1}`}
  width={800}
  height={600}
  className="w-full h-full object-cover"
/>
```

## 🎥 Adding Demo Videos

### Option 1: YouTube (Recommended)
1. Upload your demo video to YouTube
2. Get the embed URL (click Share → Embed → copy the src URL)
3. Add to `/lib/projectsData.ts`:
```typescript
demoVideo: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Option 2: Direct Video File
1. Add video file to `/public/projects/`
2. Reference in `demoVideo` field:
```typescript
demoVideo: "/projects/outfitease-demo.mp4"
```

## ✏️ Customizing Project Content

Edit `/lib/projectsData.ts` to update:
- Project descriptions
- Purpose & goals
- Tech stack explanations
- Problems and solutions
- Add more screenshots

Example:
```typescript
{
  slug: "my-project",
  title: "My Amazing Project",
  shortDescription: "Brief overview...",
  purpose: "Why I built this...",
  goals: [
    "Goal 1",
    "Goal 2"
  ],
  techStack: [
    {
      name: "React",
      description: "Why I used React and how..."
    }
  ],
  problems: [
    {
      problem: "Challenge I faced",
      solution: "How I solved it"
    }
  ]
}
```

## 🚀 Deploying Updates

After making changes:
```bash
git add .
git commit -m "Add project images and update content"
git push origin main
```

Vercel will automatically redeploy your site!

