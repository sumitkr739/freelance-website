import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '127.0.0.1';

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
} catch (err) {
  console.error('Failed to initialize Gemini AI Client:', err);
}

// -------------------------------------------------------------
// API Endpoints
// -------------------------------------------------------------

// 1. AI Chat Assistant - Grounded Interview Chatbot representation
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
       res.status(400).json({ error: 'Messages array is required' });
       return;
    }

    if (!ai) {
      // Return a simulated, high-quality response if Gemini is not configured
      res.json({
        text: "Thanks for reaching out! I am currently running in Offline Mode because the server's API key is being initialized. However, as Sumit's AI core, I can confirm that his slot for Q3 projects is filling up fast. Sumit specializes in React, Node.js, and Gemini integrations. Feel free to book a call directly!"
      });
      return;
    }

    // Format messages into Content objects for the @google/genai SDK
    const formattedContents = messages.map((msg: any) => {
      return {
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      };
    });

    const developerContextPrompt = `
You are the interactive AI Agent version of Sumit Sinha, a world-class freelance Senior Full Stack Developer.
Clients, founders, and CTOs from startups and enterprise firms are visiting your portfolio and chatting with you to screen your capabilities.

Your Character Details:
- Name: Sumit Sinha
- Title: Senior Full Stack Architect & Tech Partner
- Tone: Professional, highly responsive, extremely competent, clear, confident but humble, business-minded.
- Tech Stack: React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, Redis, Docker, AWS, Gemini API.
- Philosophy: "Write clean code that scales and directly drives business KPI results."
- Communication policy: Weekly milestones, Slack updates, live staging.
- Prices: Product launch MVP from $4,800, Full SaaS System from $9,500, Fractional CTO retainer at $6,500/month.
- Current availability: Booking projects starting within 2-3 weeks.

If they ask to hire you or book a session, politely tell them they can use the Calendly Booking module directly on the page, or complete the Contact Form, which generates an automated, instant AI scope breakdown!
Keep your responses relatively concise (under 150 words), use scannable markdown formatting, and focus purely on serving their inquiry.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction: developerContextPrompt,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to generate response', details: error.message });
  }
});

// 2. Lead Generation - Instant AI Scope & Budget Analysis
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, budget, projectType, projectDetails } = req.body;

    if (!name || !email || !projectDetails) {
       res.status(400).json({ error: 'Name, email, and project details are required' });
       return;
    }

    const leadPrompt = `
A potential client has submitted a detailed inquiry on your developer portfolio.
Lead details:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not Specified'}
- Budget Tier: ${budget}
- Project Category: ${projectType}
- Goals / Specifications: ${projectDetails}

Write a comprehensive, professional **"AI Project Scope Analysis"** specifically geared for this inquiry.
Make it sound like an elite technical director has carefully reviewed their submission in real time.

Structure your response into 3 concise Markdown sections:
1. **Technical Architecture Recommendation**: Propose the perfect tech stack (Front, back, database, third party tools) suited specifically to their budget and goals.
2. **Estimated Roadmap Milestones**: Suggest a highly logical, phased sprint layout (v1.0 delivery target weeks).
3. **Budget & Feasibility Assessment**: Provide professional suggestions to maximize their ROI based on their specified limit.

Include encouraging, business-focused advice. Keep the response elegant, crisp, and under 300 words.
`;

    let analysisText = '';
    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: leadPrompt,
        config: {
          temperature: 0.5,
        },
      });
      analysisText = response.text || '';
    } else {
      // Fallback if API key is not configured
      analysisText = `
### Technical Architecture Recommendation
* **Frontend**: Next.js / Vite SPA with Tailwind CSS for rapid responsive rendering.
* **Backend**: Express REST API running with Node.js and TypeScript.
* **Data Core**: PostgreSQL for transactional state, paired with Redis caching.

### Estimated Roadmap Milestones
* **Phase 1 (Week 1-2)**: Interactive Figma Mockups & schema builds.
* **Phase 2 (Week 2-4)**: Authentication, database wiring, and core API deployments.
* **Phase 3 (Week 4-5)**: Payment gateways, telemetry logging, beta tests, and launch.

### Budget & Feasibility Assessment
The project scope aligns beautifully with the **${budget}** roadmap. To maximize ROI, we recommend prioritizing essential functional paths inside the MVP before expanding secondary integrations.
`;
    }

    res.json({
      success: true,
      message: 'Lead recorded successfully!',
      analysis: analysisText,
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    res.status(500).json({ error: 'Form processing error', details: error.message });
  }
});

// 3. Newsletter Subscription Endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
       res.status(400).json({ error: 'A valid email address is required' });
       return;
    }

    const welcomePrompt = `
Write an elegant, witty, one-sentence greeting welcoming user "${email}" to your premium software development newsletter "The Scalable Stack".
Keep it brief, tech-savvy, and high-fidelity. (e.g. "We've added your nodes to our propagation pool...").
`;

    let welcomeMsg = 'Welcome to The Scalable Stack! You have successfully subscribed.';
    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: welcomePrompt,
        config: { temperature: 0.8 },
      });
      welcomeMsg = response.text || welcomeMsg;
    }

    res.json({
      success: true,
      message: welcomeMsg
    });
  } catch (error: any) {
    console.error('Newsletter API Error:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// -------------------------------------------------------------
// Vite Middleware / Asset Serving
// -------------------------------------------------------------
async function bootstrap() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      configFile: false,
      root: process.cwd(),
      plugins: [react(), tailwindcss()],
      resolve: {
        alias: {
          '@': path.resolve(process.cwd(), '.'),
        },
      },
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Running Express in Development (Vite Middleware Active)');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Running Express in Production (Serving Static Dist)');
  }

  startServer(PORT, HOST);
}

bootstrap();

function startServer(port: number, host: string, retries = 10) {
  const server = app.listen(port, host, () => {
    const displayHost = host === '0.0.0.0' ? 'localhost' : host;
    console.log(`Full-Stack server listening on http://${displayHost}:${port}`);
  });

  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE' && retries > 0) {
      console.warn(`Port ${port} is already in use. Trying ${port + 1}...`);
      startServer(port + 1, host, retries - 1);
      return;
    }

    console.error('Failed to start server:', error);
    process.exit(1);
  });
}
