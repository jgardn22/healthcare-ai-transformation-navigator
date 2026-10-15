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
  hr: {
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
  },
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
    image: 'assets/supply-chain-operations-room-agentic-team.webp',
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
  burnout: {
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
  },
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
    image: 'assets/revenue-cycle-operations-room-agentic-team.webp',
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
    image: 'assets/it-data-digital-operations-room-agentic-team.webp',
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
    image: 'assets/marketing-operations-room-agentic-team.webp',
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
    image: 'assets/sales-growth-operations-room-agentic-team.webp',
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
    image: 'assets/pmo-operations-room-agentic-team.webp',
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
  access: {
    image: 'assets/patient-access-operations-room-agentic-team.webp',
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
  },
  research: {
    image: 'assets/research-administration-operations-room-agentic-team.webp',
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
  }
};
