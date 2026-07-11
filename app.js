const bullets = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
const ordered = (items) => `<ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
const callout = (label, body) => `<aside class="callout"><span class="eyebrow">${label}</span>${body}</aside>`;
const card = (title, body) => `<div class="mini-card"><h3>${title}</h3><p>${body}</p></div>`;
const split = (cards) => `<div class="split-grid">${cards.join("")}</div>`;
const code = (body) => `<pre><code>${body}</code></pre>`;
const block = (title, body) => `<h2>${title}</h2>${body}`;
const makePage = (id, section, title, kicker, summary, content, status = "Published") => ({ id, section, title, kicker, summary, content, status });

const sections = [
  { title: "Start here", pages: ["welcome", "what-is-aios", "framework", "future-of-organizations"] },
  { title: "Philosophy", pages: ["manifesto", "founding-principles", "core-beliefs", "boring-platform", "capabilities-over-models"] },
  { title: "Organization", pages: ["organization-model", "business-and-products", "teams-and-workers", "partnerships-and-governance"] },
  { title: "AI workforce", pages: ["ai-workforce", "roles-vs-models", "designing-roles", "maturity-model"] },
  { title: "Work systems", pages: ["workflows-and-tasks", "workflow-design", "approvals-and-automation"] },
  { title: "Knowledge", pages: ["knowledge-systems", "organizational-memory", "decision-records"] },
  { title: "Architecture", pages: ["architecture-overview", "kernel", "runtime-and-capabilities", "plugin-architecture", "mission-control", "sdk"] },
  { title: "Implementation", pages: ["installation-method", "company-audit", "workflow-mapping", "knowledge-setup", "continuous-improvement"] },
  { title: "Founder playbook", pages: ["founder-playbook", "protecting-attention", "one-person-company", "operating-rhythm"] },
  { title: "Build in public", pages: ["build-in-public", "architecture-decisions", "what-failed", "roadmap"] },
  { title: "Community", pages: ["community", "aios-academy", "installations", "certified-implementers", "aios-100"] },
];

const P = {};

P.welcome = makePage("welcome", "Start here", "AIOS: The Operating System for AI-Native Organizations", "The public foundation", "An open handbook for founders building companies where humans, intelligent systems, and repeatable workflows operate together.", `
  <div class="hero"><span class="eyebrow">Open handbook · iDevelop LLC</span><h2>Build organizations that get better every time they work.</h2><p>AIOS is the public knowledge base and operating philosophy for the next generation of companies. Everything here is free to read, adapt, and share.</p><div class="hero-actions"><a class="button primary" href="#/what-is-aios">Start with the framework</a><a class="button" href="#/manifesto">Read the manifesto</a><a class="button" href="#/community">Join the builders</a></div></div>
  ${block("Why this exists", `<p>Most companies have tools, but not a shared operating model for knowledge, decisions, work, execution, and learning. AIOS makes that model explicit and usable.</p><p>This site publishes the ideas, architecture, playbooks, and lessons openly so entrepreneurs can build from the same foundation. The knowledge stays free. Community and done-for-you installations exist for people who want help applying it.</p>`)}
  ${callout("The prime directive", `<p>Humans define intent. The organization plans. The platform executes. Knowledge compounds.</p>`)}
  ${block("Choose your path", `<div class="section-grid"><a class="section-card" href="#/what-is-aios"><span class="eyebrow">10 minutes</span><h3>Understand AIOS</h3><p>Learn the core model and why organizations need an operating system.</p><span class="card-count">Start here →</span></a><a class="section-card" href="#/organization-model"><span class="eyebrow">Design</span><h3>Model your organization</h3><p>Map businesses, teams, roles, workers, partners, and governance.</p><span class="card-count">Explore organization →</span></a><a class="section-card" href="#/workflow-design"><span class="eyebrow">Build</span><h3>Structure your work</h3><p>Turn repeated work into workflows that can be delegated and improved.</p><span class="card-count">Explore work systems →</span></a><a class="section-card" href="#/installation-method"><span class="eyebrow">Implement</span><h3>Install AIOS</h3><p>Move from principles to a practical audit, blueprint, and operating cadence.</p><span class="card-count">See the method →</span></a></div>`)}
  ${block("What you will find here", `<p>The knowledge base is organized in layers: foundations first, then organization design, AI workforce, work systems, technical architecture, and implementation.</p>${bullets(["A clear language for human + AI organizations.", "A capability-first architecture that is not tied to a model vendor.", "Templates and practices that can be adapted by a solo founder or a growing team.", "A build-in-public record from iDevelop LLC, including decisions, failures, and changes."])}`)}
  <div class="quote-panel"><p>“The goal is not to replace people. The goal is to build organizations capable of accomplishing far more than any individual or traditional team could achieve alone.”</p><small>Founder letter · AIOS</small></div>
`, "Published");

P["what-is-aios"] = makePage("what-is-aios", "Start here", "What Is AIOS?", "Start here", "The shortest explanation of the AIOS idea and the problem it is designed to solve.", `
  ${block("The simple definition", `<p><strong>AIOS is an operating platform for digital organizations.</strong> It connects organizational knowledge, decisions, work, resources, and learning into a system that humans and intelligent workers can use together.</p><p>It is not one assistant and it is not one model. It is a shared operating layer that lets a company decide what matters, structure the work, assign execution, record what happened, and improve the next cycle.</p>`)}
  ${block("The problem", `<p>Today, most company knowledge is scattered across chat threads, project boards, documents, code repositories, and individual memory. AI tools can be powerful, but they are usually disconnected from the organization's actual context and operating rhythm.</p>${bullets(["Decisions disappear into conversations.", "Repeated work is reinvented instead of systematized.", "AI tools are chosen by brand rather than capability.", "The founder becomes the integration layer between every system."])}`)}
  ${block("The AIOS response", code("Organization → Knowledge → Work → Resources → Outcomes → Learning"))}
  ${block("What AIOS is not", split([card("Not another chatbot", "AIOS can include assistants, but the core unit is structured work, not conversation."), card("Not a project board", "Tasks matter, but only inside workflows with context, dependencies, approvals, and outcomes."), card("Not a model wrapper", "Models are replaceable implementations behind stable capabilities."), card("Not a promise of autonomy", "The maturity path starts with assistance and earns delegation through evidence.")]))}
  ${callout("A useful test", `<p>If a capability helps iDevelop run better and can be reused across future products or businesses, it may belong in the platform. If it only serves one application, it probably belongs in a product.</p>`)}
