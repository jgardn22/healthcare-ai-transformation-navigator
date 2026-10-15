window.HAIN_TEAMS = {
  finance: {
    image: 'assets/finance-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Finance Assist Multi-Agent Team',
    subtitle: 'AI-powered finance operations assistance across Accounting, FP&A, Treasury, Tax, Procure-to-Pay, and Shared Services.',
    alt: 'Architecture diagram of the Finance Assist multi-agent team. A requestor reaches Finance Assist, the front door, which understands the request, classifies it, routes it to the best agent, orchestrates actions, monitors compliance and synthesizes the response. Eight specialized domain agents sit below it: Accounts Payable, Record to Report Close, FP&A and Reporting, Treasury and Cash Management, Tax Compliance, Procure-to-Pay, Expense and Travel, and Supplier and Vendor Management. A governance control plane and shared platform services and integrations sit underneath, with human escalation to finance teams and outcomes that matter on the right.',
    assist: {
      name: 'Finance Assist',
      line: 'Your intelligent front door to finance operations support',
      ask: 'I need help with a budget variance, an invoice, a cash forecast, a close task, or a tax question.',
      intake: ['Request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new case', 'Policy and rule check: validate policies, controls and thresholds', 'Knowledge search: policies, procedures, playbooks and templates', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Classify and categorize', 'Route to best agent', 'Orchestrate actions', 'Monitor compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Accounts Payable Agent', ['Invoice capture and validation', '3-way match', 'Exception handling', 'Payment processing support']],
      ['Record to Report Close Agent', ['Close task management', 'Account reconciliations', 'Journal entries', 'Close checklist and certification']],
      ['FP&A and Reporting Agent', ['Budget vs actual analysis', 'Variance explanation', 'Management reporting', 'Ad-hoc financial requests']],
      ['Treasury and Cash Management Agent', ['Cash forecasting', 'Liquidity monitoring', 'Bank reconciliations', 'Investments and debt tracking']],
      ['Tax Compliance Agent', ['Tax provision support', 'Return preparation support', 'Tax research', 'Compliance calendar and filings']],
      ['Procure-to-Pay Agent', ['PO management', 'Vendor master maintenance', 'Goods receipt', 'Spend classification and analysis']],
      ['Expense and Travel Agent', ['Expense auditing', 'Receipt verification', 'Policy compliance checks', 'Reimbursement processing']],
      ['Supplier and Vendor Management Agent', ['Vendor onboarding', 'Due diligence', 'Contract compliance', 'Performance monitoring']]
    ],
    governance: ['Finance agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Access and privilege management', 'Prompt governance', 'Finance operations oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Outlook, Teams, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'ERP systems (SAP, Oracle, NetSuite, etc.)', 'Financial systems (general ledger, subledger, AR, AP)', 'Data warehouse and analytics (Snowflake, Databricks, Power BI, etc.)', 'Banking and payment networks', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Finance Operations Team', 'Controller and Accounting', 'FP&A Team', 'Treasury Team', 'Tax Team', 'Procurement Team', 'External Advisors'],
    outcomes: ['Faster cycle times', 'Reduced costs', 'Improved accuracy', 'Stronger compliance', 'Better cash and forecasts', 'Greater productivity'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  }
  ,nursing: {
    image: 'assets/nursing-agentic-team.webp',
    width: 1536,
    height: 1022,
    title: 'Nursing Operations Assist Multi-Agent Team',
    subtitle: 'AI-powered nursing workflow assistance across bedside care, clinical documentation, policy guidance, patient education, safety, training, and care coordination.',
    alt: 'Architecture diagram of the Nursing Operations Assist multi-agent team. A nurse or requestor reaches Nursing Operations Assist, the front door, which understands the request, assesses urgency and context, routes it to the best agent, orchestrates actions, monitors clinical safety and compliance, and synthesizes the response. Specialized domain agents sit below it, including Clinical Triage, Clinical Documentation, Clinical Policy, Nursing Knowledge, Patient Education, Skin and Wound Care, Care Plan, Behavioral Health and Suicide Risk, Nursing Training, and Policy and Evidence. A governance control plane and shared platform services and integrations sit underneath, with human escalation to bedside nurses, charge nurses, nurse educators, clinical informatics, care managers and clinical leadership, and outcomes that matter on the right.',
    assist: {
      name: 'Nursing Operations Assist',
      line: 'Your intelligent front door to nursing support',
      ask: 'I need help with a patient assessment, documentation, a policy question, education materials, or care planning support.',
      intake: ['Nursing request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new case', 'Clinical safety check: screen for urgency, risk and required escalation', 'Knowledge search: policies, procedures, care guidelines and patient context', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Assess urgency and context', 'Route to best agent', 'Orchestrate actions', 'Monitor clinical safety and compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Clinical Triage Agent', ['Patient assessment support', 'Triage guidance', 'Escalation pathways', 'EHR-ready summaries']],
      ['Clinical Documentation Agent', ['Nursing note drafting', 'Shift summaries', 'Handoff preparation', 'Documentation quality checks']],
      ['Clinical Policy Agent', ['Policy and procedure lookup', 'Step-by-step guidance', 'Policy comparison', 'Cited answers']],
      ['Nursing Knowledge Agent', ['Clinical Q&A', 'Best practices', 'Care protocols', 'Evidence-based recommendations']],
      ['Patient Education Agent', ['Tailored education materials', 'Teach-back validation', 'Multilingual content', 'Discharge instructions']],
      ['Skin and Wound Care Agent', ['Wound image analysis', 'Dressing recommendations', 'Care protocols', 'Healing progress tracking']],
      ['Care Plan Agent', ['Care plan recommendations', 'Goals of care support', 'Discharge planning', 'Care coordination']],
      ['Behavioral Health and Suicide Risk Agent', ['C-SSRS workflow guidance', 'Risk assessment tools', 'Escalation pathways', 'Documentation support']],
      ['Nursing Training Agent', ['Onboarding support', 'Skills checklists', 'Competency validation', 'Continuing education']],
      ['Policy and Evidence Agent', ['Monitor new evidence', 'Crosswalk to policies', 'Identify practice changes', 'Summarize impact']]
    ],
    governance: ['Agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Clinical governance', 'Prompt governance', 'Maker oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Teams, Outlook, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)', 'Clinical knowledge bases (guidelines, drug references, etc.)', 'Policies and procedures (intranet, nursing policies, care protocols)', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Bedside Nurses', 'Charge Nurses', 'Nurse Educators', 'Clinical Informatics', 'Care Managers', 'Clinical Leadership'],
    outcomes: ['Reduced cognitive burden', 'Faster clinical guidance', 'Standardized care', 'Improved patient education', 'Stronger compliance', 'Higher nursing productivity'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  },
  hr: [{
    image: 'assets/hr-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Employee Self-Service Multi-Agent Team',
    subtitle: 'AI-powered assistance across HR, IT, Clinical, Finance, and Shared Services.',
    alt: 'Architecture diagram of the Employee Self-Service multi-agent team. An employee reaches Employee Assist, the front door, which understands intent, routes it to the best agent, orchestrates actions, monitors and ensures compliance, and synthesizes the response. Eight specialized domain agents sit below it: HR, IT, Clinical Knowledge, Finance, Travel, Policy, Calendar, and Employee Communications. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the HR service desk, IT support, clinical informatics, finance operations and the compliance office, and outcomes that matter on the right.',
    assist: {
      name: 'Employee Assist',
      line: 'Your intelligent front door to employee support',
      ask: 'I have a question about my benefits, need IT access, or want to understand a clinical policy.',
      intake: ['Employee or business requests a capability', 'Existing agent found? If yes, route to the agent. If no, submit a use case', 'COE review: assess need, duplication, risk and alignment', 'New agent development: build, test, govern and deploy', 'Publish to the agent catalog: available for reuse and discovery'],
      steps: ['Understand intent', 'Route to best agent', 'Orchestrate actions', 'Monitor and ensure compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['HR Agent', ['Benefits and eligibility', 'PTO and time off', 'Policies and handbook', 'Onboarding']],
      ['IT Agent', ['Access and accounts', 'Passwords and MFA', 'Device support', 'Software and tools']],
      ['Clinical Knowledge Agent', ['Nursing policies', 'Clinical protocols', 'Procedure guidance', 'Pathology references']],
      ['Finance Agent', ['Expenses and travel', 'Per diem and allowances', 'GL coding and policy', 'Budget information']],
      ['Travel Agent', ['Flight and hotel booking', 'Travel policy', 'Approvals workflow', 'Itinerary changes']],
      ['Policy Agent', ['Enterprise policies', 'Interpret policy', 'Compliance Q&A', 'Exception guidance']],
      ['Calendar Agent', ['Check availability', 'Schedule meetings', 'Room resources', 'Hold time and invite']],
      ['Employee Communications Agent', ['Announcements', 'Change communications', 'Benefits reminders', 'Campaign delivery']]
    ],
    governance: ['Agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Data classification', 'Prompt governance', 'Maker oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Teams, Outlook, SharePoint)', 'Identity and access (SSO, roles)', 'ITSM (ServiceNow)', 'Clinical systems (EHR, LIS, etc.)', 'Finance systems (ERP, AP, etc.)', 'Knowledge bases and document repositories', 'APIs and MCP connections', 'Security (Zero Trust, encryption)'],
    humans: ['HR Service Desk', 'IT Support', 'Clinical Informatics', 'Finance Operations', 'Compliance Office'],
    outcomes: ['Faster resolutions', 'Better experience', 'Operational efficiency', 'Risk and compliance', 'Scalable innovation'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  }, {
    image: 'assets/hr-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Human Resources Operations Room",
    subtitle: "AI-powered HR operations to attract, develop, and support a healthy, high-performing workforce.",
    alt: "Architecture diagram of the Human Resources Operations Room. A request from employees, leaders or candidates enters an intake and discovery flow of HR request intake, context and employee check, people data lookup, and case summary. HR Operations Assist, the front door, understands the request, enriches and validates employee data, policies and program information, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Talent Acquisition, Employee Experience, Learning and Development, Benefits and Wellbeing, Employee Relations, Workforce Planning, HR Operations, and Compliance and Policy. A governance control plane and shared platform services and integrations sit underneath, with human escalation to HR business partners, the talent acquisition team, the benefits team, employee relations, people leaders, the HR operations team and executive leadership, and outcomes that matter on the right.",
    assist: {
      name: "HR Operations Assist",
      line: "Your intelligent front door for HR support",
      ask: "I need help with a hiring request, a benefits question, a policy, a learning plan, or an employee issue.",
      intake: ["HR request intake: capture and classify inquiries from employees, leaders or candidates", "Context and employee check: identify employee type, role, location, policies and applicable programs", "People data lookup: retrieve relevant HR data, benefits, learning and policy information", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Talent Acquisition Agent", ["Support recruiting and hiring workflows", "Screen and summarize candidates", "Coordinate interviews", "Track hiring status", "Improve candidate experience"]],
      ["Employee Experience Agent", ["Answer HR questions", "Guide employees to the right resources", "Support onboarding", "Help with leaves, transfers and life events", "Personalize guidance"]],
      ["Learning & Development Agent", ["Recommend training and career paths", "Track learning progress", "Support skills development", "Identify required training", "Create personalized learning plans"]],
      ["Benefits & Wellbeing Agent", ["Answer benefits and coverage questions", "Support enrollment and changes", "Compare plan options", "Explain FSA/HSA and other programs", "Promote wellbeing resources"]],
      ["Employee Relations Agent", ["Guide policy and process questions", "Support conflict resolution", "Provide documentation templates", "Escalate sensitive matters", "Track case progress"]],
      ["Workforce Planning Agent", ["Analyze workforce data", "Identify hiring needs and gaps", "Support organizational planning", "Model scenarios", "Provide insights and reports"]],
      ["HR Operations Agent", ["Automate HR workflows", "Process policy requests", "Manage employee data changes", "Coordinate approvals", "Track SLAs and backlog", "Generate operational reports"]],
      ["Compliance & Policy Agent", ["Provide policy guidance", "Ensure regulatory compliance", "Monitor policy changes", "Validate approvals", "Flag risks and exceptions", "Support audits"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve content and actions)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with HR, legal and regulatory requirements)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "HRIS and HCM systems (Workday, SAP, Oracle, etc.)", "Learning systems (Cornerstone, LinkedIn Learning, etc.)", "Benefits platforms (Benefitfocus, Fidelity, etc.)", "Collaboration tools (Viva, SharePoint, Communities, etc.)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["HR Business Partners", "Talent Acquisition Team", "Benefits Team", "Employee Relations", "People Leaders", "HR Operations Team", "Executive Leadership"],
    outcomes: ["A more engaged workforce", "Higher productivity", "Better employee experience", "Stronger talent retention", "Greater compliance", "Healthier communities"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Empowering people to create a healthier tomorrow"]
  }],
  legal: {
    image: 'assets/legal-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Legal Assist Multi-Agent Team',
    subtitle: 'AI-powered legal operations assistance across Legal, Compliance, Privacy, Governance, Investigations, and Contract Management.',
    alt: 'Architecture diagram of the Legal Assist multi-agent team. A requestor reaches Legal Assist, the front door, which understands the request, classifies the matter, routes it to the best agent, orchestrates actions, monitors compliance and synthesizes the response. Eight specialized domain agents sit below it: Legal Intake and Matter, Contract Operations, Contract Review, Outside Counsel, Privacy and Data Rights, Compliance Monitoring, Legal Hold and Investigations, and Governance and Entity. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the legal operations team, corporate counsel, privacy office, compliance office, contracts team and external counsel, and outcomes that matter on the right.',
    assist: {
      name: 'Legal Assist',
      line: 'Your intelligent front door to legal operations support',
      ask: 'I need help with a contract review, an outside counsel invoice, a privacy request, or a compliance matter.',
      intake: ['Legal request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new matter', 'Conflict and eligibility: conflicts check, eligibility and jurisdiction', 'Knowledge search: policies, templates, playbooks and precedents', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Classify matter', 'Route to best agent', 'Orchestrate actions', 'Monitor compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Legal Intake and Matter Agent', ['Legal request intake', 'Matter creation', 'Classification and triage', 'SLA management']],
      ['Contract Operations Agent', ['Contract intake', 'Metadata extraction', 'Renewal tracking', 'Obligation monitoring']],
      ['Contract Review Agent', ['Clause comparison', 'Redline analysis', 'Deviation detection', 'Template validation']],
      ['Outside Counsel Agent', ['Invoice audits', 'Billing guideline checks', 'Spend analytics', 'Budget tracking']],
      ['Privacy and Data Rights Agent', ['DSAR coordination', 'Record collection', 'Redaction workflow', 'Response tracking']],
      ['Compliance Monitoring Agent', ['Regulatory updates', 'Policy mapping', 'Control monitoring', 'Remediation tracking']],
      ['Legal Hold and Investigations Agent', ['Hold notices', 'Custodian tracking', 'Evidence collection', 'Investigation timelines']],
      ['Governance and Entity Agent', ['Board governance', 'Entity records', 'Filing calendars', 'IP and statutory deadlines']]
    ],
    governance: ['Legal agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Privilege management', 'Prompt governance', 'Legal operations oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Outlook, Teams, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'Contract lifecycle management systems', 'Matter management systems', 'E-billing platforms', 'Document repositories', 'Regulatory sources (laws, regulations, agencies)', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Legal Operations Team', 'Corporate Counsel', 'Privacy Office', 'Compliance Office', 'Contracts Team', 'External Counsel'],
    outcomes: ['Faster matter resolution', 'Reduced outside counsel spend', 'Better contract compliance', 'Stronger regulatory readiness', 'Improved auditability', 'Protected legal accountability'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  },
  orch: {
    image: 'assets/provider-operations-house-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: "Healthcare Provider Operations House",
    subtitle: "A shared front door across Clinical Roles, Quality & Safety, and Supply Chain operations.",
    alt: "Architecture diagram of the Healthcare Provider Operations House. A healthcare team member, such as a clinician, quality professional, supply chain staff member or leader, reaches Healthcare Provider Operations Assist, the front door. It handles common entry by chat, voice or form, identity and access, intent routing, approved knowledge, domain agent handoff, and a coherent result with citations and next steps. Three rooms sit below: the Clinical Roles Room, the Quality and Safety Room, and the Supply Chain Operations Room, each with six specialized agents. A governed services foundation of Microsoft 365, EHR and FHIR, SharePoint, quality platforms, ERP, SCM and WMS, identity, APIs, audit and telemetry, and approval gates supports them, with human accountability for clinicians, quality and safety specialists, supply chain leaders, legal and privacy, and authorized approvers, and outcomes that matter at the bottom.",
    assist: {
      name: "Healthcare Provider Operations Assist",
      line: "Your intelligent front door to get work done safely and effectively",
      ask: "I need help with a patient task, a safety report, or a supply chain exception.",
      intake: ["Healthcare team member: a clinician, quality professional, supply chain staff member, or leader", "Common entry: chat, voice, or form submission", "Identity and access: secure, role-based access and context", "Approved knowledge: trusted policies, procedures and data"],
      steps: ["Common entry", "Identity and access", "Intent routing", "Approved knowledge", "Domain agent handoff", "Coherent result"]
    },
    agents: [
      ["Clinical Roles Room", ["Clinical Administrative Inbox", "Documentation Preparation", "Handoff Preparation", "Policy and Procedure", "Referral Coordination", "Patient Education"]],
      ["Quality & Safety Room", ["Safety Event Intake", "Quality Measure Evidence", "Audit and Accreditation Evidence", "CAPA Tracking", "RCA Preparation", "Policy Surveillance"]],
      ["Supply Chain Operations Room", ["Supply Exception", "Recall and Lot Coordination", "Inventory and PAR Exception", "Vendor and PO Exception", "Expiration and Obsolescence", "Substitute Product Coordination"]]
    ],
    governance: ["Microsoft 365 services", "Identity and access (least privilege)", "Audit and telemetry", "Approval gates for sensitive actions", "Governed APIs and connectors", "Quality platforms"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "EHR and FHIR (Epic, Cerner, MEDITECH, etc.)", "SharePoint policies, procedures and knowledge content", "Quality platforms (safety, quality, registry and reporting systems)", "ERP, SCM and WMS (supply, inventory and procurement systems)", "Identity and access (SSO, RBAC, least privilege)", "APIs and connectors (secure, governed integrations)", "Audit and telemetry (logs, monitoring, usage analytics)"],
    humans: ["Clinicians", "Quality and safety specialists", "Supply chain leaders", "Legal, privacy and compliance", "Authorized approvers"],
    outcomes: ["Less administrative burden", "Faster cycle times", "Better traceability", "Stronger governance", "More time for patient care"],
    principles: ["Agents prepare, retrieve, route and monitor bounded work", "Accountable professionals retain consequential decisions"]
  },
  supply: {
    image: 'assets/supply-chain-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Supply Chain Operations Room",
    subtitle: "Multi-agent coordination for shortages, recalls, inventory exceptions, purchasing, and vendor operations.",
    alt: "Architecture diagram of the Supply Chain Operations Room. Alerts, requests and external notifications enter an intake and discovery flow of alert and request intake, exception validation, inventory and contract search, and case summary. Supply Chain Operations Assist, the front door, detects and takes in the exception, reconciles data, routes the exception, prepares a response, sends it through an approval gate and tracks closure. Eight specialized sub-agents sit below: Supply Exception, Recall and Lot Coordination, Inventory and PAR Exception, Vendor and PO Exception, Expiration and Obsolescence, Substitute Product Coordination, Vendor Communication and Watchlist, and Demand and Usage Reporting. A governance control plane and shared platform services and integrations sit underneath, with human escalation to buyers, materials managers, pharmacy, value analysis, accounts payable, supply chain leadership and the clinical committee, and outcomes that matter on the right.",
    assist: {
      name: "Supply Chain Operations Assist",
      line: "Your intelligent front door to supply chain operations",
      ask: "I need help with a shortage, a recall notice, an inventory exception, or a vendor purchase order issue.",
      intake: ["Alert and request intake: capture alerts, staff requests, emails and external notifications", "Exception validation: classify, enrich and validate key details such as item, location, severity and source", "Inventory and contract search: check current inventory, open POs, vendor data, contracts and the item master", "Case summary: create an initial summary, assign priority and route to the right agent"],
      steps: ["Detect and intake", "Reconcile data", "Route exception", "Prepare response", "Approval gate", "Track closure"]
    },
    agents: [
      ["Supply Exception Agent", ["Reconcile shortage, backorder notices, stock and open POs and demand", "Identify affected locations", "Open and route an exception case"]],
      ["Recall & Lot Coordination Agent", ["Match recall notices to lot and asset inventory", "Assign location tasks", "Track confirmation and closure", "Provide status reporting"]],
      ["Inventory & PAR Exception Agent", ["Reconcile count, PAR, consignment and movement exceptions", "Route adjustments and replenishment for approval", "Flag recurring issues"]],
      ["Vendor & PO Exception Agent", ["Match PO, receipt, invoice and acknowledgments", "Route price and quantity disputes", "Draft vendor outreach and track resolution"]],
      ["Expiration & Obsolescence Agent", ["Surveil lot and expiry data", "Create location tasks", "Track removal, transfer or destruction confirmations"]],
      ["Substitute Product Coordination Agent", ["Assemble approved product, contract and evidence pack", "Track clinical and committee review", "Support the decision workflow, where humans decide suitability"]],
      ["Vendor Communication & Watchlist Agent", ["Detect late acknowledgments and promise dates", "Draft consolidated outreach", "Maintain a vendor watchlist", "Provide stakeholder updates"]],
      ["Demand & Usage Reporting Agent", ["Assemble approved demand and usage extracts", "Surface exceptions and trends", "Prepare a planning report; the leader owns forecast and order decisions"]]
    ],
    governance: ["Agent catalog", "Approval workflows", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging", "Data classification", "Lifecycle management", "Performance and risk monitoring", "Policy and control"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "ERP and SCM systems (e.g., SAP, Oracle, Workday)", "WMS and inventory (locations, movements)", "AP and EDI (invoice, payment, 855/856)", "Vendor feeds (supplier portals, recall notices, GPOs)", "Contracts and item master (contracts, pricing, item data)", "OR schedule (where authorized: case volumes and demand)", "BI and reporting (Power BI, analytics, dashboards)"],
    humans: ["Buyers", "Materials Managers", "Pharmacy", "Value Analysis", "Accounts Payable", "Supply Chain Leadership", "Clinical Committee"],
    outcomes: ["Faster exception response", "Better recall traceability", "Fewer stockouts", "Lower aging exceptions", "Reduced manual follow-up", "More resilient supply operations"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Humans approve substitutions, allocations, inventory adjustments, payment actions, disposition and material commitments"]
  },
  burnout: [{
    image: 'assets/clinical-roles-room-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: "Clinical Roles Room",
    subtitle: "Administrative assistance around care, with licensed judgment retained by clinicians.",
    alt: "Architecture diagram of the Clinical Roles Room. A request from clinical staff enters an intake and discovery flow of request intake, an administrative versus clinical check, approved knowledge search, and case summary. Clinical Roles Assist, the front door, understands the request, retrieves approved context, routes it to a bounded agent, prepares and coordinates the work, sends it for human review when required and delivers actionable results with citations. Eight specialized sub-agents sit below: Clinical Administrative Inbox, Documentation Preparation, Handoff Preparation, Policy and Procedure, Referral Coordination, Shift and Meeting Preparation, Patient Education Drafting, and Diagnostic Services Coordination. A governance control plane and shared platform services and integrations sit underneath, with human escalation to nurses, physicians and advanced practice providers, pharmacists, therapists, imaging and lab staff and care coordinators, and outcomes that matter on the right.",
    assist: {
      name: "Clinical Roles Assist",
      line: "Your intelligent front door for administrative care support",
      ask: "I need help with a handoff, documentation preparation, a policy question, or a referral status.",
      intake: ["Request intake: capture, classify and prioritize administrative requests from clinical staff", "Administrative versus clinical check: determine whether the request is administrative or requires clinical judgment", "Approved knowledge search: search enterprise policies, procedures and trusted sources", "Case summary: create a summary and recommend the best agent or pathway"],
      steps: ["Understand request", "Retrieve approved context", "Route to bounded agent", "Prepare and coordinate", "Human review", "Deliver"]
    },
    agents: [
      ["Clinical Administrative Inbox Agent", ["Classify bounded administrative messages", "Route scheduling, forms and referral status", "Escalate clinical, urgent or ambiguous content"]],
      ["Documentation Preparation Agent", ["Assemble prior notes, results, forms and open items", "Create a pre-read or draft shell with citations", "Clinician validates the final record"]],
      ["Handoff Preparation Agent", ["Pull documented facts and unresolved tasks", "Create a draft handoff for the next care team", "Outgoing clinician validates completeness"]],
      ["Policy & Procedure Agent", ["Search approved, current policies", "Cite version and owner", "Escalate conflicting, stale or absent policy"]],
      ["Referral Coordination Agent", ["Validate administrative completeness", "Route missing items", "Track referral and scheduling status", "Escalate clinical-priority decisions"]],
      ["Shift & Meeting Preparation Agent", ["Assemble operational issues, prior actions and references", "Prepare briefs for charge nurses and service leads", "Surface key updates and follow-ups"]],
      ["Patient Education Drafting Agent", ["Adapt approved education to reading level, language and visit context", "Create multi-format materials", "Clinician approves release"]],
      ["Diagnostic Services Coordination Agent", ["Track prerequisites, authorization and report delivery", "Coordinate across imaging, lab and therapy", "Proactively identify delays and notify the care team"]]
    ],
    governance: ["PHI and privacy controls (minimum necessary)", "Identity and access (Entra ID, role-based)", "Read-only by default", "Source citations with as-of dates", "Human sign-off for clinical records and high-impact communications", "Audit and monitoring"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint, Word, Excel)", "Entra ID (identity and access, RBAC)", "EHR and FHIR (Epic, Cerner, MEDITECH, etc.)", "Scheduling systems (appointments, resource management)", "Referral systems (internal and external referrals)", "Policy and knowledge (SharePoint, intranet, clinical guidelines)", "RIS and PACS (imaging)", "LIS (laboratory)", "Teams and Outlook (collaboration and notifications)"],
    humans: ["Nurses", "Physicians and advanced practice providers", "Pharmacists", "Therapists (PT, OT, SLP)", "Imaging and lab staff", "Care coordinators"],
    outcomes: ["Lower documentation burden", "Faster administrative coordination", "Better handoffs", "Faster policy access", "Reduced status chasing", "More time for care"],
    principles: ["No autonomous diagnosis, symptom triage, protocol selection, medication decisions, critical-result interpretation, imaging prioritization, therapy goals, or treatment recommendation", "Human judgment. Better care."]
  }, {
    image: 'assets/provider-experience-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Provider Experience Operations Room",
    subtitle: "AI-powered provider experience operations to reduce administrative burden and enable focused, high-quality care.",
    alt: "Architecture diagram of the Provider Experience Operations Room. A request from clinicians, providers and care teams enters an intake and discovery flow of provider request intake, context and impact check, systems and data lookup, and case summary. Provider Experience Assist, the front door, understands the request, enriches and validates provider, practice, contract and operational data, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Provider Onboarding, Credentialing and Enrollment, Scheduling and Access, Administrative Support, Performance and Insights, Wellbeing and Support, Communication and Engagement, and Policy and Knowledge. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the provider experience team, medical staff services, HR and wellbeing, IT support, clinical leadership and executive sponsors, and outcomes that matter on the right.",
    assist: {
      name: "Provider Experience Assist",
      line: "Your intelligent front door for provider support",
      ask: "I need help with onboarding, credentialing, my schedule, an administrative task, or a policy question.",
      intake: ["Provider request intake: capture and classify requests from clinicians, providers and care teams", "Context and impact check: identify provider type, specialty, location and operational context", "Systems and data lookup: retrieve provider profile, schedule, productivity, contract and credentialing data", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Provider Onboarding Agent", ["Guide new provider setup", "Coordinate credentials and access", "Track required training", "Prepare practice orientation", "Monitor onboarding milestones"]],
      ["Credentialing & Enrollment Agent", ["Track credentialing status", "Manage recredentialing", "Validate payer enrollment", "Monitor expirations", "Alert on missing documents"]],
      ["Scheduling & Access Agent", ["Optimize provider schedules", "Identify open capacity", "Manage leave coverage", "Reduce no-shows", "Surface access opportunities"]],
      ["Administrative Support Agent", ["Draft forms and letters", "Summarize policy requirements", "Assist with licensure, DEA and privileging", "Route requests to appropriate teams", "Track status and follow-up"]],
      ["Performance & Insights Agent", ["Provide productivity insights", "Compare benchmarks", "Identify trends and opportunities", "Prepare provider scorecards", "Support value-based care reporting"]],
      ["Wellbeing & Support Agent", ["Resource navigation", "Burnout risk signals", "Connect to wellness programs", "Provide mental health resources", "Identify workload concerns"]],
      ["Communication & Engagement Agent", ["Answer provider questions", "Deliver targeted announcements", "Facility and system updates", "Collect feedback", "Summarize sentiment and themes"]],
      ["Policy & Knowledge Agent", ["Answer questions from provider policies", "Surface relevant credentialing and guidelines", "Provide clinical administrative guidance", "Link to training and resources"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with HR, legal and medical staff policies)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)", "Provider data management (credentialing, privileging, licensure, enrollment)", "Scheduling systems (Amion, QGenda, Oracle, etc.)", "HR and learning systems (Workday, HCM, training, etc.)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Provider Experience Team", "Medical Staff Services", "HR and Wellbeing", "IT Support", "Clinical Leadership", "Executive Sponsors"],
    outcomes: ["Less administrative burden", "Higher provider satisfaction", "Faster onboarding", "Better access to care", "Stronger compliance", "Higher productivity", "Healthier providers"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Empowering providers to deliver their best care"]
  }],
  quality: {
    image: 'assets/quality-safety-room-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: "Quality & Safety Room",
    subtitle: "Governed agents for evidence collection, event operations, audit readiness, and action tracking.",
    alt: "Architecture diagram of the Quality and Safety Room. Events, concerns, requests and external sources enter an intake and discovery flow of event and request intake, a completeness check, approved taxonomy and standards, and case summary. Quality and Safety Assist, the front door, takes in the event or request, normalizes and validates it, routes it to the best agent, gathers evidence, tracks actions and sends it for human review. Eight specialized sub-agents sit below: Safety Event Intake, Quality Measure Evidence, Audit and Accreditation Evidence, CAPA Tracking, Safety Huddle Preparation, Regulatory Report Preparation, RCA Preparation, and Policy Surveillance and Change. A governance control plane and shared platform services and integrations sit underneath, with human escalation to safety professionals, quality leaders, accreditation leads, regulatory specialists, clinical owners and legal and privacy. A Nursing Operations Assist agent portfolio strip shows the same agents with example use cases for nursing.",
    assist: {
      name: "Quality & Safety Assist",
      line: "Your intelligent front door to quality and safety operations",
      ask: "I need help with a safety event, a quality measure, an audit, or a corrective action.",
      intake: ["Event and request intake: capture events, concerns, requests from clinical, operational or external sources", "Completeness check: validate required fields and identify missing information", "Approved taxonomy and standards: classify using approved taxonomy (e.g., PSO, NQF, regulatory)", "Case summary: create an initial summary and route to the appropriate team or agent"],
      steps: ["Intake", "Normalize and validate", "Route to best agent", "Gather evidence", "Track actions", "Human review"]
    },
    agents: [
      ["Safety Event Intake Agent", ["Normalize required fields", "Identify missing information", "Route by approved taxonomy", "Notify the safety queue"]],
      ["Quality Measure Evidence Agent", ["Retrieve metric evidence", "Map definitions", "Reconcile periods", "Flag data gaps"]],
      ["Audit & Accreditation Evidence Agent", ["Crosswalk standards to approved artifacts", "Verify owner status", "Assemble the evidence package", "Track readiness"]],
      ["CAPA Tracking Agent", ["Create governed action records", "Set reminders and dependencies", "Track closure evidence", "Escalate overdue items"]],
      ["Safety Huddle Preparation Agent", ["Summarize events and trends", "Highlight open actions", "Surface operational signals", "Prepare huddle briefs"]],
      ["Regulatory Report Preparation Agent", ["Assemble approved facts, forms and exhibits", "Prepare a sign-off checklist", "Track submission requirements; an authorized specialist determines obligation and attestation"]],
      ["RCA Preparation Agent", ["Build a factual chronology", "Create an evidence index", "Prepare an interview schedule", "Identify unanswered questions"]],
      ["Policy Surveillance & Change Agent", ["Monitor external guidance and updates", "Compare to local policies", "Identify potential impacts", "Create owner questions and track unresolved gaps"]]
    ],
    governance: ["Privacy and PSO privilege (protect PHI and PSO data)", "Role-based access control (least privilege)", "Audit logging", "Source traceability (cite sources, maintain evidence lineage)", "Human sign-off for high-risk actions", "Retention and records management", "Output validation (rules, confidence checks, guardrails)", "Monitoring and analytics"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "Quality and safety platform (event reporting, PSO)", "Dataverse (case management)", "EHR and FHIR (where authorized)", "Standards and regulatory sources (NQF, CMS, The Joint Commission, etc.)", "Teams and email (notifications and collaboration)"],
    humans: ["Safety Professionals", "Quality Leaders", "Accreditation Leads", "Regulatory Specialists", "Clinical Owners", "Legal and Privacy"],
    outcomes: ["Faster event routing", "Audit readiness", "Reduced evidence prep", "Better CAPA follow-through", "Stronger traceability", "Safer operations"],
    principles: ["People first", "Governed by policy", "Built for trust", "Focused on outcomes", "Scalable for what is next", "Classification, severity, reportability, causality, conformance, corrective-action closure and regulatory attestation remain human decisions"]
  },
  revenue: {
    image: 'assets/revenue-cycle-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Revenue Cycle Management Operations Room",
    subtitle: "AI-powered revenue cycle operations across access, coding, claims, denials, and patient financial experience.",
    alt: "Architecture diagram of the Revenue Cycle Management Operations Room. A request from providers, staff or patients enters an intake and discovery flow of RCM request intake, context and eligibility check, coverage and authorization lookup, and case summary. Revenue Cycle Management Assist, the front door, understands the request, enriches and validates it with eligibility, claims and account data, routes it to the best agent, orchestrates actions, monitors compliance and synthesizes and delivers the response. Eight specialized sub-agents sit below: Patient Access, Claims Intake and Status, Coding and Documentation, Denial Management, Payment Posting and Reconciliation, Patient Financial Experience, Revenue Integrity, and Payer Policy Intelligence. A governance control plane and shared platform services and integrations sit underneath, with human escalation to patient access staff, coding specialists, RCM analysts, patient financial services, compliance and privacy, clinical staff and finance leadership, and outcomes that matter on the right.",
    assist: {
      name: "Revenue Cycle Management Assist",
      line: "Your intelligent front door to revenue cycle operations",
      ask: "I need help with an eligibility check, a claim status, a denial, a coding question, or a patient billing question.",
      intake: ["RCM request intake: capture and classify requests from providers, staff or patients", "Context and eligibility check: identify patient, service, payer and claim context", "Coverage and authorization lookup: check eligibility, prior authorizations and payer rules", "Case summary: create an initial summary and route to the right agent"],
      steps: ["Understand request", "Enrich and validate", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Patient Access Agent", ["Eligibility and benefits verification", "Prior authorization status", "Patient scheduling support", "Financial clearance coordination"]],
      ["Claims Intake & Status Agent", ["Claim creation and validation", "Claim status inquiries", "Payer communication summaries", "Timely follow-up and escalation"]],
      ["Coding & Documentation Agent", ["Coding guidance and validation", "Documentation completeness checks", "Query preparation for clinicians", "Coding policy lookup"]],
      ["Denial Management Agent", ["Denial reason analysis", "Appeal readiness assessment", "Evidence package assembly", "Resubmission tracking"]],
      ["Payment Posting & Reconciliation Agent", ["Remittance processing support", "Payment matching", "Underpayment identification", "Account reconciliation"]],
      ["Patient Financial Experience Agent", ["Patient balance inquiries", "Payment plan support", "Financial assistance guidance", "Clear, empathetic communications"]],
      ["Revenue Integrity Agent", ["Charge capture audits", "CDM and compliance monitoring", "Key metric reporting", "Risk and opportunity identification"]],
      ["Payer Policy Intelligence Agent", ["Payer policy lookup", "Coverage rule interpretation", "Policy change alerts", "Impact analysis and recommendations"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve changes)", "Lifecycle management (version, deploy, monitor, retire)", "Audit logging (traceability for actions and decisions)", "Compliance and policy (payer policy alignment, PHI protection, regulatory standards)", "Prompt governance (standards and controls)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "Identity and access (SSO, RBAC, permissions)", "EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)", "RCM systems (claims, billing, patient accounting)", "Payer portals (eligibility, claims, authorizations)", "APIs and MCP (secure, governed integrations)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Patient Access Staff", "Coding Specialists", "RCM Analysts", "Patient Financial Services", "Compliance and Privacy", "Clinical Staff", "Finance Leadership"],
    outcomes: ["Faster claim resolution", "Higher first-pass claim rates", "Increased net revenue", "Better patient experience", "Stronger compliance", "More efficient staff"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Clinical, financial and policy decisions remain with qualified professionals"]
  },
  it: {
    image: 'assets/it-data-digital-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "IT, Data & Digital Operations Room",
    subtitle: "AI-powered IT service, security, data, and digital operations to keep care running.",
    alt: "Architecture diagram of the IT, Data and Digital Operations Room. A request from employees, clinicians or systems enters an intake and discovery flow of service request intake, context and impact check, user and system lookup, and case summary. IT, Data and Digital Operations Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors security and compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Service Request Intake and Routing, Incident Command, Access Review Evidence, Change Readiness, Data Quality Case, Analytics Request Scoping, Operating Review, and Knowledge and Status. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the service desk, IAM and security, application owners, data owners, incident managers, and change advisory and IT leaders, and outcomes that matter on the right.",
    assist: {
      name: "IT, Data & Digital Operations Assist",
      line: "Your intelligent front door for IT and digital operations",
      ask: "I need help with an access request, an incident, a change, a data quality issue, or a question about IT status.",
      intake: ["Service request intake: capture and classify requests from employees, clinicians and system users", "Context and impact check: identify request type, urgency, affected systems and business impact", "User and system lookup: retrieve user, device, application and asset information", "Case summary: create an initial summary and route to the right agent"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor security and compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Service Request Intake & Routing Agent", ["Classify and enrich requests", "Validate required fields", "Route to ownership", "Track status and follow-up"]],
      ["Incident Command Agent", ["Assemble incident chronology", "Identify impacted services", "Track open actions", "Generate stakeholder briefings"]],
      ["Access Review Evidence Agent", ["Collect entitlement and access evidence", "Flag missing or excess access", "Prepare reviewer package", "Track remediation status"]],
      ["Change Readiness Agent", ["Assemble change plan", "Identify dependencies", "Validate testing evidence", "Prepare communications and track readiness status"]],
      ["Data Quality Case Agent", ["Capture and classify data issue", "Reconcile evidence across systems", "Route to data owner", "Track remediation and closure"]],
      ["Analytics Request Scoping Agent", ["Clarify business question and goal", "Identify data needs and sources", "Define audience and format", "Confirm acceptance criteria"]],
      ["Operating Review Agent", ["Compile KPIs across IT operations", "Summarize incidents, changes and backlog", "Identify trends and risks", "Prepare leadership brief"]],
      ["Knowledge & Status Agent", ["Answer questions from IT policies and procedures", "Provide real-time service and system status", "Surface relevant knowledge and troubleshooting guidance"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve changes and actions)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "DLP and data classification (protect sensitive data)", "Lifecycle management (version, deploy, monitor, retire)", "Prompt governance (standards and controls)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "ITSM (ServiceNow, Jira, etc.)", "IAM and Entra ID (identity and access)", "CMDB and asset inventory (configuration management)", "Monitoring and observability (Dynatrace, Splunk, Datadog, etc.)", "Data catalog (Purview, Collibra, etc.)", "DevOps and change systems (Azure DevOps, GitHub, etc.)", "BI and reporting (Power BI, Tableau, etc.)"],
    humans: ["Service Desk (Tier 1-3 support)", "IAM and Security", "Application Owners", "Data Owners", "Incident Managers", "Change Advisory and IT Leaders"],
    outcomes: ["Faster request resolution", "Better incident coordination", "Stronger access governance", "Higher change readiness", "Faster data issue resolution", "More productive teams"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Security, access, production change and authoritative data decisions remain human-controlled"]
  },
  growth: [{
    image: 'assets/marketing-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Marketing Operations Room",
    subtitle: "AI-powered marketing operations to engage patients, grow markets, and build trusted brands.",
    alt: "Architecture diagram of the Marketing Operations Room. A request from staff, leaders or external partners enters an intake and discovery flow of marketing request intake, context and audience check, asset and data lookup, and case summary. Marketing Operations Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Seven specialized sub-agents sit below: Campaign Strategy, Content Creation, Asset Management, Approval and Workflow, Analytics and Insights, Event and Experience, and Privacy and Compliance. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the marketing team, creative services, legal and compliance, external partners and executive leadership, and outcomes that matter on the right.",
    assist: {
      name: "Marketing Operations Assist",
      line: "Your intelligent front door for marketing support",
      ask: "I need help with a campaign brief, content, an approved asset, a review, campaign results, or an event.",
      intake: ["Marketing request intake: capture and classify requests from staff, leaders or external partners", "Context and audience check: identify audience, purpose, channel, brand guidelines and any regulatory or privacy considerations", "Asset and data lookup: retrieve existing assets, campaign history, audience data and performance insights", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Campaign Strategy Agent", ["Develop campaign briefs", "Audience analysis and segmentation", "Channel recommendations", "Competitive insights", "Performance planning"]],
      ["Content Creation Agent", ["Draft copy and creative content", "Adapt for multiple channels", "Optimize for audience and tone", "Generate variants for testing", "Repurpose existing content"]],
      ["Asset Management Agent", ["Search and retrieve approved assets", "Version control and metadata", "Recommend existing content", "Manage digital asset requests", "Ensure brand compliance"]],
      ["Approval & Workflow Agent", ["Route for review and approval", "Track status and reminders", "Ensure policy and brand compliance", "Manage feedback and revisions", "Notify stakeholders"]],
      ["Analytics & Insights Agent", ["Analyze campaign performance", "Generate insights and summaries", "Track KPIs and trends", "Identify optimization opportunities", "Create executive reports"]],
      ["Event & Experience Agent", ["Plan and coordinate events", "Manage logistics and communications", "Create event materials", "Track registrations and follow-ups", "Measure event impact"]],
      ["Privacy & Compliance Agent", ["Check content for privacy requirements", "Validate consent and data use", "Ensure regulatory adherence", "Review sensitive language or claims", "Flag risks and escalate as needed"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve content and campaigns)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and brand governance (brand guidelines, content policies, controls)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "CRM and CDP (Dynamics, Salesforce, Adobe, etc.)", "Digital asset management (brand assets, media, metadata)", "Web and CMS (Sitecore, WordPress, etc.)", "Analytics platforms (Adobe, Google, Power BI, etc.)", "Marketing automation (Marketo, Salesforce Marketing, etc.)", "APIs and integration (secure, governed connectors)"],
    humans: ["Marketing Team", "Creative Services", "Legal and Compliance", "External Partners", "Executive Leadership"],
    outcomes: ["Faster campaign execution", "Stronger brand consistency", "Increased patient engagement", "Higher marketing ROI", "Greater compliance", "More productive teams"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Marketing drives healthier people and stronger communities"]
  }, {
    image: 'assets/sales-growth-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Sales & Growth Operations Room",
    subtitle: "AI-powered business development and relationship management to expand access, partnerships, and market growth.",
    alt: "Architecture diagram of the Sales and Growth Operations Room. A request from referral sources, employers, payers or internal teams enters an intake and discovery flow of growth request intake, context and opportunity assessment, data and relationship lookup, and case summary. Sales and Growth Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Seven specialized sub-agents sit below: Account and Relationship Intelligence, RFP and Proposal, Market Intelligence, Referral Development, Payer and Employer Engagement, Contract and Negotiation Support, and Marketing and Campaign Support. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the sales and growth team, provider relations, contracting and legal, marketing and communications, finance and executive leadership, and outcomes that matter on the right.",
    assist: {
      name: "Sales & Growth Assist",
      line: "Your intelligent front door for growth and partnership support",
      ask: "I need help with an account briefing, an RFP response, a referral source, a payer or employer meeting, or a contract question.",
      intake: ["Growth request intake: capture and classify inquiries from referral sources, employers, payers or internal teams", "Context and opportunity assessment: identify account, market and partnership context and business objectives", "Data and relationship lookup: retrieve account history, contracts, outreach activity and market intelligence", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Account & Relationship Intelligence Agent", ["Research accounts and key stakeholders", "Summarize relationship history and activity", "Identify growth opportunities", "Prepare account briefs and talking points"]],
      ["RFP & Proposal Agent", ["Analyze RFP requirements", "Gather relevant content and data", "Draft responses and summaries", "Track deadlines and approvals", "Coordinate reviews"]],
      ["Market Intelligence Agent", ["Analyze market trends and competitive landscape", "Identify expansion opportunities", "Create market summaries and insights", "Monitor payer and employer dynamics"]],
      ["Referral Development Agent", ["Identify and prioritize referral sources", "Prepare outreach plans and materials", "Track follow-ups and pipeline status", "Surface warm leads and opportunities"]],
      ["Payer & Employer Engagement Agent", ["Research payer and employer needs and priorities", "Prepare meeting briefs", "Track engagement and commitments", "Monitor contract opportunities"]],
      ["Contract & Negotiation Support Agent", ["Retrieve contract terms and templates", "Analyze key terms and redlines", "Summarize obligations and risks", "Prepare negotiation briefs and scenarios"]],
      ["Marketing & Campaign Support Agent", ["Create campaign briefs", "Develop content and messaging", "Coordinate with legal and brand standards", "Track campaign performance and ROI"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve content and outreach)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and brand governance (messaging, approvals, brand compliance)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "CRM and CDP (Dynamics, Salesforce, etc.)", "Analytics platforms (Power BI, Databricks, etc.)", "External data sources (market, provider, payer data)", "Document repositories (contracts, RFPs, proposals)", "APIs and integrations (internal systems, partner data)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Sales and Growth Team", "Provider Relations", "Contracting and Legal", "Marketing and Communications", "Finance", "Executive Leadership"],
    outcomes: ["Faster opportunity conversion", "Stronger referral relationships", "Increased patient access", "Revenue growth", "Greater compliance", "More productive teams"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Healthier communities through stronger partnerships and greater access"]
  }],
  pmo: {
    image: 'assets/pmo-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Product, Portfolio & PMO Operations Room",
    subtitle: "AI-powered portfolio and program execution to turn strategy into measurable impact.",
    alt: "Architecture diagram of the Product, Portfolio and PMO Operations Room. A request from executives, teams or stakeholders enters an intake and discovery flow of portfolio request intake, context and prioritization, project and initiative lookup, and case summary. Product, Portfolio and PMO Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors progress and risk, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Idea and Intake, Portfolio Planning, Program Management, Project Execution, Risk and Issue Management, Resource and Capacity, Reporting and Insights, and Knowledge and Lessons Learned. A governance control plane and shared platform services and integrations sit underneath, with human escalation to PMO leadership, business executives, program managers, finance partners, IT and data teams, change management and operational leaders, and outcomes that matter on the right.",
    assist: {
      name: "Product, Portfolio & PMO Assist",
      line: "Your intelligent front door for portfolio and program support",
      ask: "I need help with a new idea, a portfolio view, a program status, a project risk, or a resource question.",
      intake: ["Portfolio request intake: capture and classify business cases from executives, teams or stakeholders", "Context and prioritization: identify strategic goals, dependencies, constraints and business value", "Project and initiative lookup: retrieve existing initiatives, status, artifacts and lessons learned", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor progress and risk", "Synthesize and deliver response"]
    },
    agents: [
      ["Idea & Intake Agent", ["Capture and enrich ideas", "Assess strategic fit", "Identify required information", "Route for review", "Track intake status"]],
      ["Portfolio Planning Agent", ["Maintain portfolio plans", "Analyze capacity and constraints", "Model scenarios", "Prioritize investments", "Track value realization"]],
      ["Program Management Agent", ["Create and maintain program plans", "Track milestones and dependencies", "Summarize status", "Identify and escalate risks", "Prepare steering materials"]],
      ["Project Execution Agent", ["Create project artifacts", "Track tasks and timelines", "Monitor progress", "Flag delays and issues", "Prepare status reports"]],
      ["Risk & Issue Management Agent", ["Identify and assess risks", "Track issues to closure", "Recommend mitigation options", "Monitor key risk indicators", "Prepare risk summaries"]],
      ["Resource & Capacity Agent", ["Analyze resource needs", "Match skills to demand", "Track utilization and availability", "Identify staffing gaps", "Support workforce planning"]],
      ["Reporting & Insights Agent", ["Generate executive reports and dashboards", "Analyze performance and outcomes", "Summarize key changes", "Create visualizations", "Provide insights and recommendations"]],
      ["Knowledge & Lessons Learned Agent", ["Search prior initiatives", "Identify best practices", "Capture lessons learned", "Recommend templates", "Surface relevant examples and guidance"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve initiatives and changes)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and standards (align with enterprise PMO methodology)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "PPM tools (Planview, ServiceNow, Jira, Azure DevOps, etc.)", "Financial systems (budgeting, forecasting)", "Data and analytics (Power BI, Fabric, Dataverse, etc.)", "Collaboration tools (Whiteboard, Loop, etc.)", "Document repositories (contracts, business cases, policies, templates)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["PMO Leadership", "Business Executives", "Program Managers", "Finance Partners", "IT and Data Teams", "Change Management", "Operational Leaders"],
    outcomes: ["Faster time to value", "Greater portfolio clarity", "Better resource alignment", "Higher strategic impact", "Stronger governance", "More productive teams"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Strategy, investment, prioritization and funding decisions remain with accountable leaders"]
  },
  access: [{
    image: 'assets/patient-access-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Patient Access Operations Room",
    subtitle: "AI-powered access operations to get the right patients to the right care at the right time.",
    alt: "Architecture diagram of the Patient Access Operations Room. A request from patients, providers, staff or external partners enters an intake and discovery flow of access request intake, patient and insurance verification, appointment and referral lookup, and case summary. Patient Access Assist, the front door, understands the request, enriches and validates patient, insurance, provider and service information, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Seven specialized sub-agents sit below: Scheduling, Eligibility and Benefits, Referral Management, Patient Intake, Authorization Support, Patient Communication, and Access Analytics. A governance control plane and shared platform services and integrations sit underneath, with human escalation to patient access staff, clinical teams, authorization specialists, patient financial services, compliance and privacy, and access leadership, and outcomes that matter on the right.",
    assist: {
      name: "Patient Access Assist",
      line: "Your intelligent front door for patient access and scheduling",
      ask: "I need help scheduling an appointment, checking insurance, tracking a referral, or getting an authorization.",
      intake: ["Access request intake: capture and classify inquiries from patients, providers, staff or external partners", "Patient and insurance verification: identify patient, coverage type and service needs", "Appointment and referral lookup: check availability, referrals and provider options", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Scheduling Agent", ["Check real-time availability", "Find optimal slots", "Manage waitlists", "Reschedule and handle cancellations", "Reduce no-shows"]],
      ["Eligibility & Benefits Agent", ["Verify insurance coverage", "Check benefits and authorizations", "Estimate patient responsibility", "Identify coverage issues", "Guide next steps"]],
      ["Referral Management Agent", ["Process incoming referrals", "Track referral status", "Match to appropriate providers", "Identify missing information", "Notify stakeholders"]],
      ["Patient Intake Agent", ["Collect and validate patient information", "Complete pre-visit requirements", "Send instructions and reminders", "Identify special needs", "Prepare for visit"]],
      ["Authorization Support Agent", ["Check prior auth requirements", "Prepare and submit requests", "Track status and follow up", "Identify denials or delays", "Coordinate with clinical and payer teams"]],
      ["Patient Communication Agent", ["Answer patient questions", "Provide status updates", "Send reminders and instructions", "Support self-service via chat and voice", "Escalate complex inquiries"]],
      ["Access Analytics Agent", ["Monitor access metrics", "Identify bottlenecks", "Analyze demand and capacity", "Forecast openings", "Generate operational reports"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve changes and actions)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with HIPAA, CMS and payer requirements)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "EHR and PM systems (Epic, Cerner, MEDITECH, etc.)", "Payer eligibility and auth (Availity, Carelon, Change Healthcare, etc.)", "Scheduling systems (Amion, QGenda, etc.)", "CRM and contact center (Dynamics, Salesforce, Genesys, etc.)", "APIs and integration (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Patient Access Staff", "Clinical Teams", "Authorization Specialists", "Patient Financial Services", "Compliance and Privacy", "Access Leadership"],
    outcomes: ["Shorter wait times", "Higher access rates", "Better patient experience", "Greater operational efficiency", "Stronger compliance", "More productive teams"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Removing barriers to care to build healthier communities"]
  }, {
    image: 'assets/contact-center-patient-experience-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Contact Center & Patient Experience Operations Room",
    subtitle: "AI-powered patient engagement to deliver faster, easier, and more personalized support.",
    alt: "Architecture diagram of the Contact Center and Patient Experience Operations Room. A request from phone, chat, email, portal or in-person interactions enters an intake and discovery flow of patient inquiry intake, context and patient lookup, coverage and policy check, and case summary. Patient Experience Assist, the front door, understands the request, enriches and validates patient data, coverage and history, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Patient Inquiry, Scheduling and Appointment, Eligibility and Benefits, Billing and Payment Support, Care Navigation, Patient Outreach, Feedback and Engagement, and Knowledge and Policy. A governance control plane and shared platform services and integrations sit underneath, with human escalation to contact center representatives, clinical triage teams, scheduling specialists, patient financial services, care management teams, compliance and privacy, and leadership teams, and outcomes that matter on the right.",
    assist: {
      name: "Patient Experience Assist",
      line: "Your intelligent front door for patient and member support",
      ask: "I need help with a question, an appointment, my coverage, a bill, or finding the right care.",
      intake: ["Patient inquiry intake: capture and classify inquiries from phone, chat, email, portal or in-person interactions", "Context and patient lookup: identify patient, intent, history and care context (billing, clinical or general)", "Coverage and policy check: retrieve eligibility, benefits and policy information", "Case summary: create an initial summary and route to the right agent"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Patient Inquiry Agent", ["Answer general questions", "Provide service navigation", "Check status and next steps", "Support multilingual interactions", "Escalate complex inquiries"]],
      ["Scheduling & Appointment Agent", ["Find available appointments", "Reschedule or cancel", "Send confirmations and reminders", "Handle waitlists", "Coordinate specialty referrals"]],
      ["Eligibility & Benefits Agent", ["Verify coverage and eligibility", "Explain benefits", "Estimate out-of-pocket costs", "Check prior authorization status", "Provide financial assistance options"]],
      ["Billing & Payment Support Agent", ["Answer billing questions", "Provide balance details", "Set up payment plans", "Process payment transactions", "Explain statements and charges", "Connect to financial counseling"]],
      ["Care Navigation Agent", ["Provide care options and next steps", "Coordinate referrals", "Support transitions of care", "Connect to clinical services", "Locate providers and facilities"]],
      ["Patient Outreach Agent", ["Proactive outreach and follow-up", "Care gap notifications", "Preventive care reminders", "Post-discharge check-ins", "Support population health programs"]],
      ["Feedback & Engagement Agent", ["Capture patient feedback and surveys", "Resolve concerns and complaints", "Identify themes and trends", "Route to service recovery teams", "Track satisfaction metrics"]],
      ["Knowledge & Policy Agent", ["Answer questions from approved sources", "Provide accurate service information", "Interpret policies and guidelines", "Support agents with real-time guidance", "Keep content current"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve changes and actions)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with HIPAA, CMS and organizational policies)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "Contact center platforms (e.g., Genesys, NICE, Five9, Amazon Connect)", "EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)", "CRM systems (Dynamics 365, Salesforce, etc.)", "Payer and eligibility (real-time eligibility, authorizations)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Contact Center Representatives", "Clinical Triage Teams", "Scheduling Specialists", "Patient Financial Services", "Care Management Teams", "Compliance and Privacy", "Leadership Teams"],
    outcomes: ["Shorter wait times", "Higher patient satisfaction", "Increased access to care", "Lower operational cost", "Stronger compliance", "More consistent information", "Healthier communities"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Every interaction is an opportunity to create a healthier tomorrow"]
  }],
  research: {
    image: 'assets/research-administration-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Research Administration Operations Room",
    subtitle: "AI-powered research administration to accelerate innovation, ensure compliance, and expand impact.",
    alt: "Architecture diagram of the Research Administration Operations Room. A request from investigators, study staff, sponsors or external partners enters an intake and discovery flow of research request intake, context and eligibility check, study and sponsor lookup, and case summary. Research Administration Assist, the front door, understands the request, enriches and validates study, sponsor, regulatory and institutional context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Study Intake and Feasibility, Budget and Financial Management, Contract and Agreement, IRB and Regulatory, Participant Management, Data and Reporting, Compliance and Audit, and Knowledge and Insights. A governance control plane and shared platform services and integrations sit underneath, with human escalation to principal investigators, research administrators, sponsored programs, IRB and research compliance, clinical research teams, finance and grants teams, and legal counsel, and outcomes that matter on the right.",
    assist: {
      name: "Research Administration Assist",
      line: "Your intelligent front door for research administration",
      ask: "I need help with a study proposal, a budget, a contract, an IRB submission, or a compliance question.",
      intake: ["Research request intake: capture and classify requests from investigators, study staff, sponsors or external partners", "Context and eligibility check: identify study type, funding source, regulatory requirements and institutional policies", "Study and sponsor lookup: retrieve study records, sponsor information, contracts and compliance obligations", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Study Intake & Feasibility Agent", ["Assess study proposals", "Check institutional fit and capacity", "Identify key requirements", "Route to right teams", "Track intake status"]],
      ["Budget & Financial Management Agent", ["Build and validate study budgets", "Track spend and forecasting", "Monitor cost-to-actuals", "Support invoicing and financial reporting", "Flag variances"]],
      ["Contract & Agreement Agent", ["Draft and review study agreements", "Track negotiation status", "Compare terms with templates", "Monitor obligations and renewal dates", "Alert on key milestones"]],
      ["IRB & Regulatory Agent", ["Prepare and check IRB submissions", "Track approvals and expirations", "Monitor continuing reviews", "Manage amendments", "Ensure regulatory alerts and milestones"]],
      ["Participant Management Agent", ["Support recruitment planning", "Track enrollment and milestones", "Monitor study visits and retention", "Identify at-risk patients", "Generate enrollment reports"]],
      ["Data & Reporting Agent", ["Aggregate study data", "Track key metrics and timelines", "Generate reports and dashboards", "Support sponsor reporting", "Identify data quality issues"]],
      ["Compliance & Audit Agent", ["Monitor protocol adherence", "Check policy and regulatory requirements", "Prepare audit packages", "Track training and documentation", "Flag compliance risks"]],
      ["Knowledge & Insights Agent", ["Answer research policy questions", "Retrieve SOPs and guidance", "Summarize evidence and best practices", "Surface relevant trials and opportunities", "Recommend next steps"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with NIH, FDA, HIPAA and institutional policies)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "Research systems (e.g., OnCore, Velos, REDCap)", "EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)", "Grants and funding (eRA Commons, Grants.gov, etc.)", "Data and analytics (Power BI, Fabric, Dataverse, etc.)", "Document repositories (SharePoint, policy sites, SOPs)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Principal Investigators", "Research Administrators", "Sponsored Programs", "IRB and Research Compliance", "Clinical Research Teams", "Finance and Grants Teams", "Legal Counsel"],
    outcomes: ["Faster study startup", "Greater research capacity", "Improved researcher experience", "Stronger compliance", "Higher data quality", "Increased funding success", "Healthier communities"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Turning research into healthier tomorrows"]
  },
  ambulatory: {
    image: 'assets/ambulatory-specialty-care-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Ambulatory & Specialty Care Operations Room",
    subtitle: "AI-powered ambulatory and specialty care operations to improve access, coordination, and clinical outcomes.",
    alt: "Architecture diagram of the Ambulatory and Specialty Care Operations Room. A request from patients, providers or staff enters an intake and discovery flow of care request intake, context and eligibility check, patient and care data lookup, and case summary. Ambulatory and Specialty Care Assist, the front door, understands the request, enriches and validates patient, provider, clinical and coverage information, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Scheduling and Access, Referral and Care Coordination, Authorization and Eligibility, Specialty Triage, Chronic Care Management, Patient Education, Performance and Operations, and Clinical Knowledge. A governance control plane and shared platform services and integrations sit underneath, with human escalation to front desk and access staff, clinical care teams, specialty care teams, the authorization team, care management, compliance and privacy, and operations leadership, and outcomes that matter on the right.",
    assist: {
      name: "Ambulatory & Specialty Care Assist",
      line: "Your intelligent front door for ambulatory and specialty care operations",
      ask: "I need help with an appointment, a referral, an authorization, a care plan, or patient education.",
      intake: ["Care request intake: capture and classify requests from patients, providers or staff for ambulatory and specialty care support", "Context and eligibility check: identify patient needs, specialty, urgency, referral status and coverage requirements", "Patient and care data lookup: retrieve patient history, referrals, authorizations and prior care activity", "Case summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Scheduling & Access Agent", ["Find optimal appointments", "Manage waitlists", "Handle reschedules and cancellations", "Optimize provider schedules", "Reduce no-shows"]],
      ["Referral & Care Coordination Agent", ["Process incoming referrals", "Track referral status", "Coordinate with specialists", "Manage transitions", "Close referral loops"]],
      ["Authorization & Eligibility Agent", ["Verify coverage and benefits", "Check prior authorization status", "Prepare and submit authorization requests", "Track determinations", "Identify and resolve denials"]],
      ["Specialty Triage Agent", ["Assess clinical care gaps", "Route to appropriate specialty", "Apply clinical guidelines", "Flag high-risk cases", "Recommend next best steps"]],
      ["Chronic Care Management Agent", ["Identify care gaps", "Support outreach and follow-up", "Coordinate multi-disciplinary care", "Track longitudinal care plans", "Monitor quality measures"]],
      ["Patient Education Agent", ["Create condition-specific education", "Tailor materials by language and literacy level", "Support pre- and post-visit instructions", "Answer patient questions"]],
      ["Performance & Operations Agent", ["Track access and capacity metrics", "Identify bottlenecks", "Analyze no-show trends", "Generate operational reports", "Recommend improvements"]],
      ["Clinical Knowledge Agent", ["Provide guidance on care pathways", "Surface latest evidence and guidelines", "Support specialty-specific protocols", "Answer clinical practice questions"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve changes and actions)", "Identity and access (RBAC, least privilege, segmentation)", "Audit logging (traceability for actions and decisions)", "Policy and compliance (align with clinical, payer and regulatory policies)", "Lifecycle management (version, deploy, monitor, retire)", "Usage analytics (monitor adoption, performance and impact)"],
    systems: ["Microsoft 365 (Teams, Outlook, SharePoint)", "EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)", "Scheduling systems (Amion, QGenda, etc.)", "Payer systems (eligibility, auth, claims)", "Patient engagement (portal, CRM, contact center, etc.)", "APIs and integrations (secure, governed connectors)", "Security (Zero Trust, encryption, DLP)"],
    humans: ["Front Desk and Access Staff", "Clinical Care Teams", "Specialty Care Teams", "Authorization Team", "Care Management", "Compliance and Privacy", "Operations Leadership"],
    outcomes: ["Faster access to care", "Higher appointment completion", "Improved patient experience", "Greater operational efficiency", "Stronger compliance", "Healthier communities"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Expanding access to the right care for a healthier tomorrow"]
  },
  exec: {
    image: 'assets/executive-strategy-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Executive & Strategy Assist Multi-Agent Team",
    subtitle: "AI-powered executive decision support, strategy execution and board readiness.",
    alt: "Architecture diagram of the Executive & Strategy Assist Multi-Agent Team. A request enters an intake and discovery flow of executive request, strategic context check, source & data lookup, briefing summary. Executive & Strategy Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Board Briefing, Strategic Planning, Performance Insights, Market Intelligence, Initiative Tracking, Decision Memo, Stakeholder Comms, and Risk Escalation. A governance control plane and shared platform services and integrations sit underneath, with human escalation to executive team, chief of staff, strategy office, board secretary, finance leaders, and legal, and outcomes that matter on the right: faster decisions, sharper focus, less prep burden, aligned leadership, clear accountability.",
    assist: {
      name: "Executive & Strategy Assist",
      line: "Your intelligent front door for executive and strategy support",
      ask: "I need help preparing a board briefing, tracking a strategic initiative, or drafting a decision memo for leadership.",
      intake: ["Executive Request: capture and classify requests from executives, chiefs of staff and board members", "Strategic Context Check: identify the strategic priority, audience, deadline and confidentiality level", "Source & Data Lookup: retrieve performance reports, plans, market data and prior board materials", "Briefing Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Board Briefing Agent", ["Assemble board meeting packets", "Draft executive summaries", "Track board action items", "Prepare committee talking points", "Check materials for consistency"]],
      ["Strategic Planning Agent", ["Support strategic plan development", "Align goals across service lines", "Model scenarios and tradeoffs", "Track plan milestones", "Prepare annual planning calendars"]],
      ["Performance Insights Agent", ["Consolidate system performance scorecards", "Explain variances to targets", "Highlight emerging trends", "Prepare leadership dashboards", "Flag measures needing attention"]],
      ["Market Intelligence Agent", ["Monitor competitor and payer activity", "Summarize regional market shifts", "Track regulatory and policy changes", "Assess growth and partnership options"]],
      ["Initiative Tracking Agent", ["Track strategic initiative status", "Monitor owners and deadlines", "Surface blocked or at-risk work", "Prepare steering committee updates", "Capture benefits realized"]],
      ["Decision Memo Agent", ["Draft decision memos and options", "Summarize financial and clinical impact", "Capture risks and dependencies", "Route memos for review", "Record decisions and rationale"]],
      ["Stakeholder Comms Agent", ["Draft leadership messages and talking points", "Tailor updates by audience", "Prepare town hall materials", "Coordinate communication timing", "Track key stakeholder concerns"]],
      ["Risk Escalation Agent", ["Identify enterprise risks needing attention", "Route issues to accountable executives", "Track escalation responses", "Summarize risk exposure for leaders", "Monitor mitigation progress"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Source Traceability", "Executive Confidentiality", "Human Review"],
    systems: ["Microsoft 365", "Planning & BI", "Financial Systems", "Market Research", "Board Portal", "Security"],
    humans: ["Executive Team", "Chief of Staff", "Strategy Office", "Board Secretary", "Finance Leaders", "Legal"],
    outcomes: ["Faster Decisions", "Sharper Focus", "Less Prep Burden", "Aligned Leadership", "Clear Accountability"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Helping leaders decide with clarity"]
  },
  facilities: {
    image: 'assets/facilities-asset-management-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Facilities & Asset Management Assist Multi-Agent Team",
    subtitle: "AI-powered work orders, preventive maintenance and asset lifecycle across the care environment.",
    alt: "Architecture diagram of the Facilities & Asset Management Assist Multi-Agent Team. A request enters an intake and discovery flow of work request intake, location & asset check, safety & priority check, case summary. Facilities Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Work Order Triage, Preventive Maintenance, Asset Lifecycle, Environment of Care, Energy & Utilities, Space & Capacity, Vendor & Contractor, and Life Safety Compliance. A governance control plane and shared platform services and integrations sit underneath, with human escalation to facilities technicians, biomedical engineering, environmental services, safety officer, vendors, and operations leaders, and outcomes that matter on the right: faster repairs, fewer equipment outages, safer environment, lower maintenance cost, audit-ready compliance.",
    assist: {
      name: "Facilities Assist",
      line: "Your intelligent front door for facilities and asset management",
      ask: "I need help with a work order, a maintenance schedule, an equipment issue, or a safety inspection.",
      intake: ["Work Request Intake: capture and classify repair and service requests from clinical and support staff", "Location & Asset Check: identify the unit, room, equipment and maintenance history involved", "Safety & Priority Check: determine patient safety impact, infection risk and response urgency", "Case Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Work Order Triage Agent", ["Classify and prioritize requests", "Assign to the right technician", "Flag patient care impacts", "Track work order status", "Notify requesters of progress"]],
      ["Preventive Maintenance Agent", ["Schedule recurring inspections", "Plan maintenance around unit census", "Track overdue maintenance tasks", "Recommend maintenance intervals", "Document completed service"]],
      ["Asset Lifecycle Agent", ["Maintain equipment inventory records", "Track warranties and service contracts", "Flag aging equipment", "Support replacement planning", "Document equipment retirement"]],
      ["Environment of Care Agent", ["Schedule rounds and safety inspections", "Track findings through correction", "Support infection control risk assessments", "Prepare environment of care reports"]],
      ["Energy & Utilities Agent", ["Monitor power, water and HVAC use", "Flag abnormal utility patterns", "Track critical systems status", "Support outage and backup readiness", "Recommend efficiency improvements"]],
      ["Space & Capacity Agent", ["Track room and unit availability", "Support renovation and move planning", "Coordinate space requests", "Maintain floor plans and room data", "Identify underused space"]],
      ["Vendor & Contractor Agent", ["Verify contractor credentials and access", "Track vendor service performance", "Coordinate scheduled vendor visits", "Monitor contract terms and renewals", "Support purchase request status"]],
      ["Life Safety Compliance Agent", ["Track fire and life safety inspections", "Manage fire drills and documentation", "Monitor interim life safety measures", "Prepare survey evidence packages", "Flag deficiencies and due dates"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Safety Controls", "Vendor Access", "Compliance Evidence"],
    systems: ["Microsoft 365", "CMMS Work Orders", "Building Management", "Asset Inventory", "ERP Procurement", "IoT Sensors"],
    humans: ["Facilities Technicians", "Biomedical Engineering", "Environmental Services", "Safety Officer", "Vendors", "Operations Leaders"],
    outcomes: ["Faster Repairs", "Fewer Equipment Outages", "Safer Environment", "Lower Maintenance Cost", "Audit-Ready Compliance"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Keeping every care environment safe and ready"]
  },
  poph: {
    image: 'assets/care-population-health-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Care & Population Health Assist Multi-Agent Team",
    subtitle: "AI-powered care coordination, risk stratification and community outreach.",
    alt: "Architecture diagram of the Care & Population Health Assist Multi-Agent Team. A request enters an intake and discovery flow of patient signal intake, risk & eligibility check, records & program lookup, care summary. Care & Population Health Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Risk Stratification, Care Gap Closure, Care Management Outreach, Transitions of Care, Social Needs Referral, Chronic Condition Monitoring, Program Enrollment, and Population Insights. A governance control plane and shared platform services and integrations sit underneath, with human escalation to care managers, nurses, physicians, social workers, community health workers, and quality leaders, and outcomes that matter on the right: earlier intervention, closed care gaps, fewer readmissions, better health equity, more care manager capacity.",
    assist: {
      name: "Care & Population Health Assist",
      line: "Your intelligent front door for care coordination and population health",
      ask: "I need help identifying patients who need outreach, closing care gaps, or coordinating care after discharge.",
      intake: ["Patient Signal Intake: capture alerts, referrals and requests from care teams, patients and community partners", "Risk & Eligibility Check: identify risk level, program eligibility and coverage requirements", "Records & Program Lookup: retrieve clinical history, care plans, program rosters and community resources", "Care Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Risk Stratification Agent", ["Identify high-risk patient groups", "Combine clinical and social factors", "Prioritize patients for outreach", "Explain drivers of risk", "Refresh risk lists regularly"]],
      ["Care Gap Closure Agent", ["Identify overdue screenings and vaccines", "Check quality measure status", "Prepare outreach lists by gap", "Track gap closure progress", "Flag chart documentation gaps"]],
      ["Care Management Outreach Agent", ["Draft outreach scripts and messages", "Schedule follow-up calls and visits", "Track outreach attempts and outcomes", "Balance care manager caseloads", "Summarize patient goals and barriers"]],
      ["Transitions of Care Agent", ["Identify recent discharges needing follow-up", "Coordinate post-discharge appointments", "Support medication reconciliation outreach", "Track handoffs to primary care", "Flag early return risks"]],
      ["Social Needs Referral Agent", ["Screen for housing and food needs", "Match patients to community resources", "Send and track referrals", "Confirm services were received", "Document social needs for care teams"]],
      ["Chronic Condition Monitoring Agent", ["Track diabetes and heart failure measures", "Flag worsening readings for review", "Support self-management check-ins", "Prepare care plan updates", "Coordinate with specialty teams"]],
      ["Program Enrollment Agent", ["Check patient program eligibility", "Support consent and enrollment steps", "Track program participation", "Manage waitlists and graduation", "Report enrollment by program"]],
      ["Population Insights Agent", ["Analyze outcomes by population segment", "Highlight health equity disparities", "Prepare quality and value reports", "Track program impact over time", "Support value-based contract reporting"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "PHI Minimum Necessary", "Clinical Governance", "Consent Management"],
    systems: ["Microsoft 365", "EHR Clinical Systems", "Claims & Eligibility", "Care Management Platform", "Community Resources", "Analytics"],
    humans: ["Care Managers", "Nurses", "Physicians", "Social Workers", "Community Health Workers", "Quality Leaders"],
    outcomes: ["Earlier Intervention", "Closed Care Gaps", "Fewer Readmissions", "Better Health Equity", "More Care Manager Capacity"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Turning population insight into healthier communities"]
  },
  personal: {
    image: 'assets/personal-productivity-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Personal Productivity Assist Multi-Agent Team",
    subtitle: "AI-powered everyday work help for every clinician, leader and team member.",
    alt: "Architecture diagram of the Personal Productivity Assist Multi-Agent Team. A request enters an intake and discovery flow of work request, role & context check, mail, files & meetings lookup, task summary. Personal Productivity Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Inbox & Email, Meeting Prep & Recap, Document Drafting, Research & Summary, Scheduling, Data & Spreadsheets, Presentation Builder, and Follow-Up Tracking. A governance control plane and shared platform services and integrations sit underneath, with human escalation to employees, managers, it service desk, privacy office, adoption team, and executive sponsors, and outcomes that matter on the right: time back weekly, faster documents, clearer meetings, fewer manual tasks, higher satisfaction.",
    assist: {
      name: "Personal Productivity Assist",
      line: "Your intelligent front door for everyday work productivity",
      ask: "I need help catching up on email, preparing for a meeting, drafting a document, or building a presentation.",
      intake: ["Work Request: capture requests from clinicians, leaders and team members in plain language", "Role & Context Check: identify the user's role, task type, audience and sensitivity of the content", "Mail, Files & Meetings Lookup: retrieve relevant messages, documents, calendar items and meeting notes", "Task Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Inbox & Email Agent", ["Summarize long email threads", "Prioritize messages needing action", "Draft replies in your voice", "Flag overdue responses", "Organize messages into folders"]],
      ["Meeting Prep & Recap Agent", ["Prepare briefs from related materials", "Suggest agenda items and questions", "Summarize meeting discussions", "Capture decisions and action items", "Send recaps to attendees"]],
      ["Document Drafting Agent", ["Draft memos, letters and policies", "Adapt tone for different audiences", "Rewrite text for clarity", "Apply organizational templates", "Check consistency across documents"]],
      ["Research & Summary Agent", ["Summarize reports and articles", "Compare sources on a topic", "Extract key points and risks", "Find relevant internal documents", "Cite source material for review"]],
      ["Scheduling Agent", ["Find meeting times across calendars", "Protect focus time", "Book rooms and virtual meetings", "Resolve scheduling conflicts", "Suggest changes to recurring meetings"]],
      ["Data & Spreadsheets Agent", ["Clean and organize spreadsheet data", "Build formulas and pivot tables", "Create charts from raw data", "Explain trends in a dataset", "Check figures for errors"]],
      ["Presentation Builder Agent", ["Build slide decks from documents", "Suggest slide structure and flow", "Create speaker notes", "Apply brand and layout standards", "Tailor decks for different audiences"]],
      ["Follow-Up Tracking Agent", ["Collect commitments from emails and meetings", "Remind owners of due dates", "Track tasks across teams", "Summarize open items weekly", "Draft status update messages"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Data Loss Prevention", "Sensitivity Labels", "Responsible AI"],
    systems: ["Microsoft 365", "Outlook & Teams", "SharePoint & OneDrive", "Word, Excel, PowerPoint", "Identity & Access", "Security"],
    humans: ["Employees", "Managers", "IT Service Desk", "Privacy Office", "Adoption Team", "Executive Sponsors"],
    outcomes: ["Time Back Weekly", "Faster Documents", "Clearer Meetings", "Fewer Manual Tasks", "Higher Satisfaction"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Helping teams spend more time on what matters"]
  },
  pxp: {
    image: 'assets/patient-experience-digital-front-door-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Patient Experience & Digital Front Door Assist Multi-Agent Team",
    subtitle: "AI-powered digital access, navigation and communication from search to follow-up.",
    alt: "Architecture diagram of the Patient Experience & Digital Front Door Assist Multi-Agent Team. A request enters an intake and discovery flow of patient request intake, identity & channel check, provider & service lookup, journey summary. Patient Experience Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Find-Care Navigation, Online Scheduling, Digital Check-In, Patient Messaging, Billing Questions, Language & Accessibility, Feedback & Sentiment, and Service Recovery. A governance control plane and shared platform services and integrations sit underneath, with human escalation to patient access staff, nurse triage, patient advocates, schedulers, digital team, and privacy office, and outcomes that matter on the right: easier access, higher satisfaction, fewer phone calls, faster response, more equitable access.",
    assist: {
      name: "Patient Experience Assist",
      line: "Your intelligent front door for patient experience and digital access",
      ask: "I need help finding a doctor, booking an appointment, checking in online, or understanding my bill.",
      intake: ["Patient Request Intake: capture requests from patients and families across web, app, phone and text", "Identity & Channel Check: verify who is asking and choose the safest, most suitable channel", "Provider & Service Lookup: retrieve providers, locations, availability, services and visit instructions", "Journey Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Find-Care Navigation Agent", ["Match patients to the right provider", "Explain care options in plain language", "Filter by location, insurance and language", "Guide urgent needs to proper care", "Suggest virtual or in-person visits"]],
      ["Online Scheduling Agent", ["Offer open appointment times", "Book, change and cancel visits", "Manage waitlist and cancellation offers", "Send reminders and prep instructions", "Match visit type to provider"]],
      ["Digital Check-In Agent", ["Collect forms and updated insurance", "Confirm demographics and consent", "Verify contact preferences", "Share arrival and parking details", "Reduce front desk paperwork"]],
      ["Patient Messaging Agent", ["Draft replies to portal messages", "Route messages to the right team", "Answer routine non-clinical questions", "Send visit and results notifications", "Escalate clinical concerns to nurses"]],
      ["Billing Questions Agent", ["Explain statements and balances", "Provide cost estimates before visits", "Set up payment plans", "Direct financial assistance requests", "Route billing disputes to staff"]],
      ["Language & Accessibility Agent", ["Provide interpreter and translation support", "Simplify instructions to plain language", "Support hearing and vision needs", "Offer accessible formats and channels", "Record communication preferences"]],
      ["Feedback & Sentiment Agent", ["Collect survey responses after visits", "Group comments by theme", "Detect patient frustration early", "Summarize feedback by unit or clinic", "Share compliments with staff"]],
      ["Service Recovery Agent", ["Flag complaints needing follow-up", "Route issues to patient advocates", "Track resolution and response times", "Suggest recovery steps for teams", "Identify recurring service problems"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "PHI Minimum Necessary", "Identity Verification", "Clinical Safety Guardrails"],
    systems: ["Microsoft 365", "EHR Patient Portal", "Scheduling Systems", "Contact Center CRM", "Feedback Surveys", "Consent & Identity"],
    humans: ["Patient Access Staff", "Nurse Triage", "Patient Advocates", "Schedulers", "Digital Team", "Privacy Office"],
    outcomes: ["Easier Access", "Higher Satisfaction", "Fewer Phone Calls", "Faster Response", "More Equitable Access"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Removing barriers to better care"]
  },
  acute: {
    image: 'assets/acute-inpatient-care-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Acute & Inpatient Care Assist Multi-Agent Team",
    subtitle: "AI-powered patient flow, care team coordination and safe discharge.",
    alt: "Architecture diagram of the Acute & Inpatient Care Assist Multi-Agent Team. A request enters an intake and discovery flow of unit request intake, patient status check, orders & chart lookup, care summary. Inpatient Care Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Patient Flow & Beds, Rounds Preparation, Care Plan Coordination, Discharge Planning, Clinical Documentation, Consult Coordination, Length-of-Stay Insights, and Shift Handoff. A governance control plane and shared platform services and integrations sit underneath, with human escalation to hospitalists, bedside nurses, case managers, charge nurses, pharmacists, and unit leaders, and outcomes that matter on the right: faster discharges, better bed throughput, safer handoffs, less charting burden, shorter stays.",
    assist: {
      name: "Inpatient Care Assist",
      line: "Your intelligent front door for acute and inpatient care operations",
      ask: "I need help with bed placement, rounds preparation, a discharge plan, or a shift handoff on my unit.",
      intake: ["Unit Request Intake: capture requests from physicians, nurses, case managers and unit leaders", "Patient Status Check: identify patient acuity, care needs, pending tasks and discharge readiness", "Orders & Chart Lookup: retrieve orders, results, notes, care plans and consult activity", "Care Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Patient Flow & Beds Agent", ["Match patients to appropriate beds", "Track pending admissions and transfers", "Flag bed delays and bottlenecks", "Coordinate cleaning and room turnover", "Forecast daily census"]],
      ["Rounds Preparation Agent", ["Summarize overnight events and results", "Prepare patient lists for rounds", "Highlight pending orders and tasks", "Capture rounding decisions", "Flag patients with changing status"]],
      ["Care Plan Coordination Agent", ["Consolidate care team goals", "Track pending therapies and procedures", "Identify care plan gaps", "Coordinate disciplines around the patient", "Share plan updates with the team"]],
      ["Discharge Planning Agent", ["Identify patients nearing discharge", "Track discharge barriers and tasks", "Coordinate post-acute placement", "Prepare discharge instructions", "Schedule follow-up appointments"]],
      ["Clinical Documentation Agent", ["Draft progress and handoff notes", "Identify missing documentation", "Suggest documentation clarifications", "Support accurate diagnosis capture", "Reduce duplicate charting"]],
      ["Consult Coordination Agent", ["Route consult requests to specialists", "Track consult response times", "Summarize consultant recommendations", "Flag overdue consults", "Notify teams of new recommendations"]],
      ["Length-of-Stay Insights Agent", ["Compare stays with expected duration", "Identify causes of avoidable delay", "Highlight patients at risk of long stays", "Report trends by unit and service", "Support daily huddle discussions"]],
      ["Shift Handoff Agent", ["Build structured handoff summaries", "Highlight pending tasks and risks", "Capture family and safety concerns", "Prepare nurse-to-nurse reports", "Confirm handoff completion"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Clinical Governance", "PHI Minimum Necessary", "Clinician Sign-Off"],
    systems: ["Microsoft 365", "EHR Clinical Systems", "Bed Management", "Case Management", "Staffing & Scheduling", "Analytics"],
    humans: ["Hospitalists", "Bedside Nurses", "Case Managers", "Charge Nurses", "Pharmacists", "Unit Leaders"],
    outcomes: ["Faster Discharges", "Better Bed Throughput", "Safer Handoffs", "Less Charting Burden", "Shorter Stays"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Getting every patient home safely and sooner"]
  },
  ed: {
    image: 'assets/emergency-department-operations-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Emergency Department Assist Multi-Agent Team",
    subtitle: "AI-powered triage support, throughput and boarding management.",
    alt: "Architecture diagram of the Emergency Department Assist Multi-Agent Team. A request enters an intake and discovery flow of ed arrival intake, acuity & urgency check, tracking board lookup, patient summary. Emergency Department Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Triage Support, ED Throughput, Boarding & Bed Requests, Diagnostic Turnaround, Disposition & Transfer, ED Documentation, Surge Capacity, and Return-Visit Prevention. A governance control plane and shared platform services and integrations sit underneath, with human escalation to ed physicians, triage nurses, charge nurses, bed management, transfer center, and ed leaders, and outcomes that matter on the right: shorter waits, faster door-to-provider, less boarding, safer triage, lower burnout.",
    assist: {
      name: "Emergency Department Assist",
      line: "Your intelligent front door for emergency department operations",
      ask: "I need help with triage, a boarding patient, a bed request, or ED crowding right now.",
      intake: ["ED Arrival Intake: capture arrivals, transfers and requests from triage staff, EMS and ED physicians", "Acuity & Urgency Check: identify presenting complaint, acuity level and time-sensitive conditions", "Tracking Board Lookup: retrieve current patient status, orders, results and room assignments", "Patient Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Triage Support Agent", ["Summarize presenting complaints and history", "Highlight time-sensitive conditions", "Suggest acuity levels for nurse review", "Flag sepsis and stroke risks", "Prompt for missing triage details"]],
      ["ED Throughput Agent", ["Monitor waiting room and census", "Identify delays by care stage", "Suggest staffing and room moves", "Support fast-track patient flow", "Track left-without-being-seen risk"]],
      ["Boarding & Bed Requests Agent", ["Submit and track inpatient bed requests", "Identify long-boarding patients", "Escalate bed delays to house supervisors", "Coordinate bed assignment status", "Summarize boarding impact on the ED"]],
      ["Diagnostic Turnaround Agent", ["Track pending lab and imaging orders", "Flag delayed results", "Prioritize urgent studies", "Notify teams when results return", "Report turnaround by study type"]],
      ["Disposition & Transfer Agent", ["Support admit, discharge and transfer decisions", "Coordinate transfers to other facilities", "Track transfer acceptance and transport", "Prepare discharge instructions", "Document transfer requirements"]],
      ["ED Documentation Agent", ["Draft ED visit summaries", "Identify missing chart elements", "Support accurate procedure capture", "Reduce time spent charting", "Assemble transfer records"]],
      ["Surge Capacity Agent", ["Detect rising volume early", "Recommend surge plan activation", "Track open beds and staff availability", "Coordinate overflow area readiness", "Prepare leadership surge updates"]],
      ["Return-Visit Prevention Agent", ["Identify patients at risk of returning", "Arrange follow-up appointments", "Support post-visit callbacks", "Track repeat visits within days", "Connect frequent users to resources"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Clinical Safety Guardrails", "Override Controls"],
    systems: ["Microsoft 365", "EHR ED Tracking Board", "Bed Management", "RIS / PACS", "LIS", "Transfer Center"],
    humans: ["ED Physicians", "Triage Nurses", "Charge Nurses", "Bed Management", "Transfer Center", "ED Leaders"],
    outcomes: ["Shorter Waits", "Faster Door-to-Provider", "Less Boarding", "Safer Triage", "Lower Burnout"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Keeping emergency care moving when every minute counts"]
  },
  periop: {
    image: 'assets/perioperative-surgical-services-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Perioperative & Surgical Services Assist Multi-Agent Team",
    subtitle: "AI-powered surgical scheduling, readiness and operating room throughput.",
    alt: "Architecture diagram of the Perioperative & Surgical Services Assist Multi-Agent Team. A request enters an intake and discovery flow of case request intake, readiness & urgency check, schedule & chart lookup, case summary. Perioperative Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: OR Scheduling, Pre-Op Readiness, Block Utilization, Supply & Instrument Readiness, Anesthesia Coordination, Surgical Documentation, Turnover & Throughput, and Post-Op Handoff. A governance control plane and shared platform services and integrations sit underneath, with human escalation to surgeons, anesthesiologists, periop nurses, sterile processing, schedulers, and periop leaders, and outcomes that matter on the right: higher or utilization, fewer day-of cancellations, faster turnover, better surgeon experience, safer transitions.",
    assist: {
      name: "Perioperative Assist",
      line: "Your intelligent front door for perioperative and surgical services",
      ask: "I need help scheduling a surgical case, checking pre-op readiness, or finding open operating room time.",
      intake: ["Case Request Intake: capture surgical booking requests from surgeons, offices and perioperative staff", "Readiness & Urgency Check: identify procedure type, urgency, clearances and equipment needs", "Schedule & Chart Lookup: retrieve OR schedules, block time, surgeon preferences and patient records", "Case Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["OR Scheduling Agent", ["Match cases to rooms and times", "Estimate case duration accurately", "Resolve scheduling conflicts", "Place add-on and urgent cases", "Notify teams of schedule changes"]],
      ["Pre-Op Readiness Agent", ["Track required labs and clearances", "Confirm consents and history physicals", "Flag incomplete pre-op items", "Send patient preparation instructions", "Alert staff before cancellation risks"]],
      ["Block Utilization Agent", ["Monitor surgeon block use", "Identify unused block time early", "Suggest releasing or reassigning blocks", "Report utilization by service", "Support block review meetings"]],
      ["Supply & Instrument Readiness Agent", ["Confirm implants and instruments for cases", "Build surgeon preference cards", "Flag missing or recalled supplies", "Coordinate loaner equipment arrival", "Track supply use per case"]],
      ["Anesthesia Coordination Agent", ["Match anesthesia staff to cases", "Summarize patient anesthesia history", "Flag airway and medical risks", "Coordinate pre-anesthesia evaluations", "Track staffing coverage gaps"]],
      ["Surgical Documentation Agent", ["Draft operative note templates", "Check required case documentation", "Support accurate procedure coding", "Track time-out and counts records", "Flag incomplete records"]],
      ["Turnover & Throughput Agent", ["Track room turnover times", "Identify first-case delays", "Coordinate cleaning and room setup", "Show delay causes by case", "Support daily OR huddles"]],
      ["Post-Op Handoff Agent", ["Prepare recovery unit handoff summaries", "Track post-op orders and pain plans", "Coordinate bed placement after surgery", "Schedule post-op follow-up visits", "Notify families of case completion"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Surgical Safety Checklist", "Clinical Governance", "Human Approval"],
    systems: ["Microsoft 365", "EHR Periop System", "OR Scheduling", "Supply Inventory", "Sterile Processing", "Anesthesia Systems"],
    humans: ["Surgeons", "Anesthesiologists", "Periop Nurses", "Sterile Processing", "Schedulers", "Periop Leaders"],
    outcomes: ["Higher OR Utilization", "Fewer Day-Of Cancellations", "Faster Turnover", "Better Surgeon Experience", "Safer Transitions"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Giving surgical teams their time back"]
  },
  pharmacy: {
    image: 'assets/pharmacy-operations-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Pharmacy Assist Multi-Agent Team",
    subtitle: "AI-powered medication safety, inventory and pharmacy workflow support.",
    alt: "Architecture diagram of the Pharmacy Assist Multi-Agent Team. A request enters an intake and discovery flow of medication request intake, patient & order check, formulary & drug lookup, case summary. Pharmacy Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Order Review, Formulary Support, Drug Shortage Management, Inventory & Dispensing, Prior Auth & Coverage, 340B Compliance, Controlled Substances, and Discharge Med Reconciliation. A governance control plane and shared platform services and integrations sit underneath, with human escalation to pharmacists, pharmacy technicians, prescribers, nurses, compliance, and pharmacy leaders, and outcomes that matter on the right: safer medication use, fewer stockouts, faster turnaround, stronger compliance, more time for patients.",
    assist: {
      name: "Pharmacy Assist",
      line: "Your intelligent front door for pharmacy operations",
      ask: "I need help with a medication order, a drug shortage, a formulary question, or a prior authorization.",
      intake: ["Medication Request Intake: capture requests from prescribers, nurses, patients and pharmacy staff", "Patient & Order Check: identify the patient, medication, dose, allergies and clinical context", "Formulary & Drug Lookup: retrieve formulary status, interactions, inventory and coverage information", "Case Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Order Review Agent", ["Check doses against patient factors", "Screen for interactions and allergies", "Flag duplicate or unusual orders", "Prioritize orders for pharmacist review", "Document intervention recommendations"]],
      ["Formulary Support Agent", ["Answer formulary status questions", "Suggest preferred therapeutic alternatives", "Support non-formulary requests", "Track committee decisions and updates", "Notify prescribers of formulary changes"]],
      ["Drug Shortage Management Agent", ["Monitor supplier shortage notices", "Identify affected medications and patients", "Suggest approved substitutes", "Track conservation and allocation plans", "Communicate shortage updates to clinicians"]],
      ["Inventory & Dispensing Agent", ["Track stock levels and par levels", "Forecast medication usage", "Flag expiring and recalled products", "Coordinate cabinet restocking", "Support compounding and IV workflow"]],
      ["Prior Auth & Coverage Agent", ["Check medication coverage and criteria", "Assemble prior authorization documentation", "Track submission and decision status", "Suggest covered alternatives", "Support appeals for denied drugs"]],
      ["340B Compliance Agent", ["Check patient and prescription eligibility", "Track purchasing accumulator accuracy", "Prepare audit documentation", "Flag potential diversion risks", "Reconcile contract pharmacy activity"]],
      ["Controlled Substances Agent", ["Monitor controlled substance counts", "Flag unusual dispensing patterns", "Track discrepancy resolution", "Prepare diversion review reports", "Support DEA record requirements"]],
      ["Discharge Med Reconciliation Agent", ["Compare home and inpatient medications", "Flag discrepancies for pharmacist review", "Prepare patient medication lists", "Check discharge medication access", "Support bedside delivery of prescriptions"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Pharmacist Verification", "Controlled Substance Controls", "Clinical Governance"],
    systems: ["Microsoft 365", "EHR / CPOE", "Pharmacy Information System", "Dispensing Cabinets", "Wholesaler Inventory", "Drug Knowledge Base"],
    humans: ["Pharmacists", "Pharmacy Technicians", "Prescribers", "Nurses", "Compliance", "Pharmacy Leaders"],
    outcomes: ["Safer Medication Use", "Fewer Stockouts", "Faster Turnaround", "Stronger Compliance", "More Time for Patients"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Safer medication use for every patient"]
  },
  diagnostics: {
    image: 'assets/diagnostics-imaging-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Diagnostics & Imaging Assist Multi-Agent Team",
    subtitle: "AI-powered order-to-result workflows across laboratory and radiology.",
    alt: "Architecture diagram of the Diagnostics & Imaging Assist Multi-Agent Team. A request enters an intake and discovery flow of order intake, priority & appropriateness check, schedule & protocol lookup, exam summary. Diagnostics & Imaging Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Order Validation, Imaging Scheduling, Protocol Support, Critical Result Follow-Up, Report Turnaround, Specimen Tracking, Incidental Finding Follow-Up, and Equipment Utilization. A governance control plane and shared platform services and integrations sit underneath, with human escalation to radiologists, pathologists, technologists, lab staff, ordering clinicians, and department leaders, and outcomes that matter on the right: faster turnaround, fewer missed follow-ups, better scanner use, fewer repeat orders, happier referrers.",
    assist: {
      name: "Diagnostics & Imaging Assist",
      line: "Your intelligent front door for diagnostics and imaging",
      ask: "I need help with an imaging order, a lab result follow-up, a scan appointment, or a report that is overdue.",
      intake: ["Order Intake: capture lab and imaging orders and requests from clinicians and care teams", "Priority & Appropriateness Check: identify urgency, clinical indication and ordering guideline alignment", "Schedule & Protocol Lookup: retrieve open appointments, exam protocols, preparation steps and prior studies", "Exam Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Order Validation Agent", ["Check orders for missing information", "Confirm clinical indication and appropriateness", "Identify duplicate or recent studies", "Suggest alternative exams", "Request clarification from ordering clinicians"]],
      ["Imaging Scheduling Agent", ["Find open scanner appointments", "Match exams to equipment and staff", "Send patient preparation instructions", "Manage cancellations and reschedules", "Prioritize urgent inpatient exams"]],
      ["Protocol Support Agent", ["Suggest exam protocols by indication", "Check contrast and safety screening", "Flag implants and allergy concerns", "Support technologist protocol questions", "Retrieve relevant prior studies"]],
      ["Critical Result Follow-Up Agent", ["Detect results needing urgent action", "Track clinician notification and acknowledgment", "Escalate unacknowledged critical results", "Document communication timing", "Report critical result compliance"]],
      ["Report Turnaround Agent", ["Track unread and unsigned reports", "Prioritize reading worklists", "Flag reports nearing target times", "Show delays by modality", "Support radiologist workload balancing"]],
      ["Specimen Tracking Agent", ["Track specimens from collection to result", "Flag mislabeled or lost specimens", "Monitor transport and receiving times", "Coordinate recollection requests", "Report pending tests by location"]],
      ["Incidental Finding Follow-Up Agent", ["Identify findings needing follow-up", "Notify ordering clinicians and patients", "Schedule recommended follow-up studies", "Track completion of recommendations", "Report loop closure rates"]],
      ["Equipment Utilization Agent", ["Track scanner and analyzer use", "Identify downtime and idle capacity", "Support maintenance scheduling", "Forecast demand by modality", "Recommend schedule template changes"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Radiologist Oversight", "Clinical Governance", "PHI Minimum Necessary"],
    systems: ["Microsoft 365", "EHR Order Entry", "RIS / PACS", "LIS", "Scheduling", "Analytics"],
    humans: ["Radiologists", "Pathologists", "Technologists", "Lab Staff", "Ordering Clinicians", "Department Leaders"],
    outcomes: ["Faster Turnaround", "Fewer Missed Follow-Ups", "Better Scanner Use", "Fewer Repeat Orders", "Happier Referrers"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Turning results into timely action"]
  },
  hah: {
    image: 'assets/hospital-at-home-remote-care-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Hospital-at-Home & Remote Care Assist Multi-Agent Team",
    subtitle: "AI-powered remote monitoring and home-based acute care coordination.",
    alt: "Architecture diagram of the Hospital-at-Home & Remote Care Assist Multi-Agent Team. A request enters an intake and discovery flow of enrollment intake, eligibility & home check, device & record lookup, care summary. Hospital-at-Home Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Admission Screening, Remote Vitals Monitoring, Escalation Triage, Home Visit Scheduling, Medication & Supply Logistics, Care Team Coordination, Device Management, and Discharge & Step-Down. A governance control plane and shared platform services and integrations sit underneath, with human escalation to home hospitalists, remote nurses, paramedics, pharmacists, care coordinators, and program leaders, and outcomes that matter on the right: safer care at home, freed hospital beds, earlier intervention, better patient experience, fewer readmissions.",
    assist: {
      name: "Hospital-at-Home Assist",
      line: "Your intelligent front door for hospital-at-home and remote care",
      ask: "I need help enrolling a patient in hospital at home, checking on a remote patient, or scheduling a home visit.",
      intake: ["Enrollment Intake: capture referrals from emergency, inpatient and primary care teams for home-based care", "Eligibility & Home Check: identify clinical eligibility, home safety, caregiver support and connectivity", "Device & Record Lookup: retrieve patient records, monitoring devices, vitals trends and home visit plans", "Care Summary: create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Admission Screening Agent", ["Screen candidates against clinical criteria", "Confirm address and service area", "Check caregiver and home readiness", "Verify insurance for home-based care", "Support patient and family consent"]],
      ["Remote Vitals Monitoring Agent", ["Track readings from home devices", "Flag out-of-range vital signs", "Detect missing or late readings", "Summarize daily patient trends", "Support nurse check-in calls"]],
      ["Escalation Triage Agent", ["Prioritize alerts for nurse review", "Suggest next steps by protocol", "Route urgent cases to physicians", "Coordinate emergency transport", "Document escalation decisions"]],
      ["Home Visit Scheduling Agent", ["Plan daily routes for visiting staff", "Match visits to nurse and paramedic skills", "Coordinate lab draws and treatments", "Reschedule visits around patient needs", "Confirm visit times with families"]],
      ["Medication & Supply Logistics Agent", ["Coordinate medication delivery to homes", "Track supplies and equipment orders", "Arrange IV and oxygen equipment", "Schedule pickup of used equipment", "Flag delivery delays"]],
      ["Care Team Coordination Agent", ["Share daily plans across the team", "Summarize virtual and in-person visits", "Coordinate specialist consults", "Connect patients with social support", "Track pending orders and tasks"]],
      ["Device Management Agent", ["Track device assignment and setup", "Guide patients through device use", "Detect offline or failing devices", "Coordinate replacement and return", "Maintain device inventory records"]],
      ["Discharge & Step-Down Agent", ["Identify patients ready to graduate", "Plan transition to home health or clinic", "Schedule follow-up appointments", "Prepare patient education materials", "Arrange return to hospital when needed"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Clinical Safety Thresholds", "Home Safety Controls", "Device Security"],
    systems: ["Microsoft 365", "EHR Clinical Systems", "Monitoring Devices", "Telehealth", "Logistics & Supplies", "Care Coordination"],
    humans: ["Home Hospitalists", "Remote Nurses", "Paramedics", "Pharmacists", "Care Coordinators", "Program Leaders"],
    outcomes: ["Safer Care at Home", "Freed Hospital Beds", "Earlier Intervention", "Better Patient Experience", "Fewer Readmissions"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Bringing hospital-level care home"]
  },
  safety: {
    image: 'assets/infection-prevention-device-safety-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Infection Prevention & Device Safety Assist Multi-Agent Team",
    subtitle: "AI-powered surveillance, outbreak response and medical device safety.",
    alt: "Architecture diagram of the Infection Prevention & Device Safety Assist Multi-Agent Team. A request enters an intake and discovery flow of safety event intake, severity & exposure check, lab & device lookup, investigation summary. Infection Prevention Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: HAI Surveillance, Outbreak Detection, Isolation Precautions, Device Recall Management, Sterile Processing Compliance, Antimicrobial Stewardship, Event Investigation, and Public Health Reporting. A governance control plane and shared platform services and integrations sit underneath, with human escalation to infection preventionists, epidemiologists, biomedical engineering, clinical leaders, risk & safety, and public health, and outcomes that matter on the right: fewer infections, faster outbreak response, safer devices, stronger compliance, audit-ready reporting.",
    assist: {
      name: "Infection Prevention Assist",
      line: "Your intelligent front door for infection prevention and device safety",
      ask: "I need help with a possible outbreak, an isolation question, a device recall, or a sterile processing concern.",
      intake: ["Safety Event Intake: Capture and classify safety events, exposures and device concerns from clinical units and staff", "Severity & Exposure Check: Gauge event severity, patient exposure, affected units and reporting obligations", "Lab & Device Lookup: Retrieve culture results, patient locations, device lot records and prior related events", "Investigation Summary: Create an initial investigation summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["HAI Surveillance Agent", ["Review infection surveillance findings", "Apply standard case definitions", "Flag device and procedure-related infections", "Track unit-level infection trends", "Prepare surveillance reports"]],
      ["Outbreak Detection Agent", ["Spot unusual organism clusters", "Map patient and staff exposures", "Recommend containment steps", "Track outbreak response actions", "Summarize findings for leadership"]],
      ["Isolation Precautions Agent", ["Recommend isolation by organism", "Track patient isolation status", "Support room cleaning and turnover", "Alert staff to precaution changes"]],
      ["Device Recall Management Agent", ["Match recalls to inventory", "Locate affected devices and patients", "Track removal and replacement", "Document notifications and closure", "Monitor manufacturer safety alerts"]],
      ["Sterile Processing Compliance Agent", ["Track reprocessing and sterilization logs", "Flag missed steps and failed indicators", "Monitor instrument tray readiness", "Check equipment maintenance records", "Prepare survey readiness reports"]],
      ["Antimicrobial Stewardship Agent", ["Review antimicrobial orders against guidelines", "Flag opportunities to narrow therapy", "Track antibiotic use and resistance", "Support prospective audit and feedback", "Summarize unit prescribing patterns"]],
      ["Event Investigation Agent", ["Assemble event timelines and records", "Support root cause analysis", "Identify contributing factors", "Track corrective actions", "Draft investigation summaries"]],
      ["Public Health Reporting Agent", ["Identify reportable conditions", "Prepare state and federal submissions", "Track reporting deadlines", "Reconcile surveillance and lab data", "Document public health communications"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Clinical Governance", "Regulatory Attestation", "Source Traceability"],
    systems: ["Microsoft 365", "EHR Clinical Systems", "LIS Microbiology", "Device Inventory", "Event Reporting", "Public Health Registries"],
    humans: ["Infection Preventionists", "Epidemiologists", "Biomedical Engineering", "Clinical Leaders", "Risk & Safety", "Public Health"],
    outcomes: ["Fewer Infections", "Faster Outbreak Response", "Safer Devices", "Stronger Compliance", "Audit-Ready Reporting"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Protecting patients with earlier signals"]
  },
  gme: {
    image: 'assets/graduate-medical-education-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Graduate Medical Education Assist Multi-Agent Team",
    subtitle: "AI-powered resident scheduling, evaluation and accreditation readiness.",
    alt: "Architecture diagram of the Graduate Medical Education Assist Multi-Agent Team. A request enters an intake and discovery flow of program request intake, trainee & program check, policy & record lookup, case summary. GME Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Resident Scheduling, Duty Hours Monitoring, Evaluation & Milestones, Credentialing & Onboarding, Curriculum & Didactics, Accreditation Reporting, Wellness & Support, and Recruitment & Match. A governance control plane and shared platform services and integrations sit underneath, with human escalation to program directors, program coordinators, faculty, residents, gme office, and compliance, and outcomes that matter on the right: compliant duty hours, faster onboarding, accreditation readiness, better resident wellbeing, less coordinator workload.",
    assist: {
      name: "GME Assist",
      line: "Your intelligent front door for graduate medical education",
      ask: "I need help with a resident schedule, a duty hours issue, an evaluation, or an accreditation report.",
      intake: ["Program Request Intake: Capture and classify requests from residents, fellows, program directors and coordinators", "Trainee & Program Check: Identify trainee, program, training year and applicable accreditation requirements", "Policy & Record Lookup: Retrieve schedules, evaluations, program policies and trainee records", "Case Summary: Create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Resident Scheduling Agent", ["Build rotation and call schedules", "Resolve coverage gaps and swaps", "Balance service needs and training goals", "Account for leave and vacation", "Publish schedule updates"]],
      ["Duty Hours Monitoring Agent", ["Track weekly hours by resident", "Flag potential duty hour violations", "Monitor required days off", "Review moonlighting hours", "Prepare compliance summaries"]],
      ["Evaluation & Milestones Agent", ["Collect and track evaluations", "Summarize milestone progress", "Flag residents needing support", "Prepare for clinical competency reviews", "Draft feedback summaries"]],
      ["Credentialing & Onboarding Agent", ["Track licensure and onboarding documents", "Verify privileges and credentials", "Coordinate badging and system access", "Monitor required training completion", "Manage visa and license renewals"]],
      ["Curriculum & Didactics Agent", ["Plan didactic and conference calendars", "Map rotations to curriculum goals", "Track procedure and case logs", "Track attendance and completion", "Recommend learning resources"]],
      ["Accreditation Reporting Agent", ["Compile annual program evaluation data", "Prepare accreditation site visit materials", "Track resident case and exam outcomes", "Monitor program citations and responses", "Generate accreditation reports"]],
      ["Wellness & Support Agent", ["Identify early signs of burnout", "Connect residents to support services", "Track wellness program participation", "Route confidential concerns appropriately", "Summarize program wellness trends"]],
      ["Recruitment & Match Agent", ["Screen and organize applications", "Coordinate interview scheduling", "Support rank list preparation", "Track applicant communications", "Prepare incoming resident onboarding"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Accreditation Evidence", "Resident Privacy", "Human Review"],
    systems: ["Microsoft 365", "GME Management System", "Scheduling System", "HRIS Credentialing", "Match Platform", "Learning Platform"],
    humans: ["Program Directors", "Program Coordinators", "Faculty", "Residents", "GME Office", "Compliance"],
    outcomes: ["Compliant Duty Hours", "Faster Onboarding", "Accreditation Readiness", "Better Resident Wellbeing", "Less Coordinator Workload"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Supporting the next generation of physicians"]
  },
  actuarial: {
    image: 'assets/actuarial-underwriting-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Actuarial & Underwriting Assist Multi-Agent Team",
    subtitle: "AI-powered pricing, risk analysis and underwriting support for health plans.",
    alt: "Architecture diagram of the Actuarial & Underwriting Assist Multi-Agent Team. A request enters an intake and discovery flow of analysis request intake, scope & data check, model & data lookup, analysis summary. Actuarial & Underwriting Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Rate Filing Support, Experience Analysis, Risk Scoring, Reserve Support, Underwriting Review, Forecast & Trend, Rate Review Response, and Model Documentation. A governance control plane and shared platform services and integrations sit underneath, with human escalation to actuaries, underwriters, finance, compliance, chief actuary, and executive leaders, and outcomes that matter on the right: faster rate development, sharper risk insight, better forecast accuracy, audit-ready models, less manual analysis.",
    assist: {
      name: "Actuarial & Underwriting Assist",
      line: "Your intelligent front door for actuarial and underwriting for health plans",
      ask: "I need help with a rate filing, an experience analysis, a risk score, or an underwriting review.",
      intake: ["Analysis Request Intake: Capture and classify analysis requests from actuarial, finance, underwriting and product teams", "Scope & Data Check: Confirm scope, product line, time period, data sources and regulatory requirements", "Model & Data Lookup: Retrieve claims experience, enrollment data, prior models and filing history", "Analysis Summary: Create an initial analysis summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Rate Filing Support Agent", ["Assemble rate filing exhibits", "Check filings against state requirements", "Track filing deadlines and status", "Draft actuarial memorandum sections", "Compare proposed and prior rates"]],
      ["Experience Analysis Agent", ["Analyze claims by service category", "Compare actual to expected costs", "Identify cost and utilization drivers", "Adjust for completion and trend", "Summarize results by product"]],
      ["Risk Scoring Agent", ["Calculate member and group risk scores", "Review risk adjustment inputs", "Compare population acuity over time", "Flag unusual risk shifts", "Document scoring assumptions"]],
      ["Reserve Support Agent", ["Compile claims for reserve analysis", "Review completion factor patterns", "Compare reserve estimates to actual payments", "Prepare reserve support documentation"]],
      ["Underwriting Review Agent", ["Review group and individual applications", "Apply underwriting guidelines", "Flag high-risk or incomplete submissions", "Prepare quote recommendations", "Track renewals and decisions"]],
      ["Forecast & Trend Agent", ["Project medical cost trends", "Model enrollment scenarios", "Compare forecasts to results", "Identify emerging cost pressures", "Prepare budget and planning inputs"]],
      ["Rate Review Response Agent", ["Draft responses to regulator questions", "Retrieve supporting data and exhibits", "Track open objections and deadlines", "Align answers with prior filings", "Coordinate review with actuaries"]],
      ["Model Documentation Agent", ["Document model methods and assumptions", "Track model versions and changes", "Support peer review and validation", "Prepare audit and filing documentation"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Model Governance", "Actuarial Standards", "Human Sign-Off"],
    systems: ["Microsoft 365", "Actuarial Modeling", "Claims & Enrollment Data", "Data Warehouse", "Rate Filing Systems", "Analytics"],
    humans: ["Actuaries", "Underwriters", "Finance", "Compliance", "Chief Actuary", "Executive Leaders"],
    outcomes: ["Faster Rate Development", "Sharper Risk Insight", "Better Forecast Accuracy", "Audit-Ready Models", "Less Manual Analysis"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Turning risk insight into sustainable coverage"]
  },
  claims: {
    image: 'assets/claims-operations-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Claims Assist Multi-Agent Team",
    subtitle: "AI-powered claims adjudication, exception handling and payment accuracy.",
    alt: "Architecture diagram of the Claims Assist Multi-Agent Team. A request enters an intake and discovery flow of claim intake, coverage check, policy lookup, case summary. Claims Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Claims Intake, Eligibility Check, Adjudication Support, Pend & Exception, Coordination of Benefits, Claim Status, Overpayment Recovery, and Appeals Referral. A governance control plane and shared platform services and integrations sit underneath, with human escalation to claims examiners, medical directors, coding specialists, provider services, compliance, and claims leaders, and outcomes that matter on the right: faster adjudication, higher auto-adjudication, fewer payment errors, lower admin cost, happier providers.",
    assist: {
      name: "Claims Assist",
      line: "Your intelligent front door for health plan claims operations",
      ask: "I need help with a pended claim, a payment error, a coordination of benefits issue, or a claim status.",
      intake: ["Claim Intake: Capture and classify claims, inquiries and exceptions from providers, members and internal teams", "Coverage Check: Confirm member eligibility, coverage dates, plan benefits and claim type", "Policy Lookup: Retrieve claim history, plan rules, provider contracts and prior adjustments", "Case Summary: Create an initial claim summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Claims Intake Agent", ["Receive and classify incoming claims", "Validate required claim data", "Identify missing or invalid fields", "Route paper and electronic claims", "Flag duplicate submissions"]],
      ["Eligibility Check Agent", ["Verify member coverage on service date", "Check plan and benefit eligibility", "Confirm provider network status", "Flag terminated or inactive coverage"]],
      ["Adjudication Support Agent", ["Apply benefit and contract rules", "Review pricing and fee schedules", "Check authorization requirements", "Recommend payment or denial", "Document adjudication rationale"]],
      ["Pend & Exception Agent", ["Identify why claims pended", "Route exceptions to the right examiner", "Prioritize aging pended claims", "Track resolution actions", "Spot recurring pend causes"]],
      ["Coordination of Benefits Agent", ["Identify other insurance coverage", "Determine primary and secondary payer", "Track subrogation opportunities", "Coordinate payments with other carriers", "Document COB updates"]],
      ["Claim Status Agent", ["Answer provider claim status questions", "Explain denial and adjustment reasons", "Summarize remittance details", "Track resubmissions and corrections"]],
      ["Overpayment Recovery Agent", ["Identify overpaid claims", "Calculate refund amounts", "Generate provider recovery letters", "Track offsets and repayments", "Reconcile recovered funds"]],
      ["Appeals Referral Agent", ["Identify disputed claim decisions", "Assemble claim and policy documents", "Route cases to appeals teams", "Track dispute deadlines", "Notify requesters of status"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Payer Policy Controls", "Human Review"],
    systems: ["Microsoft 365", "Claims Systems", "Eligibility & Benefits", "Provider Network", "Contact Center CRM", "Analytics"],
    humans: ["Claims Examiners", "Medical Directors", "Coding Specialists", "Provider Services", "Compliance", "Claims Leaders"],
    outcomes: ["Faster Adjudication", "Higher Auto-Adjudication", "Fewer Payment Errors", "Lower Admin Cost", "Happier Providers"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Paying claims right the first time"]
  },
  um: {
    image: 'assets/utilization-management-prior-authorization-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Utilization Management & Prior Authorization Assist Multi-Agent Team",
    subtitle: "AI-powered prior authorization and utilization review with clinician-led decisions.",
    alt: "Architecture diagram of the Utilization Management & Prior Authorization Assist Multi-Agent Team. A request enters an intake and discovery flow of auth request intake, coverage & eligibility check, clinical criteria lookup, case summary. Utilization Management Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Auth Intake & Triage, Clinical Criteria Review, Medical Record Retrieval, Concurrent Review, Peer-to-Peer Scheduling, Determination Letters, Timeliness Monitoring, and Care Transitions. A governance control plane and shared platform services and integrations sit underneath, with human escalation to um nurses, medical directors, pharmacy reviewers, providers, appeals team, and compliance, and outcomes that matter on the right: faster determinations, consistent criteria, on-time compliance, less provider friction, more reviewer capacity.",
    assist: {
      name: "Utilization Management Assist",
      line: "Your intelligent front door for utilization management and prior authorization",
      ask: "I need help with a prior authorization request, a clinical review, a missing record, or a peer-to-peer.",
      intake: ["Auth Request Intake: Capture and classify authorization requests from providers, facilities and members", "Coverage & Eligibility Check: Confirm member eligibility, benefits, authorization requirements and urgency", "Clinical Criteria Lookup: Retrieve clinical criteria, medical policies and prior authorization history", "Case Summary: Create an initial case summary and route to the right clinician or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Auth Intake & Triage Agent", ["Receive requests by fax, portal and phone", "Identify services needing authorization", "Triage by urgency and type", "Route to the right review team", "Flag incomplete submissions"]],
      ["Clinical Criteria Review Agent", ["Match clinical information to criteria", "Summarize supporting documentation", "Highlight met and unmet criteria", "Prepare cases for clinician review", "Note applicable medical policies"]],
      ["Medical Record Retrieval Agent", ["Request records from providers", "Extract relevant clinical details", "Track outstanding record requests", "Organize documents in the case file"]],
      ["Concurrent Review Agent", ["Track inpatient admissions and stays", "Review ongoing need for continued stay", "Monitor length of stay against guidelines", "Prepare concurrent review summaries", "Flag discharge planning needs"]],
      ["Peer-to-Peer Scheduling Agent", ["Schedule physician discussions", "Prepare case summaries for medical directors", "Coordinate availability across parties", "Track call outcomes", "Document peer-to-peer results"]],
      ["Determination Letters Agent", ["Draft approval and denial notices", "Include required rights and language", "Tailor letters to member and provider", "Check content against regulatory rules", "Track letter delivery"]],
      ["Timeliness Monitoring Agent", ["Track decision deadlines by case", "Alert reviewers to approaching limits", "Monitor turnaround performance", "Prepare compliance reports", "Flag cases at risk of delay"]],
      ["Care Transitions Agent", ["Identify members leaving the hospital", "Link members to case management", "Coordinate post-acute service approvals", "Track follow-up care needs", "Support safe discharge planning"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Clinician Final Decision", "Regulatory Timelines"],
    systems: ["Microsoft 365", "UM / Auth Platform", "Clinical Guidelines", "Claims & Eligibility", "Provider Portals", "EHR Exchange"],
    humans: ["UM Nurses", "Medical Directors", "Pharmacy Reviewers", "Providers", "Appeals Team", "Compliance"],
    outcomes: ["Faster Determinations", "Consistent Criteria", "On-Time Compliance", "Less Provider Friction", "More Reviewer Capacity"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Faster decisions with clinicians in charge"]
  },
  network: {
    image: 'assets/provider-network-management-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Provider Network Management Assist Multi-Agent Team",
    subtitle: "AI-powered provider data, credentialing and contracting for adequate, accurate networks.",
    alt: "Architecture diagram of the Provider Network Management Assist Multi-Agent Team. A request enters an intake and discovery flow of provider request intake, contract & status check, directory & data lookup, case summary. Provider Network Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Provider Onboarding, Credentialing, Directory Accuracy, Contract & Rates, Network Adequacy, Provider Inquiries, Performance & Quality, and Dispute Coordination. A governance control plane and shared platform services and integrations sit underneath, with human escalation to network managers, credentialing specialists, contract negotiators, provider relations, legal, and compliance, and outcomes that matter on the right: faster onboarding, accurate directories, stronger network adequacy, fewer provider disputes, lower admin burden.",
    assist: {
      name: "Provider Network Assist",
      line: "Your intelligent front door for provider network management",
      ask: "I need help with a provider onboarding, a credentialing status, a directory error, or a contract rate question.",
      intake: ["Provider Request Intake: Capture and classify requests from providers, facilities, contracting and network teams", "Contract & Status Check: Confirm provider status, contract terms, credentialing state and network participation", "Directory & Data Lookup: Retrieve provider records, directory data, contracts and prior correspondence", "Case Summary: Create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Provider Onboarding Agent", ["Collect provider onboarding documents", "Verify required application information", "Track onboarding steps by provider", "Coordinate system and contract setup", "Notify providers of next steps"]],
      ["Credentialing Agent", ["Verify licenses and board certifications", "Check sanctions and exclusion lists", "Track credentialing committee readiness", "Monitor expiring credentials", "Maintain primary source verification"]],
      ["Directory Accuracy Agent", ["Validate provider demographics and locations", "Compare directory data across sources", "Flag outdated phone and address details", "Prepare provider data attestations", "Track corrections to completion"]],
      ["Contract & Rates Agent", ["Retrieve contract terms and amendments", "Compare rates to fee schedules", "Track negotiation requests", "Monitor renewal and termination dates", "Flag configuration mismatches"]],
      ["Network Adequacy Agent", ["Compare provider access to standards", "Identify specialty and geographic gaps", "Map member locations to providers", "Support regulator network filings", "Recommend recruitment priorities"]],
      ["Provider Inquiries Agent", ["Answer provider policy and billing questions", "Explain contract and participation details", "Route issues to the right team", "Track inquiry resolution"]],
      ["Performance & Quality Agent", ["Compile provider quality and cost metrics", "Review performance against benchmarks", "Prepare provider scorecards", "Identify improvement opportunities", "Support value-based contract reviews"]],
      ["Dispute Coordination Agent", ["Assemble dispute records and contracts", "Track dispute status and deadlines", "Coordinate with claims and legal teams", "Summarize positions for review", "Document dispute resolutions"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Credentialing Compliance", "Contract Controls", "Regulatory Attestation"],
    systems: ["Microsoft 365", "Provider Data Management", "Credentialing Systems", "Contract Management", "Claims Systems", "CRM"],
    humans: ["Network Managers", "Credentialing Specialists", "Contract Negotiators", "Provider Relations", "Legal", "Compliance"],
    outcomes: ["Faster Onboarding", "Accurate Directories", "Stronger Network Adequacy", "Fewer Provider Disputes", "Lower Admin Burden"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Building networks members can count on"]
  },
  member: {
    image: 'assets/member-services-experience-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Member Services & Experience Assist Multi-Agent Team",
    subtitle: "AI-powered member support, benefits guidance and proactive engagement.",
    alt: "Architecture diagram of the Member Services & Experience Assist Multi-Agent Team. A request enters an intake and discovery flow of member inquiry intake, identity & plan check, benefits & claims lookup, case summary. Member Services Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Benefits Explanation, Claim Status, ID Cards & Enrollment, Provider Search, Care Navigation, Complaint Routing, Proactive Outreach, and Call Summary & Follow-Up. A governance control plane and shared platform services and integrations sit underneath, with human escalation to member service reps, nurse line, care managers, appeals & grievances, supervisors, and privacy office, and outcomes that matter on the right: faster resolution, first-contact resolution, higher member satisfaction, lower handle time, better retention.",
    assist: {
      name: "Member Services Assist",
      line: "Your intelligent front door for health plan member services and experience",
      ask: "I need help understanding my benefits, checking a claim, replacing my ID card, or finding a doctor.",
      intake: ["Member Inquiry Intake: Capture and classify inquiries from members, caregivers and advocates across phone, chat and portal", "Identity & Plan Check: Verify member identity, enrollment status, plan type and coverage dates", "Benefits & Claims Lookup: Retrieve benefits, claims, authorizations and prior interaction history", "Case Summary: Create an initial case summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Benefits Explanation Agent", ["Explain covered services in plain language", "Describe copays, deductibles and limits", "Clarify in-network and out-of-network costs", "Answer plan-specific benefit questions", "Summarize accumulator balances"]],
      ["Claim Status Agent", ["Look up claim status for members", "Explain how claims were processed", "Clarify what members owe", "Route disputed claims for review"]],
      ["ID Cards & Enrollment Agent", ["Request and reissue member ID cards", "Answer enrollment and effective date questions", "Support changes in coverage", "Guide members through open enrollment", "Confirm dependent and household details"]],
      ["Provider Search Agent", ["Find in-network providers and facilities", "Filter by specialty, location and language", "Confirm provider network status", "Suggest nearby alternatives", "Share accurate directory information"]],
      ["Care Navigation Agent", ["Connect members to care management", "Help members find needed services", "Explain referral and authorization steps", "Identify social and access barriers", "Schedule follow-up outreach"]],
      ["Complaint Routing Agent", ["Classify complaints and grievances", "Route issues to the right team", "Track response timelines", "Document member concerns accurately", "Escalate urgent or sensitive cases"]],
      ["Proactive Outreach Agent", ["Identify members for timely outreach", "Send reminders for preventive care", "Share renewal and enrollment notices", "Prepare outreach scripts and messages", "Track member responses"]],
      ["Call Summary & Follow-Up Agent", ["Summarize member calls and chats", "Capture commitments and next steps", "Create follow-up tasks", "Update member records accurately", "Share summaries with care teams"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Member Privacy", "Identity Verification", "Script Controls"],
    systems: ["Microsoft 365", "Contact Center CRM", "Enrollment & Eligibility", "Claims Systems", "Provider Directory", "Member Portal"],
    humans: ["Member Service Reps", "Nurse Line", "Care Managers", "Appeals & Grievances", "Supervisors", "Privacy Office"],
    outcomes: ["Faster Resolution", "First-Contact Resolution", "Higher Member Satisfaction", "Lower Handle Time", "Better Retention"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Making every member interaction easier"]
  },
  raq: {
    image: 'assets/risk-adjustment-quality-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Risk Adjustment & Quality Assist Multi-Agent Team",
    subtitle: "AI-powered Stars, HEDIS and risk adjustment accuracy with audit-ready evidence.",
    alt: "Architecture diagram of the Risk Adjustment & Quality Assist Multi-Agent Team. A request enters an intake and discovery flow of gap or chart request, member & measure check, records & evidence lookup, case summary. Risk Adjustment & Quality Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: HCC Coding Support, Chart Retrieval, HEDIS Gap Closure, Stars Measure Tracking, Provider Outreach, Medical Record Review, Audit Readiness, and Supplemental Data. A governance control plane and shared platform services and integrations sit underneath, with human escalation to certified coders, quality nurses, provider reps, medical directors, compliance, and quality leaders, and outcomes that matter on the right: accurate risk scores, closed care gaps, stronger quality performance, audit-ready documentation, less chart chase.",
    assist: {
      name: "Risk Adjustment & Quality Assist",
      line: "Your intelligent front door for risk adjustment and quality",
      ask: "I need help with a care gap, a chart retrieval, a risk adjustment review, or an audit request.",
      intake: ["Gap or Chart Request: Capture and classify gap, chart and audit requests from quality, coding and provider teams", "Member & Measure Check: Identify the member, quality measure, program year and documentation requirements", "Records & Evidence Lookup: Retrieve medical records, claims, supplemental data and measure specifications", "Case Summary: Create an initial case summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["HCC Coding Support Agent", ["Review documentation for supported diagnoses", "Identify possible missed conditions", "Check coding against guidelines", "Prepare queries for provider clarification", "Track coding accuracy findings"]],
      ["Chart Retrieval Agent", ["Identify charts needed for review", "Request records from provider offices", "Track retrieval status and follow-ups", "Organize received records by member", "Report on retrieval completion"]],
      ["HEDIS Gap Closure Agent", ["Identify members with open quality gaps", "Prioritize gaps by measure and member", "Coordinate outreach for screenings", "Verify gap closure from claims and records", "Track measure performance by provider"]],
      ["Stars Measure Tracking Agent", ["Monitor performance on Stars measures", "Project year-end measure results", "Identify measures needing attention", "Compare results to prior years", "Prepare leadership performance updates"]],
      ["Provider Outreach Agent", ["Share gap lists with provider practices", "Prepare provider-specific measure summaries", "Coordinate documentation education", "Track practice engagement", "Schedule follow-up with practices"]],
      ["Medical Record Review Agent", ["Read charts for relevant clinical evidence", "Extract supporting documentation", "Confirm diagnoses meet requirements", "Flag unsupported coding", "Record review findings"]],
      ["Audit Readiness Agent", ["Assemble documentation for validation audits", "Track audit requests and deadlines", "Identify documentation weaknesses", "Prepare corrective action plans", "Maintain audit-ready evidence"]],
      ["Supplemental Data Agent", ["Ingest lab and clinical data feeds", "Reconcile data with claims", "Validate data against measure specifications", "Track supplemental data submissions", "Flag data quality issues"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Coding Compliance", "Audit Evidence", "PHI Minimum Necessary"],
    systems: ["Microsoft 365", "Claims & Encounter Data", "EHR / HIE Feeds", "Quality Platform", "Chart Retrieval", "Analytics"],
    humans: ["Certified Coders", "Quality Nurses", "Provider Reps", "Medical Directors", "Compliance", "Quality Leaders"],
    outcomes: ["Accurate Risk Scores", "Closed Care Gaps", "Stronger Quality Performance", "Audit-Ready Documentation", "Less Chart Chase"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Turning evidence into better outcomes"]
  },
  appeals: {
    image: 'assets/appeals-grievances-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Appeals & Grievances Assist Multi-Agent Team",
    subtitle: "AI-powered case intake, evidence assembly and timely resolution.",
    alt: "Architecture diagram of the Appeals & Grievances Assist Multi-Agent Team. A request enters an intake and discovery flow of appeal or grievance intake, type & timeliness check, case history lookup, case summary. Appeals & Grievances Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Case Classification, Evidence Assembly, Timeline Tracking, Clinical Review Prep, Resolution Letters, Member Communication, Trend Analysis, and External Review Coordination. A governance control plane and shared platform services and integrations sit underneath, with human escalation to appeals analysts, medical directors, legal, compliance, member advocates, and operations leaders, and outcomes that matter on the right: faster resolution, on-time compliance, clearer communication, root-cause insight, less case prep time.",
    assist: {
      name: "Appeals & Grievances Assist",
      line: "Your intelligent front door for appeals and grievances",
      ask: "I need help with a member appeal, a grievance, a case deadline, or an external review.",
      intake: ["Appeal or Grievance Intake: Capture and classify appeals and grievances from members, providers and representatives", "Type & Timeliness Check: Determine case type, filing timeliness, member eligibility and applicable requirements", "Case History Lookup: Retrieve original decisions, claim and authorization records and prior case history", "Case Summary: Create an initial case summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Case Classification Agent", ["Distinguish appeals from grievances", "Identify standard and expedited cases", "Apply the correct regulatory pathway", "Route cases to the right unit", "Confirm valid filing and representation"]],
      ["Evidence Assembly Agent", ["Gather original decision documents", "Collect medical records and policy language", "Organize evidence by issue", "Identify missing information", "Build complete case files"]],
      ["Timeline Tracking Agent", ["Calculate case deadlines", "Alert staff to approaching due dates", "Track extensions and notifications", "Monitor timeliness by case", "Prepare compliance timeliness reports"]],
      ["Clinical Review Prep Agent", ["Summarize clinical history for reviewers", "Match facts to coverage criteria", "Highlight key points in the record", "Prepare questions for medical directors", "Organize materials for physician review"]],
      ["Resolution Letters Agent", ["Draft decision and acknowledgment letters", "Include required notices and rights", "Explain outcomes in plain language", "Check letters against regulatory rules", "Track letter delivery"]],
      ["Member Communication Agent", ["Update members on case status", "Explain next steps and options", "Respond to member questions", "Document all member contacts", "Tailor communication by language"]],
      ["Trend Analysis Agent", ["Identify recurring appeal and grievance causes", "Track overturn rates by issue", "Compare patterns by provider and service", "Prepare quality committee reports", "Recommend process improvements"]],
      ["External Review Coordination Agent", ["Prepare files for independent review", "Track external review submissions", "Monitor reviewer decisions and deadlines", "Coordinate implementation of overturned decisions", "Document outcomes for reporting"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Regulatory Timeliness", "Human Decision Authority"],
    systems: ["Microsoft 365", "Case Management", "Claims & Auth Systems", "Member Records", "Letter Generation", "Regulatory Reporting"],
    humans: ["Appeals Analysts", "Medical Directors", "Legal", "Compliance", "Member Advocates", "Operations Leaders"],
    outcomes: ["Faster Resolution", "On-Time Compliance", "Clearer Communication", "Root-Cause Insight", "Less Case Prep Time"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Resolving every case fairly and on time"]
  },
  integrity: {
    image: 'assets/payment-integrity-fwa-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Payment Integrity & FWA Assist Multi-Agent Team",
    subtitle: "AI-powered claim accuracy, fraud detection and recovery.",
    alt: "Architecture diagram of the Payment Integrity & FWA Assist Multi-Agent Team. A request enters an intake and discovery flow of lead or alert intake, risk & priority check, claims & provider lookup, case summary. Payment Integrity Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Pre-Pay Review, Post-Pay Audit, Fraud Pattern Detection, Duplicate & Overpayment, Coding Validation, Recovery Management, SIU Case Support, and Provider Education. A governance control plane and shared platform services and integrations sit underneath, with human escalation to siu investigators, claims auditors, medical directors, legal, compliance, and provider relations, and outcomes that matter on the right: fewer improper payments, faster recoveries, stronger fraud detection, fewer false positives, audit-ready cases.",
    assist: {
      name: "Payment Integrity Assist",
      line: "Your intelligent front door for payment integrity and fraud, waste and abuse",
      ask: "I need help with a suspicious claim, an overpayment, a coding question, or a recovery case.",
      intake: ["Lead or Alert Intake: Capture and classify leads, alerts and tips from claims, audit, compliance and external sources", "Risk & Priority Check: Gauge financial risk, provider history and priority for investigation", "Claims & Provider Lookup: Retrieve claims, provider profiles, contract terms and prior investigation records", "Case Summary: Create an initial case summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Pre-Pay Review Agent", ["Review claims before payment", "Flag likely billing errors", "Check claims against coverage and contracts", "Hold claims for further review", "Document pre-payment findings"]],
      ["Post-Pay Audit Agent", ["Select claims for retrospective audit", "Compare payments to documentation", "Identify payment errors", "Calculate overpayment amounts", "Prepare audit findings"]],
      ["Fraud Pattern Detection Agent", ["Spot unusual billing patterns", "Compare providers against their peers", "Flag suspicious service combinations", "Identify patterns across members", "Prioritize leads for investigation"]],
      ["Duplicate & Overpayment Agent", ["Find duplicate claim payments", "Identify payments after coverage ended", "Detect incorrect fee schedule pricing", "Flag payments to excluded providers", "Quantify recoverable amounts"]],
      ["Coding Validation Agent", ["Check procedure and diagnosis coding", "Detect unbundling and upcoding", "Review modifier and place-of-service use", "Compare coding to medical records", "Identify coding education needs"]],
      ["Recovery Management Agent", ["Generate provider overpayment notices", "Track recovery requests and responses", "Monitor refunds and offsets", "Reconcile recovered dollars", "Report recovery performance"]],
      ["SIU Case Support Agent", ["Organize evidence for investigations", "Build provider and claim timelines", "Prepare case documentation", "Track referrals to law enforcement", "Support regulatory fraud reporting"]],
      ["Provider Education Agent", ["Share common billing error findings", "Prepare provider-specific education", "Explain correct coding and billing", "Track provider follow-up", "Reduce repeat billing errors"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Fraud Controls", "SIU Oversight", "Evidence Chain"],
    systems: ["Microsoft 365", "Claims Systems", "Fraud Analytics", "Provider Data", "Recovery Systems", "Analytics"],
    humans: ["SIU Investigators", "Claims Auditors", "Medical Directors", "Legal", "Compliance", "Provider Relations"],
    outcomes: ["Fewer Improper Payments", "Faster Recoveries", "Stronger Fraud Detection", "Fewer False Positives", "Audit-Ready Cases"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Protecting dollars so care stays affordable"]
  },
  reg: {
    image: 'assets/regulatory-government-programs-operations-room-agentic-team.webp?v=82',
    width: 1536,
    height: 1024,
    title: "Regulatory & Government Programs Assist Multi-Agent Team",
    subtitle: "AI-powered compliance for Medicare, Medicaid and ACA programs.",
    alt: "Architecture diagram of the Regulatory & Government Programs Assist Multi-Agent Team. A request enters an intake and discovery flow of regulatory request intake, program & deadline check, policy & contract lookup, case summary. Regulatory Assist, the front door, understands the request, enriches and validates context, routes it to the best agent, orchestrates actions, monitors compliance, and synthesizes and delivers the response. Eight specialized sub-agents sit below: Regulatory Change Monitoring, CMS & State Reporting, Audit Response, Contract Compliance, Materials Review, Network Filings, Corrective Action Tracking, and Policy Attestation. A governance control plane and shared platform services and integrations sit underneath, with human escalation to compliance officers, legal, government program leaders, privacy, operations, and executive leaders, and outcomes that matter on the right: timely filings, audit readiness, fewer compliance gaps, faster regulatory response, clear accountability.",
    assist: {
      name: "Regulatory Assist",
      line: "Your intelligent front door for regulatory and government programs compliance",
      ask: "I need help with a new CMS requirement, a state report, an audit response, or a marketing material review.",
      intake: ["Regulatory Request Intake: Capture and classify requests from compliance, operations, legal and program teams", "Program & Deadline Check: Identify the program, regulation, filing requirement and applicable deadline", "Policy & Contract Lookup: Retrieve regulatory guidance, state and federal contracts, and prior filings", "Case Summary: Create an initial summary and route to the right agent or team"],
      steps: ["Understand request", "Enrich and validate context", "Route to best agent", "Orchestrate actions", "Monitor compliance", "Synthesize and deliver response"]
    },
    agents: [
      ["Regulatory Change Monitoring Agent", ["Track new CMS and state guidance", "Summarize changes in plain language", "Identify affected policies and processes", "Assign follow-up to business owners", "Maintain a regulatory change log"]],
      ["CMS & State Reporting Agent", ["Build calendars of required reports", "Compile data for scheduled submissions", "Check reports against specifications", "Track submission and confirmation", "Flag late or missing reports"]],
      ["Audit Response Agent", ["Organize documents for program audits", "Draft responses to audit requests", "Track audit timelines and findings", "Coordinate evidence from departments", "Monitor audit remediation"]],
      ["Contract Compliance Agent", ["Compare operations to contract requirements", "Track contract deliverables and deadlines", "Flag potential compliance gaps", "Summarize state contract obligations", "Support readiness reviews"]],
      ["Materials Review Agent", ["Review marketing and member materials", "Check content against CMS and state rules", "Track submission and approval status", "Flag required disclaimers and language", "Maintain version history"]],
      ["Network Filings Agent", ["Prepare provider network submissions", "Check network data against requirements", "Track filing deadlines and approvals", "Document network adequacy support", "Coordinate corrections with regulators"]],
      ["Corrective Action Tracking Agent", ["Log findings and corrective actions", "Assign owners and due dates", "Track progress to closure", "Verify evidence of completion", "Report status to compliance leadership"]],
      ["Policy Attestation Agent", ["Track required annual attestations", "Send reminders to responsible staff", "Collect and file signed attestations", "Maintain policy versions and approvals", "Report completion status"]]
    ],
    governance: ["Agent catalog (discover, reuse, manage agents)", "Approval workflows (review and approve actions and changes)", "Audit logging (traceability for actions and decisions)", "Regulatory Attestation", "Source Traceability", "Human Sign-Off"],
    systems: ["Microsoft 365", "Compliance Management", "Policy Repository", "Claims & Enrollment Data", "Regulator Portals", "Document Management"],
    humans: ["Compliance Officers", "Legal", "Government Program Leaders", "Privacy", "Operations", "Executive Leaders"],
    outcomes: ["Timely Filings", "Audit Readiness", "Fewer Compliance Gaps", "Faster Regulatory Response", "Clear Accountability"],
    principles: ["Secure by design", "Governed by policy", "Built for trust", "Focused on people", "Delivered at scale", "Staying ready for every regulator"]
  }
};
