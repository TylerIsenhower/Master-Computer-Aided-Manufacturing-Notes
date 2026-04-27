---
chapter: 2
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Rules for size callouts (diameter, radius, surface finish), tolerance types (bilateral, unilateral, limit), and tolerance stacking"
equations:
  - name: "Bilateral Tolerance Stack (Case 1 — all in series)"
    latex: "T_{\\text{total}} = T_1 + T_2 + T_3 + \\cdots"
    notes: "Total bilateral tolerance equals the sum of individual bilateral tolerances when all components are in series"
  - name: "Bilateral Tolerance Stack (Case 2 — solving for unknown segment)"
    latex: "T_{\\text{unknown}} = T_{\\text{overall}} - T_{\\text{known segments (sum)}}"
    notes: "For a sub-dimension W embedded in a known total L: tolerance of W equals the tolerance of the overall minus sum of tolerances of the other segments"
---

# Dimensioning and Tolerances

#mmet380 #ch2 #concept

## In Plain English

A drawing without dimensions is just art — it shows what the part looks like but tells a machinist nothing about how big to make it. Dimensioning adds exact sizes, angles, and locations. Tolerancing admits that no manufacturing process is perfect and specifies the allowable error range. Together they form the complete instruction set: "make it this size, and anywhere within this band is acceptable."

## Dimensioning Rules

### General Layout Rules

| Rule | Detail |
|------|--------|
| Specify units | State the unit system in the title block (in, mm); do not repeat units on every dimension |
| Extension lines | Extend from the feature; leave a **small gap** before the feature contour |
| Dimension text placement | Write between arrows (preferred) or outside arrows when space is tight |
| Vertical dimensions | Text is read from the **right-hand side** |
| Placement | Avoid placing dimension labels **inside** the part outline |
| Axis alignment | All dimension lines must be parallel to x, y, z axes or to the feature's own orientation |
| Minimize views | Place dimensions on the **fewest views** possible; avoid spreading the same info across multiple views |
| Avoid redundancy | No two views should carry the **same dimension** unless it is a reference dimension |

### Diameter and Radius Callouts

| Symbol | Feature | Arrow Direction |
|--------|---------|----------------|
| **⌀** (or "O") | Diameter | Must point to or be extendable to the **circle center** |
| **R** | Radius | Arrow points **away from center** (outward) |

> [!warning] Arrow Direction Trap
> If ⌀ or R symbols are omitted: an arrow pointing **into** the center = diameter; an arrow pointing **away** from the center = radius. Know this cold.

### Special Callout Conventions

| Callout | Meaning |
|---------|---------|
| `TYPICAL` or `2× PLACES` | Identical features repeated; dimension given once |
| `(3.00)` (brackets) | **Reference dimension** — calculated from other dimensions, included for convenience only; not used for inspection |
| Hidden lines | Stop at part contours |
| Center lines | Extend **beyond** part contours |

## Surface Finish

Surface finish specifies the acceptable texture of a machined surface.

- **Standard:** ANSI surface finish callouts
- **Common metric:** average roughness $R_a$ in **micrometers (µm)**
- **Common imperial:** average roughness $R_a$ in **microinches (µin)**
- Units are stated in the note or title block; the $R_a$ value alone is written in the callout symbol
- Smaller $R_a$ → smoother surface → typically more expensive to manufacture

## Tolerances

> Tolerance is the **allowable variation** of a dimension.

### Types of Tolerance

| Type | Format | Example | Notes |
|------|--------|---------|-------|
| **Bilateral** | ± value on each side | $1.00 \pm 0.02$ | Both ends equally | 
| **Unilateral** | Deviation on one side only | $1.00 ^{+0.03}_{0.00}$ | One end pinned to nominal |
| **Limit** | Explicit max and min stated | $1.00$ / $1.03$ | Extreme dimensions given directly |

> [!note] Choosing Tolerance Type
> The function of the mating interface determines which type is used. Unilateral tolerances are common for fits where only one direction of deviation affects function (e.g., a shaft that must not exceed a maximum size).

## Tolerance Stacking

When multiple dimensioned segments are assembled in series, individual tolerances **accumulate** — this is called **tolerance stacking**.

### Case 1 — Total Length of a Chain

Given three segments $A$, $B$, $C$ with bilateral tolerances $\pm t_A$, $\pm t_B$, $\pm t_C$:

$$L_{\text{nominal}} = A + B + C$$

$$L_{\max} = (A + t_A) + (B + t_B) + (C + t_C)$$

$$L_{\min} = (A - t_A) + (B - t_B) + (C - t_C)$$

$$T_L = \frac{L_{\max} - L_{\min}}{2} = t_A + t_B + t_C$$

> **Lesson:** The more parts in the chain, the larger the tolerance stack — and the harder it is to guarantee fit.

### Case 2 — Finding an Unknown Segment's Tolerance

When the overall bilateral tolerance and all other segment tolerances are known:

$$T_W = T_L - T_{\text{known segments}}$$

**Example (from lecture):**

| Segment | Nominal | Bilateral tol |
|---------|---------|--------------|
| A | 0.80 | ±0.01 |
| W | ? | ±? |
| B | 1.20 | ±0.01 |
| Overall L | 3.00 | ±0.05 |

$$W = 3.00 - 0.80 - 1.20 = 1.00 \text{ in}$$

$$T_W = 0.05 - 0.01 - 0.01 = 0.03 \text{ in} \quad \Rightarrow \quad W = 1.00 \pm 0.03 \text{ in}$$

**Verification:**

$$L_{\max} = 0.81 + 1.03 + 1.21 = 3.05 \checkmark$$

$$L_{\min} = 0.79 + 0.97 + 1.19 = 2.95 \checkmark$$

> [!tip] Stacking Rule Summary
> - If all tolerances are **bilateral**, total tolerance = **sum** of individual tolerances
> - Nominal dimensions are **algebraically additive**
> - Stacking always **increases** the total tolerance — it never cancels

## Redundant and Incomplete Dimensioning

| Issue | Consequence | Fix |
|-------|-------------|-----|
| **Redundant dimension** | Acceptable if enclosed in brackets as a reference; otherwise avoid | Use reference brackets `(dim)` |
| **Missing dimension** | Delays manufacturing; drawing is incomplete | Always fully dimension before release |
| **Same dim on 2 views** | Avoid — keep dimensions on the minimum number of views | Consolidate dimensions |

## Connections

- [[Orthographic Projection]] — dimensions are placed on the appropriate standard views
- [[Sectioning]] — internal features exposed by sections are dimensioned directly
- [[Auxiliary Views]] — oblique surface dimensions are taken from the auxiliary view, not standard views
- [[Introduction to Technical Drawing]] — dimensioning completes the drawing system

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.
> Format: **Given** → **Find** → **Solution steps** → **Key insight**.

---

[[Ch2 Home]] · [[MMET 380 Hub]]
