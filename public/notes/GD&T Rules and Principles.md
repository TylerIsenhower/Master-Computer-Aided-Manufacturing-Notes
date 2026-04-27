---
chapter: 7
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "The fundamental laws of GD&T: Rule #1 (RFS), Rule #2 (Envelope Principle), and Rule #3 (Zero tolerance at MMC)"
equations: []
---

# GD&T Rules and Principles

#mmet380 #ch7 #concept

## In Plain English

GD&T is governed by a few "Golden Rules" that ensure drawings are interpreted the same way everywhere. The most important is the **Envelope Principle**. It says that if you have a tolerance for the size of a part (like $10 \pm 0.1$), that size tolerance also controls the **shape**. A part can be as wavy or bent as it wants as long as it stays within a perfect "envelope" of its largest allowed size. If the part is perfectly made at its maximum size, it must be perfectly straight and flat to fit in that envelope.

## Rule #1: RFS Default
**Regardless of Feature Size (RFS)** is the default rule for all geometric tolerances unless a modifier like (M) or (L) is explicitly stated. This means the tolerance zone size is fixed and does not change based on the actual produced size of the part.

## Rule #2: The Envelope Principle
If no specific GD&T control is cited, the **dimensional tolerance** controls both the size and the form (shape) of the part.
- **The Limit:** No part of the feature shall extend beyond the boundary (envelope) of the Maximum Material Condition (MMC).
- **Perfect Form at MMC:** If a part is manufactured at its absolute MMC size, it must have perfect geometric form (be perfectly straight/flat) to remain within the envelope.

## Rule #3: Zero Geometric Tolerance at MMC
This is a specific design strategy where the geometric tolerance in the FCF is set to **0.00 (M)**.
- **Logic:** The part is only allowed to deviate from perfect form if it is produced *smaller* (for pins) or *larger* (for holes) than its MMC size. 
- **Effect:** Any deviation in size provides a 1-to-1 "bonus" to the geometric tolerance. If the part is at MMC exactly, it must have zero geometric error.

## Connections

- [[Modifiers and Material Conditions]] — the modifiers that override RFS (Rule #1)
- [[Geometric Controls - Form]] — the specific controls that supplement the Envelope Principle
- [[Introduction to GD&T]] — why these rules were developed to standardize communication

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
