const hustles = [
  {
    title: "AI Content Writing Service",
    skills: ["writing", "social", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["quick", "service", "longterm"],

    description:
      "Help small businesses turn rough ideas into social posts, captions, product descriptions and simple blog content using AI.",

    tools:
      "ChatGPT + Canva + Google Docs",

    firstCustomer:
      "Choose one niche, create 3 sample posts for a local business, then send a short personalized offer to 10 businesses.",

    earning:
      "Start with small packages and test what customers are willing to pay.",

    steps: [
      "Pick one customer type.",
      "Create 3 useful samples.",
      "Build a simple offer.",
      "Contact potential customers.",
      "Improve the service from real feedback."
    ]
  },

  {
    title: "AI Video Content Service",
    skills: ["video", "social", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["quick", "service", "longterm"],

    description:
      "Create short promotional videos, reels, explainers and faceless content for small businesses using AI-assisted scripting and editing.",

    tools:
      "ChatGPT + CapCut + Canva + AI video tools",

    firstCustomer:
      "Make one short sample for a restaurant, real estate agent, coach or small shop and use it as a portfolio example.",

    earning:
      "Test a price per video or create a small starter package.",

    steps: [
      "Choose one video type.",
      "Create 2–3 samples.",
      "Build a simple portfolio.",
      "Contact businesses.",
      "Ask for a small paid trial."
    ]
  },

  {
    title: "AI Social Media Assistant",
    skills: ["social", "writing", "sales", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["service", "longterm"],

    description:
      "Help busy business owners plan content, write captions, generate ideas and organize a simple posting calendar.",

    tools:
      "ChatGPT + Canva + Google Sheets",

    firstCustomer:
      "Offer a small 7-day content plan to one business in a niche you understand.",

    earning:
      "Test a fixed starter package before offering monthly services.",

    steps: [
      "Choose a niche.",
      "Create a sample 7-day calendar.",
      "Prepare a short offer.",
      "Contact potential customers.",
      "Improve your package from feedback."
    ]
  },

  {
    title: "Digital Product Idea Researcher",
    skills: ["writing", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["product", "longterm", "service"],

    description:
      "Research problems people repeatedly ask about and turn those problems into digital product opportunities such as guides, checklists and templates.",

    tools:
      "ChatGPT + Google + Reddit + Canva",

    firstCustomer:
      "Use the process to find product ideas for yourself, then offer research and idea validation to beginner creators.",

    earning:
      "Sell a small research report or use the research to create your own digital product.",

    steps: [
      "Choose an audience.",
      "Find recurring problems.",
      "Group problems into product ideas.",
      "Validate the strongest idea.",
      "Create and test a small solution."
    ]
  },

  {
    title: "AI Design Service",
    skills: ["design", "social", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["quick", "service", "longterm"],

    description:
      "Create social graphics, promotional posts, quote cards and carousel designs using AI-assisted copy and design tools.",

    tools:
      "Canva + ChatGPT + image-generation tools",

    firstCustomer:
      "Create three sample posts for a local business and show how the designs could improve its social media presence.",

    earning:
      "Test a small bundle such as 5 or 10 graphics.",

    steps: [
      "Pick a niche.",
      "Create sample designs.",
      "Build a simple portfolio.",
      "Contact businesses.",
      "Start with a small paid test."
    ]
  },

  {
    title: "AI Research & Summary Service",
    skills: ["writing", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["quick", "service", "longterm"],

    description:
      "Turn long information into clear notes, summaries, research briefs and content outlines for busy creators and businesses.",

    tools:
      "ChatGPT + Google Docs + browser research",

    firstCustomer:
      "Create a sample summary from a public article or report and show it to a creator, student or small business.",

    earning:
      "Charge per research project or based on the amount of work required.",

    steps: [
      "Choose a specific research task.",
      "Create a sample.",
      "Define your deliverable.",
      "Find people who need it.",
      "Improve your service from feedback."
    ]
  },

  {
    title: "AI Product Description Service",
    skills: ["writing", "sales", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["quick", "service"],

    description:
      "Help online sellers turn basic product information into clearer and more useful product descriptions.",

    tools:
      "ChatGPT + Canva + Google Docs",

    firstCustomer:
      "Find small online sellers with weak product listings and create one improved example.",

    earning:
      "Test a per-listing price or small batch package.",

    steps: [
      "Choose an e-commerce niche.",
      "Create before-and-after samples.",
      "Create a simple offer.",
      "Contact sellers.",
      "Ask for feedback and testimonials."
    ]
  },

  {
    title: "AI Prompt & Workflow Service",
    skills: ["sales", "writing", "learning"],
    devices: ["phone", "laptop", "both"],
    budgets: ["0", "low", "medium"],
    goals: ["service", "longterm"],

    description:
      "Create reusable AI prompts and simple workflows that help small businesses handle repetitive writing, content and research tasks.",

    tools:
      "ChatGPT + Google Docs + Google Sheets",

    firstCustomer:
      "Choose one repetitive task for a small business and create a simple prompt pack around it.",

    earning:
      "Charge for a customized prompt pack or workflow document.",

    steps: [
      "Find one repetitive task.",
      "Build and test prompts.",
      "Document the workflow.",
      "Demonstrate the value.",
      "Improve the system from customer feedback."
    ]
  }
];


const device = document.getElementById("device");
const budget = document.getElementById("budget");
const skill = document.getElementById("skill");
const goal = document.getElementById("goal");
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");


function calculateScore(hustle) {
  let score = 0;

  if (hustle.devices.includes(device.value)) {
    score += 3;
  }

  if (hustle.budgets.includes(budget.value)) {
    score += 3;
  }

  if (hustle.skills.includes(skill.value)) {
    score += 3;
  }

  if (hustle.goals.includes(goal.value)) {
    score += 3;
  }

  return score;
}


function generateHustle() {

  const ranked = hustles
    .map(function(hustle) {
      return {
        hustle: hustle,
        score: calculateScore(hustle) + Math.random()
      };
    })

    .sort(function(a, b) {
      return b.score - a.score;
    });


  const hustle = ranked[0].hustle;


  result.classList.remove("hidden");


  result.innerHTML = `

    <h2>${hustle.title}</h2>

    <p class="summary">
      ${hustle.description}
    </p>


    <div class="grid">

      <div class="info">
        <strong>Tools</strong>
        <span>${hustle.tools}</span>
      </div>


      <div class="info">
        <strong>First Customer</strong>
        <span>${hustle.firstCustomer}</span>
      </div>


      <div class="info">
        <strong>Income Approach</strong>
        <span>${hustle.earning}</span>
      </div>


      <div class="info">
        <strong>Your Setup</strong>
        <span>${device.options[device.selectedIndex].text}</span>
      </div>

    </div>


    <h3>Your First 5 Steps</h3>


    <ol class="steps">

      ${hustle.steps
        .map(function(step) {
          return `<li>${step}</li>`;
        })
        .join("")}

    </ol>


    <button id="againBtn">
      Generate Another Idea
    </button>

  `;


  document
    .getElementById("againBtn")
    .addEventListener("click", generateHustle);


  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


button.addEventListener("click", generateHustle);
