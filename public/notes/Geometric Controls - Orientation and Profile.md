---
chapter: 7
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Controls for the relationship between features: Parallelism, Perpendicularity, Angularity, and Profile"
equations: []
---

# Geometric Controls - Orientation and Profile

#mmet380 #ch7 #concept

## In Plain English

Once you know a part is the right shape (Form), you need to know if it's pointing in the right direction. This is **Orientation**. Unlike Form, Orientation **requires a Datum**. You can't be "parallel" by yourself; you have to be parallel *to something else*. **Profile** is a more powerful version of this—it controls the entire boundary of a shape, including its size, shape, and direction all at once.

## Orientation Symbols

Orientation controls the tilt or angle of a feature relative to a datum.

| Control | Symbol | Definition |
|---------|:------:|------------|
| **Parallelism** | // | The surface or axis must be at a constant distance from a datum. |
| **Perpendicularity** | $\perp$ | The feature must be at exactly 90° to a datum. |
| **Angularity** | $\angle$ | The feature must be at a specific angle (e.g., 45°) to a datum. |

## Profile Symbols

Profile controls the "outline" of a part. It is the most versatile control in GD&T.

| Control | Symbol | Definition |
|---------|:------:|------------|
| **Line Profile** | $\cap$ | Controls the 2D cross-section outline. |
| **Surface Profile**| $\unicode{x2312}$ | Controls the 3D surface boundary. |

## Key Characteristics
- **Requires Datums:** Orientation controls always reference at least one datum.
- **Tolerance Zone:** The tolerance zone for parallelism is usually two parallel planes. For perpendicularity of a hole, it is a cylinder.
- **Profile Versatility:** Profile can be used with or without datums. Without datums, it only controls shape (Form). With datums, it controls size, form, orientation, and sometimes location.

## Connections

- [[Geometric Controls - Form]] — the independent shape of the feature
- [[Geometric Controls - Location and Runout]] — the exact 3D position of the feature
- [[GD&T Standards and Components]] — basic dimensions are often used with profile controls

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