`, "Published");

P.framework = makePage("framework", "Start here", "The AIOS Framework", "The five foundations", "The compact model that everything else in AIOS should connect back to.", `
  ${block("The loop", code("Organization → Knowledge → Work → Resources → Outcomes → Learning → better organization"))}
  ${split([card("Organization", "Who is responsible, who participates, and how the company is structured."), card("Knowledge", "What the company knows, remembers, documents, and decides."), card("Work", "What needs to happen, why it matters, and how it is sequenced."), card("Resources", "The humans, AI workers, software, APIs, time, and money available to execute."), card("Learning", "The feedback, metrics, lessons, and changes that make the next cycle better.")])}
  ${block("How to use the framework", `<p>When a new idea appears, locate it in the loop:</p>${ordered(["Does it change who owns or participates? Start with Organization.", "Does it capture or retrieve information? Start with Knowledge.", "Does it structure an outcome? Start with Work.", "Does it allocate capacity or execution? Start with Resources.", "Does it measure and improve the system? Start with Learning."])}`)}
  ${callout("The discipline", `<p>If a proposal cannot explain where it belongs in this loop, it is probably still an idea rather than an implementable capability.</p>`)}
`, "Published");

P["future-of-organizations"] = makePage("future-of-organizations", "Start here", "The Future of Organizations", "Foundational essay", "The transition from people using software to organizations operating with intelligent systems.", `
  ${block("Three operating eras", `<p>Organizations evolve when the most important source of leverage changes. The shape of work changes with it.</p>${code("Industrial company: Capital → People → Processes → Tools<br><br>Software company: People → Software → Processes → Customers<br><br>AI-native company: Intent → AIOS → Human + AI teams → Systems → Customers")}`)}
  ${block("What changes when intelligence becomes abundant", `<p>When information and execution become cheaper, coordination becomes the scarce resource. The advantage moves from owning more tools to designing a better system for deciding, delegating, and learning.</p>${bullets(["Knowledge becomes infrastructure.", "Roles become capability contracts.", "Workflows become composable company assets.", "The founder becomes a designer of systems, not only a manager of tasks."])}`)}
  ${block("The opportunity for entrepreneurs", `<p>Large companies have historically had the advantage of dedicated operations, process design, analysts, and internal systems. AIOS is designed to make those organizational capabilities accessible to smaller teams without requiring a giant bureaucracy.</p><p>The point is not to imitate a large company. It is to give a small company a clearer, more responsive operating layer.</p>`)}
  ${callout("The category", `<p>AIOS uses “AI-native organization” to describe a company designed around intelligent systems from the beginning—not a traditional company that added a few AI tools later.</p>`)}
`, "Published");

P.manifesto = makePage("manifesto", "Philosophy", "The AIOS Manifesto", "Genesis document", "Build things that outlive models. Build organizations, not conversations.", `
  ${block("Build things that outlive models", `<p>The AI industry moves in months. Platforms should last decades. AIOS will not be defined by Claude, GPT, or any single provider. It will be defined by the organizational capabilities that remain valuable when those implementations change.</p>`)}
  ${block("Build for organizations, not conversations", `<p>Conversations are ephemeral. Organizations persist. Knowledge, culture, workflows, and decisions compound. AIOS exists to give those durable assets a shared operating layer.</p>`)}
  ${block("Keep the kernel small", `<p>Every feature added to the kernel must justify its existence. When in doubt, move it to a plugin. A small kernel creates room for products, experiments, and future workers to evolve without destabilizing the platform.</p>`)}
  ${block("Learn from reality", `<p>Architecture is a hypothesis. Real work validates it. We will change the platform when evidence demands it, not when novelty tempts it.</p>`)}
  ${block("Build the platform we want to operate", `<p>AIOS is built for iDevelop LLC first. We will use it every day before asking other entrepreneurs to trust it. Proven internal capability is the first product validation.</p>`)}
  ${block("Humans set direction", `<p>AI amplifies execution. Humans remain responsible for vision, ethics, priorities, relationships, and accountability. The goal is greater human achievement, not less human responsibility.</p>`)}
  ${callout("One sentence", `<p>AIOS exists to give organizations leverage—not by replacing people, but by giving every person a system that helps them think, coordinate, execute, and continuously improve.</p>`)}
`, "Published");

P["founding-principles"] = makePage("founding-principles", "Philosophy", "Founding Principles", "The rules we refuse to break", "Ten practical constraints for keeping an ambitious platform clear, useful, and durable.", `
  ${block("The ten principles", ["AIOS exists to increase organizational leverage.", "AIOS is built for iDevelop first.", "The platform is permanent; products and vendors are replaceable.", "Every abstraction must earn its place.", "Knowledge is a company asset.", "Simplicity wins when outcomes are equal.", "Measure outcomes, not activity.", "Build with evidence.", "Protect the founder's attention.", "Build for ten years."].map((item, index) => `<div class="numbered-card"><span class="number">${index + 1}</span><p>${item}</p></div>`).join(""))}
  ${block("How principles become decisions", `<p>Principles are only useful when they constrain real choices. An architecture review, product proposal, or workflow should be able to point to the principles it relies on and the tradeoffs it creates.</p>${bullets(["Contracts before implementations.", "Capabilities before models.", "Workflows before prompts.", "Events before hidden coupling.", "Documentation before automation."])}`)}
  ${callout("Friday review", `<p>Ask: What did AIOS make easier this week? What unnecessary complexity did we introduce?</p>`)}
`, "Published");

P["core-beliefs"] = makePage("core-beliefs", "Philosophy", "Core Beliefs", "The assumptions underneath the system", "The beliefs that shape the AIOS worldview before any particular technology choice.", `
  ${block("Organizations are the next software layer", `<p>Software changed how people work. Intelligent systems will change how organizations work. The opportunity is not only to make tasks faster, but to make the organization itself more legible and more capable.</p>`)}
  ${block("Knowledge is the foundation of intelligence", `<p>AI without organizational context is a general tool. AI plus a well-maintained knowledge layer becomes a company capability. Memory, standards, decisions, and examples are infrastructure.</p>`)}
  ${block("Work should become structured", `<p>Random conversations become explicit decisions. Decisions become workflows. Workflows become repeatable systems. Systems create leverage.</p>`)}
  ${block("Capability matters more than vendor", `<p>A company should be able to replace the implementation behind a capability without redesigning the work. This keeps the organization resilient as models and tools change.</p>`)}
  ${block("Human judgment remains valuable", `<p>AI can generate, compare, summarize, route, and execute. Humans still set direction, decide what matters, manage risk, and create trust.</p>`)}
`, "Published");

P["boring-platform"] = makePage("boring-platform", "Philosophy", "The Boring Platform Principle", "Longevity over novelty", "Why the most durable infrastructure is predictable, explicit, documented, and easy to replace.", `
  ${block("Boring is a feature", `<p>A boring platform is not lifeless. It is predictable, stable, observable, and easy for the next human or AI worker to understand. Boring systems create room for ambitious products above them.</p>`)}
  ${block("What boring means in practice", bullets(["Prefer explicit interfaces over hidden magic.", "Prefer a small number of understood dependencies.", "Prefer a simple local implementation before distributed infrastructure.", "Prefer reversible choices and documented tradeoffs.", "Prefer measuring a bottleneck before optimizing it."]))}
  ${block("What we deliberately defer", `<p>AIOS does not need Kubernetes, vector databases, event sourcing, microservices, or autonomous planning to prove its first workflow. Those may become useful later. They are not badges of seriousness.</p>`)}
  ${callout("ADR-0001", `<p>AIOS optimizes for longevity over novelty. The consequence is slower initial complexity growth and faster long-term comprehension.</p>`)}
