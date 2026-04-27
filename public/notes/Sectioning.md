---
chapter: 2
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Cutting through a part to expose internal features; cross-hatching, naming, and special cases (ribs, bolts, threaded holes)"
equations: []
---

# Sectioning

#mmet380 #ch2 #concept

## In Plain English

Hidden lines can show internal features, but when a part has many internal holes, slots, and channels, dashed lines pile up and the drawing becomes unreadable. A section view is the solution: you **slice the part open** along a chosen plane, remove the front half, and look at what's inside. Where solid material was cut, you draw cross-hatching. The result is a cleaner, clearer view of internal geometry that can be fully dimensioned.

## Why, Where, and How

**Why:** To view internal features and shapes — holes, bores, grooves, counterbores, undercuts — without relying solely on confusing arrays of hidden lines.

**Where — Cutting Plane Location Options:**

| Plane Type | When to Use |
|-----------|------------|
| **Complete plane** | Standard full cut straight through the part |
| **Partial plane** | Only a portion of the part needs to be sectioned |
| **Rotating plane** | Cutting plane is rotated (revolved) to capture a feature offset from the main axis |
| **Zig-zag (offset) plane** | Multiple features that are not co-planar, shown in one section view |

**How — Step-by-Step Procedure:**

1. **Choose** which standard view to place the section in
2. **Mark the cutting plane** with bold lines; keep a small gap so the lines do not cut into the drawing itself
3. **Draw large arrows** on each end of the cutting plane line indicating the viewing direction (the direction you look at the cut face)
4. **Name** the sectioned view:
   - First section is always **"AA"** → label it *Section AA*
   - Additional sections follow: BB, CC, DD, …
   - If there is only one section view, the label is **optional**
5. **Add cross-hatching** (evenly spaced diagonal lines) to all **cut surfaces**

## Cross-Hatching Rules

| Rule | Detail |
|------|--------|
| Hatching angle | Typically 45° diagonal lines, evenly spaced |
| Solid features | **No hatching** on solid features (ribs, webs, fillets, keys, bolts, rivets, shafts) |
| Same component | **Consistent** hatching pattern within one component |
| Different components | **Change** hatching angle or spacing for each separate part in an assembly |
| Threaded holes | Cross-hatching **passes through** thread lines and stops at the hole contour |

> [!warning] Do NOT hatch these
> Ribs, webs, fillets, shafts, keys, splines, nuts, bolts, and rivets are **never cross-hatched**, even when the cutting plane passes through them. This is one of the most commonly failed exam rules.

## Special Cases

### Solid Features (Ribs, Webs, Bolts, Shafts)
When the cutting plane passes through a thin solid feature (rib, web) or a standard solid component (bolt, shaft, key), these features are **not sectioned** — no cross-hatching is drawn inside their boundaries, even though the cut plane goes through them.

### Threaded Holes
Threaded holes **are** sectioned. Cross-hatching lines pass through the thread lines and stop at the bore (hole) contour.

### Assembly Sections
- Each part in the assembly gets a **different hatching pattern** (different angle or spacing)
- A bolt or fastener in an assembly section is **not hatched**

### Rotating Section
The cutting plane is **rotated** about a feature's axis to avoid cutting through a solid feature (such as a spoke or rib) while still revealing the cross-section of interest.

### Zig-Zag (Offset) Section
The cutting plane **steps** (offsets) to pass through multiple internal features that are not in the same plane. This allows multiple features to appear in a single section view.

> [!note] 3D Sectioning
> Sectioning can also be done in isometric/3D views (revealing interior geometry on a 3D model), but this requires sophisticated CAD software and is significantly more complex than 2D sectioning.

## Visual Summary — Naming Sections

```
One section view:        Multiple section views:
┌────────────────┐       ┌────────────────┐
│  ──A──────A──  │       │  ──A──────A──  │
│     ↓  ↓       │       │     ↓  ↓       │
│   Section AA   │       │  Section AA    │
│   (optional    │       │                │
│    to name)    │       │  ──B──────B──  │
└────────────────┘       │   Section BB   │
                         └────────────────┘
```

## Connections

- [[Orthographic Projection]] — section views are placed in the standard view layout
- [[Auxiliary Views]] — auxiliary views reveal true shapes; sections reveal internal features
- [[Dimensioning and Tolerances]] — internal features exposed by sectioning can then be dimensioned
- [[Computer-Aided Design (CAD)]] — CAD software can generate 3D section views automatically

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.
> Format: **Given** → **Find** → **Solution steps** → **Key insight**.

---

[[Ch2 Home]] · [[MMET 380 Hub]]
