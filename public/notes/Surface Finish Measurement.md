---
chapter: 8
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Quantitative measurement of surface roughness (Ra, Rq, Rz) using contact and non-contact profilometry"
equations: []
---

# Surface Finish Measurement

#mmet380 #ch8 #concept

## In Plain English

Surface finish isn't just about how a part looks; it's about how it works. A surface that is too rough will wear out bearings, while a surface that is too smooth might not hold oil. To measure this, we use a **Profilometer**. A **Contact-type** profilometer drags a tiny diamond needle across the surface and records every little bump and valley. A **Digital 3D** profilometer does the same thing but uses light to scan the whole surface at once, giving you a 3D "topographical map" of the metal's surface.

## 1. Contact-Type Profilometry
- **Principle:** A spring-loaded probe (stylus) traces the surface contour and records the vertical deviations.
- **Data Produced:** Calculates statistical values like $R_a$ (average), $R_q$ (RMS), and $R_z$ (peak-to-valley).
- **Benefit:** Highly accurate and standard in industry.
- **Limitation:** Can potentially scratch soft surfaces.

## 2. Digital 3D Profilometry
- **Principle:** Uses optical intensity and high-resolution cameras to reconstruct the surface contour digitally.
- **Data Produced:** Provides a full 3D map of the surface, including "S" values ($S_a, S_q$) for surface area roughness.
- **Benefit:** Non-contact (won't damage part) and much faster for analyzing a large area.

## Key Roughness Parameters
- **$R_a$:** The average distance from the mean line.
- **$R_q$:** The root-mean-square average (more sensitive to outliers).
- **$R_z$:** The average of the 5 largest peak-to-valley distances.

## Connections

- [[Theoretical Surface Finish Analysis]] — where the $R_a$ targets are calculated
- [[Finishing Processes and Grinding]] — the processes that create these specific finishes
- [[Optical Metrology and Interferometry]] — interferometers are a high-end type of 3D profilometry

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch8 Home]] · [[MMET 380 Hub]]
