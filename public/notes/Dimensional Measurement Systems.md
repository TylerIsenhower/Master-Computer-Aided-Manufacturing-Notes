---
chapter: 8
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Comparison of Vision Systems, CMMs, and Profile Projectors for 2D and 3D coordinate measurement"
equations: []
---

# Dimensional Measurement Systems

#mmet380 #ch8 #concept

## In Plain English

These are the "workhorses" of the metrology lab. A **Vision System** is basically a high-tech camera and a computer that "counts pixels" to find distances and angles on a flat part. A **CMM** (Coordinate Measuring Machine) is like a 3D robot arm with a touch-sensitive probe; it touches the part in different spots to build a 3D map of its shape. A **Profile Projector** is an old-school but effective way to shine a light on a small part and project its giant shadow onto a screen so you can measure it with a ruler.

## 1. Vision Systems (2D)
- **Principle:** Captures a high-resolution 2D image and uses mathematics to count pixels between features.
- **Capabilities:** Measures distance, angle, area, radius, and 2D GD&T features (position, roundness).
- **Limitation:** Primarily limited to flat, 2D objects.

## 2. Coordinate Measuring Machine (CMM) (3D)
- **Principle:** A probe (manual or programmable) collects $(x, y, z)$ coordinates from the part's surface.
- **Capabilities:** Extremely versatile. Measures complex 3D positions, flatness, parallelism, and can even reconstruct a solid CAD model (Reverse Engineering).
- **Limitation:** Can be slow if many points are needed; requires a physical probe to touch the part.

## 3. Profile Projector (2D)
- **Principle:** Projects a magnified shadow of the part onto a glass screen.
- **Capabilities:** Great for checking the profiles of small, flat parts like gears or screws.
- **Limitation:** Limited to 2D profiles and individual points.

## Connections

- [[High-Precision Non-Contact Sensors]] — sensors that can be added to CMMs for faster scanning
- [[Form and Shape Measurement Systems]] — specialized versions of these machines for rotation
- [[Metrology and Measuring Devices]] — the degrees of freedom these machines must restrict

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch8 Home]] · [[MMET 380 Hub]]
