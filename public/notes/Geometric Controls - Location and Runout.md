---
chapter: 7
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Controls for the exact position and movement of features: Positional Tolerance, Runout, and Concentricity"
equations: []
---

# Geometric Controls - Location and Runout

#mmet380 #ch7 #concept

## In Plain English

Location is the most critical part of assembly. If a hole isn't in the right spot, the bolt won't go in. **Positional Tolerance** is the GD&T way of saying "the center of this hole must be within this tiny circle." **Runout** is slightly different—it's used for rotating parts (like a car wheel or an engine shaft). It measures how much a part "wobbles" as it spins. If a shaft is bent, it will have high runout, even if it is perfectly round.

## Location Symbols

| Control | Symbol | Definition |
|---------|:------:|------------|
| **Position** | $\oplus$ | Controls the location of a feature (usually a center point or axis) relative to datums. |
| **Concentricity** | $\odot$ | Controls the center of all cross-sections relative to a datum axis. Hard to measure. |
| **Symmetry** | $\equiv$ | Controls the median points of a feature relative to a datum center plane. |

## Runout Symbols

Runout controls how much a surface deviates from a perfect circular shape as it rotates around a datum axis.

| Control | Symbol | Definition |
|---------|:------:|------------|
| **Circular Runout** | $\nearrow$ | Controls individual "slices" of the part as it rotates. |
| **Total Runout** | $\nearrow \nearrow$ | Controls the entire surface area simultaneously as it rotates. |

## Key Characteristics
- **Positional Tolerance Zone:** Usually a **cylinder** around the theoretically perfect (basic) center.
- **Runout Requirements:** Runout *always* requires a datum axis to spin around.
- **Concentricity vs. Position:** Position controls the axis; Concentricity controls the "median points." Position is much more common and easier to inspect.

## Connections

- [[Modifiers and Material Conditions]] — Positional tolerance is the main user of MMC (M).
- [[GD&T Standards and Components]] — basic dimensions are used to define the "perfect" location.
- [[Geometric Controls - Form]] — Runout effectively controls circularity and cylindricity too.

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
