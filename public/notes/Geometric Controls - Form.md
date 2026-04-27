---
chapter: 7
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Controls for the shape of individual features: Straightness, Flatness, Circularity, and Cylindricity"
equations: []
---

# Geometric Controls - Form

#mmet380 #ch7 #concept

## In Plain English

Form controls are the simplest type of GD&T. They don't care where a feature is or what else it's near; they only care about its **shape**. If you have a long rod, **Straightness** tells you how much it can bend. If you have a plate, **Flatness** tells you how wavy the surface can be. These controls are unique because they **do not use datums**—you don't compare a flat surface to anything else; you just check if it's flat relative to itself.

## Form Symbols

| Control | Symbol | Definition |
|---------|:------:|------------|
| **Straightness** | — | A condition where all points are in a straight line. Can apply to a surface edge or a center axis. |
| **Flatness** | $\Box$ | A condition where all points on a surface are in one ideal plane. |
| **Circularity** (Roundness) | $\bigcirc$ | A 2D control where all points on a cross-section are equidistant from a center. |
| **Cylindricity** | /$\bigcirc$/ | A 3D control that combines circularity and straightness along the entire length of a cylinder. |

## Key Characteristics
- **No Datums:** Form controls never reference datums (A, B, C) because they describe the feature's independent shape.
- **Surface vs. Axis:** Straightness is the only form control that can be applied to either a surface (the edge) or an axis (the "ghost" line in the middle).
- **Cylindricity vs. Circularity:** Circularity checks one "slice" at a time; Cylindricity checks the whole "sausage" at once.

## Connections

- [[GD&T Rules and Principles]] — Form is partially controlled by the Envelope Principle (Rule #2)
- [[Geometric Controls - Orientation and Profile]] — the next level of control (requires datums)
- [[Metrology and Measuring Devices]] — using dial indicators to check flatness and runout

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