`, "Published");

P["capabilities-over-models"] = makePage("capabilities-over-models", "Philosophy", "Capabilities Over Models", "The routing philosophy", "Describe the work by what it needs, then choose the best available implementation.", `
  ${block("The wrong question", `<p>“Should Claude do this?” is a fragile way to design an organization. The model may change, pricing may change, access may change, and the capability may outlive the provider.</p>`)}
  ${block("The durable question", `<p>“What capability does this work require?” might lead to architecture review, code generation, research, video rendering, copywriting, data analysis, or human judgment.</p>${code("Workflow → Required capability → Policy + availability + cost + quality → Worker → Implementation → Model or tool")}`)}
  ${block("Capability contracts", `<p>A capability should declare its inputs, expected outputs, quality criteria, permissions, cost limits, and fallback behavior. That makes it testable and replaceable.</p>`)}
  ${callout("Resilience", `<p>If a provider disappears tomorrow, the workflow should remain intact. Only routing and implementation configuration should change.</p>`)}
`, "Published");

P["organization-model"] = makePage("organization-model", "Organization", "The Organization Model", "Model the company before you automate it", "A hierarchy for representing one company today and many businesses and partnerships later.", `
  ${block("The hierarchy", code("Organization → Businesses → Products + Teams → Projects → Workflows → Tasks → Outcomes"))}
  ${block("Today: iDevelop LLC", `<p>AIOS is designed for one organization first: <strong>iDevelop LLC</strong>. The initial operating scope includes the software business and the products being developed inside it: AgencyOS, HireOS, SiteRevive, and the rebuilt Mission Control.</p><p>The model prepares for additional businesses and partnerships without forcing multi-company operational complexity on day one.</p>`)}
  ${block("Why organization comes first", `<p>Products change. Teams change. Partnerships change. The organization is the stable owner of identity, policies, shared knowledge, and resources. This also makes it possible to isolate private operating data from the public AIOS knowledge base.</p>`)}
  ${callout("Boundary", `<p>Public AIOS teaches the model. Private iDevelop OS contains customers, financials, private workflows, credentials, and proprietary operating data.</p>`)}
`, "Published");

P["business-and-products"] = makePage("business-and-products", "Organization", "Businesses, Products, and Shared Services", "Grow without rewriting the platform", "Separate profit centers, customer-facing products, technical projects, and capabilities shared across the organization.", `
  ${block("The distinction", `<p>A <strong>business</strong> is a profit center or operating unit. A <strong>product</strong> is an offering owned by a business. A <strong>project</strong> is a time-bounded initiative that moves a product or capability forward.</p>`)}
  ${block("The iDevelop starting point", code("iDevelop LLC → Software business → AgencyOS / HireOS / SiteRevive / Mission Control"))}
  ${block("Shared services", bullets(["Engineering standards and tooling.", "Identity, permissions, and governance.", "Knowledge and documentation systems.", "AI provider access, budgets, and resource policies.", "Finance, people, and operating cadence where appropriate."]))}
  ${block("Product boundary", `<p>A product can use AIOS services. It should not define the platform's core behavior or import private implementation details from another product.</p>`)}
`, "Published");

P["teams-and-workers"] = makePage("teams-and-workers", "Organization", "Teams, Roles, and Workers", "A language for accountability", "Use teams and roles to make ownership visible before choosing any specific AI implementation.", `
  ${block("The hierarchy", code("Department → Team → Role → Worker → Capability → Implementation"))}
  ${block("Example: engineering", `<p>Engineering is a department. Platform Engineering is a team. Senior Engineer is a role. Engineering Worker #4 is assigned to bounded capabilities such as backend implementation, testing, and documentation. Codex is one possible implementation behind that worker.</p>`)}
  ${block("Every role should declare", bullets(["Mission and responsibilities.", "Inputs and expected outputs.", "Authority and decision limits.", "Required capabilities.", "KPIs and review cadence.", "Escalation rules and failure behavior."]))}
  ${callout("No model names in the org chart", `<p>Model names belong in implementation and routing configuration. Organizational roles should stay stable.</p>`)}
`, "Published");

P["partnerships-and-governance"] = makePage("partnerships-and-governance", "Organization", "Partnerships and Governance", "Prepare for shared work safely", "A boundary for joint ventures, implementation partners, approvals, permissions, and auditability.", `
  ${block("Partnerships", `<p>AIOS should represent shared projects and shared knowledge without exposing the private operating data of either organization. A partnership record includes identity, agreements, shared work, permissions, reporting, and review dates.</p>`)}
  ${block("Governance is more than access control", `<p>Permissions answer who can access something. Governance answers what may happen, under which policy, with what evidence, and who remains accountable.</p>`)}
  ${block("High-risk boundaries", bullets(["Production deployments and irreversible migrations.", "Security, identity, and secret changes.", "Data deletion and high-impact customer changes.", "Large spending or vendor commitments.", "Legal, financial, or reputational claims."]))}
  ${callout("The goal", `<p>Governance should make safe action easier to repeat—not make every action require a committee.</p>`)}
`, "Published");

P["ai-workforce"] = makePage("ai-workforce", "AI workforce", "The AI Workforce Model", "Treat intelligence as a participant", "A worker is a bounded participant in a role with context, permissions, capabilities, outputs, and accountability.", `
  ${block("What is an AI worker?", `<p>An AI worker can receive work, use approved capabilities, produce artifacts, emit events, and escalate when it reaches its limits. It can be powered by one model, several tools, or a human-in-the-loop process.</p>`)}
  ${block("Worker contract", code("Worker: identity, role, capabilities, inputs, outputs, permissions, quality criteria, budgets, limits, escalation, review"))}
  ${block("What makes a worker useful", bullets(["It has a clear job to be done.", "It can find the right context.", "It knows what it is allowed to change.", "It produces reviewable artifacts.", "It records uncertainty and failure.", "It improves through feedback."]))}
  ${callout("AI is not the org chart", `<p>AI is one kind of workforce. Humans, automations, APIs, and servers can participate in the same workflow model.</p>`)}
`, "Published");

P["roles-vs-models"] = makePage("roles-vs-models", "AI workforce", "Roles vs. Models", "Separate accountability from implementation", "Roles remain stable while models, tools, and providers change underneath them.", `
  ${block("A role is an organizational promise", `<p>“Principal Engineer” says what kind of responsibility exists. “Claude Opus” says one implementation that may help satisfy it today. Confusing the two makes the organization fragile.</p>`)}
  ${block("The mapping", code("Role: Principal Engineer → required capability: architecture review → Worker: Architecture Reviewer #1 → current model/tool selection"))}
  ${block("Benefits", bullets(["Replace a provider without retraining the organization.", "Compare multiple implementations behind the same capability.", "Measure role outcomes instead of token volume.", "Give human hires the same clear contract as AI workers."]))}
