(function () {
  'use strict';

  var Q = [
    { key: 'device', title: 'What device do you have?', opts: ['Smartphone', 'Laptop', 'Both'] },
    { key: 'budget', title: 'What is your starting budget?', opts: ['$0', 'Under $25', '$25–$100', '$100+'] },
    { key: 'skill', title: 'What are you good at?', opts: ['Writing', 'Design', 'Social Media', 'Video', 'Sales', 'Teaching', 'Research', 'Beginner / No special skill'] },
    { key: 'goal', title: 'What do you want?', opts: ['Make my first $100', 'Build a side income', 'Build a digital business', 'Work with clients', 'Sell digital products'] },
    { key: 'time', title: 'How much time can you spend?', opts: ['30 minutes a day', '1 hour a day', '2–3 hours a day', '4+ hours a day'] }
  ];
  var SK = ['write', 'design', 'social', 'video', 'sales', 'teach', 'research', 'begin'];
  var SKN = ['writing', 'design', 'social media', 'video', 'sales', 'teaching', 'research', 'beginner skills'];
  var GL = ['first100', 'side', 'biz', 'clients', 'products'];
  var DEV = ['smartphone', 'laptop', 'phone and laptop'];
  var COST = [
    'About $0. Free versions of AI tools are enough to start.',
    'About $0–$25. Free tools work; a small paid upgrade (for example Canva Pro or CapCut Pro) is optional.',
    'About $25–$100. Expect one paid tool or subscription, and maybe a simple portfolio page.'
  ];

  // n=name s=summary k=skills g=goals c=min budget level (0-2) t=min time level (1-4)
  // d=device (p=phone ok, l=laptop better) w=what you deliver a=who buys m=income f=first customer x=extra tools pr=1 if digital product
  function H(n, s, k, g, c, t, d, w, a, m, f, x, pr) {
    return { n: n, s: s, k: k.split(' '), g: g.split(' '), c: c, t: t, d: d, w: w, a: a, m: m, f: f, x: x, pr: pr };
  }
  var HUSTLES = [
    H('AI Content Writing', 'Use AI to draft articles, captions and web copy, then edit them into polished content for busy business owners.', 'write begin', 'first100 side clients', 0, 1, 'p', 'articles and posts', 'coaches, salons and small shops', 'Charge per piece ($10–$50 each) or a monthly package of 8–12 pieces.', 'Message 10 local businesses whose social pages are quiet. Offer 3 free sample posts and ask if they want more.', ['Google Docs or any notes app', 'Grammarly or a similar free proofreader']),
    H('AI Social Media Management', 'Plan and schedule a month of posts for small brands using AI for ideas, captions and visuals.', 'social design sales', 'side clients biz', 1, 2, 'p', 'monthly content calendars', 'restaurants, boutiques and fitness coaches', 'Monthly retainer, usually $100–$400 per client for a set number of posts.', 'Pick 5 local brands and send each a free 1-week content idea list. Offer to run the full month.', ['Canva (free)', 'Meta Business Suite or Buffer (free plans)']),
    H('AI Video Editing', 'Turn long videos into captioned short clips using AI-assisted editing apps.', 'video social begin', 'first100 clients side', 1, 2, 'p', 'captioned short clips', 'podcasters, coaches and church or event teams', 'Charge per clip ($5–$20) or per video ($30–$100).', 'Offer to edit one free clip for 5 creators with long videos. Show a before-and-after.', ['CapCut or InShot', 'AI auto-caption feature']),
    H('AI Thumbnail Design', 'Design eye-catching YouTube and video thumbnails with AI image tools and Canva.', 'design video begin', 'first100 clients', 0, 1, 'p', 'thumbnails', 'small YouTubers and course creators', 'Charge per thumbnail ($5–$25) or a bundle of 10 for a discount.', 'Redesign one weak thumbnail from 5 small YouTubers and send it as a free sample.', ['Canva (free)', 'A free AI image generator']),
    H('AI Resume & LinkedIn Writing', 'Help job seekers rewrite resumes and LinkedIn profiles using AI plus your human editing.', 'write begin research', 'first100 clients', 0, 1, 'p', 'resumes and LinkedIn profiles', 'recent graduates and job seekers', 'Charge per resume ($15–$60) with an add-on for a cover letter or LinkedIn rewrite.', 'Offer a free resume review to 5 friends or graduates in local WhatsApp or Facebook groups, then ask for referrals.', ['Google Docs', 'A clean resume template']),
    H('AI Presentation Creation', 'Build clear slide decks for students, teams and small businesses using AI to structure and draft content.', 'design teach research', 'clients side first100', 0, 1, 'l', 'slide decks', 'students, consultants and small teams', 'Charge per deck ($20–$100 depending on length) or per hour.', 'Ask 10 students, lecturers or small business owners if they have a talk to prepare. Offer one free slide.', ['Canva or Google Slides', 'An AI assistant for outlines']),
    H('AI Research Service', 'Use AI to gather, check and summarize information into short reports for people who lack time.', 'research write begin', 'clients side first100', 0, 2, 'l', 'research briefs', 'consultants, writers and startup founders', 'Charge per brief ($20–$100) or per hour for custom research.', 'Offer a free one-page brief on a topic for 5 founders or consultants in your network. Always verify facts.', ['Google Docs', 'AI assistant with web search']),
    H('AI Virtual Assistant', 'Handle emails, scheduling, data entry and simple admin for busy owners, with AI doing the repetitive work.', 'begin research sales', 'first100 clients side', 0, 2, 'p', 'admin and inbox support', 'solo entrepreneurs and coaches', 'Hourly ($5–$15 to start) or a monthly retainer for set tasks.', 'Tell 10 solo business owners you will clear one task for free (such as drafting replies) and ask for a trial week.', ['Google Workspace (free)', 'A calendar app']),
    H('AI Chatbot Setup', 'Set up no-code FAQ chatbots for websites and WhatsApp for small businesses.', 'sales research', 'clients biz', 2, 3, 'l', 'ready-to-use chatbots', 'clinics, schools and online shops', 'One-time setup fee ($50–$300) plus an optional monthly maintenance fee.', 'Pick 5 businesses that answer the same questions repeatedly. Build a free demo bot for one of them.', ['A no-code chatbot builder (many have free trials)', 'A list of common customer questions']),
    H('AI Email Writing', 'Write sales, follow-up and newsletter emails using AI and your own editing.', 'write sales begin', 'first100 clients side', 0, 1, 'p', 'email drafts', 'online sellers and service providers', 'Charge per email ($10–$30) or per sequence of 3–5 emails ($50–$150).', 'Find 5 online sellers whose emails are weak and send them a rewritten sample.', ['Google Docs or Gmail', 'An AI assistant']),
    H('AI Product Description Service', 'Write clear, persuasive product descriptions for online shops with AI-assisted drafting.', 'write sales begin', 'first100 clients', 0, 1, 'p', 'product descriptions', 'Etsy, Shopify and Instagram sellers', 'Charge per description ($1–$5) or in batches of 20–50.', 'Rewrite 3 descriptions from small shop owners and send them for free. Offer a discount on a full batch.', ['A spreadsheet or Google Docs', 'An AI assistant']),
    H('AI Blog Writing', 'Create SEO-friendly blog posts for websites using AI for research and drafts, plus your editing.', 'write research', 'biz side clients', 1, 3, 'l', 'blog posts', 'small business sites and affiliate bloggers', 'Per post ($20–$100) or a monthly content package.', 'Find 10 business blogs that have not posted recently. Pitch 3 post ideas with a free outline.', ['Google Docs', 'A free keyword tool such as Google Trends']),
    H('AI Digital Product Creation', 'Create and sell guides, templates and planners made with AI, then edited into something genuinely useful.', 'teach design write', 'products biz', 1, 3, 'l', 'guides and templates', 'beginners who want a quick how-to', 'Sell the same product repeatedly on Selar, Gumroad, Payhip or Etsy at $5–$30 each.', 'Share a free preview in 3 online communities that match your topic and link to the full version.', ['Canva (free)', 'A store such as Selar, Gumroad or Payhip'], 1),
    H('AI Prompt Creation', 'Create tested prompt packs that help others get better results from AI tools.', 'write research begin', 'products first100 side', 0, 1, 'p', 'prompt packs', 'beginners, freelancers and small businesses', 'Sell packs at $3–$20 each, or write custom prompts for clients.', 'Post 3 free prompts in groups for your chosen niche and offer the full pack to people who ask.', ['A notes app or Google Docs', 'A store such as Selar or Payhip'], 1),
    H('AI Pinterest Content Service', 'Design and schedule Pinterest pins that drive traffic to blogs and shops.', 'design social', 'side biz clients', 0, 2, 'p', 'Pinterest pins', 'bloggers, Etsy sellers and affiliate marketers', 'Charge per set of pins ($10–$40) or a monthly pin package.', 'Make 5 free pins for a blogger or Etsy seller and message them with the result.', ['Canva (free)', 'A free Pinterest business account']),
    H('AI Short-Form Video Service', 'Create short Reels, TikToks and Shorts using AI scripts, captions and templates.', 'video social', 'biz clients side', 1, 3, 'p', 'short videos', 'local brands and personal brands', 'Monthly packages of 8–12 videos ($100–$500) or per-video pricing.', 'Make one sample video for a brand you like and send it directly to the owner.', ['CapCut', 'An AI script helper']),
    H('AI Lead Generation', 'Build targeted prospect lists and draft outreach messages for businesses that want more customers.', 'sales research', 'clients biz', 2, 3, 'l', 'prospect lists', 'agencies, consultants and B2B services', 'Charge per qualified lead ($1–$10) or a monthly retainer.', 'Offer 10 free leads to a consultant or agency, then ask to continue if they like them.', ['A spreadsheet', 'LinkedIn and Google Maps for research']),
    H('AI Copywriting', 'Write landing pages, ads and sales pages with AI to speed up drafts and your skill to make them convert.', 'write sales', 'clients biz', 1, 3, 'l', 'ads and landing pages', 'online course sellers and local service brands', 'Per project ($50–$300) or retainer. Results-based clients pay more.', 'Rewrite the headline and first paragraph of 5 weak landing pages and send them as free samples.', ['Google Docs', 'AI assistant for variations']),
    H('AI Tutoring Materials', 'Create worksheets, quizzes and lesson notes with AI for students and tutors.', 'teach begin write', 'products side first100', 0, 2, 'p', 'worksheets and study guides', 'parents, tutors and exam students', 'Sell packs ($3–$15), or charge tutors per set of custom materials.', 'Share a free sample worksheet in 3 parent or teacher groups and offer the full pack.', ['Google Docs or Canva', 'An AI assistant'], 1),
    H('AI Business Idea Research', 'Research markets and validate business ideas for aspiring founders with AI-powered analysis.', 'research begin', 'first100 side clients', 0, 1, 'p', 'idea reports', 'aspiring founders and side-hustlers', 'Charge per report ($15–$60) or offer a bundle with a follow-up call.', 'Offer a free mini-report to 5 people posting business ideas in online communities.', ['Google Docs', 'AI assistant with web search']),
    H('AI Social Media Content Packs', 'Create ready-to-post caption and graphic packs for specific niches and sell them again and again.', 'design social write', 'products biz side', 0, 2, 'p', 'content packs', 'busy small business owners in one niche', 'Sell packs ($5–$25) repeatedly or offer a monthly subscription.', 'Post 3 free samples in a niche group and send the pack link to anyone who asks for more.', ['Canva (free)', 'A store such as Selar or Payhip'], 1),
    H('AI Newsletter Writing', 'Write weekly newsletters for creators and small businesses using AI drafts and your editing.', 'write research', 'biz side clients', 0, 2, 'l', 'newsletters', 'creators, consultants and local brands', 'Monthly retainer ($80–$300 per client) for a weekly email.', 'Offer to write one free issue for a creator who has an email list but sends rarely.', ['Google Docs', 'Free tiers on Substack, Beehiiv or MailerLite'])
  ];

  var state = { step: 0, a: {}, rank: [], pos: 0 };
  var $ = function (id) { return document.getElementById(id); };

  function renderStep(focus) {
    var q = Q[state.step], h = '';
    $('stepLabel').textContent = 'Step ' + (state.step + 1) + ' of ' + Q.length;
    $('bar').style.width = ((state.step + 1) / Q.length * 100) + '%';
    $('progress').setAttribute('aria-valuenow', state.step + 1);
    h += '<fieldset><legend tabindex="-1">' + q.title + '</legend><div class="opts' + (q.opts.length > 4 ? ' many' : '') + '">';
    q.opts.forEach(function (o, i) {
      h += '<label class="opt"><input type="radio" name="' + q.key + '" value="' + i + '"' + (state.a[q.key] === i ? ' checked' : '') + '><span>' + o + '</span></label>';
    });
    $('qbox').innerHTML = h + '</div></fieldset>';
    $('back').hidden = state.step === 0;
    $('next').textContent = state.step === Q.length - 1 ? 'Find My Side Hustle' : 'Next';
    $('err').textContent = '';
    if (focus) { $('qbox').querySelector('legend').focus({ preventScroll: true }); }
  }

  function score(h, a) {
    var s = 0, sk = SK[a.skill], gl = GL[a.goal], f = {};
    if (h.k.indexOf(sk) > -1) { s += 4; f.skill = 1; }
    if (h.g.indexOf(gl) > -1) { s += 3; f.goal = 1; }
    if (h.c > a.budget) { s -= 10; f.over = 1; } else { s += 1; }
    if (a.device === 0 && h.d === 'l') { s -= 3; f.lap = 1; }
    var gap = h.t - (a.time + 1);
    if (gap > 0) { s -= 2 * gap; f.tight = 1; } else { s += 1; }
    return { h: h, s: s + Math.random() * 0.4, f: f };
  }

  function findRank() {
    state.rank = HUSTLES.map(function (h) { return score(h, state.a); })
      .sort(function (x, y) { return y.s - x.s; }).slice(0, 6);
    state.pos = 0;
  }

  function why(r) {
    var h = r.h, f = r.f, a = state.a, sk = SK[a.skill], L = [];
    if (f.skill) {
      L.push(sk === 'begin' ? 'It is beginner-friendly. You do not need a special skill because AI does the heavy lifting while you add care and polish.' : 'It uses your strength in ' + SKN[a.skill] + ', which clients notice first.');
    } else {
      L.push('AI tools can cover skill gaps here, so you can learn as you earn.');
    }
    L.push(f.goal ? 'It lines up with your goal: "' + Q[3].opts[a.goal] + '".' : 'It can lead toward your goal ("' + Q[3].opts[a.goal] + '") once you have your first results.');
    L.push(f.over ? 'It usually needs a bit more than your ' + Q[1].opts[a.budget] + ' budget, so start with free tools and upgrade only after your first payment.' : 'You can start within your budget of ' + Q[1].opts[a.budget] + '.');
    L.push('Your ' + DEV[a.device] + (f.lap ? ' works, though a laptop makes this easier; use simple phone apps at first.' : ' is enough to do this.'));
    L.push(f.tight ? 'It works best with more time than ' + Q[4].opts[a.time].toLowerCase() + ', so begin with one small project at a time.' : 'It fits into ' + Q[4].opts[a.time].toLowerCase() + '.');
    return L;
  }

  function needs(h) {
    return ['A free AI assistant (Claude, ChatGPT or Gemini)'].concat(h.x, ['A way to reach and pay customers (WhatsApp, email, PayPal, bank transfer or Selar)']);
  }

  function plan(h) {
    var w = h.w, d = [
      ['Day 1', 'Choose one audience (such as ' + h.a + ') and write a one-line offer. Test your AI tool on 3 practice tasks.'],
      ['Day 2', 'Create 2 sample ' + w + ' with AI, then edit them by hand so they sound human and specific.']
    ];
    if (h.pr) {
      d.push(['Day 3', 'Turn your best sample into a simple product: clear title, cover image and a short description of who it helps.']);
      d.push(['Day 4', 'Open a free store page on Selar, Gumroad or Payhip. Upload it and set a starter price.']);
      d.push(['Day 5', 'Share a free preview in 3 communities where ' + h.a + ' hang out. Link to your store.']);
      d.push(['Day 6', 'Reply to every question, collect feedback and fix anything confusing in your product.']);
      d.push(['Day 7', 'Ask early buyers for a review, note what worked and plan your second product.']);
    } else {
      d.push(['Day 3', 'Collect your samples in one folder or page (Google Drive, Canva or phone gallery) and add a simple price list.']);
      d.push(['Day 4', 'List 20 people to contact, such as ' + h.a + '. Look in Facebook groups, Instagram, LinkedIn, WhatsApp communities and local businesses.']);
      d.push(['Day 5', 'Send 10 short personal messages offering a discounted first project. Mention one specific thing about each person.']);
      d.push(['Day 6', 'Follow up with everyone who replied. Deliver your first project quickly and ask for honest feedback.']);
      d.push(['Day 7', 'Ask for a testimonial, set your price for next week and send 10 more messages. Note what worked.']);
    }
    return d;
  }

  function firstStep(h) {
    return h.pr
      ? 'Open your AI assistant and ask it for 10 common problems faced by ' + h.a + '. Pick one to solve with your first ' + h.w + '.'
      : 'Open your AI assistant and create one sample of ' + h.w + ' for ' + h.a + '. Save it as your first portfolio piece.';
  }

  function li(arr) { return '<ul>' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }

  function renderResult() {
    var r = state.rank[state.pos], h = r.h, p = plan(h), out = '';
    out += '<p class="rs-head">Your recommended side hustle</p>';
    out += '<article class="card hero-card reveal"><span class="pill">' + (state.pos === 0 ? 'Best match' : 'Idea ' + (state.pos + 1) + ' of ' + state.rank.length) + '</span><h3>' + h.n + '</h3><p>' + h.s + '</p></article>';
    out += '<article class="card"><h3>Why it fits you</h3>' + li(why(r)) + '</article>';
    out += '<article class="card"><h3>What you need</h3>' + li(needs(h)) + '</article>';
    out += '<article class="card"><h3>Startup cost</h3><p>' + COST[h.c] + '</p></article>';
    out += '<article class="card"><h3>How you make money</h3><p>' + h.m + '</p></article>';
    out += '<article class="card"><h3>First customer</h3><p>' + h.f + '</p></article>';
    out += '<article class="card"><h3>7-day start plan</h3><ol class="plan">' + p.map(function (x) { return '<li><strong>' + x[0] + '</strong>' + x[1] + '</li>'; }).join('') + '</ol></article>';
    out += '<article class="card first"><h3>Expected first step</h3><p><strong>Today:</strong> ' + firstStep(h) + '</p></article>';
    out += '<div class="actions"><button type="button" class="btn" id="again">Generate Another Idea</button><button type="button" class="btn ghost" id="copy">Copy My Result</button><button type="button" class="btn ghost" id="edit">Change My Answers</button><button type="button" class="btn ghost" id="restart">Start Over</button></div><p class="toast" id="toast" role="status"></p>';
    $('result').innerHTML = out;
    $('result').hidden = false;
    $('promo').hidden = false;
    $('wizard').hidden = true;
  }

  function show() {
    renderResult();
    var el = $('result').querySelector('.rs-head');
    el.tabIndex = -1;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }

  function resultText() {
    var r = state.rank[state.pos], h = r.h, t = [];
    t.push('AI SIDE HUSTLE FINDER', '', 'My recommended side hustle: ' + h.n, h.s, '', 'Why it fits me:');
    why(r).forEach(function (x) { t.push('- ' + x); });
    t.push('', 'What I need:');
    needs(h).forEach(function (x) { t.push('- ' + x); });
    t.push('', 'Startup cost: ' + COST[h.c], 'How I make money: ' + h.m, 'First customer: ' + h.f, '', '7-day start plan:');
    plan(h).forEach(function (x) { t.push(x[0] + ': ' + x[1]); });
    t.push('', 'First step today: ' + firstStep(h));
    return t.join('\n');
  }

  function toast(m) { var t = $('toast'); if (t) { t.textContent = m; } }

  function copy() {
    var text = resultText();
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      toast(ok ? 'Copied. Paste it anywhere to save your plan.' : 'Copy failed. Press and hold the text to copy it manually.');
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast('Copied. Paste it anywhere to save your plan.'); }, fallback);
    } else { fallback(); }
  }

  function backToForm(reset) {
    if (reset) { state.a = {}; state.step = 0; } else { state.step = Q.length - 1; }
    $('result').hidden = true;
    $('promo').hidden = true;
    $('wizard').hidden = false;
    renderStep(true);
    $('wizard').scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  $('qbox').addEventListener('change', function (e) {
    if (e.target.name) { state.a[e.target.name] = parseInt(e.target.value, 10); $('err').textContent = ''; }
  });

  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (state.a[Q[state.step].key] === undefined) {
      $('err').textContent = 'Please choose an option to continue.';
      return;
    }
    if (state.step < Q.length - 1) { state.step++; renderStep(true); return; }
    for (var i = 0; i < Q.length; i++) {
      if (state.a[Q[i].key] === undefined) { state.step = i; renderStep(true); $('err').textContent = 'Please answer this question first.'; return; }
    }
    findRank();
    show();
  });

  $('back').addEventListener('click', function () { if (state.step > 0) { state.step--; renderStep(true); } });

  $('result').addEventListener('click', function (e) {
    var id = e.target.id;
    if (id === 'again') { state.pos = (state.pos + 1) % state.rank.length; show(); }
    else if (id === 'copy') { copy(); }
    else if (id === 'edit') { backToForm(false); }
    else if (id === 'restart') { backToForm(true); }
  });

  renderStep(false);
})();
