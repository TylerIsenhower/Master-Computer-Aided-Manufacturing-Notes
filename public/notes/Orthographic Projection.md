---
chapter: 2
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Projecting a 3D object onto 2D planes using standard view positions; 1st-angle vs 3rd-angle convention; thread notation"
equations: []
---

# Orthographic Projection

#mmet380 #ch2 #concept

## In Plain English

You can't show a 3D part on a flat sheet of paper with just one view — a cylinder and a rectangle can look identical from the front. Orthographic projection solves this by "shining a light" along each of the three principal axes and recording the shadow on a flat plane. Do this for the front, top, and side and you have enough information to reconstruct the exact shape. The key is that everyone uses the **same layout rules** so no one has to guess which view goes where.

## The Coordinate System

- All main lines are drawn **parallel to x or y** axes on paper
- A circle viewed along its axis → appears as a **true circle**
- A circle viewed perpendicular to its axis → appears as a **line**
- Multiple projections are needed to eliminate shape ambiguity

## Standard View Layout

Six standard views exist: Top, Bottom, Front, Back, Left, Right. In practice, **three views (Front, Top, Right)** are usually sufficient.

### Third-Angle Projection (USA / preferred in MMET 380)

> The object is placed *inside* the projection box; views are unfolded outward.

```
          [Top View]
[Left]  [Front View]  [Right View]
         [Bottom View]
```

- Top view sits **above** the front view
- Right side view sits **to the right** of the front view

### First-Angle Projection (Commonwealth countries)

> The object is placed *in front of* the projection plane; views are unfolded inward.

```
         [Bottom View]
[Right]  [Front View]  [Left View]
          [Top View]
```

> [!warning] Convention Alert
> First-angle and third-angle projections use **identical views** but place them in **opposite positions**. Always check the symbol in the title block to know which system is in use. Confusing the two creates a mirror-image interpretation.

### Symbol Key

| Symbol | Convention |
|--------|-----------|
| Truncated cone, small end toward viewer | 1st angle |
| Truncated cone, large end toward viewer | 3rd angle |

## Line Types in Orthographic Views

| Line | Appearance | Rule |
|------|-----------|------|
| Visible | Solid thick | Always shown |
| Hidden | Dashed | Edges behind the viewing surface |
| Center | Long–short dash | Hole axes; extends beyond contour |
| Guide | Faint thin | Construction only; omitted in final |

## Drawing Internal and External Threads

Thread notation on drawings follows strict conventions:

### Internal Threads (Tapped Holes)
- Simplified representation preferred (Fig. 2.8c / 2.8d)
- Arrows point **toward the hole center**

### External Threads (Screws, Bolts)
- Simplified representation preferred (Fig. 2.8a / 2.9c)
- Arrows point **toward the rod center**

### Thread Callout Formats

| Code | Meaning |
|------|---------|
| `M27×2` | Metric thread; 27 mm diameter; 2 mm pitch |
| `1.00-8UNC-2B` | 1.00 in diameter; 8 threads/in; Unified Coarse; Class 2B |
| `1.00-12UNF` | 1.00 in diameter; 12 threads/in; Unified Fine |

## Practical Drawing Rules

- Draw on **square grid paper** and **omit guide lines** in the final drawing
- Do **not** add view labels (e.g., "Front View") in actual drawings — position alone conveys the view name
- Hidden lines stop at part contours; center lines extend slightly beyond

## Connections

- [[Introduction to Technical Drawing]] — the foundational line types and coordinate rules
- [[Isometric Projection]] — the companion 3D sketch method
- [[Auxiliary Views]] — when a standard view cannot show a true shape
- [[Sectioning]] — revealing internal features hidden lines cannot adequately show
- [[Dimensioning and Tolerances]] — adding size information to orthographic views

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.
> Format: **Given** → **Find** → **Solution steps** → **Key insight**.

---

[[Ch2 Home]] · [[MMET 380 Hub]]