`, "Published");

P["designing-roles"] = makePage("designing-roles", "AI workforce", "Designing AI Roles", "A practical role template", "Turn a vague assistant into an accountable worker with a narrow, testable charter.", `
  ${block("Role charter", code("Role: Content Producer | Mission: move approved ideas to publish-ready packages | Inputs: brief, audience, standards | Outputs: script, asset list, metadata, review notes | Authority: draft and revise; cannot publish without approval | Metrics: cycle time, approval rate, rework, performance"))}
  ${block("Keep the first version narrow", `<p>A role should be small enough to evaluate. Do not combine strategy, execution, approval, and analytics into one “marketing AI.” Separate responsibilities so the organization can see what is working.</p>`)}
  ${block("Role design checklist", ordered(["Name the outcome.", "List the inputs and source-of-truth documents.", "Define what the worker may change.", "Define what requires approval.", "Choose the smallest set of capabilities.", "Set a review cadence and success measure."]))}
`, "Published");

P["maturity-model"] = makePage("maturity-model", "AI workforce", "AI Workforce Maturity", "Earn autonomy", "A five-level model for moving from isolated assistance to an organization that can safely delegate workflows.", `
  ${block("The levels", ["Assistant: AI helps a human complete a task.", "Employee: AI owns a bounded task with review.", "Team member: AI participates in a workflow with dependencies and shared knowledge.", "Department: multiple roles coordinate around a measurable outcome.", "Organization: AIOS coordinates departments, budgets, learning, and governance."].map((item, index) => `<div class="numbered-card"><span class="number">${index + 1}</span><p>${item}</p></div>`).join(""))}
  ${block("Promotion criteria", `<p>Move up a level only when quality, observability, recovery, and governance are good enough. A faster worker that creates hidden risk is not a more mature capability.</p>${bullets(["Stable inputs and outputs.", "Known failure modes.", "Human approval at the right boundary.", "Useful logs and artifact history.", "A measured improvement in cycle time or quality."])}`)}
`, "Published");

P["workflows-and-tasks"] = makePage("workflows-and-tasks", "Work systems", "Workflows and Tasks", "From intent to knowledge", "A complete unit of work should have an outcome, an owner, a path, an artifact, and a lesson.", `
  ${block("The chain", code("Goal → Project → Workflow → Task → Artifact → Event → Knowledge"))}
  ${block("Workflow anatomy", bullets(["Trigger, purpose, and success criteria.", "Inputs and source-of-truth context.", "Atomic tasks and dependencies.", "Capability requirements and owners.", "Approval gates, retries, and failure behavior.", "Artifacts, events, and learning outputs."]))}
  ${block("Task quality test", `<p>Could a capable worker complete this without asking what “done” means? If not, the task needs a better contract.</p>`)}
  ${callout("Example", `<p>Produce a video: research → script → storyboard → assets → voice → Remotion assembly → render → quality review → publish → analytics.</p>`)}
`, "Published");

P["workflow-design"] = makePage("workflow-design", "Work systems", "Workflow Design", "Turn repeated work into a system", "A workflow is a reusable recipe for producing an outcome with clear inputs, tasks, gates, and learning.", `
  ${block("Design it in this order", ordered(["Name the outcome in plain language.", "Define what must be true for success.", "List the minimum inputs and trusted documents.", "Break the work into atomic tasks.", "Mark dependencies and safe parallel work.", "Add approvals at consequential boundaries.", "Define what should be captured for the next run."]))}
  ${block("Good tasks", bullets(["Create the login endpoint and tests.", "Review the authentication migration for rollback risk.", "Draft three video hooks for the approved topic.", "Update the deployment guide after the infrastructure change."]))}
  ${block("Bad tasks", bullets(["Build the whole product.", "Make the copy better.", "Finish the project.", "Fix everything."]))}
`, "Published");

P["approvals-and-automation"] = makePage("approvals-and-automation", "Work systems", "Approvals and Automation", "Make repeatability safe", "Automate proven work while keeping humans at consequential boundaries.", `
  ${block("Default approval boundaries", bullets(["Production deployments and irreversible migrations.", "Security, identity, and secret changes.", "Data deletion or high-impact customer changes.", "Large spending or vendor commitments.", "Legal, financial, or reputational claims."]))}
  ${block("Automation sequence", code("Observe → Document → Measure → Standardize → Automate → Review → Improve"))}
  ${block("Guardrails", `<p>Every automation needs an owner, a scope, a failure notification, a retry rule, and a way to pause it. Automation should be easier to inspect than the manual process it replaces.</p>`)}
  ${callout("Attention, not bureaucracy", `<p>Well-placed approvals protect attention by reducing the number of things the founder has to monitor.</p>`)}
`, "Published");

P["knowledge-systems"] = makePage("knowledge-systems", "Knowledge", "Knowledge Systems", "A company brain needs structure", "Turn documents, decisions, lessons, and standards into usable organizational intelligence.", `
  ${block("A public knowledge tree", code("Start Here → Philosophy → Organization → AI Workforce → Work Systems → Knowledge → Architecture → Implementation → Founder Playbook → Build in Public → Community"))}
  ${block("Every knowledge item should have", bullets(["A clear title and purpose.", "An owner and review status.", "Links to related concepts.", "Examples or evidence where useful.", "A last-reviewed date.", "A path for feedback or change."]))}
  ${block("Public vs. private", `<p>Public knowledge teaches the reusable framework. Private knowledge contains customers, financials, credentials, proprietary strategies, and internal operating details. The same concepts can exist in both layers without exposing private data.</p>`)}
`, "Published");

P["organizational-memory"] = makePage("organizational-memory", "Knowledge", "Organizational Memory", "Make the company remember", "Memory is the durable context that prevents the organization from rediscovering the same lesson every week.", `
  ${block("Memory is not chat history", `<p>Chat can contain useful material, but memory should be distilled into durable, findable artifacts: preferences, lessons, decisions, constraints, and patterns that can change future behavior.</p>`)}
  ${split([card("Preferences", "How the organization likes to work, communicate, design, and review."), card("Lessons", "What failed, what worked, and what should change next time."), card("Decisions", "The chosen direction, alternatives considered, and consequences."), card("Constraints", "Budgets, policies, technical limits, legal or customer boundaries.")])}
  ${callout("The test", `<p>Can a new worker find the relevant context at the moment a decision is made? If not, memory is only storage.</p>`)}
`, "Published");

P["decision-records"] = makePage("decision-records", "Knowledge", "Decision Records", "Remember why", "A lightweight format for keeping architecture and operating decisions from becoming folklore.", `
  ${block("Decision record template", code("Decision → Status → Context → Options → Choice → Consequences → Review date"))}
  ${block("What deserves a record", bullets(["A change to platform boundaries.", "A new dependency or provider.", "A policy that affects autonomy or risk.", "A product decision that changes shared services.", "A lesson that changes a standard or workflow."]))}
  ${block("Why it helps workers", `<p>A decision record provides not just the answer but the reasoning. That reduces repeated debates and helps future workers distinguish an intentional constraint from an accidental implementation detail.</p>`)}
