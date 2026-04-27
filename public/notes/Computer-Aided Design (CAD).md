---
chapter: 2
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "History, 2D drafting tools (layers, splines, Bezier), 3D solid modeling (primitives, sweeps, surfaces), Boolean operations, CAD-CAE-CAM pipeline"
equations: []
---

# Computer-Aided Design (CAD)

#mmet380 #ch2 #concept

## In Plain English

CAD replaced the drawing board — but it's far more than digital drafting. Modern CAD lets you build a full 3D solid model, run stress analysis on it, check if parts fit together before anything is made, and then pipe the geometry directly to a CNC machine. The math underneath (Bezier curves, Boolean operations, surface lofting) is sophisticated, but the workflow matches the way engineers actually think: sketch a profile, extrude it, punch holes, fillet the edges.

## History

| Era | Development |
|-----|------------|
| **1950s** | CAD begins as a 2D graphic tool — draw lines and circles on a screen or plotter |
| **Mid-1960s** | Complex curves (Bezier) and **wire-frame models** added |
| **1970s** | **Solid modeling** introduced — enables mass properties, sectioning, moment of inertia; required powerful workstations |
| **1980s** | Personal computers replace workstations; CAD becomes widely accessible |

> A **wire-frame model** shows only edges and curves — no solid faces. A **solid model** defines enclosed volumes and supports engineering analysis.

## 2D CAD Functions

| Function | Purpose |
|---------|---------|
| **Layers** | Separate design elements (e.g., electrical, structural, plumbing on a floor plan); toggle visibility independently |
| **Point, line, polyline, circle** | Basic geometry primitives |
| **Trimming** | Remove unwanted portions of lines/arcs at intersections |
| **Spline curve** | Smooth curve **fitted through** a set of data points |
| **Bezier curve** | Curve defined by end points and **control points** (tangent handles); does not necessarily pass through control points |
| **Area / Hatching** | Fill regions with cross-hatching (section views, material fill) |
| **Corner fillet and chamfer** | Round or bevel corners |
| **Dimension and tolerance** | Add callouts per ANSI standards |

### Layers in Depth

Layers allow sophisticated multi-component designs to be organized:

- **Floor plan example:** separate layers for structure, cabinets, doors, electrical
- Any layer can be shown, hidden, or printed independently
- Components on different layers can be superimposed to check conflicts

### Spline vs. Bezier

| Curve | Control | Passes Through Points? |
|-------|---------|----------------------|
| **Spline** | Fits through all control points | ✅ Yes |
| **Bezier** | Passes through endpoints; control points set tangent direction | ❌ Not necessarily |

Both curves allow varying degrees of smoothness (different orders) to match a required tolerance.

## 3D CAD Functions

### Coordinate Systems

- **Global (world) coordinate system** — fixed reference for the entire model
- **Local (user-defined) coordinate system** — aligned to a feature for easier geometry entry

### Primitive Solids

Ready-made basic shapes that can be combined:

> Block · Cone · Cylinder · Sphere · Pyramid · Torus

### Surface Generation Methods

| Method | How it Works |
|--------|-------------|
| **Ruled surface** | Straight lines connecting two curves |
| **Tabulated surface** | Lines translating along a curve, keeping the same axial direction |
| **Surface of revolution** | A line or curve rotated about an axis |
| **Point mesh** | Surface interpolated from discrete data points |
| **Coon surface** | Surface bounded by four constraining curves |
| **Bezier surface** | Defined by end points, control points, and tangent directions |
| **Lofting** | Smooth transitional surface connecting two profiles with different shapes |

### Sweep Operations

| Operation | Mechanism |
|-----------|----------|
| **Linear sweep (extrude)** | A profile area is pushed straight along a direction to form a solid |
| **Rotational sweep (revolve)** | A profile is rotated around an axis to form a solid of revolution |
| **Nonlinear sweep** | Profile moves along a defined curved path |

## Boolean Operations

Boolean operations combine or subtract solid bodies to create complex geometry:

| Operation | Symbol | Result |
|-----------|--------|--------|
| **Union** | A ∪ B | Combined volume of both solids |
| **Subtraction** | A − B | Volume of A with B's volume removed |
| **Intersection** | A ∩ B | Only the volume shared by both solids |

> [!example] Practical Use
> - **Union:** Join a cylinder (boss) to a plate → one solid part
> - **Subtraction:** Remove a cylinder from a block → create a through-hole
> - **Intersection:** Find the exact overlap region of two parts in a clash check

## The CAD → CAE → CAM Pipeline

> **CAD** (Computer-Aided Design) → **CAE** (Computer-Aided Engineering) → **CAM** (Computer-Aided Manufacturing)

| Stage | Purpose |
|-------|---------|
| **CAD** | Create the geometric model |
| **CAE** | Analyze the model (FEA stress, CFD flow, thermal, motion) to fine-tune design before cutting metal |
| **CAM** | Translate CAD geometry into machine language (G-code) for CNC machining of the physical part |

> The whole point: design it, simulate it, fix it **digitally** — then make it once, correctly.

## Connections

- [[Introduction to Technical Drawing]] — CAD replaces but follows the same conventions as hand drawing
- [[Orthographic Projection]] — CAD generates 2D orthographic drawings from 3D models automatically
- [[Sectioning]] — 3D section views in CAD expose internal geometry interactively
- [[Dimensioning and Tolerances]] — CAD tools automate dimension callout placement and tolerance checking

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.
> Format: **Given** → **Find** → **Solution steps** → **Key insight**.

---

[[Ch2 Home]] · [[MMET 380 Hub]]
