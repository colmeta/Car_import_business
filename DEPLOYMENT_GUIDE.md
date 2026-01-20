# 🚀 Deployment Guide: AJ24 MOTORS

This guide will help you deploy your Fortune 500-caliber platform to the world using **Vercel** (the creators of Next.js).

## ✅ Prerequisites

1.  **Vercel Account:** Create one at [vercel.com](https://vercel.com) (Free)
2.  **GitHub Account:** Create one at [github.com](https://github.com) (Recommended)

---

## 🌍 Option 1: Deploy via GitHub (Recommended)

This is the professional way. Every time you push code, it automatically updates your website.

### Step 1: Push to GitHub
1.  Create a new repository on GitHub (e.g., `aj24-motors`).
2.  Run these commands in your terminal ( VS Code):

```bash
# Initialize functionality
git init
git add .
git commit -m "Initial launch of AJ24 MOTORS"

# Connect to GitHub (replace URL with your new repo URL)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aj24-motors.git
git push -u origin main
```

### Step 2: Connect to Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** > **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find `aj24-motors` and click **"Import"**.

### Step 3: Configure Environment Variables
In the "Configure Project" screen, look for **Environment Variables**.
Expand it and add these:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_APP_NAME` | `AJ24 MOTORS` |
| `NEXT_PUBLIC_APP_TAGLINE` | `Import Intelligence. Drive Excellence.` |
| `NEXT_PUBLIC_APP_URL` | `https://your-project-name.vercel.app` |

> **⚠️ Note on Database Keys:**
> Since we are using static vehicle data for Phase 5 (to ensure speed and stability), you **DO NOT** need to add Supabase keys yet. The site will work perfectly without them.
>
> When you are ready to switch to the live database (Phase 6), you will come back here and add:
> - `NEXT_PUBLIC_SUPABASE_URL`
> - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4: Click "Deploy"
Vercel will build your site. In ~1 minute, you will get a live URL (e.g., `aj24-motors.vercel.app`).

---

## ⚡ Option 2: Deploy via Vercel CLI (Fastest)

If you don't want to use GitHub yet, you can deploy directly from your computer.

1.  **Install Vercel CLI:**
    ```bash
    npm i -g vercel
    ```

2.  **Login:**
    ```bash
    vercel login
    ```

3.  **Deploy:**
    ```bash
    vercel
    ```
    - Set up and deploy? **[Y]**
    - Which scope? **[Your Name]**
    - Link to existing project? **[N]**
    - Project name? **[aj24-motors]**
    - In which directory? **[./]**
    - Auto-detect settings? **[Y]**

4.  **Production Deployment:**
    Once you are happy with the preview, run:
    ```bash
    vercel --prod
    ```

---

## 🛠️ Post-Deployment Checklist

1.  **Check 3D Viewer:** Open your new URL on your phone and try rotating a car.
2.  **Test Speed:** Click the lightning bolt (`⚡`) icon (it tracks live performance).
3.  **Custom Domain:** On Vercel dashboard > Settings > Domains, add `aj24motors.com` (if you bought it).

## 🆘 Troubleshooting

- **Build Failed?** Check the "Build Logs" in Vercel. 99% of formatting issues are auto-fixed by our setup, but let me know if you see red errors.
- **Images not loading?** Ensure `next.config.ts` has the correct `images` > `domains` setup (indexes `localhost` by default, Vercel usually works automatically).

---

**Ready to dominate the market? Let's go!** 🚀