`, "Published");

P["architecture-overview"] = makePage("architecture-overview", "Architecture", "AIOS Platform Overview", "The technical shape", "A stable platform boundary for a small kernel, an execution runtime, a public SDK, and replaceable applications.", `
  ${block("The stack", code("AIOS Platform → Kernel → Runtime → SDK → Mission Control → Products"))}
  ${block("Kernel responsibilities", bullets(["Identity", "Events", "Work", "Knowledge", "Resources"]))}
  ${block("Dependency direction", `<p>Products and interfaces depend on the platform. The platform does not import product business logic. Mission Control is a client of the platform, not the source of truth for it.</p>`)}
  ${block("The first implementation", `<p>Start locally, use clear interfaces, and prove one workflow end to end. Add distributed infrastructure only when a real workload requires it.</p>`)}
  ${callout("Architecture freeze v0.1", `<p>The conceptual architecture is stable enough to build. New top-level concepts require an RFC and evidence that they remove complexity or unlock a real capability.</p>`)}
`, "Published");

P.kernel = makePage("kernel", "Architecture", "The AIOS Kernel", "Keep the foundation small", "The kernel has five responsibilities: identity, events, work, knowledge, and resources.", `
  ${split([card("Identity", "Who or what is participating, and what is it allowed to do?"), card("Events", "What happened, and who needs to know?"), card("Work", "What outcomes, workflows, tasks, and artifacts exist?"), card("Knowledge", "What does the organization know, remember, and decide?"), card("Resources", "What humans, tools, models, time, money, and capacity can execute work?")])}
  ${block("The kernel boundary", `<p>If a component is required for every AIOS installation, it may belong in the kernel. If it exists to serve a particular interface, product, department, or provider, it should be a runtime capability or plugin.</p>`)}
  ${block("First proof", `<p>Register a worker, create a workflow, generate a task, route by capability, execute, emit an event, store an artifact, and record a lesson.</p>${code("Workflow → Task → Worker → Artifact → Event → Knowledge")}`)}
  ${callout("Kernel rule", `<p>The kernel should fit on one whiteboard. If it grows every time a new product has an idea, the platform is losing its boundary.</p>`)}
`, "Published");

P["runtime-and-capabilities"] = makePage("runtime-and-capabilities", "Architecture", "Runtime and Capabilities", "Bring the kernel to life", "The runtime coordinates workflows and workers through stable capability contracts.", `
  ${block("Runtime responsibilities", bullets(["Run workflows and manage task state.", "Schedule and queue work.", "Match required capabilities to available workers.", "Apply approvals, limits, and retry policies.", "Capture artifacts, events, logs, and metrics."]))}
  ${block("Capability definition", code("Capability: code-generation | Inputs: task + repository context | Outputs: patch + tests + notes | Quality: tests pass and scope respected | Permissions: branch only | Fallback: human engineer or alternate implementation"))}
  ${block("Routing signals", bullets(["Required quality and complexity.", "Availability and latency.", "Cost and budget.", "Permissions and data boundaries.", "Historical performance.", "Human preference or policy."]))}
  ${callout("Start simple", `<p>An in-process event bus, a local task store, and a mock worker are enough to validate the runtime before infrastructure grows around it.</p>`)}
`, "Published");

P["plugin-architecture"] = makePage("plugin-architecture", "Architecture", "Plugin Architecture", "Keep the kernel replaceable", "Everything that is not universal should be able to evolve as a plugin, product, or implementation.", `
  ${block("Plugin contract", code("Manifest → Identity → Capabilities → Dependencies → Events → Configuration → Health → Permissions → Upgrade behavior"))}
  ${block("Examples", bullets(["Memory providers: local files, database, vector, hybrid.", "Resource providers: local machine, cloud worker, render queue.", "Integrations: GitHub, Slack, Figma, Stripe, Telegram.", "Applications: Mission Control, AgencyOS, HireOS, SiteRevive."]))}
  ${block("The non-negotiable", `<p>Plugins may depend on stable platform contracts. The kernel must not import product logic or provider-specific assumptions.</p>`)}
`, "Published");

P["mission-control"] = makePage("mission-control", "Architecture", "Mission Control", "The organization interface", "The existing Mission Control is treated as a legacy reference; Mission Control v2 will be rebuilt as a client of AIOS.", `
  ${block("The boundary", `<p>Mission Control should show the state of the organization and provide a safe control surface. It should not become the place where business logic, routing rules, or hidden state lives.</p>`)}
  ${block("First useful surface", bullets(["View organization and product health.", "Inspect workflows, tasks, artifacts, and events.", "Search knowledge according to permissions.", "Review pending approvals.", "Launch or pause approved workflows.", "See what needs founder judgment and what is already handled."]))}
  ${block("Rebuild strategy", `<p>Start with the API and object model. Build the new interface only after the platform can expose stable state. The legacy application can inform product requirements, but it should not dictate the new architecture.</p>`)}
  ${callout("Design principle", `<p>Mission Control should reduce the founder's attention load. If it becomes another dashboard to monitor constantly, it has missed the point.</p>`)}
`, "Published");

P.sdk = makePage("sdk", "Architecture", "The AIOS SDK", "Build on the platform", "Stable SDK contracts for plugins, workers, workflows, and integrations.", `
  ${split([card("Plugin SDK", "Register a product or provider with manifests, capabilities, events, and health checks."), card("Worker SDK", "Define inputs, outputs, tools, permissions, quality, and escalation behavior."), card("Workflow SDK", "Declare triggers, tasks, dependencies, approvals, retries, and artifacts."), card("Integration SDK", "Connect external systems through scoped credentials and normalized events.")])}
  ${block("SDK philosophy", `<p>SDKs should make the right architecture the easiest path. They should hide infrastructure details without hiding behavior. Every public interface needs examples, versioning, and a compatibility story.</p>`)}
`, "Published");

P["installation-method"] = makePage("installation-method", "Implementation", "The AIOS Installation Method", "From philosophy to practice", "A four-phase method for moving a real organization from scattered tools to a coherent operating layer.", `
  ${block("Phase 1: Audit", `<p>Understand the business model, teams, repeated work, knowledge sources, tools, bottlenecks, and risk boundaries. Do not automate before you can describe the current system.</p>`)}
  ${block("Phase 2: Blueprint", `<p>Design the organization model, AI workforce, workflows, knowledge architecture, permissions, approval gates, and measures of success.</p>`)}
  ${block("Phase 3: Install", `<p>Set up the knowledge layer, task and workflow conventions, worker roles, integrations, notifications, and the first useful operating rhythm.</p>`)}
  ${block("Phase 4: Improve", `<p>Review outcomes, remove friction, update templates, change routing, and add capabilities only when real work proves the need.</p>`)}
  ${callout("The first installation", `<p>Choose one real workflow that happens often, matters to the business, and is safe enough to instrument. A working loop creates better evidence than a large speculative blueprint.</p>`)}
