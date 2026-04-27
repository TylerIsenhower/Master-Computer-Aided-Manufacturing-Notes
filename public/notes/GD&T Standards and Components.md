---
chapter: 7
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Anatomy of the Feature Control Frame (FCF), Basic Dimensions, and the role of Datums in GD&T"
equations: []
---

# GD&T Standards and Components

#mmet380 #ch7 #concept

## In Plain English

The "grammar" of GD&T is built on a few core components. The most important is the **Feature Control Frame (FCF)**—a small rectangular box that contains a whole sentence worth of information about a part's quality. It tells you what characteristic to check (like parallelism), what the tolerance is, and what other surfaces you should measure it against (**Datums**). If you see a dimension in a box, that's a **Basic Dimension**—it's a mathematically perfect target that the GD&T symbols then "build" a tolerance zone around.

## The Feature Control Frame (FCF)

The FCF is the "instruction manual" for a specific feature. It typically reads from left to right:
1. **Geometric Symbol:** What are we controlling? (e.g., Position, Parallelism).
2. **Tolerance Zone:** The total allowable variation (often preceded by $\varnothing$ for circular zones).
3. **Material Modifier:** Optional symbols like (M) for MMC or (L) for LMC.
4. **Datum References:** The surfaces or axes the feature is measured against (A, B, C).

## Key Components

| Component | Description |
|-----------|-------------|
| **ANSI/ASME Y14.5** | The industrial standard that defines all GD&T rules and symbols. |
| **Basic Dimension** | A boxed dimension representing the **theoretically perfect** location or size. It has no tolerance of its own; the tolerance comes from the FCF. |
| **Datum** | A reference point, line, or surface (the "starting point") used for measurement. |
| **Geometric Character** | The specific symbol (e.g., $\perp$ for perpendicularity) used to control the shape. |

## Datums and Reference Frames

- **Primary Datum:** The first surface the part touches during measurement (restricts 3 degrees of freedom).
- **Secondary Datum:** The second reference surface (restricts 2 degrees of freedom).
- **Tertiary Datum:** The final reference (restricts the last 1 degree of freedom).

## Connections

- [[Modifiers and Material Conditions]] — the specific "M" and "L" symbols inside the FCF
- [[Geometric Controls - Form]] — the first category of symbols used in the FCF
- [[Metrology and Measuring Devices]] — the physical tools used to touch the datums

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