`, "Published");

P["company-audit"] = makePage("company-audit", "Implementation", "Company Audit", "Map reality before designing systems", "A founder-friendly audit for understanding where AIOS can create leverage first.", `
  ${block("Audit the organization", bullets(["What businesses, products, and partnerships exist?", "Which teams and people own the work?", "Where does the founder remain the integration layer?", "What is shared across the organization?", "What must remain private or restricted?"]))}
  ${block("Audit the work", bullets(["Which workflows repeat weekly?", "Where do tasks wait for context or approval?", "What work is high-volume but low-risk?", "What work is high-impact and requires human judgment?", "What outputs are already produced but not reused?"]))}
  ${block("Audit the knowledge", bullets(["Where do decisions live?", "Which documents are trusted?", "What knowledge is trapped in one person's head?", "What examples define quality?", "What should never be exposed publicly?"]))}
  ${callout("Audit output", `<p>Finish with the top three leverage opportunities, top three risks, and one workflow that should become the first AIOS proof.</p>`)}
`, "Published");

P["workflow-mapping"] = makePage("workflow-mapping", "Implementation", "Workflow Mapping", "Make the invisible visible", "A method for turning how work actually happens into a workflow that can be improved.", `
  ${block("Map the current state", ordered(["Name the outcome and who receives it.", "List the trigger and raw inputs.", "Write every step, including waiting, rework, and handoffs.", "Mark decisions and who makes them.", "Capture artifacts produced at each stage.", "Record common failure modes and recovery steps."]))}
  ${block("Design the future state", `<p>Remove unnecessary handoffs, make context explicit, define atomic tasks, add safe parallelism, and place approval gates where risk actually changes.</p>`)}
  ${block("Measure the difference", bullets(["Cycle time.", "Founder or expert attention required.", "Rework and error rate.", "Approval latency.", "Artifact completeness.", "Knowledge captured for the next run."]))}
`, "Published");

P["knowledge-setup"] = makePage("knowledge-setup", "Implementation", "Knowledge Setup", "Start with a usable company brain", "A minimum viable information architecture for an organization that wants to work with AI safely.", `
  ${block("The first folders", code("knowledge/organization · products · workflows · standards · decisions · lessons · templates · private"))}
  ${block("Start with high-leverage documents", bullets(["Company overview and priorities.", "Product and customer context.", "Coding or brand standards.", "The first three workflows.", "Decision records for current architecture.", "A lessons-learned log."]))}
  ${block("Retrieval rules", `<p>Use clear names, stable IDs, ownership, review dates, and links between related documents. A smaller, trusted knowledge base is better than a giant unmaintained archive.</p>`)}
  ${callout("Privacy", `<p>Public teaching content and private operating knowledge should share concepts, not credentials or confidential data.</p>`)}
`, "Published");

P["continuous-improvement"] = makePage("continuous-improvement", "Implementation", "Continuous Improvement", "Make the loop get better", "A weekly operating practice for improving the platform through real work instead of speculation.", `
  ${block("The weekly review", ordered(["What did AIOS make easier?", "Where did work wait, fail, or require rework?", "Which knowledge was missing?", "Which approval or policy felt wrong?", "What should be simplified before anything new is added?", "What is the smallest change that increases capability next week?"]))}
  ${block("Maturity signals", bullets(["More work completes without hidden founder intervention.", "New workers can find context quickly.", "Provider changes do not break workflows.", "Artifacts and decisions are easier to review.", "The platform is removing more friction than it creates."]))}
  ${callout("The discipline", `<p>Do not confuse more automation with more maturity. A simpler system that reliably produces a good outcome is more mature than a complex system with impressive demos.</p>`)}
`, "Published");

P["founder-playbook"] = makePage("founder-playbook", "Founder playbook", "The Founder Playbook", "Build systems that protect judgment", "The founder's job is to create direction and leverage—not to remain the integration layer for every task.", `
  ${block("The founder's scarce resource", `<p>As tools become abundant, the scarce resource is clear attention. AIOS should reduce cognitive load by showing what needs judgment, what can wait, what is blocked, and what has already been handled.</p>`)}
  ${block("Move up the leverage ladder", ordered(["Do the work once and observe it.", "Document the outcome and standard.", "Turn the repeatable part into a workflow.", "Delegate bounded tasks to workers.", "Review the system instead of every task.", "Use freed attention for strategy, customers, and relationships."]))}
  ${block("Founder dashboard questions", bullets(["Where is the organization healthy?", "What is waiting for my decision?", "What is at risk?", "Which capability would create the most leverage next?", "What did we learn this week?"]))}
`, "Published");

P["protecting-attention"] = makePage("protecting-attention", "Founder playbook", "Protecting Founder Attention", "The most expensive resource", "A practical filter for keeping the founder informed without making the founder monitor everything.", `
  ${block("The attention filter", code("Need founder judgment now? yes → concise decision brief | no → route to team, workflow, or automation"))}
  ${block("Good brief design", bullets(["State the decision in one sentence.", "Show the relevant context, not the entire history.", "Offer a recommendation and alternatives.", "Name the risk and reversibility.", "Make the next action explicit."]))}
  ${callout("The test", `<p>Mission Control should help you make better decisions in less time. If it makes you watch more screens, simplify the interface.</p>`)}
`, "Published");

P["one-person-company"] = makePage("one-person-company", "Founder playbook", "Building a One-Person Company", "Use leverage before headcount", "A model for a founder who wants to create company-level capability before building a large team.", `
  ${block("The operating model", `<p>A one-person company is not one person doing everything. It is one person setting direction while a system captures knowledge, structures work, coordinates workers, and keeps the founder focused on the highest-leverage decisions.</p>`)}
  ${split([card("Build loop", "Turn product ideas into scoped, reviewable implementation work."), card("Content loop", "Turn knowledge into scripts, assets, publishing, and feedback."), card("Operating loop", "Turn priorities, metrics, approvals, and lessons into a weekly rhythm.")])}
  ${block("Start small", `<p>Do not build a grand autonomous organization before one useful workflow works. Make one repeated, important process boring and dependable.</p>`)}
`, "Published");

P["operating-rhythm"] = makePage("operating-rhythm", "Founder playbook", "The Founder Operating Rhythm", "Turn the system into a habit", "A lightweight daily, weekly, and monthly cadence for using AIOS as an operating system rather than a static archive.", `
  ${block("Daily", bullets(["Review the brief: decisions, risks, blockers, and completed work.", "Choose the few outcomes that deserve attention.", "Approve or delegate the next actions.", "Capture decisions that will matter again."]))}
  ${block("Weekly", bullets(["Review outcomes and operating metrics.", "Improve one workflow or knowledge gap.", "Retire stale tasks and clarify ownership.", "Choose the smallest platform capability that increases leverage next week."]))}
  ${block("Monthly", bullets(["Review product and business priorities.", "Audit permissions, budgets, and integrations.", "Examine what is becoming repeatable.", "Decide what remains internal and what is ready to publish or productize."]))}
`, "Published");

P["build-in-public"] = makePage("build-in-public", "Build in public", "Building AIOS in Public", "The living timeline", "A transparent record of the platform, the knowledge base, and the operating company evolving together.", `
  ${block("Genesis", `<p><strong>July 2026:</strong> The AIOS foundation is consolidated into a public knowledge base for entrepreneurs. The first architecture is intentionally small: organization, knowledge, work, resources, and learning.</p>`)}
  ${block("The first milestones", ["Foundation: publish the manifesto, principles, and framework.", "Kernel proof: run one workflow end to end with a mock worker.", "Runtime: add capability routing, events, approvals, and local persistence.", "Mission Control v2: rebuild the interface as a client of the platform.", "Internal use: run a real iDevelop workflow through the system.", "Public learning: turn lessons and failures into new documentation."].map((item, index) => `<div class="numbered-card"><span class="number">${String(index + 1).padStart(2, "0")}</span><p>${item}</p></div>`).join(""))}
  ${block("How to read the timeline", `<p>This is not a promise of dates. It is a record of capability maturity. The most valuable update is not “we shipped a feature,” but “the organization can now do something reliably that it could not do before.”</p>`)}
`, "Published");

P["architecture-decisions"] = makePage("architecture-decisions", "Build in public", "Architecture Decisions", "Why the system looks the way it does", "The public record of choices, tradeoffs, and the evidence that changes them.", `
  ${block("Accepted decisions", bullets(["AIOS is built for iDevelop first and productized later.", "The kernel stays small and owns five responsibilities.", "Capabilities are stable; models and providers are replaceable.", "Mission Control is a client of AIOS, not the source of truth.", "One monorepo is preferred during the early learning phase.", "New top-level concepts require an RFC and evidence."]))}
  ${block("Decision protocol", code("Idea → RFC → Review → Accepted → Implemented → Validated → Revisited"))}
  ${callout("Public by default", `<p>Share reasoning, tradeoffs, and lessons. Keep credentials, private customer data, financials, and proprietary operating details out of the public knowledge base.</p>`)}
`, "Published");

P["what-failed"] = makePage("what-failed", "Build in public", "What Failed", "The honest record", "A place for discarded abstractions, premature infrastructure, and ideas that did not earn their complexity.", `
  ${block("Why document failure", `<p>Public documentation should not only display the polished architecture. Rejected ideas help other entrepreneurs recognize scope traps before they repeat them.</p>`)}
  ${block("Early lessons already visible", bullets(["The architecture became too expansive before the kernel was proven.", "Executive roles are useful application concepts, but they do not belong in the kernel.", "Mission Control must be rebuilt around platform contracts rather than legacy assumptions.", "Multiple repositories may be useful later, but one monorepo is easier while learning.", "The best first worker is a mock worker, not a vendor integration."]))}
  ${callout("Failure policy", `<p>When something fails, record context, evidence, correction, and the new guardrail. A failure that changes the system is not wasted work.</p>`)}
`, "Published");

P.roadmap = makePage("roadmap", "Build in public", "AIOS Roadmap", "Build in layers", "A staged path from public knowledge to an internal operating platform and eventually a reusable ecosystem.", `
  ${block("Stage 0: publish the foundation", `<p>Make the language, philosophy, architecture, and implementation method free and searchable. Invite entrepreneurs to learn and adapt it.</p>`)}
  ${block("Stage 1: prove the kernel", `<p>Build the smallest platform that can run one workflow end to end without depending on a specific model provider.</p>`)}
  ${block("Stage 2: operate iDevelop", `<p>Use AIOS for real engineering, media, operating, and product workflows. Improve it through evidence.</p>`)}
  ${block("Stage 3: rebuild the interfaces", `<p>Rebuild Mission Control and eventually Studio as replaceable applications on top of the platform.</p>`)}
  ${block("Stage 4: help other founders", `<p>Use the free knowledge base, Skool community, and done-for-you installations to help other entrepreneurs implement AI-native operating systems.</p>`)}
  ${callout("North star", `<p>AIOS should eventually help create, operate, and continuously improve new organizations—without losing human direction or accountability.</p>`)}
`, "Published");

P.community = makePage("community", "Community", "AIOS Builders", "Learn in public, build together", "A community for entrepreneurs who want to move from understanding AI-native organizations to operating one.", `
  ${block("The community promise", `<p>The public knowledge base stays free. The community adds momentum: implementation challenges, founder conversations, workshops, examples, and a place to share what is working in the real world.</p>`)}
  ${split([card("Explorer", "Read the knowledge base, ask questions, and follow the public build."), card("Builder", "Join workshops, use templates, and implement one workflow with peers."), card("Operator", "Share operating metrics, refine your AI workforce, and build repeatable systems."), card("Partner", "Help other organizations install AIOS through a future implementer network.")])}
  ${block("What belongs in the community", bullets(["Real implementation notes, not just tool recommendations.", "Workflow examples and lessons learned.", "Founder-friendly explanations of technical concepts.", "Honest discussions about what should remain human.", "Case studies that protect private information while sharing useful patterns."]))}
  <a class="button primary" href="mailto:improveddigital@gmail.com?subject=AIOS%20Builders%20community">Get notified when the community opens →</a>
`, "Published");

P["aios-academy"] = makePage("aios-academy", "Community", "AIOS Academy", "A path, not a pile of pages", "A learning progression for founders who want to understand, design, install, and improve an AI-native organization.", `
  ${block("The learning levels", ["Understand: why organizations need an operating system.", "Design: map teams, roles, workflows, and knowledge.", "Build: create the first useful workflow and worker contract.", "Install: connect systems, policies, and operating cadence.", "Operate: measure, learn, and improve the organization."].map((item, index) => `<div class="numbered-card"><span class="number">${index + 1}</span><p>${item}</p></div>`).join(""))}
  ${block("How the academy works", `<p>Each lesson should end with a small implementation challenge. The goal is not to collect information. It is to leave with a better operating system inside the company.</p>`)}
  ${callout("The bridge", `<p>The knowledge base teaches the framework. The community provides practice and accountability. Installations provide high-touch implementation for founders who want acceleration.</p>`)}
`, "Published");

P.installations = makePage("installations", "Community", "AIOS Installations", "Done-for-you implementation", "For founders who understand the model and want a team to install the operating layer inside their organization.", `
  ${block("What an installation includes", bullets(["Organization and workflow audit.", "AI workforce and role design.", "Knowledge architecture and documentation setup.", "Workflow and approval design.", "Integrations and automations.", "Mission Control or equivalent operating interface.", "A continuous improvement cadence."]))}
  ${block("The output", `<p>An installation should leave the organization with a blueprint, working workflows, clear ownership, useful knowledge, and the ability to improve without needing the installer for every change.</p>`)}
  ${block("Good fit", `<p>Organizations with repeated work, a founder bottleneck, scattered knowledge, or a clear desire to redesign how their teams operate in the AI era.</p>`)}
  <a class="button primary" href="mailto:improveddigital@gmail.com?subject=AIOS%20Installation">Ask about an installation →</a>
`, "Published");

P["certified-implementers"] = makePage("certified-implementers", "Community", "Certified Implementers", "Build an ecosystem around the method", "A future pathway for operators and consultants who want to help other organizations install AIOS.", `
  ${block("Why an implementer network", `<p>Every organization has local context. A network of trusted implementers can help entrepreneurs apply the framework without centralizing every installation inside one team.</p>`)}
  ${block("What an implementer should know", bullets(["Organization and workflow mapping.", "Knowledge and documentation design.", "Capability-first AI workforce planning.", "Governance, permissions, and human approval.", "How to measure outcomes and remove complexity."]))}
  ${block("Future requirements", `<p>Certification should be based on demonstrated implementations, transparent methods, and responsible handling of customer data—not only a course completion badge.</p>`)}
  ${callout("Status", `<p>This is a future program. The public framework is being built first so the method is open and testable.</p>`)}
`, "Draft");

P["aios-100"] = makePage("aios-100", "Community", "The AIOS 100", "Founding builders", "A future public list of the first 100 entrepreneurs documenting their journey toward AI-native organizations.", `
  ${block("The idea", `<p>The AIOS 100 is not a customer list. It is a group of founding builders who are willing to share what they are learning as they redesign their organizations around knowledge, workflows, and intelligent systems.</p>`)}
  ${block("What participation means", bullets(["Build one meaningful capability, not only a demo.", "Document the process and lessons.", "Protect confidential customer and company information.", "Share examples that help other entrepreneurs move faster.", "Give feedback that improves the public framework."]))}
  ${block("Why it matters", `<p>Category creation is stronger when many people can test the ideas in different contexts. The AIOS 100 would make the movement a network of operating experiments rather than a single company's theory.</p>`)}
  ${callout("Status", `<p>Founding member program to be defined after the first internal AIOS workflow is operating inside iDevelop LLC.</p>`)}
`, "Draft");

const pages = Object.values(P);
const pageMap = Object.fromEntries(pages.map((page) => [page.id, page]));
const sectionMap = Object.fromEntries(sections.map((section) => [section.title, section]));

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent.replace(/\s+/g, " ").trim();
}

pages.forEach((page) => { page.searchText = `${page.title} ${page.kicker} ${page.summary} ${stripHtml(page.content)}`.toLowerCase(); });

function currentPageId() {
  const value = window.location.hash.replace(/^#\//, "").split("?")[0];
  return pageMap[value] ? value : "welcome";
}

function renderNav() {
  const active = currentPageId();
  document.getElementById("nav").innerHTML = sections.map((section) => `<div class="nav-section"><span class="nav-section-title">${section.title}</span>${section.pages.map((id) => `<a class="nav-link ${id === active ? "active" : ""}" href="#/${id}">${pageMap[id].title}</a>`).join("")}</div>`).join("");
}

function slugify(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

function renderToc() {
  const headings = [...document.querySelectorAll(".prose h2, .prose h3")];
  document.getElementById("toc").innerHTML = headings.length ? headings.map((heading) => { heading.id = heading.id || slugify(heading.textContent); return `<a class="level-${heading.tagName === "H3" ? "3" : "2"}" href="#${heading.id}">${heading.textContent}</a>`; }).join("") : `<span class="search-empty">This page is a short note.</span>`;
}

function renderRelated(page) {
  const section = sectionMap[page.section];
  const ids = section.pages.filter((id) => id !== page.id).slice(0, 3);
  document.getElementById("related").innerHTML = ids.map((id) => `<a href="#/${id}">${pageMap[id].title}</a>`).join("");
}

function renderArticle() {
  const page = pageMap[currentPageId()];
  document.title = `${page.title} · AIOS Knowledge Base`;
  document.getElementById("app").innerHTML = `<article class="article"><header class="article-header"><div class="article-kicker"><span class="eyebrow">${page.section}</span><span>${page.kicker}</span></div><h1>${page.title}</h1><p class="article-summary">${page.summary}</p><div class="meta-row"><span class="meta-pill">${page.status}</span><span>${page.status === "Published" ? "Public draft · reviewable" : "Planned section · reviewable"}</span><span>AIOS public foundation</span><div class="article-tools"><button class="tool-button" id="copyLink" type="button">Copy link</button><button class="tool-button" id="printPage" type="button">Print</button></div></div></header><div class="prose">${page.content}</div><footer class="article-footer"><span>Part of the AIOS Knowledge Base · Free to read and adapt.</span><a href="#/welcome">Back to start →</a></footer></article>`;
  renderNav();
  renderToc();
  renderRelated(page);
  document.getElementById("copyLink").addEventListener("click", async (event) => { const button = event.currentTarget; try { await navigator.clipboard.writeText(window.location.href); button.textContent = "Copied"; } catch { button.textContent = "Copy from address bar"; } setTimeout(() => { button.textContent = "Copy link"; }, 1800); });
  document.getElementById("printPage").addEventListener("click", () => window.print());
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSearch() { const modal = document.getElementById("searchModal"); modal.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("searchInput").value = ""; renderSearchResults(""); setTimeout(() => document.getElementById("searchInput").focus(), 20); }
function closeSearch() { document.getElementById("searchModal").hidden = true; document.body.style.overflow = ""; }

function renderSearchResults(query) {
  const container = document.getElementById("searchResults");
  const clean = query.trim().toLowerCase();
  if (!clean) { container.innerHTML = `<div class="search-empty">Start typing to search ${pages.length} pages across the public handbook.</div>`; return; }
  const terms = clean.split(/\s+/).filter(Boolean);
  const results = pages.map((page) => { let score = 0; terms.forEach((term) => { if (page.title.toLowerCase().includes(term)) score += 8; if (page.summary.toLowerCase().includes(term)) score += 4; score += (page.searchText.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length; }); return { page, score }; }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 12);
  if (!results.length) { container.innerHTML = `<div class="search-empty">No pages matched “${query}”. Try “workflow”, “knowledge”, or “founder”.</div>`; return; }
  container.innerHTML = results.map(({ page }) => `<a class="search-result" href="#/${page.id}" data-search-result><span class="result-section">${page.section}</span><h3>${page.title}</h3><p>${page.summary}</p></a>`).join("");
  container.querySelectorAll("[data-search-result]").forEach((link) => link.addEventListener("click", closeSearch));
}

document.getElementById("searchTrigger").addEventListener("click", openSearch);
document.querySelectorAll("[data-close-search]").forEach((node) => node.addEventListener("click", closeSearch));
document.getElementById("searchInput").addEventListener("input", (event) => renderSearchResults(event.target.value));
document.addEventListener("keydown", (event) => { if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { event.preventDefault(); openSearch(); } if (event.key === "Escape" && !document.getElementById("searchModal").hidden) closeSearch(); });
window.addEventListener("hashchange", () => { closeSearch(); renderArticle(); });
renderArticle();
